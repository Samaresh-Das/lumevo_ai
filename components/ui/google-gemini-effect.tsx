"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear" as const,
};

type EngineStep = {
  threshold: [number, number];
  text: string;
  desc: string;
};

const steps: EngineStep[] = [
  {
    threshold: [0.1, 0.25],
    text: "Job-to-letter agents",
    desc: "CovGen reads the role, extracts ATS signals, and turns your experience into a tailored letter.",
  },
  {
    threshold: [0.35, 0.5],
    text: "Autonomous content ops",
    desc: "DailyContent plans, writes, schedules, and publishes posts in your voice without daily manual work.",
  },
  {
    threshold: [0.6, 0.75],
    text: "Learning feedback loop",
    desc: "Performance signals refine future cover letters, captions, hooks, timing, and content angles.",
  },
];

const nodeLabels = [
  { text: "Job description", className: "left-[8%] top-[37%]" },
  { text: "ATS keywords", className: "left-[19%] top-[49%]" },
  { text: "Brand voice", className: "left-[10%] top-[62%]" },
  { text: "Tone engine", className: "left-[43%] top-[51%]" },
  { text: "Cover letters", className: "right-[12%] top-[37%]" },
  { text: "Auto posts", className: "right-[20%] top-[49%]" },
  { text: "Growth signals", className: "right-[9%] top-[62%]" },
];

function FloatingStepCard({
  step,
  scrollYProgress,
}: {
  step: EngineStep;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [step.threshold[0] - 0.05, step.threshold[0], step.threshold[1], step.threshold[1] + 0.05],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [step.threshold[0] - 0.05, step.threshold[1] + 0.05],
    [14, -10],
  );

  return (
    <motion.div
      className="absolute bottom-0 left-1/2 w-[min(92vw,660px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/15 bg-[rgba(18,18,26,0.52)] px-6 py-5 text-center shadow-[0_28px_90px_rgba(0,0,0,0.36)] backdrop-blur-2xl"
      style={{ opacity, y }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.13),transparent_34%),radial-gradient(circle_at_50%_0%,rgba(123,97,255,0.18),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <h3
        className="relative text-[var(--accent-teal)] font-bold text-lg md:text-xl tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {step.text}
      </h3>
      <p className="relative text-white/72 text-sm md:text-base leading-relaxed mt-2 max-w-xl mx-auto">
        {step.desc}
      </p>
    </motion.div>
  );
}

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
  scrollYProgress,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
  scrollYProgress: MotionValue<number>;
}) => {
  return (
    <div className={cn("sticky top-20 min-h-[780px] px-4", className)}>
      <div className="pointer-events-none absolute left-1/2 top-[260px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(123,97,255,0.22),rgba(0,212,170,0.10)_42%,transparent_68%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[18%] top-[360px] h-56 w-56 rounded-full bg-[rgba(0,212,170,0.16)] blur-[90px]" />
      <div className="pointer-events-none absolute right-[16%] top-[330px] h-64 w-64 rounded-full bg-[rgba(123,97,255,0.18)] blur-[100px]" />

      <p className="text-4xl md:text-7xl font-bold pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400" style={{ fontFamily: 'var(--font-display)' }}>
        {title || `Engineered for Intelligence.`}
      </p>
      <p className="text-sm md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-xl mx-auto">
        {description ||
          `Lumevo's agentic core is the nervous system of your digital presence. Scroll to explore the architecture.`}
      </p>

      {/* Floating Info Labels */}
      <div className="pointer-events-none absolute inset-x-0 top-[540px] z-30 h-40">
        {steps.map((step, i) => (
          <FloatingStepCard key={i} step={step} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[170px] z-20 h-[480px]">
        {nodeLabels.map((node) => (
          <span
            key={node.text}
            className={cn(
              "absolute hidden rounded-full border border-white/10 bg-[rgba(10,10,15,0.58)] px-3 py-1 text-[11px] font-semibold text-white/72 shadow-[0_8px_30px_rgba(0,0,0,0.28)] backdrop-blur-md md:inline-flex",
              node.className,
            )}
          >
            {node.text}
          </span>
        ))}
      </div>

      <div className="w-full h-[560px] top-[170px] flex items-center justify-center bg-transparent absolute pointer-events-none">
        <button className="font-bold bg-[var(--accent-violet)] text-white rounded-full md:px-6 md:py-3 px-4 py-2 z-30 md:text-base text-xs w-fit mx-auto shadow-[0_0_20px_rgba(123,97,255,0.4)]">
          lumevo.ai
        </button>
      </div>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[105px] left-1/2 h-[560px] w-[min(1500px,118vw)] -translate-x-1/2"
      >
        <motion.path
          d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
          stroke="#7B61FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[0],
          }}
          transition={transition}
        />
        <motion.path
          d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"
          stroke="#00D4AA"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[1],
          }}
          transition={transition}
        />
        <motion.path
          d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
          stroke="#A78BFA"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[2],
          }}
          transition={transition}
        />
        <motion.path
          d="M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439"
          stroke="#34D399"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[3],
          }}
          transition={transition}
        />
        <motion.path
          d="M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1439 364"
          stroke="#7B61FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />

        {/* Gaussian blur for the background paths */}

        <path
          d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
          stroke="#7B61FF"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"
          stroke="#00D4AA"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
          stroke="#A78BFA"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439"
          stroke="#34D399"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1439 364"
          stroke="#7B61FF"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
