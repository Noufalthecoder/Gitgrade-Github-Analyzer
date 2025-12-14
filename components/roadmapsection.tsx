"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { FlaskConical, FileText, GitBranch, Code2, Cog } from "lucide-react"

interface RoadmapItem {
  title: string
  description: string
  icon: string
  completed: boolean
}

interface RoadmapSectionProps {
  roadmap: RoadmapItem[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  tests: FlaskConical,
  docs: FileText,
  ci: Cog,
  git: GitBranch,
  code: Code2,
}

export function RoadmapSection({ roadmap }: RoadmapSectionProps) {
  const [items, setItems] = useState(roadmap)

  const toggleItem = (index: number) => {
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, completed: !item.completed } : item)))
  }

  return (
    <Card className="p-6 sm:p-8 bg-gradient-to-br from-card via-card to-card/80 border border-border/50 rounded-2xl shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 bg-gradient-to-r from-foreground to-accent/80 bg-clip-text text-transparent">
          Your Personalized Improvement Roadmap
        </h2>
        <p className="text-muted-foreground font-medium">Follow these steps to level up your repository</p>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon] || Code2

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.02, x: 4 }}
              className={`group relative flex items-start gap-4 p-5 sm:p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                item.completed
                  ? "bg-accent/10 border-accent/30 shadow-md shadow-accent/10"
                  : "bg-secondary/30 border-border/50 hover:border-accent/40 hover:bg-secondary/50 hover:shadow-lg hover:shadow-accent/5"
              }`}
              onClick={() => toggleItem(index)}
            >
              {/* Vertical line connector */}
              {index < items.length - 1 && (
                <div className="absolute left-[2.1rem] sm:left-[2.35rem] top-[3.8rem] bottom-[-0.75rem] w-0.5 bg-gradient-to-b from-border to-border/0" />
              )}

              {/* Checkbox */}
              <div className="relative z-10 mt-1">
                <Checkbox
                  checked={item.completed}
                  onChange={() => toggleItem(index)}
                  className="h-6 w-6 rounded-lg border-2 border-border hover:border-accent bg-card data-[state=checked]:bg-accent data-[state=checked]:border-accent shadow-sm transition-all duration-200"
                />
              </div>

              {/* Icon */}
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  item.completed
                    ? "bg-accent/20 text-accent shadow-md shadow-accent/20"
                    : "bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent group-hover:shadow-md group-hover:shadow-accent/10"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 py-0.5">
                <h4
                  className={`font-bold text-lg transition-colors duration-300 ${
                    item.completed ? "text-accent" : "text-foreground group-hover:text-accent"
                  }`}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
              </div>

              {/* Completion indicator */}
              {item.completed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>
    </Card>
  )
}
