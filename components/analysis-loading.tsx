"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Loader2, GitBranch, Code2, Brain, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"

interface AnalysisLoadingProps {
  repoUrl: string
}

const steps = [
  { id: 1, label: "Fetching repository data", icon: GitBranch },
  { id: 2, label: "Analyzing structure & commits", icon: Code2 },
  { id: 3, label: "Evaluating engineering quality", icon: Brain },
  { id: 4, label: "Generating mentor feedback", icon: MessageSquare },
]

export function AnalysisLoading({ repoUrl }: AnalysisLoadingProps) {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length) {
          return prev + 1
        }
        return prev
      })
    }, 900)

    return () => clearInterval(interval)
  }, [])

  const repoName = repoUrl.split("/").slice(-2).join("/")

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="p-8 sm:p-12 bg-card border-border rounded-2xl shadow-xl shadow-black/10">
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6"
            >
              <Brain className="h-8 w-8 text-accent" />
            </motion.div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Analyzing Repository</h2>
            <p className="text-muted-foreground font-mono text-sm">{repoName}</p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const isCompleted = currentStep > index
              const isActive = currentStep === index
              const Icon = step.icon

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    isCompleted ? "bg-accent/10" : isActive ? "bg-secondary" : "bg-transparent"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                      isCompleted
                        ? "bg-accent text-accent-foreground"
                        : isActive
                          ? "bg-secondary-foreground/10 text-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {isCompleted ? (
                        <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                          <Check className="h-5 w-5" />
                        </motion.div>
                      ) : isActive ? (
                        <motion.div
                          key="loader"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Loader2 className="h-5 w-5" />
                        </motion.div>
                      ) : (
                        <Icon className="h-5 w-5" />
                      )}
                    </AnimatePresence>
                  </div>
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      isCompleted ? "text-accent" : isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                </motion.div>
              )
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-8">
            <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
