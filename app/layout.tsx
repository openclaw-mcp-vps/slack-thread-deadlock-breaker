import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Slack Thread Deadlock Breaker — Auto-escalate stalled Slack threads",
  description: "Detects when important Slack threads go unanswered for X hours and auto-escalates to team leads with context. Never let a critical thread fall through the cracks again."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c215f343-c2a4-49e2-b8b7-6f9b99650501"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
