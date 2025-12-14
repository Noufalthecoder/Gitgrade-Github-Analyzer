"use client"

export interface HeroSectionProps {
  onAnalyze: (url: string) => void
}

export function HeroSection({ onAnalyze }: HeroSectionProps) {
  return (
    <section className="py-12 px-4 md:py-20 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">GitGrade</h1>
        <p className="text-lg text-muted-foreground mb-8">AI-Powered Repository Analysis</p>
        <input
          type="text"
          placeholder="Enter GitHub repository URL"
          onChange={(e) => onAnalyze(e.target.value)}
          className="w-full px-4 py-2 bg-secondary border border-border rounded-lg"
        />
      </div>
    </section>
  )
}
