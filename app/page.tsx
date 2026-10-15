import Link from "next/link";
import Image from "next/image";
import { portfolioProjects, skillGroups, timeline, education } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Portfolio / Creative Developer</p>
          <h1>Aster Quinn</h1>
          <p className="subtitle">
            I design and build premium digital experiences for founders, teams, and ambitious brands.
          </p>
          <div className="cta-row">
            <Link href="#contact" className="primary-btn">Let&apos;s Talk</Link>
            <Link href="#projects" className="secondary-btn">View Work</Link>
          </div>
          <div className="social-row">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
          </div>
        </div>

        <div className="portrait-card">
          <div className="portrait-glow" />
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
            alt="Portrait of Aster Quinn"
            width={540}
            height={640}
            priority
            className="portrait"
          />
        </div>
      </section>

      <section className="section-block" id="about">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2>I blend strategy, design, and engineering to build elegant digital products.</h2>
        </div>
        <div className="about-grid">
          <p>
            I&apos;m a multidisciplinary designer and developer focused on crafting thoughtful user experiences with measurable business impact. From concept to launch, I turn ambitious ideas into clear, premium interfaces that feel effortless and memorable.
          </p>
          <p>
            My work sits at the intersection of product thinking, visual systems, and front-end craftsmanship. I value clarity, performance, and emotional resonance in everything I build.
          </p>
        </div>
      </section>

      <section className="section-block" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Technology and capabilities</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>Selected work</h2>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-link">See all projects</a>
        </div>

        <div className="projects-grid">
          {portfolioProjects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image-wrap">
                <Image src={project.image} alt={project.title} width={800} height={520} className="project-image" />
              </div>
              <div className="project-body">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.links.live} target="_blank" rel="noreferrer">Live Demo</a>
                  <a href={project.links.code} target="_blank" rel="noreferrer">Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block timeline-block" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Career highlights</h2>
        </div>
        <div className="timeline-list">
          {timeline.map((item) => (
            <div key={item.title} className="timeline-item">
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block education-block" id="education">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Academic background</h2>
        </div>
        <div className="timeline-list">
          {education.map((item) => (
            <div key={item.title} className="timeline-item">
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="timeline-company">{item.school}</p>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block resume-block">
        <div className="resume-card">
          <div>
            <p className="eyebrow">Résumé</p>
            <h2>Download my professional resume.</h2>
          </div>
          <a href="/resume.pdf" download className="primary-btn">Download PDF</a>
        </div>
      </section>

      <section className="section-block" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something exceptional.</h2>
        </div>
        <ContactForm />
      </section>

      <SiteFooter />
    </main>
  );
}
