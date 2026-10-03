"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EXPERIENCES = [
  {
    company: "SR University",
    role: "BTech CSE Student",
    duration: "2026 — Present",
    color: "var(--ember)",
    glowColor: "rgba(160, 42, 34, 0.25)",
    description:
      "Currently pursuing BTech in Computer Science and Engineering at SR University, Warangal.",
    highlights: [
      "Building foundations in programming and computer science",
      "Learning Python, web development, and modern technologies",
      "Working on academic and personal projects",
    ],
  },
  {
    company: "Personal Projects",
    role: "Student Developer",
    duration: "2026 — Present",
    color: "var(--ember)",
    glowColor: "rgba(160, 42, 34, 0.25)",
    description:
      "Learning through hands-on projects and experimenting with different development technologies.",
    highlights: [
      "Building and improving personal web projects",
      "Exploring frontend development and UI design",
      "Practicing programming through real projects",
    ],
  },
  {
    company: "Continuous Learning",
    role: "Technology Explorer",
    duration: "2026 — Present",
    color: "var(--ember)",
    glowColor: "rgba(160, 42, 34, 0.25)",
    description:
      "Exploring different areas of technology while developing practical skills alongside my studies.",
    highlights: [
      "Exploring new programming technologies",
      "Developing practical technical skills",
      "Continuously improving through experimentation",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".exp-grid-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      {/* Divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"
        aria-hidden="true"
      />

      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15 pointer-events-none blur-[150px]"
        style={{ backgroundColor: "var(--ember)" }}
      />

      <div className="section-container relative z-10">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-ember inline-block rounded-full" />
            <span className="text-ember text-xs font-bold tracking-[0.25em] uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Where I&apos;ve Been
          </h2>
          <p className="mt-4 text-base md:text-lg text-ash max-w-xl leading-relaxed font-normal">
            My professional journey through different roles and environments.
          </p>
        </div>

        {/* Clean Boxless Editorial Experience List */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="exp-item group pb-12 border-b border-white/10 last:border-b-0 flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 transition-colors duration-300"
            >
              {/* Left Column: Duration & Company */}
              <div className="md:w-1/3 flex-shrink-0">
                <span className="text-xs font-mono font-medium text-ash tracking-wider block mb-1">
                  {exp.duration}
                </span>
                <span
                  className="text-sm font-semibold tracking-wider uppercase block font-mono text-ember"
                >
                  {exp.company}
                </span>
              </div>

              {/* Right Column: Role Title, Description & Highlights */}
              <div className="md:w-2/3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-cloud transition-colors">
                  {exp.role}
                </h3>
                <p className="text-base text-ash leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-silver font-normal">
                      <span className="text-ember font-bold mt-0.5 text-xs">▸</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
