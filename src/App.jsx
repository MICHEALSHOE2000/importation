import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  CheckCircle2,
  CircleDollarSign,
  Lock,
  MessageCircle,
  PackageSearch,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Timer,
  Truck,
  Volume2,
  VolumeX,
} from 'lucide-react'

const learnItems = [
  {
    title: 'How to find hot-selling products',
    icon: PackageSearch,
    desc: 'Simple product validation framework so you stop guessing and start selling what people already want.',
  },
  {
    title: 'How to order from China safely',
    icon: ShieldCheck,
    desc: 'Exact vendor screening and payment checklist to avoid fake suppliers and bad deals.',
  },
  {
    title: 'How to sell on WhatsApp & Instagram',
    icon: ShoppingBag,
    desc: 'Content + offer + DM script combo that helps you convert followers into buyers fast.',
  },
  {
    title: 'How to avoid customs issues',
    icon: Truck,
    desc: 'Clear shipping options and customs guidance to reduce avoidable loss and delivery stress.',
  },
]

const testimonials = [
  {
    name: 'Tobi A., Lagos',
    text: 'I had trust issues because I had been scammed before. This broke everything down in plain terms. First profitable batch changed my confidence.',
    earning: '₦180,000 profit in 8 weeks',
  },
  {
    name: 'Chiamaka N., Abuja',
    text: 'I started with small money and my phone. The WhatsApp strategy alone paid for the course quickly. Now I run weekly restocks.',
    earning: '₦320,000 in 3 months',
  },
  {
    name: 'Azeez M., Ibadan',
    text: 'What I liked most: no fluff. Just what to buy, where to buy, and how to sell. I stopped wasting money on random products.',
    earning: '₦110,000 in first month',
  },
]

