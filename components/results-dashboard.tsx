"use client"

import { AnalysisResult } from "@/app/page"

export interface ResultsDashboardProps {
  result: AnalysisResult
  repoUrl: string
  onReset: () => void
}

export function ResultsDashboard({ result, repoUrl, onReset }: ResultsDashboardProps) {
  return (
    <section className="py-12 px-4 md:py-20 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Analysis Results</h2>
          <p className="text-muted-foreground">{repoUrl}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Score</h3>
            <p className="text-4xl font-bold">{result.score}</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Level</h3>
            <p className="text-2xl font-bold">{result.level}</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Signals Detected</h3>
            <p className="text-2xl font-bold">{result.signals.length}</p>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border mb-8">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>
          <p className="text-foreground">{result.summary}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Improvement Roadmap</h3>
          <div className="space-y-4">
            {result.roadmap.map((item, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onReset}
          className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"
        >
          Analyze Another Repository
        </button>
      </div>
    </section>
  )
}
