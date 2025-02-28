"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { CheckCircle, Calendar, FileText } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      number: 8,
      label: "Anos no Mercado",
      icon: <Calendar className="h-8 w-8" />,
      description: "Experiência e confiança",
    },
    {
      number: 8,
      label: "Anos de papel zero",
      icon: <FileText className="h-8 w-8" />,
      description: "Compromisso sustentável",
    },
    {
      number: 99,
      label: "de Clientes Felizes",
      suffix: "%",
      icon: <CheckCircle className="h-8 w-8" />,
      description: "Satisfação garantida",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-800 py-24 text-white">
      {/* Decorative elements */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Nossos Resultados
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative flex flex-col items-center rounded-xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            >
              <motion.div
                className="mb-4 rounded-full bg-emerald-500/20 p-3 text-emerald-200 transition-all duration-300 group-hover:bg-emerald-500/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {stat.icon}
              </motion.div>

              <AnimatedCounter value={stat.number} suffix={stat.suffix || ""} />

              <motion.div
                className="mt-3 text-center text-xl font-semibold uppercase tracking-wide text-emerald-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
              >
                {stat.label}
              </motion.div>

              <motion.p
                className="mt-2 text-center text-sm text-emerald-100/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.5 }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reset counter when value changes
    setCount(0)

    const start = 0
    const end = value
    const duration = 2500 // Longer duration for smoother animation

    // Use requestAnimationFrame for smoother animation
    let startTimestamp: number | null = null

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - start) + start)

      setCount(currentCount)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    const animationId = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(animationId)
  }, [value])

  return (
    <div className="relative">
      <motion.div
        ref={nodeRef}
        className="text-6xl font-extrabold sm:text-7xl"
        initial={{ scale: 0.8, y: 20 }}
        animate={{
          scale: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
          },
        }}
      >
        <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
          {count}
          {suffix}
        </span>
      </motion.div>

      {/* Highlight effect */}
      <motion.div
        className="absolute -inset-1 -z-10 rounded-lg opacity-0"
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0.8, 1.2, 1.8],
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
          times: [0, 0.2, 1],
          repeat: 0,
          repeatDelay: 1,
        }}
      />
    </div>
  )
}