const faqs = [
  {
    q: 'What if I don’t have enough money?',
    a: 'You can start with a lean budget. The training includes low-capital product options and reinvestment strategy to grow safely.',
  },
  {
    q: 'Is this legit?',
    a: 'Yes. This is practical execution training based on real mini importation workflows used in Nigeria, not motivational talk.',
  },
  {
    q: 'How long before I see results?',
    a: 'Many students get first sales within 2–4 weeks after implementation. Speed depends on your action and consistency.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const launchDate = useMemo(() => new Date('2026-04-20T23:59:59Z'), [])
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(launchDate))
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [audioError, setAudioError] = useState('')
  const audioRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(launchDate)), 1000)
    return () => clearInterval(id)
  }, [launchDate])

  const toggleAudio = async () => {
    if (!audioRef.current) return

    try {
      if (isAudioPlaying) {
        audioRef.current.pause()
        setIsAudioPlaying(false)
        return
      }

      await audioRef.current.play()
      setIsAudioPlaying(true)
      setAudioError('')
    } catch {
      setAudioError('Unable to autoplay audio. Tap again after interacting with the page.')
    }
  }

  return (
    <main className="relative pb-28">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/dribbling-poster.jpg"
      >
        <source src="/media/dribbling.webm" type="video/webm" />
        <source src="/media/dribbling.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.35),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.22),transparent_30%),rgba(2,6,23,0.78)]" />

      <audio ref={audioRef} loop preload="none">
        <source src="/media/muje.mp3" type="audio/mpeg" />
      </audio>

      <div className="sticky top-0 z-40 border-b border-amber-200/30 bg-amber-100/95 px-4 py-2 text-center text-sm font-semibold text-amber-900 backdrop-blur">
        <span className="inline-flex items-center gap-2"><Timer size={14} /> Enrollment closes soon — {timeLeft}</span>
      </div>

      <section className="section-wrap pt-12 sm:pt-16 lg:pt-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <BadgeCheck size={16} /> Trusted by 1,000+ students in Nigeria
            </p>
            <button
              type="button"
              onClick={toggleAudio}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              {isAudioPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {isAudioPlaying ? 'Pause Muje track' : 'Play Muje track'}
            </button>
          </div>

          {audioError ? <p className="mb-4 text-sm text-amber-200">{audioError}</p> : null}

          <h1 className="max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            How Nigerians Are Making ₦100k–₦500k Monthly With Mini Importation <span className="text-blue-300">(Without a Shop)</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-100 sm:text-xl">
            Step-by-step system to start from scratch, even if you’ve failed before. No confusing theory. Just practical moves that bring sales.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-glow transition hover:bg-blue-500">
              Start Learning Now
            </a>
            <a href="#proof" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-lg font-bold text-white transition hover:bg-white/10">
              See Student Results
            </a>
            <p className="text-sm text-slate-100">💳 One-time payment • 🔒 Secure checkout • 📱 Instant access</p>
          </div>
        </motion.div>
      </section>

      <section className="section-wrap mt-16 rounded-3xl bg-white py-14 text-slate-900 sm:mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <h2 className="text-3xl font-extrabold sm:text-4xl">If this sounds like you, read this carefully.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['“I don’t even have enough capital.”', '“I’m scared of getting scammed again.”', '“I don’t know what product can sell fast.”', '“I tried before and lost money.”'].map((pain) => (
              <div key={pain} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-lg font-medium">
                {pain}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-700">
            You’re not lazy. You just need a working blueprint. This course removes confusion and gives you a safer path to start and scale with confidence.
          </p>
        </motion.div>
      </section>

      <section className="section-wrap mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">The solution</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">A practical, beginner-friendly system built for Nigeria</h2>
          <ul className="mt-6 space-y-3 text-slate-200">
            {['From zero to first sales in simple steps', 'Tested methods for Nigerian buyers and platforms', 'Risk-reduction strategies to avoid costly mistakes'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 text-emerald-400" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="#pricing" className="mt-6 inline-flex rounded-xl bg-emerald-500 px-6 py-3 font-bold text-slate-900 transition hover:bg-emerald-400">
            Yes, I Want This Blueprint
          </a>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="glass-card rounded-3xl p-6">
          <h3 className="text-xl font-bold">What You Will Learn</h3>
          <p className="mt-2 text-slate-300">Everything broken down so you can take action immediately.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {learnItems.map(({ title, icon: Icon, desc }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <Icon className="text-blue-300" size={20} />
                <h4 className="mt-3 text-base font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-slate-400">{desc}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="proof" className="section-wrap mt-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Real people. Real outcomes.</h2>
        <p className="mt-3 max-w-2xl text-slate-300">These are normal Nigerians who followed the framework and got results.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <motion.article key={item.name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-slate-200">“{item.text}”</p>
              <p className="mt-4 text-sm font-semibold text-emerald-300">{item.earning}</p>
              <p className="mt-1 text-sm text-slate-400">— {item.name}</p>
              <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-500/10 p-3 text-xs text-emerald-200">
                Earnings screenshot preview UI (mock)
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-wrap mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Bonuses if you join today</h2>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold"><Sparkles size={15} /> Limited-time bundle</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['Verified Supplier Contacts', '₦25,000 value'],
            ['Done-for-you Ad Templates', '₦20,000 value'],
            ['WhatsApp Closing Scripts', '₦15,000 value'],
          ].map(([name, value]) => (
            <div key={name} className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="font-semibold">{name}</p>
              <p className="mt-1 text-sm text-blue-100">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-lg">Total bonus value: <span className="font-black">₦60,000</span> — yours free today.</p>
      </section>

      <section id="pricing" className="section-wrap mt-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="rounded-3xl border border-amber-300/40 bg-amber-50 p-8 text-slate-900">
          <p className="inline-flex rounded-full bg-amber-200 px-3 py-1 text-sm font-semibold text-amber-900">Limited slots available this week</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Get lifetime access now</h2>
          <p className="mt-3 max-w-2xl text-slate-700">You’ll get the complete training, all listed bonuses, and updates — one payment, no hidden fee.</p>

          <div className="mt-6 flex flex-wrap items-end gap-4">
            <p className="text-xl text-slate-500 line-through">₦75,000</p>
            <p className="text-5xl font-black text-slate-900">₦19,999</p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-300 bg-white p-4 text-sm text-slate-700">
            <p className="flex items-center gap-2 font-semibold"><Lock size={14} /> 7-day action guarantee</p>
            <p className="mt-1">Follow the steps for 7 days and if you feel lost, you get direct support to get you back on track.</p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#final-cta" className="inline-flex rounded-xl bg-slate-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-700">Secure My Spot</a>
            <a href="https://wa.me/2347086865133" className="inline-flex rounded-xl border border-slate-400 px-7 py-4 text-lg font-bold text-slate-800 transition hover:bg-slate-100">Chat on WhatsApp</a>
          </div>
        </motion.div>
      </section>

      <section className="section-wrap mt-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer font-semibold text-white">{faq.q}</summary>
              <p className="mt-3 text-slate-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="final-cta" className="section-wrap mt-16 pb-8 text-center">
        <CircleDollarSign className="mx-auto text-emerald-400" size={36} />
        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">No more “I’ll start later.” Start now and change your income story.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          You don’t need to know everything before you start. You just need the right system and action. This is your chance.
        </p>
        <a href="https://wa.me/2347086865133" className="mt-8 inline-flex rounded-xl bg-emerald-500 px-10 py-4 text-lg font-black text-slate-900 transition hover:bg-emerald-400">
          Secure My Spot
        </a>
      </section>

      <a href="#pricing" className="fixed inset-x-4 bottom-4 z-50 rounded-xl bg-blue-600 px-6 py-4 text-center text-lg font-bold text-white shadow-glow md:hidden">
        Secure My Spot — ₦19,999
      </a>

      <a href="https://wa.me/2347086865133" aria-label="Chat on WhatsApp" className="fixed bottom-24 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-slate-900 shadow-lg transition hover:scale-105">
        <MessageCircle size={24} />
      </a>
    </main>
  )
}

function getTimeLeft(targetDate) {
  const diff = targetDate.getTime() - new Date().getTime()
  if (diff <= 0) return '00d : 00h : 00m : 00s'

  const totalSeconds = Math.floor(diff / 1000)
  const days = String(Math.floor(totalSeconds / 86400)).padStart(2, '0')
  const hours = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')

  return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`
}

export default App
