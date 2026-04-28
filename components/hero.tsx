import { ArrowRight, PlayCircle } from "lucide-react";
import { heroStats } from "@/data/content";
import { HeroVisual } from "@/components/hero-visual";
import { SiteHeader } from "@/components/site-header";

export function Hero() {
  return (
    <section className="hero" id="top">
      <SiteHeader />
      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="eyebrow">Capability Graph Engine</p>
          <h1>Stop screening CVs. Start measuring capability.</h1>
          <p className="hero-lede">
            CGE is the API that tells outsourcing teams how ready a candidate is
            for a role based on what their code proves, including transferable
            capability that keyword tools miss.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#pricing">
              Start scoring candidates <ArrowRight size={18} />
            </a>
            <a className="secondary-btn" href="#pipeline">
              <PlayCircle size={18} /> See the pipeline
            </a>
          </div>
          <dl className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroVisual />
      </div>
      <div className="next-peek shell">
        <span>Keyword matching rejects transferable talent and accepts shallow matches.</span>
      </div>
    </section>
  );
}
