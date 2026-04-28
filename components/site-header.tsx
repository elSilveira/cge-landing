import { BrainCircuit } from "lucide-react";
import { navItems } from "@/data/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="CGE home">
        <span className="brand-mark">
          <BrainCircuit size={20} strokeWidth={2.2} />
        </span>
        <span>CGE</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#pricing">
        View plans
      </a>
    </header>
  );
}
