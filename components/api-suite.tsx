import { TerminalSquare } from "lucide-react";
import { apiEndpoints } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

const codeSample = `POST /api/v1/match
{
  "candidate_repo_path": "/repos/jane",
  "role_title": "Senior Backend Engineer",
  "role_description": "Python, FastAPI, PostgreSQL..."
}

{
  "overall_score": 0.82,
  "transfer_match_score": 0.88,
  "learning_curve": 0.15,
  "summary": "Strong architectural fit."
}`;

export function ApiSuite() {
  return (
    <section className="section" id="api">
      <div className="shell two-column api-layout">
        <div>
          <SectionHeading
            eyebrow="Endpoint suite"
            title="Built for integration, not another recruiter dashboard."
            text="CGE exposes structured JSON for validation, ranking, team assembly, transition simulation, learning paths, and graph explanations."
          />
          <div className="endpoint-list">
            {apiEndpoints.map(([endpoint, text]) => (
              <article key={endpoint}>
                <code>{endpoint}</code>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="code-window">
          <div>
            <TerminalSquare size={18} />
            <span>match request</span>
          </div>
          <pre>{codeSample}</pre>
        </div>
      </div>
    </section>
  );
}
