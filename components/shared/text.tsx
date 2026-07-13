import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Text({
  children,
  className,
  size = "md",
}: TextProps) {
  return (
    <p
      className={cn(
        "leading-relaxed text-muted-foreground",
        {
          "text-sm": size === "sm",

          "text-base md:text-lg":
            size === "md",

          "text-lg md:text-xl":
            size === "lg",
        },
        className
      )}
    >
      {children}
    </p>
  );
}
