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
    <Card className="p-6 sm:p-8 bg-card border-border rounded-2xl">
      <Button
        variant="ghost"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary">
            <Scan className="h-5 w-5 text-foreground" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-foreground">What we analyzed</h3>
            <p className="text-sm text-muted-foreground">{signals.length} engineering signals evaluated</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
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
            <div className="pt-6 mt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {signals.map((signal, index) => (
                  <motion.div
                    key={signal}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    >
                      {signal}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                These signals help determine the overall quality and maturity of your repository based on industry best
                practices.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
