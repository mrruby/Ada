import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

import {
  DEFAULT_OTO_CAMPAIGN_ID,
  getCampaignConfig,
  OtoCampaignConfig,
} from "./config"

export const setNoStore = (res: GatsbyFunctionResponse) => {
  res.setHeader("Cache-Control", "no-store, max-age=0")
}

export const getQueryValue = (
  value: string | string[] | undefined
): string | undefined => {
  if (Array.isArray(value)) return value[0]
  return value
}

export const getRequestCampaign = (
  req: GatsbyFunctionRequest
): OtoCampaignConfig | null => {
  const campaignId =
    getQueryValue(req.query.campaign) ?? DEFAULT_OTO_CAMPAIGN_ID

  return getCampaignConfig(campaignId)
}

export const sendInactiveStatus = (res: GatsbyFunctionResponse, status = 200) =>
  res.status(status).json({ active: false, endsAt: null, secondsLeft: 0 })

export const sendMethodNotAllowed = (res: GatsbyFunctionResponse) =>
  res.status(405).json({ error: "Method not allowed" })

export const sendInvalidCampaign = (res: GatsbyFunctionResponse) =>
  res.status(400).json({ error: "Invalid OTO campaign" })
