"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail, Linkedin, FileDown, PauseCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  const YEAR = new Date().getFullYear();

  // --- PROJECTS --------------------------------------------------------------
  const projects = [
    {
      name: "Snowflake + Power BI Analytics",
      desc:
        "End-to-end sales analytics: Snowflake SQL data modeling + Power BI dashboard with KPI cards, trends, top products, and category breakdowns.",
      live: "https://app.snowflake.com/zmydbpf/fq34862/w3u0HWZNPryg/query",
      github: "https://github.com/willckim/snowflake-powerbi-sales-dashboard",
      proof:
        "Repo includes raw CSVs, SQL DDL/DML, and dashboard screenshots. Demonstrates data modeling, ETL steps, and BI storytelling.",
      tags: ["Snowflake", "SQL", "ETL", "Power BI", "KPIs", "Data Modeling"],
      status: "active",
    },
    {
      name: "KPIFlow AI",
      desc:
        "Self-serve KPI dashboards from CSV/SQL with automated insights. Streamlit front-end with Python (pandas), metric definitions, and exportable visuals.",
      live: "https://kpiflow-ai.streamlit.app/",
      github: "https://github.com/willckim/kpiflow-ai",
      proof:
        "Automated KPI cards, trend charts, CSV → insights; built for analyst-style storytelling and quick stakeholder share-outs.",
      tags: ["Python", "Pandas", "Streamlit", "Plotly", "CSV→Dashboard", "Insights"],
      status: "active",
    },
    {
      name: "SplitChamp AI",
      desc:
        "AI bill-splitting app with Azure Document Intelligence/Vision + GPT-4o/5 pipelines for receipt parsing and structured expense breakdowns.",
      live: "https://play.google.com/apps/testing/com.willckim.splitchamp", // Play Store testing link
      github: "https://github.com/willckim/splitchamp-ai",
      proof:
        "Play Store-ready: Expo EAS builds, Pro entitlements via Stripe/RevenueCat, feature flags, in-app legal.",
      tags: ["Expo/React Native", "Python", "FastAPI", "Azure OCR", "GPT-4o/5", "Stripe/RevenueCat"],
      status: "active",
    },
    {
      name: "GhostTab AI",
      desc:
        "Chrome extension with OCR-based page capture, Azure OpenAI summarization/rewriting, adaptive tab limits, Pomodoro timers, and contextual coaching. Includes PyTorch → ONNX classifier (onnxruntime-web).",
      live: "https://chromewebstore.google.com/detail/ghosttab-ai/hbjipanckkfgcooblddagommcmklnija",
      github: "https://github.com/willckim/Ghosttab-AI",
      proof: "Published on Chrome Web Store; summarizer/rewriter flows + ONNX classifier live.",
      tags: ["Chrome Extension", "Azure OpenAI", "OCR", "GPT-4/5", "Pomodoro", "PyTorch→ONNX"],
      status: "active",
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

  // --- SCHEMA.ORG ------------------------------------------------------------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "William Kim",
    url: "https://williamckim.com",
    sameAs: [
      "https://www.linkedin.com/in/william-c-kim/",
      "https://github.com/willckim",
      "https://chromewebstore.google.com/detail/ghosttab-ai/hbjipanckkfgcooblddagommcmklnija",
      "https://play.google.com/apps/testing/com.willckim.splitchamp",
      "https://kpiflow-ai.streamlit.app/",
      "https://github.com/willckim/snowflake-powerbi-sales-dashboard",
      "https://app.snowflake.com/zmydbpf/fq34862/w3u0HWZNPryg/query",
    ],
    jobTitle: "Data/Business Analyst",
    worksFor: { "@type": "Organization", name: "Independent" },
    knowsAbout: [
      "SQL",
      "Snowflake",
      "Power BI",
      "Python (pandas, numpy)",
      "Data Visualization",
      "KPI & Metrics Design",
      "A/B Testing & Experimentation",
      "Forecasting",
      "ETL & Data Modeling",
      "LLMs & OCR",
      "Azure AI",
      "FastAPI",
      "Next.js",
      "React Native",
      "Supabase",
      "Docker",
    ],
    hasPart: [
      {
        "@type": "SoftwareApplication",
        name: "Snowflake + Power BI Analytics",
        url: "https://github.com/willckim/snowflake-powerbi-sales-dashboard",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
      },
      {
        "@type": "SoftwareApplication",
        name: "KPIFlow AI",
        url: "https://kpiflow-ai.streamlit.app/",
        applicationCategory: "WebApplication",
        operatingSystem: "Any",
      },
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
        url: "https://chromewebstore.google.com/detail/ghosttab-ai/hbjipanckkfgcooblddagommcmklnija",
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
        <title>William Kim – Data/Business Analyst</title>
        <meta
          name="description"
          content="Data/Business Analyst who builds clear KPIs, SQL/Python pipelines, and Power BI dashboards that drive decisions. Case studies include Snowflake + Power BI sales analytics."
        />
        <meta property="og:title" content="William Kim – Data/Business Analyst" />
        <meta
          property="og:description"
          content="SQL • Snowflake • Python (pandas) • KPI design • Power BI dashboards • experimentation • forecasting • practical AI add-ons."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://williamckim.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="William Kim – Data/Business Analyst" />
        <meta
          name="twitter:description"
          content="SQL • Power BI • KPIs • Python • Snowflake • dashboards • A/B testing • forecasting."
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">Data/Business Analyst</h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            I turn messy data into <strong>clear KPIs, dashboards, and decisions</strong>. SQL + Snowflake/Python for prep, Power BI/Streamlit for delivery, and pragmatic AI when it accelerates time-to-insight.
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
            <Button asChild variant="secondary" aria-label="Email William">
              <a href="mailto:williamcjk11@gmail.com" rel="noopener noreferrer">
                <Mail className="w-4 h-4 mr-1" /> Email
              </a>
            </Button>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            SQL • Snowflake • Power BI • Python (pandas) • KPI Design • Visualization • A/B Testing • Forecasting • ETL • LLM/OCR (practical)
          </p>
        </section>

        {/* About */}
        <section id="about" className="max-w-3xl mx-auto space-y-4 px-4 py-6">
          <h2 className="text-xl sm:text-2xl font-semibold">About Me</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            I’m William Kim — a data-driven builder who delivers <strong>analyst outcomes</strong>: trustworthy KPIs, clear dashboards, and crisp narratives tied to business goals. I work across the stack when needed (SQL/Python → BI), and I’m comfortable adding <strong>AI/LLM</strong> pieces where they reduce time-to-insight. Recent work includes a <strong>Snowflake + Power BI sales dashboard</strong> and <strong>KPIFlow AI</strong> for one-click KPI views from CSV/SQL.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-5xl mx-auto space-y-6 px-4 py-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Projects & Case Studies</h2>
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
          {/* Analyst Wins */}
          <div className="space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Analyst Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 list-disc list-inside text-sm leading-6">
              <li>Designed <b>decision-ready KPIs</b> (Total Sales, Orders, AOV) and surfaced <b>top customers/products</b> to guide prioritization.</li>
              <li>Built <b>reusable SQL models</b> and <b>clean BI layers</b> for transparent, auditable metrics.</li>
              <li>Cut analysis time by <b>automating CSV→dashboard</b> flows (KPIFlow AI; Streamlit + pandas).</li>
              <li>Applied <b>Python (pandas)</b> for cleanup/joins and <b>Power BI</b> for executive-ready visuals.</li>
            </ul>
          </div>

          {/* Key Skills */}
          <div className="space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Core Skills</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 list-disc list-inside text-sm">
              <li><b>Data:</b> SQL, Snowflake, Python (pandas)</li>
              <li><b>BI:</b> Power BI, Streamlit/Plotly</li>
              <li><b>KPIs:</b> Metric design & governance</li>
              <li><b>Analysis:</b> A/B testing, forecasting</li>
              <li><b>Ops:</b> ETL basics, data modeling</li>
              <li><b>AI add-ons:</b> LLMs/OCR (practical)</li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Certifications</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Databricks Generative AI Fundamentals</li>
              <li>Databricks AWS Platform Architect</li>
              <li>Azure AI Engineer Associate <i>(in progress)</i></li>
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
