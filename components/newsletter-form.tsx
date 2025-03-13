"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    setIsSubmitted(true)
  }

  return (
    <div>
      {isSubmitted ? (
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <p className="text-white">Thank you for subscribing! We'll keep you updated.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white bg-opacity-20 border-0 text-white placeholder:text-white/70 focus-visible:ring-offset-0"
          />
          <Button type="submit" className="bg-white text-green-600 hover:bg-gray-100">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  )
}

