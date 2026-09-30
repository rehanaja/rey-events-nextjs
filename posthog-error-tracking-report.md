# PostHog error tracking

## What you still need to do

1. Add the personal API key that is already configured locally to the actual deployment provider as a masked build secret named exactly `POSTHOG_API_KEY`. The repository has no CI workflow or deployment manifest, so add it wherever `npm run build` runs; do not commit the key.
2. Configure these variables in the production build/runtime environment using these exact names: `POSTHOG_PROJECT_ID`, `NEXT_PUBLIC_POSTHOG_HOST`, and `NEXT_PUBLIC_POSTHOG_KEY`. `POSTHOG_API_KEY` must be available as a build secret, and `NEXT_PUBLIC_POSTHOG_HOST` is shared by the uploader and browser SDK.
3. Ensure the real deployment path provides both a release name and release version to the build. A provider's native git environment or a checkout containing `.git` can supply them; if a future Docker boundary is used, forward the provider's actual git variables into the build stage without putting `POSTHOG_API_KEY` in `ARG` or `ENV`.
4. Run a production deployment through the actual provider, then confirm that a symbol set appears in PostHog. No repository-owned deployment path was available to wire or verify, and no production build was run here.

## What error tracking does now

Uncaught browser errors and unhandled promise rejections reach PostHog through the SDK's native exception handlers because `instrumentation-client.ts` initializes the browser SDK with `capture_exceptions: true`. Next.js render errors that reach the global framework boundary are captured centrally by `app/global-error.tsx`, which calls `posthog.captureException(error)`. This avoids route-by-route error listeners or wrappers.

The PostHog SDK is installed and initialized, so this project now has PostHog error capture. The capture mechanism is carried by `instrumentation-client.ts` and `app/global-error.tsx`.

## Source maps

Source-map upload is wired into the Next.js production build. The relevant files are:

- `next.config.ts`
- `package.json`
- `package-lock.json`
- `.env.local`
- `.env.example`

The exact production build command is `npm run build` (`next build`). Every production build now attempts to upload source maps through the `@posthog/nextjs-config` integration, and uploaded map files are removed from the deployable artifact afterward. The uploader uses `POSTHOG_API_KEY`, `POSTHOG_PROJECT_ID`, and `NEXT_PUBLIC_POSTHOG_HOST`; the runtime SDK uses `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`.

## Verify

Trigger any error in the running production application, then open [PostHog Error Tracking](https://us.posthog.com/project/635104/error_tracking). Uploaded symbol sets appear at [Error Tracking configuration](https://us.posthog.com/project/635104/error_tracking/configuration).
