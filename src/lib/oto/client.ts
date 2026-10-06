/**
 * Browser side of the OTO timer (port of the old `useOtoTimer` hook).
 *
 * Starts (or resumes) the visitor's OTO session via /api/oto/start — passing
 * the `?oto=` token from the page URL when present — and reports whether the
 * discounted offer is active and how much time is left.
 */
export type OtoStatusResponse = {
  active: boolean
  endsAt: string | null
  secondsLeft: number
}

export type OtoTimeLeft = { minutes: number; seconds: number }

export type OtoState = { active: false } | { active: true; endsAt: string; timeLeft: OtoTimeLeft }

const ZERO: OtoTimeLeft = { minutes: 0, seconds: 0 }
const requests = new Map<string, Promise<OtoStatusResponse | null>>()

const getStartEndpoint = (campaignId: string) => {
  const params = new URLSearchParams({ campaign: campaignId })
  const token = new URLSearchParams(window.location.search).get("oto")
  if (token) params.set("oto", token)
  return `/api/oto/start?${params.toString()}`
}

export const getOtoTimeLeft = (endsAt: string): OtoTimeLeft => {
  const remaining = new Date(endsAt).getTime() - Date.now()
  if (remaining <= 0) return ZERO
  return {
    minutes: Math.floor(remaining / 60000),
    seconds: Math.floor((remaining % 60000) / 1000),
  }
}

const isZero = ({ minutes, seconds }: OtoTimeLeft) => minutes === 0 && seconds === 0

/** One request per endpoint, shared by every caller on the page. */
const requestOtoStatus = (campaignId: string) => {
  const endpoint = getStartEndpoint(campaignId)
  let request = requests.get(endpoint)
  if (!request) {
    request = fetch(endpoint, { credentials: "include" })
      .then((response) => (response.ok ? (response.json() as Promise<OtoStatusResponse>) : null))
      .catch((error) => {
        console.error("Error loading OTO status:", error)
        return null
      })
    requests.set(endpoint, request)
  }
  return request
}

const toState = (status: OtoStatusResponse | null): OtoState => {
  if (!status?.active || !status.endsAt) return { active: false }
  const timeLeft = getOtoTimeLeft(status.endsAt)
  return isZero(timeLeft) ? { active: false } : { active: true, endsAt: status.endsAt, timeLeft }
}

/**
 * Loads the OTO status and calls `onChange` with the initial state and then
 * every second while the offer is active (ending with `{ active: false }`).
 */
export const watchOto = async (campaignId: string, onChange: (state: OtoState) => void) => {
  const state = toState(await requestOtoStatus(campaignId))
  onChange(state)
  if (!state.active) return

  const timer = window.setInterval(() => {
    const timeLeft = getOtoTimeLeft(state.endsAt)
    if (isZero(timeLeft)) {
      window.clearInterval(timer)
      onChange({ active: false })
      return
    }
    onChange({ active: true, endsAt: state.endsAt, timeLeft })
  }, 1000)
}
