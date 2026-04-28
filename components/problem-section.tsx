import { problemRows } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

export function ProblemSection() {
  return (
    <section className="band" id="problem">
      <div className="shell">
        <SectionHeading
          eyebrow="The screening failure"
          title="CVs describe claims. CGE measures proof."
          text="Recruiters receive hundreds of CVs, clients send roles, and conventional tools collapse capability into keyword overlap."
        />
        <div className="comparison-table">
          <div className="table-head">
            <span>What the CV says</span>
            <span>What the ATS decides</span>
            <span>What code evidence shows</span>
          </div>
          {problemRows.map((row) => (
            <div className="table-row" key={row.claim}>
              <strong>{row.claim}</strong>
              <span>{row.ats}</span>
              <span>{row.truth}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
