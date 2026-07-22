import { motion } from 'motion/react'
import {
  Inbox,
  Star,
  Send,
  FileText,
  Archive,
  Trash2,
  Sparkles,
  Search,
  Reply,
  Forward,
  MoreHorizontal,
  Paperclip,
} from 'lucide-react'

const sidebarNav = [
  { icon: Inbox, label: 'Inbox', count: 12, active: true },
  { icon: Star, label: 'Starred', count: 3 },
  { icon: Send, label: 'Sent' },
  { icon: FileText, label: 'Drafts', count: 2 },
  { icon: Archive, label: 'Archive' },
  { icon: Trash2, label: 'Trash' },
]

const labels = [
  { name: 'Work', color: '#00d2ff' },
  { name: 'Personal', color: '#A4F4FD' },
  { name: 'Travel', color: '#f59e0b' },
  { name: 'Finance', color: '#10b981' },
]

const messages = [
  {
    from: 'Linear',
    subject: 'Weekly product digest',
    preview: 'Your team shipped 23 issues this week...',
    time: '9:41 AM',
    unread: true,
    active: true,
  },
  {
    from: 'Sophia Chen',
    subject: 'Re: Q3 roadmap review',
    preview: 'Thanks for sending the deck over. I had a few thoughts...',
    time: '8:12 AM',
    unread: true,
  },
  {
    from: 'Figma',
    subject: 'Marcus commented on your file',
    preview: 'Love the new direction on the landing hero.',
    time: 'Yesterday',
  },
  {
    from: 'Stripe',
    subject: 'Payout of $12,480.00 sent',
    preview: 'Your payout is on its way to your bank...',
    time: 'Yesterday',
  },
  {
    from: 'Vercel',
    subject: 'Deployment ready for aura-web',
    preview: 'Preview is live at aura-web-g3f.vercel.app',
    time: 'Mon',
  },
  {
    from: 'GitHub',
    subject: '[aura/core] PR #482 approved',
    preview: 'david-lim approved your pull request.',
    time: 'Mon',
  },
]

export default function InboxMockup() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-black/20">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-xs text-white/50">Aura — Inbox</span>
          <div className="w-16" />
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 h-[520px]">
          {/* ── Sidebar ── */}
          <div className="col-span-3 border-r border-white/[0.06] bg-black/30 p-4 flex flex-col gap-5 overflow-hidden">
            {/* Compose button */}
            <button className="flex items-center gap-2 rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 w-full hover:bg-white/90 transition-colors">
              <Sparkles size={12} />
              Compose with Aura
            </button>

            {/* Nav */}
            <nav className="flex flex-col gap-0.5">
              {sidebarNav.map(({ icon: Icon, label, count, active }) => (
                <button
                  key={label}
                  className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md text-xs w-full text-left transition-colors ${
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:bg-white/5'
                  }`}
                >
                  <Icon size={13} />
                  <span className="flex-1">{label}</span>
                  {count !== undefined && (
                    <span className={`text-[10px] ${active ? 'text-white' : 'text-white/40'}`}>
                      {count}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* Labels */}
            <div className="mt-auto">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2 px-2">
                Labels
              </p>
              {labels.map(({ name, color }) => (
                <div key={name} className="flex items-center gap-2.5 px-2 py-1.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                  <span className="text-xs text-white/60">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Message list ── */}
          <div className="col-span-4 border-r border-white/[0.06] flex flex-col overflow-hidden">
            {/* Search */}
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.06]">
              <Search size={13} className="text-white/40 flex-shrink-0" />
              <span className="text-xs text-white/30">Search mail</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.subject}
                  className={`px-3 py-3 border-b border-white/[0.04] cursor-pointer transition-colors ${
                    msg.active
                      ? 'bg-white/[0.07]'
                      : 'hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-semibold ${msg.unread ? 'text-white' : 'text-white/70'}`}>
                      {msg.from}
                    </span>
                    <span className="text-[10px] text-white/40">{msg.time}</span>
                  </div>
                  <p className={`text-xs mb-0.5 truncate ${msg.unread ? 'text-white/80 font-medium' : 'text-white/60'}`}>
                    {msg.subject}
                  </p>
                  <p className="text-[11px] text-white/40 truncate">{msg.preview}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Reader ── */}
          <div className="col-span-5 flex flex-col overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06]">
              <div className="flex items-center gap-1">
                {[Reply, Forward, Archive, Trash2].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-white/50 hover:bg-white/5 hover:text-white/80 transition-colors"
                  >
                    <Icon size={13} />
                  </button>
                ))}
              </div>
              <button className="w-7 h-7 rounded-md flex items-center justify-center text-white/50 hover:bg-white/5">
                <MoreHorizontal size={13} />
              </button>
            </div>

            {/* Email content */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <h2 className="text-sm font-semibold text-white mb-3">Weekly product digest</h2>

              {/* Sender row */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-white">L</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">Linear</span>
                    <span className="text-[10px] text-white/40">to me · 9:41 AM</span>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/50">
                  Work
                </span>
              </div>

              {/* AI Summary card */}
              <div className="mb-4 rounded-xl bg-white/[0.04] border border-white/[0.08] p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles size={12} style={{ color: '#A4F4FD' }} />
                  <span className="text-xs font-semibold text-white/80">Summary by Aura</span>
                </div>
                <p className="text-[11px] text-white/60 leading-[1.5]">
                  Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.
                </p>
              </div>

              {/* Body text */}
              <div className="space-y-3">
                <p className="text-xs text-white/80">Hi team,</p>
                <p className="text-xs text-white/70 leading-[1.6]">
                  Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.
                </p>
                <p className="text-xs text-white/70 leading-[1.6]">
                  Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.
                </p>
                <p className="text-xs text-white/70 leading-[1.6]">
                  Let me know if you would like a deeper breakdown by project or contributor.
                </p>
                <p className="text-xs text-white/50">— The Linear team</p>
              </div>

              {/* Attachment */}
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                <Paperclip size={11} className="text-white/50" />
                <span className="text-xs text-white/60">digest-may-6.pdf</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
