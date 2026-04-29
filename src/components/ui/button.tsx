import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:font-bold disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive min-h-[44px] min-w-[44px] overflow-hidden isolate before:absolute before:inset-[-100%] before:animate-[spin_2s_linear_infinite] before:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,currentColor_50%,transparent_100%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-20 after:absolute after:inset-[1.5px] after:rounded-[calc(theme(borderRadius.md)-1.5px)] after:content-[''] after:-z-10 after:transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-primary-foreground after:bg-primary hover:after:bg-primary/90 shadow-sm",
        destructive:
          "bg-transparent text-white after:bg-destructive hover:after:bg-destructive/90 shadow-sm",
        outline:
          "bg-border text-foreground after:bg-background hover:bg-transparent hover:text-primary-foreground hover:after:bg-primary shadow-sm",
        secondary:
          "bg-transparent text-secondary-foreground after:bg-secondary hover:after:bg-secondary/80 shadow-sm",
        ghost:
          "bg-transparent text-foreground after:bg-transparent hover:after:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline !bg-transparent after:hidden before:hidden",
      },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3",
        sm: "h-10 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 after:rounded-[calc(theme(borderRadius.md)-1.5px)]",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-4 after:rounded-[calc(theme(borderRadius.md)-1.5px)]",
        icon: "size-11 rounded-md after:rounded-[calc(theme(borderRadius.md)-1.5px)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };