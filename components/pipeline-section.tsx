import { pipelineSteps } from "@/data/content";
import { DemoPanel } from "@/components/demo-panel";
import { SectionHeading } from "@/components/section-heading";

export function PipelineSection() {
  return (
    <section className="section" id="pipeline">
      <div className="shell two-column">
        <div>
          <SectionHeading
            eyebrow="Three calls"
            title="One ranked shortlist with reasons."
            text="CGE converts repositories and job descriptions into comparable vectors, then returns scores, strengths, gaps, transfer paths, and learning estimates."
          />
          <div className="step-list">
            {pipelineSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article className="step-card" key={step.title}>
                  <Icon size={22} />
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    <code>{step.endpoint}</code>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <DemoPanel />
      </div>
    </section>
  );
}
