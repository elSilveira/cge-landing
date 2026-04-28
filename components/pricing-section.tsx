"use client";

import { Check, ServerCog } from "lucide-react";
import { pricingPlans } from "@/data/content";
import { useLandingStore } from "@/store/use-landing-store";
import { SectionHeading } from "@/components/section-heading";

export function PricingSection() {
  const selectedPlan = useLandingStore((state) => state.selectedPlan);
  const setSelectedPlan = useLandingStore((state) => state.setSelectedPlan);

  return (
    <section className="section" id="pricing">
      <div className="shell">
        <SectionHeading
          eyebrow="Plans"
          title="Pricing aligned to screening volume."
          text="All plans include JWT auth, rate limiting, OpenAPI documentation, Docker deployment, and email support."
        />
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article
              className={`pricing-card ${plan.featured ? "featured" : ""} ${
                selectedPlan === plan.name ? "selected" : ""
              }`}
              key={plan.name}
            >
              <div className="plan-top">
                <span>{plan.name}</span>
                <strong>{plan.price}</strong>
                {plan.price !== "Custom" && <small>/ month</small>}
              </div>
              <p>{plan.caption}</p>
              <button type="button" onClick={() => setSelectedPlan(plan.name)}>
                <ServerCog size={17} />
                {selectedPlan === plan.name ? "Selected" : "Select plan"}
              </button>
              <ul>
                {plan.highlights.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="addon">
          <strong>Role Registry add-on</strong>
          <span>$149 / month per workspace for saved profiles, score history, leaderboards, and gap trends.</span>
        </div>
      </div>
    </section>
  );
}
