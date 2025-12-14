"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Scan } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface EngineeringSignalsProps {
  signals: string[]
}

export function EngineeringSignals({ signals }: EngineeringSignalsProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="p-6 sm:p-8 bg-gradient-to-br from-card via-card/80 to-primary/5 border border-border/50 rounded-2xl shadow-lg">
      <Button
        variant="ghost"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent hover:text-accent transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20">
            <Scan className="h-6 w-6 text-accent" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg text-foreground">What We Analyzed</h3>
            <p className="text-sm text-muted-foreground font-medium">{signals.length} engineering signals evaluated</p>
          </div>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-accent" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </motion.div>
      </Button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-border/50">
              <div className="flex flex-wrap gap-3 mb-4">
                {signals.map((signal, index) => (
                  <motion.div
                    key={signal}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.3 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-5 py-2.5 text-sm font-bold bg-gradient-to-r from-accent/20 to-accent/10 text-accent border border-accent/30 hover:bg-accent/20 hover:shadow-md hover:shadow-accent/20 transition-all duration-200 cursor-default"
                    >
                      ✓ {signal}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These signals help determine the overall quality and maturity of your repository based on industry best practices. They evaluate code structure, documentation, testing, CI/CD, and commit history.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
