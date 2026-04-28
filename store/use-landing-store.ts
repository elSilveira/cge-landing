"use client";

import { create } from "zustand";

export type Plan = "Starter" | "Growth" | "Enterprise";

type DemoRole = "backend" | "frontend" | "platform";

type LandingState = {
  selectedPlan: Plan;
  demoRole: DemoRole;
  setSelectedPlan: (plan: Plan) => void;
  setDemoRole: (role: DemoRole) => void;
};

export const useLandingStore = create<LandingState>((set) => ({
  selectedPlan: "Growth",
  demoRole: "backend",
  setSelectedPlan: (selectedPlan) => set({ selectedPlan }),
  setDemoRole: (demoRole) => set({ demoRole }),
}));

export const demoRoles = {
  backend: {
    title: "Senior Backend Engineer",
    score: 82,
    direct: 75,
    transfer: 88,
    curve: "2-3 weeks",
    strengths: ["Python depth exceeds role", "FastAPI direct match", "REST patterns strong"],
    gaps: ["Docker orchestration", "PostgreSQL advanced features"],
  },
  frontend: {
    title: "Senior Frontend Engineer",
    score: 89,
    direct: 84,
    transfer: 79,
    curve: "1-2 weeks",
    strengths: ["React architecture", "TypeScript maturity", "Performance profiling"],
    gaps: ["Micro-frontend governance", "Design system ownership"],
  },
  platform: {
    title: "Platform Engineer",
    score: 76,
    direct: 67,
    transfer: 83,
    curve: "4-5 weeks",
    strengths: ["Docker foundations", "Service boundaries", "Observability patterns"],
    gaps: ["Kubernetes operators", "Terraform modules"],
  },
} as const;
