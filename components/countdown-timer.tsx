"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date(targetDate)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl font-bold">{days}</div>
        <div className="text-sm uppercase tracking-wider">Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl font-bold">{hours}</div>
        <div className="text-sm uppercase tracking-wider">Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl font-bold">{minutes}</div>
        <div className="text-sm uppercase tracking-wider">Minutes</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl font-bold">{seconds}</div>
        <div className="text-sm uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  )
}

