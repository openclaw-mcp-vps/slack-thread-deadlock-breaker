export default function Home() {
  const faqs = [
    {
      q: "How does thread monitoring work?",
      a: "After connecting your Slack workspace via OAuth, you configure which channels to watch and set a timeout threshold (e.g. 4 hours). Our system tracks thread activity and fires an escalation message to your designated manager when a thread goes silent past the deadline."
    },
    {
      q: "Who receives the escalation messages?",
      a: "You designate one or more team leads or managers per channel. When a thread stalls, they receive a Slack DM with full thread context, a link to the original message, and action buttons to acknowledge or snooze the alert."
    },
    {
      q: "Can I customize the timeout per channel?",
      a: "Yes. Each monitored channel can have its own timeout window, escalation contacts, and message template. You can also set business-hours-only mode so alerts don't fire on weekends or outside working hours."
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Team Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop letting critical Slack threads<br />
          <span className="text-[#58a6ff]">die in silence</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Slack Thread Deadlock Breaker monitors your channels and auto-escalates stalled threads to the right manager — with full context — before they become blockers.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⏱", title: "Configurable Timeouts", desc: "Set per-channel deadlines from 1 hour to 48 hours." },
            { icon: "📬", title: "Smart Escalation", desc: "Managers get thread context + action buttons in Slack DM." },
            { icon: "🕐", title: "Business Hours Mode", desc: "Alerts only fire during your team's working hours." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited monitored channels",
              "Configurable timeout per channel",
              "Slack OAuth integration",
              "Manager escalation with context",
              "Business hours scheduling",
              "Snooze & acknowledge actions",
              "Email digest reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base py-3 rounded-lg transition-colors duration-150"
          >
            Start Free Trial
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">7-day free trial. No credit card needed.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Slack Thread Deadlock Breaker. All rights reserved.
      </footer>
    </main>
  )
}
