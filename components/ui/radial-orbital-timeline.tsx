"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.2) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 160; // Adjusted for smaller screens, use responsive logic if needed
    const radian = (angle * Math.PI) / 180;

    const x = Number((radius * Math.cos(radian) + centerOffset.x).toFixed(3));
    const y = Number((radius * Math.sin(radian) + centerOffset.y).toFixed(3));

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Number(
      Math.max(
        0.4,
        Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
      ).toFixed(3)
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-green-400 border-green-400/30 bg-green-400/10";
      case "in-progress":
        return "text-[var(--accent-teal)] border-[var(--accent-teal)]/30 bg-[var(--accent-teal)]/10";
      case "pending":
        return "text-white/60 bg-black/40 border-white/20";
      default:
        return "text-white/60 bg-black/40 border-white/20";
    }
  };

  return (
    <div
      className="w-full h-[600px] flex flex-col items-center justify-center overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center transition-transform duration-1000 ease-out"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Central Core */}
          <div className="absolute w-24 h-24 flex items-center justify-center z-10">
            <div className="absolute w-28 h-28 rounded-full border border-[var(--accent-violet)]/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-36 h-36 rounded-full border border-[var(--accent-teal)]/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <img src="/lemuvoai.png" alt="Logo" className="w-20 h-20 object-contain rounded-full shadow-[0_0_40px_rgba(123,97,255,0.6)]" />
          </div>

          {/* Orbit Ring */}
          <div className="absolute w-[320px] h-[320px] rounded-full border border-white/10 border-dashed"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(123,97,255,0.3) 0%, rgba(123,97,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-[var(--accent-violet)] text-white"
                      : isRelated
                      ? "bg-[var(--accent-violet-dim)] text-[var(--accent-violet)]"
                      : "bg-[var(--surface)] text-[var(--text-secondary)]"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-[var(--accent-violet)] shadow-lg shadow-[var(--accent-violet-glow)]"
                      : isRelated
                      ? "border-[var(--accent-violet)]/50 animate-pulse"
                      : "border-[var(--border-default)]"
                  }
                  transition-all duration-300 transform hover:scale-110 hover:border-[var(--accent-violet)] hover:text-white
                  ${isExpanded ? "scale-125" : ""}
                `}
                >
                  <Icon size={18} />
                </div>

                <div
                  className={`
                  absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-sm font-semibold tracking-wide
                  transition-all duration-300
                  ${isExpanded ? "text-white opacity-0" : "text-white/80 opacity-100"}
                `}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-72 bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border-[var(--border-subtle)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-visible">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-[var(--accent-violet)] to-transparent"></div>
                    <CardHeader className="pb-3 pt-5">
                      <div className="flex justify-between items-center mb-2">
                        <Badge
                          variant="outline"
                          className={`px-2 py-0.5 text-[10px] font-bold ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "LIVE"
                            : item.status === "in-progress"
                            ? "BUILDING NOW"
                            : "PLANNED"}
                        </Badge>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-white" style={{ fontFamily: 'var(--font-display)' }}>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-[var(--text-secondary)]">
                      <p className="leading-relaxed">{item.content}</p>

                      <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="flex items-center text-white/70">
                            <Zap size={12} className="mr-1.5 text-yellow-400" />
                            Priority Level
                          </span>
                          <span className="font-mono text-white/90">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[var(--surface-elevated)] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-teal)] relative"
                            style={{ width: `${item.energy}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
                          <div className="flex items-center mb-3">
                            <LinkIcon size={12} className="text-[var(--text-muted)] mr-1.5" />
                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)]">
                              Connected Features
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <button
                                  key={relatedId}
                                  className="flex items-center h-7 px-3 text-xs rounded-full border border-[var(--border-default)] bg-[var(--surface)] hover:bg-[var(--accent-violet-dim)] hover:border-[var(--accent-violet)]/50 text-[var(--text-primary)] hover:text-white transition-all group"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={10}
                                    className="ml-1.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                                  />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
