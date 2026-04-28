"use client";

import { CheckCircle2, CircleAlert } from "lucide-react";
import { demoRoles, useLandingStore } from "@/store/use-landing-store";

const roles = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "platform", label: "Platform" },
] as const;

export function DemoPanel() {
  const demoRole = useLandingStore((state) => state.demoRole);
  const setDemoRole = useLandingStore((state) => state.setDemoRole);
  const data = demoRoles[demoRole];

  return (
    <div className="demo-panel">
      <div className="segmented-control" role="tablist" aria-label="Role demo">
        {roles.map((role) => (
          <button
            key={role.id}
            type="button"
            role="tab"
            aria-selected={demoRole === role.id}
            onClick={() => setDemoRole(role.id)}
          >
            {role.label}
          </button>
        ))}
      </div>
      <div className="demo-score">
        <span>{data.title}</span>
        <strong>{data.score}%</strong>
      </div>
      <div className="demo-bars">
        <label>
          <span>Direct match</span>
          <i>
            <b style={{ width: `${data.direct}%` }} />
          </i>
        </label>
        <label>
          <span>Transfer match</span>
          <i>
            <b style={{ width: `${data.transfer}%` }} />
          </i>
        </label>
      </div>
      <div className="demo-columns">
        <div>
          <h3>
            <CheckCircle2 size={17} /> Strengths
          </h3>
          {data.strengths.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <h3>
            <CircleAlert size={17} /> Gaps
          </h3>
          {data.gaps.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <footer>Estimated learning curve: {data.curve}</footer>
    </div>
  );
}
