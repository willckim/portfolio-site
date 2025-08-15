'use client';

import React from "react";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Linkedin, FileDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  const projects = [
    {
      name: "CJ Reflecta",
      desc:
        "🚧 In Development – AI-powered journaling app for guided self-reflection and emotional growth.",
      live: null,
      github: null,
      proof: "Real-time GPT feedback, mood tracking; +75% daily engagement in tests",
    },
    {
      name: "Doyrix",
      desc:
        "🚧 In Development – GPT-powered investing assistant that breaks down earnings calls, 10-Ks, and portfolio insights.",
      live: null,
      github: null,
      proof: "<3 min client one-pagers with page-level citations",
    },
    {
      name: "ExplainAnything.ai",
      desc:
        "AI utility that simplifies documents and explains content in any tone or language.",
      live: "https://explain-anything.vercel.app",
      github: "https://github.com/willckim/explain-anything-ai",
      proof: "ELI5 summaries, multilingual output, voice-to-text",
    },
    {
      name: "GhostTab",
      desc:
        "Chrome extension that enforces tab limits and Pomodoro focus modes.",
      live:
        "https://chromewebstore.google.com/detail/ghosttab/hbjipanckkfgcooblddagommcmklnija",
      github: "https://github.com/willckim/ghosttab",
      proof: "Published on Chrome Web Store",
    },
    {
      name: "ShadowTrack",
      desc:
        "Med-school shadowing log with AI summaries and hour tracking.",
      live: "https://shadowtrack.vercel.app",
      github: "https://github.com/willckim/shadowtrack",
      proof: "AI note summaries; exportable logs",
    },
  ];

  return (
    <>
      <Head>
        <title>William Kim – Software Engineer & AI Developer</title>
        <meta
          name="description"
          content="William Kim – Software Engineer, AI developer, and national-level gymnast. Explore full-stack projects, GPT apps, and digital tools for focus and wellness."
        />
        <meta property="og:title" content="William Kim – Software Engineer, AI Developer, Gymnast" />
        <meta property="og:description" content="Check out projects by William Kim: Chrome extensions, AI tools, and apps for focus and wellness." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://williamckim.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="William Kim – Software Engineer, AI Developer, Gymnast" />
        <meta name="twitter:description" content="Projects, resume, and background of William Kim." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <main className="min-h-screen bg-background text-foreground scroll-smooth">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border p-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          <h1 className="text-lg font-semibold">William Kim</h1>
          <nav className="space-x-4 md:space-x-6 text-sm md:text-base" aria-label="Primary">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#resume" className="hover:underline">Resume</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <ThemeToggle />
        </header>

        {/* Hero */}
        <section className="text-center space-y-4 px-4 py-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">William Kim</h2>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            AI Engineer & Software Engineer — building GPT-powered tools that save hours and scale to thousands.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Button asChild aria-label="Download resume PDF">
              <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                <FileDown className="w-4 h-4 mr-1" /> View Resume
              </a>
            </Button>
            <Button asChild variant="outline" aria-label="Open LinkedIn profile">
              <a href="https://www.linkedin.com/in/william-c-kim/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-1" /> Let’s Connect
              </a>
            </Button>
            <Button asChild variant="secondary" aria-label="Email William">
  <a
    href={`mailto:williamcjk11@gmail.com?subject=${encodeURIComponent(
      "Recruiter Inquiry — William Kim"
    )}`}
  >
    <Mail className="w-4 h-4 mr-1" /> Email
  </a>
</Button>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            Developer precision, AI engineering, and gymnast-level discipline.
          </p>
        </section>

        {/* About */}
        <section id="about" className="max-w-3xl mx-auto space-y-4 px-4 py-6">
          <h2 className="text-xl sm:text-2xl font-semibold">About Me</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            I&apos;m William Kim — a software engineer, AI developer, and national-level gymnast. I build scalable AI-powered
            tools across web and mobile that enhance focus, wellness, and performance. My work blends technical precision with a
            human-centered mindset, shaped by my background in athletics and engineering.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-5xl mx-auto space-y-6 px-4 py-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Projects & Apps</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.name} className="hover:shadow-md transition-shadow">
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                    {project.name}
                    {!project.github && (
                      <span className="text-xs bg-yellow-300 text-black px-2 py-0.5 rounded-full">Coming Soon</span>
                    )}
                  </h3>
                  <p className="text-sm sm:text-base">{project.desc}</p>
                  {project.proof && (
                    <p className="text-xs text-muted-foreground">{project.proof}</p>
                  )}
                  <div className="flex flex-wrap gap-3 pt-1">
                    {project.live && (
                      <Button asChild variant="outline" aria-label={`Open ${project.name} live site`}>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button asChild variant="outline" aria-label={`Open ${project.name} GitHub repo`}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resume */}
<section id="resume" className="max-w-3xl mx-auto space-y-4 px-4 py-6">
  <div className="flex items-center justify-between gap-3">
    <h2 className="text-xl sm:text-2xl font-semibold">Resume</h2>
    <span className="text-xs sm:text-sm text-muted-foreground">Open to Software / AI / Data roles</span>
  </div>

          {/* Compact, scannable skills */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm sm:text-base">Key Skills</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 list-disc list-inside text-sm">
              <li><b>Languages/Frameworks:</b> Python, JS/TS, SQL, React, Next.js, FastAPI, Tailwind</li>
              <li><b>Data:</b> Pandas, NumPy, Matplotlib, Seaborn, Power BI, Tableau, MySQL</li>
              <li><b>Cloud:</b> AWS, Supabase, Firebase, Vercel</li>
            </ul>
          </div>

          <div className="space-y-2">
  <h3 className="font-semibold text-sm sm:text-base">Certifications</h3>
  <ul className="list-disc list-inside text-sm">
    <li>Data Landscape of GenAI for Project Managers (PMI)</li>
    <li>Generative AI Overview for Project Managers (PMI)</li>
    <li>AWS Databricks Platform Architect</li>
    <li>Generative AI Fundamentals (Databricks)</li>
    <li>Azure AI (In Progress)</li>
  </ul>
</div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm sm:text-base">Experience Highlights</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Built GPT-powered tools (ExplainAnything.ai, Doyrix) and shipped Chrome extension (GhostTab).</li>
              <li>Full-stack delivery across Next.js/React Native + Supabase/AWS; real-time auth & analytics.</li>
              <li>National-level gymnast; 4 AM training discipline applied to engineering execution.</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-3xl mx-auto space-y-4 px-4 py-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Contact</h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              Email:{" "}
              <a
  href={`mailto:williamcjk11@gmail.com?subject=${encodeURIComponent(
    "Recruiter Inquiry — William Kim"
  )}`}
  className="text-blue-500 hover:underline"
>
  williamcjk11@gmail.com
</a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/william-c-kim/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                william-c-kim
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/willckim"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @willckim
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="py-8">
          <p className="text-xs text-muted-foreground text-center">
            Music: Lost Sky - Fearless pt.II (feat. Chris Linton) [NCS Release] •{" "}
            <a href="http://ncs.io/Fearless2" target="_blank" rel="noopener noreferrer" className="underline">
              Free Download
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}