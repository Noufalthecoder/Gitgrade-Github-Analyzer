"use client"

import { Card } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

interface SummaryCardProps {
  summary: string
}

export function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <Card className="h-full p-6 sm:p-8 bg-gradient-to-br from-card via-card/80 to-accent/5 border border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20">
          <MessageSquare className="h-6 w-6 text-accent" />
        </div>
        <div>
          <h3 className="text-xs font-bold text-accent uppercase tracking-widest">Repository Evaluation</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Detailed analysis insights</p>
        </div>
      </div>
      <p className="text-foreground text-base sm:text-lg leading-relaxed">{summary}</p>
    </Card>
  )
}
SummaryCard.displayName = "SummaryCard"
export default SummaryCard