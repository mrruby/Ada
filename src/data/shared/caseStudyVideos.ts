import type { VideoItem } from "@/lib/content"

/** Vertical Vimeo case-study videos from Magic members (used on several landings). */
export const caseStudyVideos: VideoItem[] = [
  "1155918940",
  "1155051959",
  "1155053529",
  "1156039661",
  "1158468977",
].map((id, index) => ({
  provider: "vimeo",
  id,
  title: `Case study klubowiczki Magic ${index + 1}`,
}))
