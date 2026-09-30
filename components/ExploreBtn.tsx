'use client'

import Image from "next/image"
import posthog from "posthog-js"
import { posthogAppLogger } from "@/lib/posthog-logs"

const ExploreBtn = () => {
  const handleExploreEvents = () => {
    if (
      process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.capture("events_explored")
      posthogAppLogger.info("Event catalog exploration started")
    }
  }

  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={handleExploreEvents}><a href="#events">Explore Events<Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}/></a></button>
  )
}

export default ExploreBtn
