import { data } from '../data/portfolioData'
import { BiLogoLinkedin } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"
import { FaInstagram } from 'react-icons/fa'
import { IoLogoGithub } from "react-icons/io"
import { MdAlternateEmail } from "react-icons/md"
import { useRef, useState } from 'react'

export default function ContactFooter() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setStatus(null)

    const formData = new FormData(formRef.current!)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const result = await response.json()
      if (result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon. 🚀' })
        formRef.current?.reset()
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or contact me directly via email.' })
    } finally {
      setIsSending(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <footer id="contact-section" className="p-6 sm:p-10 border-t border-[#38434f] bg-[#0d1117] text-[#b0b7bf]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">

        {/* LEFT SECTION */}
        <div className="ml-0 sm:ml-6 md:ml-10">
          <h3 className="text-[24px] sm:text-[30px] font-bold text-white mb-4">Contact Me</h3>

          <div className="flex items-center gap-2 mb-3">
            <MdAlternateEmail className="bg-[#58504A] p-2 rounded-full text-white flex-shrink-0" size={34}/>
            <span className="text-base sm:text-xl font-bold break-all">{data.email}</span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <CiLocationOn className="bg-[#BF211E] p-2 rounded-full text-white flex-shrink-0" size={34}/>
            <span className="text-base sm:text-xl font-bold">{data.location}</span>
          </div>

          <div className="flex gap-4 sm:gap-5">
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub className="bg-[#171515] p-2 sm:p-3 rounded-full text-white hover:scale-110 transition-transform" size={42}/>
            </a>
            <a href={data.linkedIn} target="_blank" rel="noopener noreferrer">
              <BiLogoLinkedin className="bg-[#0a66c2] p-2 sm:p-3 rounded-full text-white hover:scale-110 transition-transform" size={42}/>
            </a>
            <a href={data.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="bg-[#a534a5] p-2 sm:p-3 rounded-full text-white hover:scale-110 transition-transform" size={42}/>
            </a>
          </div>
        </div>

        {/* RIGHT SECTION — Contact Form */}
        <div>
          <h3 className="text-[24px] sm:text-[30px] font-bold text-white mb-4">Send Message</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New message from your portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />
            <input type="hidden" name="redirect" value="false" />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-lg bg-[#161b22] border border-[#30363d] text-white placeholder-gray-500 focus:outline-none focus:border-[#0a66c2] transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-lg bg-[#161b22] border border-[#30363d] text-white placeholder-gray-500 focus:outline-none focus:border-[#0a66c2] transition-colors"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={4}
              className="w-full px-3 py-2 rounded-lg bg-[#161b22] border border-[#30363d] text-white placeholder-gray-500 focus:outline-none focus:border-[#0a66c2] transition-colors"
            />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-2 rounded-lg bg-[#0a66c2] text-white font-semibold hover:bg-[#0a66c2]/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <div className={`p-3 rounded-lg text-center animate-pulse ${
                status.type === 'success'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                  : 'bg-red-500/20 text-red-400 border border-red-500/50'
              }`}>
                {status.message}
              </div>
            )}
          </form>
        </div>

      </div>

      <div className="border-t border-[#38434f] mt-10 pt-5 text-center text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Mahesh Dasarwad. All rights reserved.
      </div>
    </footer>
  )
}
