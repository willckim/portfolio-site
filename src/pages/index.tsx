"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Linkedin, FileDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  const YEAR = new Date().getFullYear();

  // --- PROJECTS --------------------------------------------------------------
  const projects = [
    // 1) AI Research Copilot — FIRST
    {
      name: "AI Research Copilot (Enterprise-Ready Doc-Chat)",
      desc:
        "Provider-agnostic RAG system (FastAPI + pgvector) with OpenAI/Ollama backends. Semantic retrieval, LLM synthesis, and secure API proxying.",
      live: "https://www.ai-research-copilot.com/",
      github: "https://github.com/willckim/ai-research-copilot",
      proof:
        "Render backend + Vercel frontend; embeddings, scalable search, modular orchestration; recruiter-facing demo.",
      tags: ["FastAPI", "pgvector", "RAG", "OpenAI/Ollama", "Vercel", "Render"],
      status: "active",
      bullets: [
        "Provider-agnostic pipeline (OpenAI/Ollama) with semantic retrieval + synthesis.",
        "Deployed: Render (API) + Vercel (frontend) behind secure proxy.",
        "Embeddings + scalable search + modular orchestration for enterprise extensibility.",
      ],
    },
    // 2) SplitChamp — SECOND
    {
      name: "SplitChamp AI",
      desc:
        "AI bill-splitting app with Azure Document Intelligence/Vision + GPT-4o/5 for receipt parsing and structured expense breakdowns.",
      live: "https://play.google.com/apps/testing/com.willckim.splitchamp",
      github: "https://github.com/willckim/splitchamp-ai",
      proof:
        "95%+ OCR accuracy target with post-processing (dedupe, heuristics, tax/tip reconciliation); Expo EAS CI/CD.",
      tags: ["Expo/React Native", "FastAPI", "Azure OCR", "GPT-4o/5", "Stripe/RevenueCat"],
      status: "active",
      bullets: [
        "Azure Document Intelligence + GPT-4/5 → 95%+ parsing accuracy.",
        "Post-processing (dedupe, heuristics, tax/tip) → F1 +20%.",
        "Expo EAS CI/CD → release time 2 days → 2 hours.",
      ],
    },
    // 3) GhostTab — THIRD
    {
      name: "GhostTab AI",
      desc:
        "Chrome extension with OCR-based page capture, Azure OpenAI summarization/rewriting, adaptive tab limits, Pomodoro timers, and contextual coaching.",
      live: "https://chromewebstore.google.com/detail/ghosttab-ai/hbjipanckkfgcooblddagommcmklnija",
      github: "https://github.com/willckim/Ghosttab-AI",
      proof: "Published on Chrome Web Store; summarizer/rewriter flows + ONNX classifier live.",
      tags: ["Chrome Extension", "Azure OpenAI", "OCR", "GPT-4/5", "ONNX"],
      status: "active",
      bullets: [
        "OCR capture + Azure OpenAI summarization/rewriting flows.",
        "Adaptive tab limits + Pomodoro timers + coaching UX.",
        "On-device ONNX classifier (onnxruntime-web).",
      ],
    },
    // Remaining projects (order preserved but after the top three)
    {
      name: "FP&A AI Dashboard",
      desc:
        "AI-assisted FP&A workflows: variance analysis, department forecasts, and automated executive summaries with exportable CSVs/PPTX.",
      live: null,
      github: "https://github.com/willckim/fpna-ai-dashboard",
      proof:
        "Pandas/SQL variance pipeline, statsmodels forecasts (3–6 mo), rule-based + OpenAI/Azure summaries, Power BI-ready outputs.",
      tags: ["Python", "Pandas", "Statsmodels", "OpenAI/Azure", "Power BI", "Forecasting"],
      status: "active",
      bullets: [
        "Variance pipeline (pandas/SQL) + 3–6 mo forecasts (statsmodels).",
        "Rule-based + LLM summaries for exec-ready briefs.",
        "Exports: CSVs/PPTX for finance workflows.",
      ],
    },
    {
      name: "KPIFlow AI",
      desc:
        "Self-serve KPI dashboards from CSV/SQL with automated insights. Streamlit front-end with pandas and exportable visuals.",
      live: "https://kpiflow-ai.streamlit.app/",
      github: "https://github.com/willckim/kpiflow-ai",
      proof:
        "Automated KPI cards, trend charts, CSV → insights; built for analyst-style storytelling and share-outs.",
      tags: ["Python", "Pandas", "Streamlit", "Plotly", "CSV→Dashboard", "Insights"],
      status: "active",
      bullets: [
        "CSV/SQL ingestion → KPI cards + trends automatically.",
        "Analyst-style insights generation for faster narratives.",
        "Exportable visuals for quick stakeholder share-outs.",
      ],
    },
    {
      name: "Snowflake + Power BI Analytics",
      desc:
        "End-to-end sales analytics: Snowflake SQL data modeling + Power BI dashboard with KPI cards, trends, top products, and category breakdowns.",
      live: "https://app.snowflake.com/zmydbpf/fq34862/w3u0HWZNPryg/query",
      github: "https://github.com/willckim/snowflake-powerbi-sales-dashboard",
      proof:
        "Repo includes raw CSVs, SQL DDL/DML, and dashboard screenshots showing modeling, ETL, and BI storytelling.",
      tags: ["Snowflake", "SQL", "ETL", "Power BI", "KPIs", "Data Modeling"],
      status: "active",
      bullets: [
        "Modeled sales data in Snowflake with reusable SQL layers.",
        "Power BI KPIs: Total Sales, Orders, AOV; top customers/products.",
        "Transparent, auditable metric definitions for governance.",
      ],
    },
    {
      name: "ExplainAnything.ai",
      desc:
        "Web app that turns complex text into ELI5-style summaries with tone control and multilingual output.",
      live: "https://explain-anything.vercel.app",
      github: "https://github.com/willckim/explain-anything-ai",
      proof: "ELI5 summaries • tone switching • multilingual.",
      tags: ["Next.js", "Supabase", "Tailwind", "GPT-4"],
      status: "active",
      bullets: [
        "ELI5 simplification with controllable tone.",
        "Multilingual outputs for global audiences.",
        "Lightweight Next.js stack with Supabase.",
      ],
    },
    // Optional: keep this if you want it listed; otherwise remove it.
    {
      name: "Claude AI Financial Modeling Assistant",
      desc:
        "Scenario-based forecasts, valuations, and sensitivities with natural-language explanations that bridge technical and business teams.",
      live: null,
      github: null,
      proof:
        "Reduced model iteration cycles by ~40% via structured numeric reasoning + narrative outputs.",
      tags: ["Claude", "LLM Tooling", "Finance", "Python"],
      status: "active",
      bullets: [
        "Scenario forecasting + valuation + sensitivity workflows.",
        "Bridges stakeholders with numeric rigor + narrative clarity.",
        "Iteration cycle time ↓ ~40%.",
      ],
    },
  ] as const;

  // --- SCHEMA.ORG ------------------------------------------------------------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "William Kim",
    url: "https://williamckim.com",
    sameAs: [
      "https://www.linkedin.com/in/william-c-kim/",
      "https://github.com/willckim",
      "https://www.ai-research-copilot.com/",
      "https://github.com/willckim/ai-research-copilot",
      "https://chromewebstore.google.com/detail/ghosttab-ai/hbjipanckkfgcooblddagommcmklnija",
      "https://play.google.com/apps/testing/com.willckim.splitchamp",
      "https://kpiflow-ai.streamlit.app/",
      "https://github.com/willckim/snowflake-powerbi-sales-dashboard",
      "https://app.snowflake.com/zmydbpf/fq34862/w3u0HWZNPryg/query",
      "https://github.com/willckim/fpna-ai-dashboard"
    ],
    jobTitle: "Applied AI Engineer",
    worksFor: { "@type": "Organization", name: "Independent" },
    knowsAbout: [
      "RAG", "OCR", "LLM integration", "OpenAI", "Azure AI", "Claude", "Ollama",
      "Python", "SQL", "Cloud-native microservices", "FastAPI", "React Native",
      "Next.js", "Docker", "GCP", "AWS", "Render", "Vercel"
    ],
    hasPart: [
      { "@type": "SoftwareApplication", name: "AI Research Copilot", url: "https://www.ai-research-copilot.com/", applicationCategory: "WebApplication", operatingSystem: "Any" },
      { "@type": "SoftwareApplication", name: "SplitChamp AI", url: "https://play.google.com/apps/testing/com.willckim.splitchamp", applicationCategory: "MobileApplication", operatingSystem: "Android/iOS" },
      { "@type": "SoftwareApplication", name: "GhostTab AI", url: "https://chromewebstore.google.com/detail/ghosttab-ai/hbjipanckkfgcooblddagommcmklnija", applicationCategory: "BrowserExtension", operatingSystem: "Any" },
      { "@type": "SoftwareApplication", name: "FP&A AI Dashboard", url: "https://github.com/willckim/fpna-ai-dashboard", applicationCategory: "BusinessApplication", operatingSystem: "Any" },
      { "@type": "SoftwareApplication", name: "KPIFlow AI", url: "https://kpiflow-ai.streamlit.app/", applicationCategory: "WebApplication", operatingSystem: "Any" },
      { "@type": "SoftwareApplication", name: "Snowflake + Power BI Analytics", url: "https://github.com/willckim/snowflake-powerbi-sales-dashboard", applicationCategory: "BusinessApplication", operatingSystem: "Any" }
    ],
  } as const;

  return (
    <>
      <Head>
        <title>William Kim – Applied AI Engineer</title>
        <meta
          name="description"
          content="Applied AI Engineer with experience designing, deploying, and scaling AI/LLM systems across web, mobile, and cloud. Skilled in RAG, OCR, LLM integration, and multi-provider inference (OpenAI, Azure, Claude, Ollama)."
        />
        <meta property="og:title" content="William Kim – Applied AI Engineer" />
        <meta
          property="og:description"
          content="RAG • OCR • LLM integration • multi-provider inference • FastAPI • React Native • Next.js • cloud microservices."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://williamckim.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="William Kim – Applied AI Engineer" />
        <meta
          name="twitter:description"
          content="Python • SQL • RAG • OCR • FastAPI • React Native • Next.js • Docker • GCP/AWS • OpenAI/Azure/Claude/Ollama."
        />
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">Applied AI Engineer</h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            I design, deploy, and scale <strong>AI/LLM-powered systems</strong> across web, mobile, and cloud. Experienced in <strong>RAG</strong>, <strong>OCR</strong>, multi-provider inference (OpenAI/Azure/Claude/Ollama), and <strong>cloud-native microservices</strong>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Button asChild aria-label="Download resume PDF">
              <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                <FileDown className="w-4 h-4 mr-1" /> Download Resume (PDF)
              </a>
            </Button>
            <Button asChild variant="outline" aria-label="Open LinkedIn profile">
              <a href="https://www.linkedin.com/in/william-c-kim/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-1" /> Let’s Connect
              </a>
            </Button>
            <Button asChild variant="secondary" aria-label="Open GitHub profile">
              <a href="https://github.com/willckim" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" /> GitHub
              </a>
            </Button>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            Python • SQL • FastAPI • RAG • OCR • React Native • Next.js • Docker • GCP/AWS • OpenAI • Azure • Claude • Ollama
          </p>
        </section>

        {/* About */}
        <section id="about" className="max-w-3xl mx-auto space-y-4 px-4 py-6">
          <h2 className="text-xl sm:text-2xl font-semibold">About Me</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            I’m William Kim — an Applied AI Engineer with a track record of shipping <strong>production-grade ML systems</strong> that balance startup speed and enterprise reliability. I work end-to-end (Python/SQL → services → web/mobile) and add LLM/OCR components where they reduce time-to-value. Recent work includes an <strong>enterprise-ready RAG system</strong> (AI Research Copilot), a <strong>cross-platform OCR app</strong> (SplitChamp AI), and a <strong>Chrome extension</strong> for summarization and focus (GhostTab AI).
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-5xl mx-auto space-y-6 px-4 py-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Projects & Case Studies</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.name} className="hover:shadow-md transition-shadow">
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg sm:text-xl font-semibold">{project.name}</h3>

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

                  {/* Resume-style bullets */}
                  {project.bullets && project.bullets.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 pt-2 text-sm">
                      {project.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.live ? (
                      <Button asChild variant="outline" aria-label={`Open ${project.name} live link`}>
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
        <section id="highlights" className="max-w-5xl mx-auto space-y-6 px-4 py-6">
          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Professional Summary</h3>
            <p className="text-sm sm:text-base leading-6">
              Applied AI Engineer with experience designing, deploying, and scaling AI/LLM-powered systems across web, mobile, and cloud. Skilled in RAG, OCR, LLM integration, and multi-provider inference (OpenAI, Azure, Claude, Ollama). Strong foundation in Python, SQL, and cloud-native microservices with a record of delivering production-grade ML pipelines.
            </p>
          </div>

          {/* Key Skills */}
          <div className="space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Core Skills</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 list-disc list-inside text-sm">
              <li><b>Languages:</b> Python, SQL, C++, Java, TypeScript/JavaScript, HTML/CSS</li>
              <li><b>AI/ML:</b> PyTorch, Hugging Face, ONNX, GPT-4/5, Claude, Ollama, Azure AI, OCR (Tesseract/OpenCV), scikit-learn</li>
              <li><b>Cloud & MLOps:</b> AWS, GCP, Docker, Render, Vercel, Supabase, CI/CD, Git, Linux</li>
              <li><b>Frameworks:</b> FastAPI, React Native, Expo, Next.js, TailwindCSS</li>
              <li><b>Patterns:</b> RAG, vector search, observability, provider switching</li>
              <li><b>Analytics:</b> Power BI, pandas, experimentation, forecasting</li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Certifications</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Azure Fundamentals <i>(in progress)</i></li>
              <li>AWS Solutions Architect – Associate <i>(upcoming)</i></li>
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Education</h3>
            <p className="text-sm">
              <b>University of Pittsburgh</b> — B.S. in Computer Science (April 2024)
            </p>
          </div>

          {/* Recent Experience */}
          <div className="space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Recent Experience</h3>
            <ul className="list-disc list-inside text-sm leading-6">
              <li><b>Founder & Lead AI Engineer</b> — Self-Launched AI Applications (May 2023 – Present)</li>
              <li><b>Physical Therapy Aide</b> — Athletico Physical Therapy, Lake Zurich, IL (Oct 2024 – Present)</li>
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
