"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HeroSectionProps {
  onAnalyze: (url: string) => void
}

export function HeroSection({ onAnalyze }: HeroSectionProps) {
  const [url, setUrl] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url.trim()) {
      onAnalyze(url.trim())
    }
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Gradient background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/8 via-background to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Logo and badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/50 border border-border">
            <Github className="h-5 w-5 text-foreground" />
            <span className="text-sm font-medium text-foreground">GitGrade</span>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent/20 text-accent">AI-Powered</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6 text-balance leading-tight"
        >
          Turn your GitHub repository into{" "}
          <span className="bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent">
            recruiter-ready feedback
          </span>
          .
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty"
        >
          AI-assisted code analysis. Honest scoring. Actionable improvement roadmap.
        </motion.p>

        {/* Input form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto"
        >
          <div className="relative flex flex-col sm:flex-row gap-3 p-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300">
            <div className="relative flex-1">
              <Github className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
              <Input
                type="url"
                placeholder="https://github.com/username/project"
                value={url}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                className="w-full h-14 pl-12 pr-4 text-base bg-transparent border-0 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 transition-all duration-200"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={!url.trim()}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="h-14 px-8 text-base font-semibold rounded-xl bg-gradient-to-r from-accent to-blue-400 hover:shadow-lg hover:shadow-accent/30 text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Analyze</span>
              <motion.div animate={{ x: isHovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Button>
          </div>
        </motion.form>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>Free analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>No sign-up required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>Private repos supported</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
