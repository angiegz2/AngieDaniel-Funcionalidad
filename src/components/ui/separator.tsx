import React from "react";
import { cn } from "@/src/lib/utils";

type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  thickness?: number;
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      orientation = "horizontal",
      decorative = true,
      thickness = 2,
      color = "rgba(0, 0, 0, 0.2)",
      className,
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal";

    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={isHorizontal ? "horizontal" : "vertical"}
        className={cn(
          "separator",
          isHorizontal ? "w-full" : "h-full",
          className
        )}
        style={{
          backgroundColor: color,
          [isHorizontal ? "height" : "width"]: thickness,
          [isHorizontal ? "width" : "height"]: "100%",
        }}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";

export { Separator };
