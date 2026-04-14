import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  CheckCircle2,
  CircleDollarSign,
  MessageCircle,
  PackageSearch,
  ShieldCheck,
  ShoppingBag,
  Timer,
  Truck,
} from 'lucide-react'

const learnItems = [
  {
    title: 'How to find hot-selling products',
    icon: PackageSearch,
    desc: 'Use simple product research methods that actually work in the Nigerian market.',
  },
  {
    title: 'How to order from China safely',
    icon: ShieldCheck,
    desc: 'Avoid fake vendors and payment traps with a clear safety checklist.',
  },
  {
    title: 'How to sell on WhatsApp & Instagram',
    icon: ShoppingBag,
    desc: 'Turn your phone into a sales machine with tested organic and paid methods.',
  },
  {
    title: 'How to avoid customs issues',
    icon: Truck,
    desc: 'Understand shipping options and documentation so your goods arrive safely.',
  },
]

const testimonials = [
  {
    name: 'Tobi A., Lagos',
    text: 'I was scared because I had been scammed before. This course gave me a clear plan. I made ₦180k profit in my second month.',
    earning: '₦180,000 in 8 weeks',
  },
  {
    name: 'Chiamaka N., Abuja',
    text: 'No long story. I started with small capital, followed the system, and now I get consistent orders from WhatsApp every week.',
    earning: '₦320,000 in 3 months',
  },
  {
    name: 'Azeez M., Ibadan',
    text: 'The supplier contacts and ad template alone are worth it. I stopped guessing and started selling products people actually want.',
    earning: '₦110,000 in first month',
  },
]

const faqs = [
  {
    q: 'What if I don’t have much money to start?',
    a: 'You can start small. The training shows low-risk products and practical ways to begin with a modest budget.',
  },
  {
    q: 'Is this legit or another online scam?',
    a: 'It is a practical training with tested methods used by real Nigerians. You get step-by-step guidance, not vague motivation.',
  },
  {
    q: 'How long before I see results?',
    a: 'Many students get their first sales within a few weeks, depending on action speed, product choice, and consistency.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const launchDate = useMemo(() => new Date('2026-04-20T23:59:59Z'), [])
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(launchDate))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(launchDate)), 1000)
    return () => clearInterval(id)
  }, [launchDate])

  return (
    <main className="relative pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.20),transparent_30%),#020617]" />

      <section className="section-wrap pt-12 sm:pt-16 lg:pt-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
            <BadgeCheck size={16} /> Trusted by 1,000+ students
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            How Nigerians Are Making ₦100k–₦500k Monthly With Mini Importation (Without a Shop)
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Step-by-step system to start from scratch, even if you’ve failed before.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://chat.whatsapp.com/JRBRWMaWbOsCuqBfENSAMk?mode=gi_t"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-glow transition hover:bg-blue-500"
            >
              Join Free WhatsApp Group
            </a>
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-200">
              <Timer size={18} /> Slots close in: <strong>{timeLeft}</strong>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-wrap mt-16 rounded-3xl bg-white py-14 text-slate-900 sm:mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <h2 className="text-3xl font-extrabold sm:text-4xl">If you’ve ever said this, you’re not alone…</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['I don’t have enough capital.', 'What if I get scammed again?', 'I don’t know what product to import.', 'I’ve lost money before.'].map((pain) => (
              <div key={pain} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-lg font-medium">
                {pain}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-700">
            Omo, this journey can be frustrating. You try one thing, lose money, and start doubting everything online. This training is built for people like you—serious people who want real results, not hype.
          </p>
        </motion.div>
      </section>

      <section className="section-wrap mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">The solution</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">A beginner-friendly training that gives you clear direction</h2>
          <ul className="mt-6 space-y-3 text-slate-200">
            {['Step-by-step modules from zero to first sales', 'Tested strategies for the Nigerian market', 'Practical guidance to reduce risk and avoid common mistakes'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 text-emerald-400" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="glass-card rounded-3xl p-6"
        >
          <h3 className="text-xl font-bold">Inside the Course</h3>
          <p className="mt-2 text-slate-300">Everything is broken down so you can take action immediately.</p>
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

      <section className="section-wrap mt-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Proof from students</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
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
        <h2 className="text-3xl font-extrabold sm:text-4xl">Bonuses you get today</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['Verified Supplier Contacts', '₦25,000 value'],
            ['Plug-and-play Ad Templates', '₦20,000 value'],
            ['WhatsApp Sales Script Pack', '₦15,000 value'],
          ].map(([name, value]) => (
            <div key={name} className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="font-semibold">{name}</p>
              <p className="mt-1 text-sm text-blue-100">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-lg">
          Total bonus value: <span className="font-black">₦60,000</span> — included free when you enroll now.
        </p>
      </section>

      <section id="pricing" className="section-wrap mt-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="rounded-3xl border border-amber-300/40 bg-amber-50 p-8 text-slate-900">
          <p className="inline-flex rounded-full bg-amber-200 px-3 py-1 text-sm font-semibold text-amber-900">Free group access this week</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Join the WhatsApp group for free</h2>
          <div className="mt-6 flex flex-wrap items-end gap-4">
            <p className="text-xl text-slate-500 line-through">₦19,999</p>
            <p className="text-5xl font-black text-slate-900">₦0</p>
          </div>
          <p className="mt-4 max-w-2xl text-base text-slate-700">
            Start free inside the community. Premium mentoring and advanced offers will be shared in the group.
          </p>
          <a
            href="https://chat.whatsapp.com/JRBRWMaWbOsCuqBfENSAMk?mode=gi_t"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-xl bg-slate-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-700"
          >
            Join Group for Free
          </a>
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
        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">Your next income level can start with one smart decision.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          You’ve seen the strategy. You’ve seen the proof. Join the free WhatsApp group now and watch out for premium offers inside.
        </p>
        <a
          href="https://chat.whatsapp.com/JRBRWMaWbOsCuqBfENSAMk?mode=gi_t"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-xl bg-emerald-500 px-10 py-4 text-lg font-black text-slate-900 transition hover:bg-emerald-400"
        >
          Join Group for Free
        </a>
      </section>

      <a
        href="https://chat.whatsapp.com/JRBRWMaWbOsCuqBfENSAMk?mode=gi_t"
        target="_blank"
        rel="noreferrer"
        className="fixed inset-x-4 bottom-4 z-50 rounded-xl bg-blue-600 px-6 py-4 text-center text-lg font-bold text-white shadow-glow md:hidden"
      >
        Join Group for Free
      </a>

      <a
        href="https://chat.whatsapp.com/JRBRWMaWbOsCuqBfENSAMk?mode=gi_t"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-slate-900 shadow-lg transition hover:scale-105"
      >
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
