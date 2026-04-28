import { ArrowRightLeft } from "lucide-react";
import { layerRows, scoreBreakdown, techPillars, transferExamples } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

export function EvidenceSection() {
  return (
    <section className="band evidence" id="evidence">
      <div className="shell">
        <SectionHeading
          eyebrow="Transfer coefficients"
          title="CGE measures what carries from one stack to another."
          text="The Universal Capability Graph maps professional technologies across domains, abstraction levels, and transferable engineering concepts."
        />
        <div className="evidence-grid">
          <div className="transfer-board">
            {transferExamples.map(([from, to, score, reason]) => (
              <article key={`${from}-${to}`} className="transfer-row">
                <div>
                  <strong>{from}</strong>
                  <ArrowRightLeft size={16} />
                  <strong>{to}</strong>
                </div>
                <b>{score}</b>
                <span>{reason}</span>
              </article>
            ))}
          </div>
          <div className="formula-card">
            <h3>Scoring model</h3>
            {scoreBreakdown.map((part) => (
              <div className="formula-row" key={part.label}>
                <span>{part.label}</span>
                <i>
                  <b style={{ width: `${part.value * 2}%`, background: part.color }} />
                </i>
                <strong>{part.value}%</strong>
              </div>
            ))}
            <p>Learning curve penalties are applied after fit and depth alignment.</p>
          </div>
        </div>
        <div className="ucg-grid">
          <div className="layers-table">
            {layerRows.map(([level, name, examples]) => (
              <div key={level}>
                <strong>{level}</strong>
                <span>{name}</span>
                <p>{examples}</p>
              </div>
            ))}
          </div>
          <div className="pillar-grid">
            {techPillars.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label}>
                  <Icon size={18} />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
