"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AnalysisLoading } from "@/components/analysis-loading"
import { ResultsDashboard } from "@/components/results-dashboard"
import { Footer } from "@/components/footer"

export type AppState = "idle" | "loading" | "results"

export interface AnalysisResult {
  score: number
  level: "Beginner" | "Intermediate" | "Advanced"
  summary: string
  roadmap: {
    title: string
    description: string
    icon: string
    completed: boolean
  }[]
  signals: string[]
}

export default function Home() {
  const [appState, setAppState] = useState<AppState>("idle")
  const [repoUrl, setRepoUrl] = useState("")
  const [result, setResult] = useState<AnalysisResult | null>(null)

  const handleAnalyze = async (url: string) => {
    setRepoUrl(url)
    setAppState("loading")

    // Simulate analysis with mock data
    await new Promise((resolve) => setTimeout(resolve, 4000))

    setResult({
      score: 78,
      level: "Intermediate",
      summary:
        "This repository demonstrates solid engineering fundamentals with well-structured code and meaningful commit history. The project shows good understanding of modern development practices, though there's room for improvement in test coverage and documentation.",
      roadmap: [
        {
          title: "Add comprehensive test suite",
          description: "Implement unit and integration tests to reach 80%+ coverage",
          icon: "tests",
          completed: false,
        },
        {
          title: "Improve documentation",
          description: "Add API documentation and usage examples to README",
          icon: "docs",
          completed: false,
        },
        {
          title: "Set up CI/CD pipeline",
          description: "Configure automated testing and deployment workflows",
          icon: "ci",
          completed: false,
        },
        {
          title: "Add contribution guidelines",
          description: "Create CONTRIBUTING.md with clear contribution process",
          icon: "git",
          completed: false,
        },
        {
          title: "Implement error handling",
          description: "Add consistent error boundaries and logging",
          icon: "code",
          completed: false,
        },
      ],
      signals: ["README", "Tests", "Commits", "CI/CD", "Structure", "TypeScript"],
    })
    setAppState("results")
  }

  const handleReset = () => {
    setAppState("idle")
    setRepoUrl("")
    setResult(null)
  }

  return (
    <main className="min-h-screen bg-background">
      {appState === "idle" && <HeroSection onAnalyze={handleAnalyze} />}
      {appState === "loading" && <AnalysisLoading repoUrl={repoUrl} />}
      {appState === "results" && result && <ResultsDashboard result={result} repoUrl={repoUrl} onReset={handleReset} />}
      <Footer />
    </main>
  )
}
