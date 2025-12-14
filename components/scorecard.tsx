"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface ScoreCardProps {
  score: number
  level: "Beginner" | "Intermediate" | "Advanced"
}

export function ScoreCard({ score, level }: ScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400"
    if (score >= 60) return "text-accent"
    if (score >= 40) return "text-yellow-400"
    return "text-red-400"
  }

  const getLevelVariant = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500/10 text-green-400 border-green-500/20"
      case "Intermediate":
        return "bg-accent/10 text-accent border-accent/20"
      default:
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    }
  }

  return (
    <Card className="h-full p-6 sm:p-8 bg-gradient-to-br from-card via-card to-card/80 border border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-xs font-bold text-accent uppercase tracking-widest">Repository Score</h3>
          <p className="text-sm text-muted-foreground mt-1">AI-powered analysis</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors cursor-help" />
              <span className="sr-only">Score explanation</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm font-medium">Score based on:</p>
              <ul className="text-xs mt-2 space-y-1">
                <li>• Code structure & organization</li>
                <li>• Documentation quality</li>
                <li>• Test coverage</li>
                <li>• Commit history</li>
                <li>• Best practices</li>
              </ul>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="text-center">
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 150, damping: 20 }}
          className={`relative mb-6`}
        >
          <div className={`text-8xl sm:text-9xl font-black bg-gradient-to-br ${
            score >= 80 ? "from-green-400 to-emerald-500" :
            score >= 60 ? "from-accent to-blue-400" :
            score >= 40 ? "from-yellow-400 to-orange-400" :
            "from-red-400 to-red-500"
          } bg-clip-text text-transparent`}>
            {score}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-6"
        >
          <Badge variant="outline" className={`text-sm font-bold px-6 py-2 ${getLevelVariant(level)}`}>
            {level} Developer
          </Badge>
        </motion.div>

        {/* Animated score bar */}
        <div className="mt-8 space-y-3">
          <div className="relative h-3 w-full bg-muted rounded-full overflow-hidden border border-border/50">
            <motion.div
              className={`h-full rounded-full ${score >= 80 ? "bg-gradient-to-r from-green-400 to-emerald-500" : score >= 60 ? "bg-gradient-to-r from-accent to-blue-400" : score >= 40 ? "bg-gradient-to-r from-yellow-400 to-orange-400" : "bg-gradient-to-r from-red-400 to-red-500"}`}
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between text-xs font-medium text-muted-foreground/70">
            <span>Needs Work</span>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
