import { FileText, Github, Linkedin, NotebookText, ShieldCheck } from 'lucide-react';
import { profile } from '../data/portfolio';

const heroHighlights = ['8+ years QA experience', 'UI/API automation', 'Framework development', 'Manual testing', 'Test planning', 'Test strategy', 'Backend validation', 'CI/CD '];

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions" aria-label="Primary links">
          <a className="button button-primary" href={profile.links.github} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            View GitHub
          </a>
          <a className="button" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            View LinkedIn
          </a>
          <a className="button" href={profile.links.blog} target="_blank" rel="noreferrer">
            <NotebookText size={18} aria-hidden="true" />
            Read Blog
          </a>
          <a className="button" href={profile.links.cv} target="_blank" rel="noreferrer">
            <FileText size={18} aria-hidden="true" />
            View CV
          </a>
        </div>
      </div>

      <aside className="hero-profile-card" aria-label="Vladimir Nachev profile summary">
        <img src="/profile.JPG" alt="" aria-hidden="true" />
        <div>
          <p>Senior QA Engineer</p>
        </div>
        <ul>
          {heroHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
