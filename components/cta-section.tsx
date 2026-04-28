import { ArrowRight, ShieldCheck } from "lucide-react";

export function CtaSection() {
  return (
    <section className="cta-band">
      <div className="shell cta-content">
        <div>
          <span>
            <ShieldCheck size={18} /> Production ready API
          </span>
          <h2>Give clients evidence instead of screening intuition.</h2>
          <p>
            Rank candidates by direct proof, transferable depth, seniority fit,
            and estimated gap closure before your competitors finish reading CVs.
          </p>
        </div>
        <a className="primary-btn dark" href="mailto:sales@cge.dev">
          Talk to sales <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
