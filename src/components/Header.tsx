import { FileText, Github, Linkedin, NotebookText } from 'lucide-react';
import { profile } from '../data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Recommendations', href: '#recommendations' },
  { label: 'Interviews', href: '#interviews' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Vladimir Nachev home">
        <img src="/vSign.jpg" alt="" aria-hidden="true" />
        <strong>Vladimir Nachev</strong>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-links" aria-label="Profile links">
        <a href={profile.links.github} aria-label="GitHub profile" target="_blank" rel="noreferrer">
          <Github size={18} aria-hidden="true" />
        </a>
        <a href={profile.links.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noreferrer">
          <Linkedin size={18} aria-hidden="true" />
        </a>
        <a href={profile.links.blog} aria-label="QA blog" target="_blank" rel="noreferrer">
          <NotebookText size={18} aria-hidden="true" />
        </a>
        <a href={profile.links.cv} aria-label="View CV" target="_blank" rel="noreferrer">
          <FileText size={18} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
