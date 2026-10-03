"use client";

import { useMemo } from "react";
import SectionHeading from "./SectionHeading";
import DriftWall, { DriftWallItem } from "./DriftWall";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const SKILLS: Skill[] = [
  // Programming
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    category: "Programming",
  },
  {
    name: "C",
    icon: "https://cdn.simpleicons.org/c/555555",
    category: "Programming",
  },

  // Web Development
  {
    name: "HTML",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    category: "Web",
  },
  {
    name: "CSS",
    icon: "https://cdn.simpleicons.org/css/1572B6",
    category: "Web",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    category: "Web",
  },

  // Tools
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
    category: "Tools",
  },
  {
    name: "MS Office",
    icon: "https://cdn.simpleicons.org/microsoftoffice/D83B01",
    category: "Tools",
  },

  // Creative
  {
    name: "Graphic Design",
    icon: "https://cdn.simpleicons.org/adobephotoshop/31A8FF",
    category: "Creative",
  },
];

export default function Skills() {
  const driftWallItems: DriftWallItem[] = useMemo(() => {
    return SKILLS.map((skill) => ({
      image: "/images/skill-tile-bg.png",
      title: skill.name,
      icon: skill.icon,
    }));
  }, []);

  return (
    <section id="skills" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"
        aria-hidden="true"
      />

      <div className="section-container">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="My Arsenal"
          subtitle="Technologies I use to bring ideas to life. Interactive 3D drift wall showcasing frontend, backend, design, and AI capabilities."
          align="center"
        />

        {/* DriftWall 3D animated skills container - full screen full bleed */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-screen overflow-hidden -translate-x-12 sm:-translate-x-16">
          <DriftWall
            items={driftWallItems}
            columns={6}
            tileWidth={210}
            tileHeight={138}
            gap={20}
            tilt={14}
            turn={-16}
            perspective={1000}
            depth={100}
            speed={40}
            direction="up"
            variance={0.4}
            parallax={0.6}
            lift={65}
            fade={0.4}
            dim={0.6}
            overlayColor="#050505"
          />
        </div>
      </div>
    </section>
  );
}
