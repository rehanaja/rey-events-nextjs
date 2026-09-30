"use client";

import posthog from "posthog-js";

export const posthogAppLogger = {
  info(message: string, attributes?: Record<string, string>) {
    posthog.logger.info(message, attributes);
  },
};
