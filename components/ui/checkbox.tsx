import React from "react"

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    type="checkbox"
    className={`h-4 w-4 rounded border border-border bg-background accent-primary ${className}`}
    {...props}
  />
))
Checkbox.displayName = "Checkbox"
