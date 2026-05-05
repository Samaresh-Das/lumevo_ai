"use client";
import { type HTMLAttributes, useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

function Banner({
  id,
  xColor = "#999",
  variant = "normal",
  changeLayout = true,
  height = "2.75rem",
  rainbowColors = [
    "rgba(123,97,255,0.56)",
    "rgba(0,212,170,0.77)",
    "rgba(123,97,255,0.73)",
    "rgba(0,212,170,0.66)",
  ],
  className,
  children,
  ...props
}) {
  const [open, setOpen] = useState(true);
  const globalKey = id ? `nd-banner-${id}` : null;

  useEffect(() => {
    if (globalKey) setOpen(localStorage.getItem(globalKey) !== "true");
  }, [globalKey]);

  if (!open) return null;

  const maskImage =
    "linear-gradient(to bottom,white,transparent), radial-gradient(circle at top center, white, transparent)";

  return (
    <div
      id={id}
      {...props}
      className={cn(
        "relative z-50 flex flex-row items-center justify-center px-4 text-center text-sm font-medium",
        variant === "normal" && "bg-[var(--surface)]",
        variant === "rainbow" && "bg-[var(--background)]",
        !open && "hidden",
        className,
      )}
      style={{ height }}
    >
      {variant === "rainbow" && (
        <>
          <div
            className="absolute inset-0 z-[-1]"
            style={{
              maskImage,
              maskComposite: "intersect",
              animation: "fd-moving-banner 20s linear infinite",
              backgroundImage: `repeating-linear-gradient(70deg, ${[...rainbowColors, rainbowColors[0]]
                .map((color, i) => `${color} ${(i * 50) / rainbowColors.length}%`)
                .join(", ")})`,
              backgroundSize: "200% 100%",
              filter: "saturate(2)",
            }}
          />
        </>
      )}
      {children}
      {id && (
        <button
          type="button"
          aria-label="Close Banner"
          onClick={() => {
            setOpen(false);
            if (globalKey) {
              localStorage.setItem(globalKey, "true");
            }
          }}
          className="absolute cursor-pointer end-2 md:end-6 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/10 transition-colors"
        >
          <X size={16} color={xColor} />
        </button>
      )}
    </div>
  );
}

export { Banner };
