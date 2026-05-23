import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  GraduationCap,
  Github,
  Mail,
  MapPin,
  MessageSquareQuote,
  Newspaper,
  ShieldCheck,
  Star,
  Wrench,
} from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { articles, certifications, education, experience, interviews, profile, projects, recommendations, skillGroups } from './data/portfolio';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section
          id="skills"
          eyebrow="Technical Skills"
          title="Tools & Skills"
          titleIcon={<Wrench size={32} aria-hidden="true" />}
        >
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="surface skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tag-list" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Featured Projects"
          title="My Latest GitHub Work"
          titleIcon={<Github size={32} aria-hidden="true" />}
        >
          <div className="project-showcase">
            {projects.map((project) => (
              <article className="surface project-card" key={project.title}>
                <div className="project-card-main">
                  <div className="project-card-heading">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-value">
                    <strong>{project.focus}</strong>
                    <p>{project.keyValue}</p>
                  </div>
                </div>
                <div className="project-card-side">
                  <ul className="project-tech-list" aria-label={`${project.title} tech stack`}>
                    {project.techStack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                    View repository <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Recent roles"
          titleIcon={<BriefcaseBusiness size={32} aria-hidden="true" />}
        >
          <div className="timeline" aria-label="Professional experience">
            {experience.map((job) => (
              <article className="surface experience-card" key={`${job.company}-${job.period}`}>
                <div className="experience-heading">
                  {job.companyUrl ? (
                    <a className="company-logo" href={job.companyUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${job.company}`}>
                      <img src={job.logo} alt={job.logoAlt} loading="lazy" />
                    </a>
                  ) : (
                    <div className="company-logo" aria-label={job.company}>
                    <img src={job.logo} alt={job.logoAlt} loading="lazy" />
                    </div>
                  )}
                  <div className="experience-title">
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                    <span>{job.period}</span>
                  </div>
                </div>
                <ul>
                  {job.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="recommendations"
          eyebrow="Recommendations"
          title="Team Testimonials"
          titleIcon={<MessageSquareQuote size={32} aria-hidden="true" />}
        >
          <div className="recommendations-grid">
            {recommendations.map((recommendation) => (
              <article className="surface recommendation-card placeholder-card" key={`${recommendation.author}-${recommendation.role}`}>
                <div className="recommendation-meta">
                  <div className="avatar">
                    <img src={recommendation.avatarUrl} alt={`${recommendation.author} LinkedIn profile`} />
                    <span aria-hidden="true">{recommendation.avatarInitials}</span>
                  </div>
                  <div>
                    <strong>{recommendation.author}</strong>
                    <span>{recommendation.role}</span>
                  </div>
                </div>
                <blockquote>{recommendation.quote}</blockquote>
                <footer>
                  <span>{recommendation.date}</span>
                  <span>{recommendation.relationship}</span>
                  <a href={recommendation.sourceUrl} target="_blank" rel="noreferrer">
                    {recommendation.source} <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </footer>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="certifications"
          eyebrow="Licenses & certifications"
          title="My Certificates"
          titleIcon={<BadgeCheck size={32} aria-hidden="true" />}
        >
          <div className="cert-grid">
            {certifications.map((certification) => (
              <article className="surface cert-card" key={certification.fileName}>
                <a
                  className="cert-preview"
                  href={`/certificates/${certification.fileName}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${certification.title} certificate`}
                >
                  {certification.fileType === 'image' ? (
                    <img
                      src={`/certificates/${certification.fileName}`}
                      alt={`${certification.title} certificate preview`}
                      loading="lazy"
                    />
                  ) : (
                    <span className="pdf-preview">
                      <FileText size={36} aria-hidden="true" />
                      PDF certificate
                    </span>
                  )}
                </a>
                <div className="cert-body">
                  <ShieldCheck size={21} aria-hidden="true" />
                  <div>
                    <h3>{certification.title}</h3>
                    <p>{certification.issuer}</p>
                  </div>
                </div>
                <a className="text-link" href={`/certificates/${certification.fileName}`} target="_blank" rel="noreferrer">
                  View certificate <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Education"
          titleIcon={<GraduationCap size={32} aria-hidden="true" />}
        >
          <div className="education-grid">
            {education.map((item) => (
              <article className="surface education-card" key={item.school}>
                <a className="education-logo" href={item.url} target="_blank" rel="noreferrer">
                  <img src={item.logo} alt={item.logoAlt} loading="lazy" />
                </a>
                <div>
                  <span>{item.period}</span>
                  <h3>{item.school}</h3>
                  <strong>{item.focus}</strong>
                  <p>{item.description}</p>
                  <a className="text-link" href={item.url} target="_blank" rel="noreferrer">
                    Visit university <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="articles"
          eyebrow="My Personal Blog"
          title="Latest Articles"
          titleIcon={<Newspaper size={32} aria-hidden="true" />}
        >
          <div className="article-grid">
            {articles.map((article) => (
              <a
                className="surface article-card"
                href={article.url}
                target="_blank"
                rel="noreferrer"
                key={article.title}
              >
                <span className="article-meta">
                  <small>{article.topic}</small>
                  <em>{article.date}</em>
                </span>
                <span className="article-copy">
                  <strong>{article.title}</strong>
                  <span>{article.summary}</span>
                  <small>{article.source}</small>
                </span>
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </Section>

        <Section
          id="interviews"
          eyebrow="Interviews"
          title="Featured interviews"
          titleIcon={<Star size={32} aria-hidden="true" />}
        >
          <div className="interview-grid">
            {interviews.map((interview) => (
              <article className="surface interview-card" key={interview.title}>
                <a className="interview-image" href={interview.url} target="_blank" rel="noreferrer">
                  <img src={interview.image} alt={interview.imageAlt} loading="lazy" />
                </a>
                <div className="interview-body">
                  <span>{interview.source} - {interview.date}</span>
                  <h3>{interview.title}</h3>
                  <p>{interview.description}</p>
                  <a className="text-link" href={interview.url} target="_blank" rel="noreferrer">
                    Read interview <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Open to conversations"
          titleIcon={<Mail size={32} aria-hidden="true" />}
        >
          <div className="contact-panel">
            <div>
              <p className="contact-location">
                <MapPin size={18} aria-hidden="true" />
                Bulgaria / Remote-friendly
              </p>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                <Mail size={20} aria-hidden="true" />
                {profile.email}
              </a>
            </div>
            <div className="contact-links">
              <a className="button button-primary" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="button" href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="button" href={profile.links.blog} target="_blank" rel="noreferrer">
                Blog <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="button" href={profile.links.cv} target="_blank" rel="noreferrer">
                View CV <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
