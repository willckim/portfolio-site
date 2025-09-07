'use client';

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Linkedin, FileDown, PauseCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  const YEAR = new Date().getFullYear();

  const projects = [
    {
      name: "SplitChamp AI",
      desc:
        "AI bill-splitting app with Azure Document Intelligence/Vision + GPT-4o/5 pipelines for receipt parsing and structured expense breakdowns.",
      live: "https://play.google.com/apps/testing/com.willckim.splitchamp", // Play Store testing link
      github: "https://github.com/willckim/splitchamp-ai",
      proof:
        "Play Store-ready: Expo EAS builds, Pro entitlements via Stripe/RevenueCat, feature flags, in-app legal",
      tags: ["Expo/React Native", "Python", "FastAPI", "Azure OCR", "GPT-4o/5", "Stripe/RevenueCat"],
      status: "active",
    },
    {
      name: "GhostTab AI",
      desc:
      "Chrome extension with OCR-based page capture, Azure OpenAI summarization/rewriting, adaptive tab limits, Pomodoro timers, and contextual coaching. Includes PyTorch → ONNX classifier (onnxruntime-web) for real-time page categorization.",
      live: "https://chromewebstore.google.com/detail/ghosttab/hbjipanckkfgcooblddagommcmklnija",
      github: "https://github.com/willckim/Ghosttab-AI",
      proof: "Published on Chrome Web Store; Summarizer/Rewriter flows + ONNX classifier live",
      tags: [
        "Chrome Extension",
        "Azure OpenAI",
        "OCR",
        "GPT-4/5",
        "Pomodoro",
        "PyTorch→ONNX",
      ],
      status: "active",
    },
    {
      name: "ExplainAnything.ai",
      desc:
        "Web app that turns complex text into ELI5-style summaries with tone control and multilingual output.",
      live: "https://explain-anything.vercel.app",
      github: "https://github.com/willckim/explain-anything-ai",
      proof: "ELI5 summaries • tone switching • multilingual",
      tags: ["Next.js", "Supabase", "Tailwind", "GPT-4"],
      status: "active",
    },
    {
      name: "CJ Reflecta",
      desc:
        "⏸ On hold — AI-powered journaling app for guided self-reflection and emotional growth.",
      live: null,
      github: "https://github.com/willckim/cj-reflecta",
      proof: "",
      tags: ["React Native", "Expo", "AsyncStorage", "GPT-5"],
      status: "hold",
    },
    {
      name: "Doyrix",
      desc:
        "⏸ On hold — GPT-assisted investing research tool for filings and earnings transcripts.",
      live: null,
      github: "https://github.com/willckim/doyrix",
      proof: "",
      tags: ["Next.js", "FastAPI", "Supabase", "Stripe", "GPT-5"],
      status: "hold",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "William Kim",
    url: "https://williamckim.com",
    sameAs: [
      "https://www.linkedin.com/in/william-c-kim/",
      "https://github.com/willckim",
    ],
    jobTitle: "AI Engineer",
    worksFor: { "@type": "Organization", name: "Independent" },
    knowsAbout: [
      "AI Engineering",
      "LLMs",
      "OCR",
      "Azure AI",
      "PyTorch",
      "ONNX",
      "FastAPI",
      "Next.js",
      "React Native",
      "AWS",
      "Supabase",
      "Docker"
    ],
    hasPart: [
      {
        "@type": "SoftwareApplication",
        name: "SplitChamp AI",
        url: "https://play.google.com/apps/testing/com.willckim.splitchamp",
        applicationCategory: "MobileApplication",
        operatingSystem: "Android/iOS",
      },
      {
        "@type": "SoftwareApplication",
        name: "GhostTab AI",
        url: "https://chromewebstore.google.com/detail/ghosttab/hbjipanckkfgcooblddagommcmklnija",
        applicationCategory: "BrowserExtension",
        operatingSystem: "Any",
      },
      {
        "@type": "SoftwareApplication",
        name: "ExplainAnything.ai",
        url: "https://explain-anything.vercel.app",
        applicationCategory: "WebApplication",
        operatingSystem: "Any",
      },
    ],
  } as const;

  return (
    <>
      <Head>
        <title>William Kim – AI Engineer & Full-Stack Developer</title>
        <meta
          name="description"
          content="AI Engineer shipping LLM + OCR products. GhostTab AI (Chrome), SplitChamp AI (mobile), ExplainAnything.ai (web). Python • PyTorch • GPT-4/5 • Azure AI • FastAPI • React/React Native • AWS/Supabase."
        />
        <meta property="og:title" content="William Kim – AI Engineer & Full-Stack Developer" />
        <meta
          property="og:description"
          content="Production AI apps with LLMs, OCR, and cloud — including PyTorch→ONNX roadmap for client-side ML."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://williamckim.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="William Kim – AI Engineer" />
        <meta name="twitter:description" content="LLMs • OCR • Cloud • PyTorch→ONNX roadmap." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://williamckim.com" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Skip link for keyboard users */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-2">
        Skip to content
      </a>

      <main id="main" className="min-h-screen bg-background text-foreground scroll-smooth">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border p-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          <h1 className="text-lg font-semibold">William Kim</h1>
          <nav className="space-x-4 md:space-x-6 text-sm md:text-base" aria-label="Primary">
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#projects" className="hover:underline">Projects</Link>
            <Link href="#highlights" className="hover:underline">Highlights</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
          </nav>
          <ThemeToggle />
        </header>

        {/* Hero */}
        <section className="text-center space-y-4 px-4 py-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">AI Engineer & Full-Stack Developer</h2>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            I build <strong>AI-powered applications</strong> with LLMs (GPT-4/5), OCR, and cloud — from mobile apps to Chrome extensions.
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
                href="mailto:williamcjk11@gmail.com"
                rel="noopener noreferrer"
              >
                <Mail className="w-4 h-4 mr-1" /> Email
              </a>
            </Button>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            Python • PyTorch • GPT-4/5 • OCR (OpenCV/Tesseract) • FastAPI • React/Next.js • React Native • Azure AI • AWS/Supabase • Docker
          </p>
        </section>

        {/* About */}
        <section id="about" className="max-w-3xl mx-auto space-y-4 px-4 py-6">
          <h2 className="text-xl sm:text-2xl font-semibold">About Me</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            I’m William Kim — an AI Engineer who ships production apps that blend <strong>LLMs</strong>, <strong>OCR</strong>, and
            <strong> cloud</strong>. I build end-to-end experiences across web and mobile, from UX to backend, with a focus on
            performance, reliability, and clean design. Current roadmap: <strong>PyTorch → ONNX</strong> for client-side ML in GhostTab AI.
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
                    {project.status === "hold" && (
                      <span className="inline-flex items-center gap-1 text-xs bg-yellow-200 text-black px-2 py-0.5 rounded-full">
                        <PauseCircle className="w-3 h-3" /> On hold
                      </span>
                    )}
                  </h3>

                  <p className="text-sm sm:text-base">{project.desc}</p>
                  {project.proof && (
                    <p className="text-xs text-muted-foreground">{project.proof}</p>
                  )}

                  {/* Tech chips */}
                  {project.tags && (
                    <ul className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((t) => (
                        <li key={t} className="text-xs px-2 py-0.5 rounded-full border">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-3 pt-1">
                    {project.live ? (
                      <Button asChild variant="outline" aria-label={`Open ${project.name} live site`}>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    ) : (
                      <Button disabled variant="outline" aria-disabled className="opacity-60 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live (coming soon)
                      </Button>
                    )}

                    {project.github ? (
                      <Button asChild variant="outline" aria-label={`Open ${project.name} GitHub repo`}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          GitHub
                        </a>
                      </Button>
                    ) : (
                      <Button disabled variant="outline" aria-disabled className="opacity-60 cursor-not-allowed">
                        <Github className="w-4 h-4 mr-1" />
                        GitHub (private)
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Highlights (skills / certs / experience summary) */}
        <section id="highlights" className="max-w-3xl mx-auto space-y-4 px-4 py-6">
          {/* Key Skills */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm sm:text-base">Key Skills</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 list-disc list-inside text-sm">
              <li><b>AI:</b> Python, PyTorch, GPT-4/5</li>
              <li><b>Vision/OCR:</b> Azure DI/Vision, OpenCV/Tesseract</li>
              <li><b>Backend:</b> FastAPI, Supabase, Docker</li>
              <li><b>Cloud:</b> Azure, AWS</li>
              <li><b>Frontend:</b> React, Next.js, React Native, Tailwind</li>
              <li><b>Roadmap:</b> ONNX + onnxruntime-web</li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm sm:text-base">Certifications</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Databricks Generative AI Fundamentals</li>
              <li>Databricks AWS Platform Architect</li>
              <li>Azure AI Engineer Associate <i>(in progress)</i></li>
            </ul>
          </div>

          {/* Experience Highlights */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm sm:text-base">Experience Highlights</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Python OCR + LLM integrations (GPT-4/5, Azure AI) in production apps.</li>
              <li>Full-stack delivery: Next.js/React Native + Supabase/AWS; auth, analytics, Stripe billing.</li>
              <li>Shipped Chrome extension (GhostTab AI); SplitChamp AI prepared for Play Store release.</li>
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
                href="mailto:williamcjk11@gmail.com"
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
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
            © {YEAR} William Kim • Music: Lost Sky - Fearless pt.II (feat. Chris Linton) [NCS Release] •{" "}
            <a href="http://ncs.io/Fearless2" target="_blank" rel="noopener noreferrer" className="underline">
              Free Download
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
