import { useCases } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

export function UseCases() {
  return (
    <section className="band">
      <div className="shell">
        <SectionHeading
          eyebrow="What teams build"
          title="From intake validation to client-ready placement reports."
          text="The same capability graph supports recruiter workflows, account teams, bench development, and technical client reporting."
        />
        <div className="use-case-grid">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <article className="use-case-card" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
