import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner@2.0.3"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border-border group-[.toaster]:shadow-[var(--elevation-sm)] group-[.toaster]:rounded-[var(--radius-lg)]",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:hover:bg-primary/90 group-[.toast]:min-h-[44px] group-[.toast]:min-w-[44px]",
          cancelButton:
            "group-[.toast]:bg-secondary group-[.toast]:text-secondary-foreground group-[.toast]:hover:bg-secondary/80 group-[.toast]:min-h-[44px] group-[.toast]:min-w-[44px]",
          closeButton:
            "group-[.toast]:bg-card group-[.toast]:border-border group-[.toast]:hover:bg-secondary/50 group-[.toast]:min-h-[44px] group-[.toast]:min-w-[44px]",
          error:
            "group-[.toaster]:bg-destructive group-[.toaster]:text-destructive-foreground group-[.toaster]:border-destructive/50",
          success:
            "group-[.toaster]:bg-primary group-[.toaster]:text-primary-foreground",
          warning:
            "group-[.toaster]:bg-accent group-[.toaster]:text-accent-foreground",
          info:
            "group-[.toaster]:bg-card group-[.toaster]:text-card-foreground",
        },
        style: {
          fontFamily: 'var(--font-outfit)',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
