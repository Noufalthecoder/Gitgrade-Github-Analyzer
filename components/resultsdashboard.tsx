"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "./ui/button"
import type { AnalysisResult } from "../app/page"
import { ScoreCard } from "./scorecard"
import { SummaryCard } from "./summarycard"
import { RoadmapSection } from "./roadmapsection"
import { EngineeringSignals } from "./engsignals"

interface ResultsDashboardProps {
  result: AnalysisResult
  repoUrl: string
  onReset: () => void
}

export function ResultsDashboard({ result, repoUrl, onReset }: ResultsDashboardProps) {
  const repoName = repoUrl.split("/").slice(-2).join("/")

  return (
    <section className="min-h-screen px-4 py-12 sm:py-20 bg-gradient-to-b from-accent/5 via-background to-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="mb-6 -ml-2 text-muted-foreground hover:text-accent hover:bg-accent/5 transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Analyze Another Repository
          </Button>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 text-balance">Analysis Results</h1>
            <p className="text-muted-foreground font-mono text-sm bg-card px-4 py-2 rounded-lg inline-block border border-border/50">{repoName}</p>
          </div>
        </motion.div>

        {/* Score and Summary Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8"
        >
          <div className="lg:col-span-2">
            <ScoreCard score={result.score} level={result.level} />
          </div>
          <div className="lg:col-span-3">
            <SummaryCard summary={result.summary} />
          </div>
        </motion.div>

        {/* Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <RoadmapSection roadmap={result.roadmap} />
        </motion.div>

        {/* Engineering Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <EngineeringSignals signals={result.signals} />
        </motion.div>
      </div>
    </section>
  )
}
