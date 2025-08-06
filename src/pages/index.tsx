'use client'

import React from "react";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>William Kim – Full-Stack Developer & Future Physician</title>
        <meta
          name="description"
          content="Portfolio of William Kim – Gymnast, pre-med student, full-stack developer. Creator of GhostTab, ShadowTrack, and ExplainAnything.ai."
        />
        <meta property="og:title" content="William Kim – Full-Stack Developer, AI Builder, Gymnast" />
        <meta property="og:description" content="Check out projects by William Kim: Chrome extensions, AI tools, and apps for medical professionals." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://williamckim.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="William Kim – Full-Stack Developer, AI Builder, Gymnast" />
        <meta name="twitter:description" content="Projects, resume, and background of William Kim. Focus tools and med school apps." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <main className="min-h-screen bg-background text-foreground">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-background border-b border-border p-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          <h1 className="text-lg font-semibold">William Kim</h1>
          <nav className="space-x-4 md:space-x-6 text-sm md:text-base">
            <a href="#about" className="hover:underline">About</a>
            <a href="#resume" className="hover:underline">Resume</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <ThemeToggle />
        </header>

        <div className="p-4 md:p-8 space-y-12 md:space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">William Kim</h2>
            <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto">
              I build focus tools, medical AI apps, and hit muscle-ups at 4 AM.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              AI tools, developer precision, and gymnast-level discipline.
            </p>
          </section>

          {/* About Section */}
          <section id="about" className="max-w-3xl mx-auto space-y-4 px-4">
            <h2 className="text-xl sm:text-2xl font-semibold">About Me</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              I'm William Kim — a full-stack developer, AI engineer, and national-level gymnast. I build web and mobile tools that enhance focus, wellness, and intelligence. From Chrome extensions to GPT-4 powered apps, I engineer clean, scalable products with an eye for performance and user experience. My background spans pre-med studies, physical therapy, and self-taught software engineering, giving me a uniquely human-centered approach to tech.
            </p>
          </section>

          {/* Resume Section */}
          <section id="resume" className="max-w-3xl mx-auto space-y-4 px-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Resume</h2>
            <Button asChild variant="default">
              <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>

            <div className="space-y-2">
              <h3 className="font-semibold text-sm sm:text-base">Key Skills</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Languages: Python, JavaScript, TypeScript, SQL, Java, C++, HTML/CSS, Bash, R, MIPS</li>
                <li>Data Tools: Pandas, NumPy, Matplotlib, Seaborn, MySQL, Power BI, Tableau, Excel</li>
                <li>Frameworks: React, Next.js, Tailwind CSS, Tkinter, Flask, Chrome Extensions</li>
                <li>Platforms: GitHub, VSCode, APIs, Firebase, Supabase, WordPress, Vercel, ChatGPT</li>
                <li>Cloud/Enterprise: AWS, Azure, Google Cloud (GCP), Salesforce, SAP</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-sm sm:text-base">Certifications</h3>
              <ul className="list-disc list-inside text-sm">
                <li>AWS Databricks Platform Architect</li>
                <li>Generative AI Fundamentals</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-sm sm:text-base">Experience Highlights</h3>
              <ul className="list-disc list-inside text-sm">
                <li>👨‍⚕️ Physical Therapy Aide – patient care, clinical documentation, rehab support</li>
                <li>💻 Full-Stack Developer – creator of GhostTab, ShadowTrack, ExplainAnything.ai</li>
                <li>🤸‍♂️ National Gymnast – rings specialist and NAIGC competitor</li>
              </ul>
            </div>
          </section>

          {/* Projects Section */}
<section id="projects" className="max-w-5xl mx-auto space-y-8 px-4">
  <h2 className="text-xl sm:text-2xl font-semibold">Projects & Apps</h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        name: "GhostTab",
        desc: "A Chrome extension that enforces tab limits and Pomodoro focus modes.",
        live: "https://chromewebstore.google.com/detail/ghosttab/hbjipanckkfgcooblddagommcmklnija",
        github: "https://github.com/willckim/ghosttab"
      },
      {
        name: "ShadowTrack",
        desc: "A med school shadowing log with AI summaries and hour tracking.",
        live: "https://shadowtrack.vercel.app",
        github: "https://github.com/willckim/shadowtrack"
      },
      {
        name: "ExplainAnything.ai",
        desc: "An AI utility that simplifies documents and explains content in any tone or language.",
        live: "https://explain-anything.vercel.app",
        github: "https://github.com/willckim/explain-anything-ai"
      },
      {
        name: "CJ Reflecta",
        desc: "🚧 In Development – AI-powered journaling app for guided self-reflection and emotional growth.",
        live: null,
        github: null
      },
      {
        name: "Doyrix",
        desc: "🚧 In Development – GPT-powered investing assistant that breaks down earnings calls, 10-Ks, and portfolio insights.",
        live: null,
        github: null
      }
    ].map((project) => (
      <Card key={project.name}>
        <CardContent className="space-y-2 p-4">
          <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
            {project.name}
            {project.github === null && (
              <span className="text-xs bg-yellow-300 text-black px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            )}
          </h3>
          <p className="text-sm sm:text-base">{project.desc}</p>
          <div className="flex flex-wrap gap-4">
            {project.live && (
              <Button asChild variant="outline">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live
                </a>
              </Button>
            )}
            {project.github && (
              <Button asChild variant="outline">
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

          {/* Contact Section */}
          <section id="contact" className="max-w-3xl mx-auto space-y-4 px-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Contact</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                Email:{" "}
                <a href="mailto:williamcjk11@gmail.com" className="text-blue-500 hover:underline">
                  williamcjk11@gmail.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/william-c-kim/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  william-c-kim
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="https://github.com/willckim" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  @willckim
                </a>
              </li>
            </ul>
          </section>

          {/* Footer */}
          <footer className="py-8">
            <p className="text-xs text-muted-foreground text-center">
              Music: Lost Sky - Fearless pt.II (feat. Chris Linton) [NCS Release]
              <br />
              Provided by NoCopyrightSounds •{" "}
              <a href="http://ncs.io/Fearless2" target="_blank" rel="noopener noreferrer" className="underline">
                Free Download
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
