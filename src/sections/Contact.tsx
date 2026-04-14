import { useState } from 'react'
import { Mail, Phone,  Send, CheckCircle } from 'lucide-react'
import { data } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate send (replace with your EmailJS / Formspree / backend call)
    await new Promise(r => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const contacts = [
    { icon: <Mail size={18} />, label: 'Email', value: data.email, href: `mailto:${data.email}` },
    { icon: <Phone size={18} />, label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
    // { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'Connect on LinkedIn', href: data.linkedinUrl },
    // { icon: <Github size={18} />, label: 'GitHub', value: 'View my projects', href: data.links.find(l => l.label === 'GitHub')?.url ?? '#' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left - Info */}
      <div className="space-y-4">
        <div className="rounded-xl border border-[#e0ddd6] dark:border-[#38434f] bg-white dark:bg-[#1d2226] shadow-sm p-6">
          <h2 className="font-bold text-lg text-[#191919] dark:text-white mb-1">Let's Connect</h2>
          <p className="text-sm text-[#666360] dark:text-[#b0b7bf] mb-5">
            Open to internships, full-time roles, freelance projects, or just a good tech conversation!
          </p>
          <div className="space-y-3">
            {contacts.map(c => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-[#e0ddd6] dark:border-[#38434f] hover:border-[#0a66c2] hover:bg-[#f3f2ef] dark:hover:bg-[#2d3748] transition-all group"
              >
                <span className="text-[#0a66c2] group-hover:scale-110 transition-transform">{c.icon}</span>
                <div>
                  <p className="text-[10px] text-[#666360] dark:text-[#b0b7bf] uppercase tracking-wider font-medium">{c.label}</p>
                  <p className="text-sm text-[#191919] dark:text-white font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="rounded-xl border border-[#e0ddd6] dark:border-[#38434f] bg-white dark:bg-[#1d2226] shadow-sm p-6">
        <h2 className="font-bold text-lg text-[#191919] dark:text-white mb-4">Send a Message</h2>

        {sent && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-400 text-sm mb-4">
            <CheckCircle size={16} /> Message sent! I'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#666360] dark:text-[#b0b7bf] mb-1.5">Your Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="John Doe"
              className="w-full px-3 py-2.5 rounded-lg border border-[#e0ddd6] dark:border-[#38434f] bg-[#f3f2ef] dark:bg-[#2d3748] text-sm text-[#191919] dark:text-white placeholder-[#b0b7bf] focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#666360] dark:text-[#b0b7bf] mb-1.5">Email Address</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              placeholder="john@example.com"
              className="w-full px-3 py-2.5 rounded-lg border border-[#e0ddd6] dark:border-[#38434f] bg-[#f3f2ef] dark:bg-[#2d3748] text-sm text-[#191919] dark:text-white placeholder-[#b0b7bf] focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#666360] dark:text-[#b0b7bf] mb-1.5">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              placeholder="Hi! I saw your portfolio and wanted to reach out..."
              className="w-full px-3 py-2.5 rounded-lg border border-[#e0ddd6] dark:border-[#38434f] bg-[#f3f2ef] dark:bg-[#2d3748] text-sm text-[#191919] dark:text-white placeholder-[#b0b7bf] focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:border-transparent transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0a66c2] hover:bg-[#004182] disabled:bg-[#0a66c2]/60 text-white text-sm font-semibold rounded-full transition-colors"
          >
            {sending ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Sending...
              </span>
            ) : (
              <><Send size={14} /> Send Message</>
            )}
          </button>
          <p className="text-[10px] text-[#b0b7bf] text-center">
            💡 Wire up Formspree or EmailJS in Contact.tsx to actually send emails
          </p>
        </form>
      </div>
    </div>
  )
}
