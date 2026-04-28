# CGE — Capability Graph Engine

### Stop screening CVs. Start measuring capability.

> The API that tells you **exactly how ready a candidate is for your role** — not based on what they claim, but on what their code actually proves.
---

## The Problem Every Outsourcing Company Knows

You receive **hundreds of CVs per week**. Your clients send roles. You need to match them — fast, accurately, and at scale.

The tools you have today all share the same fatal flaw: **they read keywords**.

| What the CV says | What the ATS decides | What's actually true |
|---|---|---|
| "5 years Rails, no Django" | ❌ Rejected for Django role | ✅ 80% ready — MVC, ORM, REST patterns fully transfer |
| "React developer" | ✅ Accepted for React role | ❌ Shallow — copy-pastes components, no state management depth |
| "Python, Flask" | ⚠️ Partial match for FastAPI | ✅ 87% transfer — same async patterns, same ecosystem |
| "Java Spring Boot" | ❌ Rejected for Go role | ✅ 72% ready — concurrency models, dependency injection all transfer |

Every false rejection costs you a placement. Every false accept costs you a client.

**CGE replaces keyword matching with capability graph analysis.**

---

## What CGE Does

CGE (Capability Graph Engine) is a REST API that analyzes code repositories and job descriptions, then produces deep, mathematically grounded match scores — with full explanations.

```
Your CV stack  →  Candidate's GitHub/GitLab repo  →  CGE API  →  Score + Gaps + Ranking
Your roles     →  Job description text             →  CGE API  →  Requirements + Seniority
```

**Three calls. One ranked shortlist.**

---

## The Core Innovation: Transfer Coefficients

CGE is built on a **Universal Capability Graph (UCG)** — a directed graph of 183 technology nodes connected by 2,009 edges, each carrying a **transfer coefficient** (0.0–1.0).

A transfer coefficient answers: *"If a developer knows technology A deeply, how much of technology B do they already effectively know?"*

```
Flask → FastAPI         transfer: 0.87   (same async patterns, same Python ecosystem)
Rails → Django          transfer: 0.80   (MVC, ORM, REST — all shared)
React → Vue             transfer: 0.75   (component model, virtual DOM, state)
Java Spring → Go + gRPC transfer: 0.72   (DI, concurrency, service boundaries)
PostgreSQL → MySQL      transfer: 0.88   (ACID semantics, SQL dialects are near-identical)
```

> **Result:** A candidate isn't "missing Django." They have **Django at 0.80 effective depth** from their Rails background. CGE tells you that. Your current ATS doesn't.

---

## How It Works: The Three-Step Pipeline

### Step 1 — Scan the Candidate's Code

Point CGE at the candidate's repository. CGE runs AST analysis (tree-sitter) across all languages, detecting not just which frameworks were used, but **how deeply** — abstraction patterns, error handling maturity, testing coverage, architectural decisions.

```bash
POST /api/v1/infer-capability
{
  "repo_path": "/repos/candidate-john-doe"
}
```

```json
{
  "signals": 47,
  "resolved_nodes": 21,
  "top_capabilities": [
    { "name": "Python",     "layer": "L0", "score": 0.95 },
    { "name": "FastAPI",    "layer": "L1", "score": 0.88 },
    { "name": "PostgreSQL", "layer": "L1", "score": 0.74 },
    { "name": "REST API",   "layer": "L2", "score": 0.82 },
    { "name": "Microservices", "layer": "L3", "score": 0.61 }
  ],
  "meta": {
    "abstraction_depth":   0.72,
    "paradigm_diversity":  0.45,
    "testing_maturity":    0.55,
    "architectural_breadth": 0.61
  }
}
```

**What you get:** Not "this person knows Python." You get *how deep*, across 6 abstraction layers — from syntax, through frameworks, patterns, architectures, all the way to paradigm-level thinking.

---

### Step 2 — Parse the Role

Paste any job description. CGE extracts both **explicit** and **inferred** requirements, calibrates seniority, and builds a requirement vector.

```bash
POST /api/v1/decompose-role
{
  "description": "Senior Python developer with Django or FastAPI. Must understand REST APIs, microservices, PostgreSQL, Docker. 5+ years experience.",
  "title": "Senior Backend Engineer"
}
```

```json
{
  "title": "Senior Backend Engineer",
  "seniority": 0.80,
  "explicit_requirements": 5,
  "inferred_requirements": 8,
  "requirements": [
    { "name": "FastAPI",        "depth": 0.7, "importance": 0.8, "explicit": true  },
    { "name": "PostgreSQL",     "depth": 0.6, "importance": 0.7, "explicit": true  },
    { "name": "Microservices",  "depth": 0.6, "importance": 0.6, "explicit": false },
    { "name": "REST API",       "depth": 0.6, "importance": 0.7, "explicit": false },
    { "name": "Docker",         "depth": 0.5, "importance": 0.6, "explicit": true  }
  ]
}
```

**What you get:** The role decomposed into measurable, weighted capability requirements — not a word cloud.

---

### Step 3 — Match & Rank

```bash
POST /api/v1/match
{
  "candidate_repo_path": "/repos/candidate-john-doe",
  "role_description": "Senior Python developer with FastAPI...",
  "role_title": "Senior Backend Engineer"
}
```

```json
{
  "overall_score": 0.82,
  "direct_match_score":   0.75,
  "transfer_match_score": 0.88,
  "meta_match_score":     0.71,
  "learning_curve":       0.15,

  "strengths": [
    "Python (0.95 depth — exceeds requirement)",
    "FastAPI (0.88 — direct match)",
    "REST API patterns (0.82 — strong architectural alignment)"
  ],
  "gaps": [
    "PostgreSQL advanced features (0.74 vs 0.80 required — minor gap)",
    "Docker orchestration (0.40 vs 0.60 required)"
  ],
  "transfer_opportunities": [
    "Django → FastAPI (0.87 transfer — existing patterns fully applicable)",
    "SQLAlchemy → PostgreSQL advanced (0.71 transfer)"
  ],
  "explanation": {
    "summary": "Strong architectural fit. Python expertise exceeds requirements. Docker gap is the primary risk — 2–3 weeks to close with targeted practice."
  }
}
```

**What you get:** A defensible, explainable score you can show your client. Not "we think he's a good fit." You get *why*, at every dimension, with gap estimates in weeks.

---

## The Full Endpoint Suite

| Endpoint | What It Does | Use Case |
|---|---|---|
| `POST /api/v1/infer-capability` | Scan a code repository → capability vector | Validate any CV in seconds |
| `POST /api/v1/decompose-role` | Parse a job description → requirement vector | Structure client roles automatically |
| `POST /api/v1/match` | Score a candidate vs. a role | Rank your entire CV pool |
| `POST /api/v1/build-team` | Select optimal N candidates for a project | Multi-role project staffing |
| `POST /api/v1/simulate-transition` | Can this candidate upskill into a role? | Bench placement, reskilling pipelines |
| `POST /api/v1/learn-path` | Optimal learning steps between two technologies | Candidate development plans |
| `GET /api/v1/graph/transfer` | Transfer coefficient between any two technologies | Justify placement decisions to clients |

---

## Scoring Dimensions Explained

Every match is scored across four dimensions:

```
Overall Score = 40% Direct Match
              + 30% Transfer Match
              + 15% Meta Alignment
              + 15% Depth Alignment
              − Learning Curve penalty
```

| Dimension | What It Measures |
|---|---|
| **Direct Match** | Technologies the candidate provably has, matching role requirements |
| **Transfer Match** | Technologies the candidate can effectively apply via UCG transfer paths |
| **Meta Alignment** | Abstraction depth, paradigm diversity, architectural breadth — does the candidate *think* at the right level? |
| **Depth Alignment** | Does the candidate's depth match what the seniority level demands? |
| **Learning Curve** | Estimated weeks to close remaining gaps — lower is better |

---

## The Universal Capability Graph

The UCG is the backbone. 183 technology nodes. 2,009 edges. 6 abstraction layers. 15 domains.

### The 6 Layers

```
L5  Domains         Distributed Systems · Data Engineering · FinTech
L4  Paradigms       OOP · Functional · Reactive · Actor Model · CSP
L3  Architectures   Microservices · Event-Driven · CQRS · Hexagonal · Serverless
L2  Patterns        MVC · Repository · DI · Circuit Breaker · CQRS · OAuth2
L1  Frameworks      Django · FastAPI · React · Spring Boot · Kubernetes · PostgreSQL
L0  Languages       Python · Java · Go · TypeScript · Rust · Kotlin · C# · Zig · 16 more
```

### The 15 Domains Covered

| Domain | Technologies |
|---|---|
| Web Backend | Python, Java, Go, Node.js, FastAPI, Django, Spring Boot, Gin, Express, NestJS... |
| Web Frontend | TypeScript, React, Vue, Angular, Next.js, Svelte, Htmx, Qwik... |
| Mobile | Swift, Kotlin, Flutter, React Native, Jetpack Compose... |
| Databases | PostgreSQL, MySQL, MongoDB, Redis, MSSQL, MariaDB, Snowflake, DuckDB... |
| DevOps & Cloud | Docker, Kubernetes, Terraform, AWS, Azure, GCP, Vercel, Cloudflare... |
| Data & ML | Python, NumPy, Pandas, PyTorch, TensorFlow, HuggingFace, Keras, CUDA... |
| Security | OAuth2, JWT, OWASP patterns, Zero Trust, RBAC... |
| Messaging | Kafka, RabbitMQ, NATS, Redis Pub/Sub, gRPC... |
| Build Tools | Vite, Webpack, Bun, Gradle, Maven, esbuild, Turbopack... |
| ORM & Data Access | SQLAlchemy, ActiveRecord, Hibernate, Prisma, GORM... |
| API Styles | REST, GraphQL, gRPC, tRPC, WebSockets... |
| Testing | pytest, Jest, JUnit, Cypress, Playwright, property-based testing... |
| Architecture | Microservices, Event-Driven, CQRS, Hexagonal, DDD, Serverless... |
| Paradigms | OOP, Functional, Reactive, Actor Model, CSP |
| Meta | Distributed Systems, Data Engineering, ML Engineering |

**Coverage:** If a developer uses it professionally, CGE knows how it transfers to everything else.

---

## What You Can Build With This

### 1. Automated CV Validation Portal

Connect your CV intake to the CGE API. Every incoming CV is scanned against the linked GitHub/GitLab repository and scored automatically. Your recruiters see a capability profile — not a word doc.

**Time saved:** 15–30 minutes of manual screening → 8 seconds of API call.

---

### 2. Role-Candidate Ranking Dashboard

For each open client role:

1. `POST /api/v1/decompose-role` → parse the role once
2. `POST /api/v1/match` × N → score every candidate in your pool
3. Sort by `overall_score`, surface `strengths` and `gaps`

Your recruiters see a sorted shortlist with defensible scores and human-readable explanations ready to paste into a client report.

---

### 3. Team Staffing for Project Contracts

Client needs a 4-person team for a full-stack SaaS project? One API call:

```bash
POST /api/v1/build-team
{
  "candidate_repo_paths": ["/repos/alice", "/repos/bob", "/repos/carlos", ...],
  "project_description": "React + Python FastAPI + PostgreSQL + Redis + Docker",
  "team_size": 4
}
```

CGE selects the subset that maximizes **collective capability coverage** — not just four strong individuals, but the right combination.

---

### 4. Reskilling & Bench Placement

Candidate on the bench? Use `simulate-transition` to find which open roles they can grow into:

```json
{
  "feasibility_score": 0.72,
  "estimated_weeks": 8.5,
  "steps": [
    {
      "capability_name": "Kubernetes",
      "transfer_leverage": 0.65,
      "leverage_from": "Docker Swarm",
      "effort_weeks": 3.0
    }
  ],
  "leverage_summary": "Strong Docker background provides 0.65 leverage into Kubernetes..."
}
```

Turn "not ready" candidates into placed candidates with a concrete development roadmap.

---

### 5. Client-Facing Placement Reports

Every match result includes:
- Numerical scores with weights (auditable)
- Named strengths with depth measurements
- Named gaps with week estimates to close
- Transfer path explanations (why this candidate can do the role)

Drop this directly into your client proposal. No more "we believe this candidate is a strong fit." Now you have *evidence*.

---

## Technology Stack

Built for reliability and integration.

| Component | Technology | Why |
|---|---|---|
| **API** | FastAPI (Python 3.12) | Async, OpenAPI/Swagger auto-docs, <5ms overhead |
| **Graph Engine** | Pure Python + NetworkX | No external graph DB required — deploys anywhere |
| **Code Analysis** | tree-sitter (AST) | Language-agnostic, production-grade, 20+ languages |
| **Neural Embeddings** | Graph Attention Network (128-dim) | Dense capability vectors for similarity search |
| **Vector Search** | PostgreSQL + pgvector | No separate vector DB — one less moving part |
| **Cache** | Redis | Rate limiting + response caching |
| **Auth** | JWT HS256 | Standard, stateless, integrates with any identity provider |
| **Deployment** | Docker + docker-compose | One command to production |
| **Migrations** | Alembic | Schema-versioned, zero-downtime |

### Security — Production Ready

- **JWT authentication** on all write/analysis endpoints
- **Rate limiting**: 10 writes/min, 60 reads/min per IP (Redis sliding window)
- **Path traversal protection**: repository paths validated against allowlist, symlink resolution blocked
- **CORS**: configurable per deployment
- **Startup guard**: refuses to boot in production with default JWT secret
- OWASP Top 10 hardened API surface

---

## Performance Numbers

| Operation | Typical Latency | Notes |
|---|---|---|
| Health check | < 5ms | |
| Graph traversal (transfer coefficient) | < 15ms | In-memory UCG |
| Role decomposition | < 50ms | NLP patterns + graph lookup |
| Candidate capability inference | 1–5s | Depends on repo size |
| Full match (infer + decompose + score) | 2–8s | End-to-end pipeline |
| Team build (10 candidates) | 5–15s | Parallel candidate scoring |

All endpoints return **structured JSON** with full explainability fields. No black boxes.

---

## Integration Guide

### 1. Get Your API Key

```bash
export CGE_JWT_SECRET="your-production-secret"
python -m cge.cli.generate_token --sub "acme-recruiting" --expiry-days 365
# → eyJhbGciOiJIUzI1NiJ9...
```

### 2. Validate a Candidate (30 seconds)

```python
import httpx

BASE = "https://api.yourcge.com"
TOKEN = "eyJhbGciOiJIUzI1NiJ9..."

# Step 1: What can this candidate do?
capability = httpx.post(f"{BASE}/api/v1/infer-capability",
    headers={"Authorization": f"Bearer {TOKEN}"},
    json={"repo_path": "/repos/candidate-jane-smith"}
).json()

print(capability["top_capabilities"])
# [{"name": "TypeScript", "score": 0.91}, {"name": "React", "score": 0.87}, ...]

# Step 2: What does the role need?
role = httpx.post(f"{BASE}/api/v1/decompose-role",
    headers={"Authorization": f"Bearer {TOKEN}"},
    json={
        "title": "Senior Frontend Engineer",
        "description": "React, TypeScript, performance optimization, micro-frontends..."
    }
).json()

# Step 3: Score
match = httpx.post(f"{BASE}/api/v1/match",
    headers={"Authorization": f"Bearer {TOKEN}"},
    json={
        "candidate_repo_path": "/repos/candidate-jane-smith",
        "role_description":    "React, TypeScript, performance optimization...",
        "role_title":          "Senior Frontend Engineer"
    }
).json()

print(match["overall_score"])     # 0.89
print(match["strengths"])         # ["React (0.87 — direct match)", ...]
print(match["gaps"])              # ["micro-frontend patterns (minor gap, ~2 weeks)"]
```

### 3. Rank Your Entire Pool

```python
import asyncio, httpx

async def rank_candidates(role_description: str, candidates: list[str]) -> list[dict]:
    async with httpx.AsyncClient(base_url=BASE, headers={"Authorization": f"Bearer {TOKEN}"}) as client:
        tasks = [
            client.post("/api/v1/match", json={
                "candidate_repo_path": repo,
                "role_description": role_description,
                "role_title": "Senior Backend Engineer"
            })
            for repo in candidates
        ]
        results = await asyncio.gather(*tasks)

    scored = [
        {"repo": c, **r.json()}
        for c, r in zip(candidates, results)
    ]
    return sorted(scored, key=lambda x: x["overall_score"], reverse=True)

# Returns ranked list with scores, strengths, gaps — ready to present to client
shortlist = asyncio.run(rank_candidates(
    role_description="...",
    candidates=["/repos/alice", "/repos/bob", "/repos/carlos", "/repos/diana"]
))
```

### 4. OpenAPI / Swagger Docs

Every endpoint is documented at `/docs` (Swagger UI) and `/redoc`. No guesswork on schemas.

---

## Plans & Pricing

> All plans include: JWT auth, rate limiting, full OpenAPI documentation, Docker deployment package, and email support.

---

### Starter — *For small teams validating up to 200 candidates/month*

**$299 / month**

| Feature | Included |
|---|---|
| CV validations (`infer-capability`) | 200 / month |
| Role decompositions (`decompose-role`) | 50 / month |
| Candidate–role matches (`match`) | 200 / month |
| Learning path queries (`learn-path`) | Unlimited |
| Graph API access (read) | Unlimited |
| Support | Email, 48h SLA |
| Deployment | Self-hosted Docker |

---

### Growth — *For agencies matching 1,000+ candidates/month*

**$999 / month**

| Feature | Included |
|---|---|
| CV validations | 2,000 / month |
| Role decompositions | 500 / month |
| Candidate–role matches | 2,000 / month |
| Team builds (`build-team`) | 100 / month |
| Transition simulations (`simulate-transition`) | 200 / month |
| Concurrent team building | Up to 20 candidates per call |
| Support | Email + Slack, 24h SLA |
| Deployment | Self-hosted Docker or managed cloud |
| Custom technology additions | 10 nodes / month |

---

### Enterprise — *For large outsourcing companies with dedicated pipelines*

**Custom pricing**

| Feature | Included |
|---|---|
| All API calls | Unlimited |
| Team builds | Unlimited |
| Custom UCG expansion | Unlimited nodes/domains |
| White-label capability reports | Included |
| Dedicated deployment (VPC / on-prem) | Included |
| SLA | 99.9% uptime, 4h critical response |
| Custom integrations | ATS, HRIS, Slack, Greenhouse, Workday |
| Onboarding & training | Included |
| Dedicated support engineer | Included |

> **Enterprise includes:** Custom training on your historical placement data to improve transfer coefficients for your specific client verticals.

---

### Role Registration Add-on *(any plan)*

**$149 / month per workspace**

Create a **Role Registry** — a persistent store of your client roles, decomposed, versioned, and ready to match against any incoming candidate in milliseconds.

| Feature | Description |
|---|---|
| Named role profiles | Save decomposed roles with custom IDs |
| Candidate ranking history | Score history per role per candidate |
| Comparative leaderboard | Side-by-side `overall_score` ranking for any role |
| Gap trend analysis | Track how your candidate pool improves over time |
| Role versioning | When clients update requirements, see how scores shift |
| Export | JSON, CSV, PDF report |

---

## Frequently Asked Questions

**Q: Does the candidate need to share their code?**

The candidate shares a repository path (GitHub, GitLab, Bitbucket, or a local clone). CGE reads the code to build the capability vector — it never stores the code itself, only the computed scores.

---

**Q: What if the candidate doesn't have public repositories?**

CGE can analyze any directory path the API server can access. Common patterns:

- Ask candidates to share a private repo (grant read access to your CGE deployment)
- Use a code submission portal that drops submissions into a watched directory
- Analyze take-home test submissions

---

**Q: How does CGE handle candidates who list technologies they don't actually use?**

That's the core value proposition. CGE reads the **code**, not the CV. If a candidate claims "5 years Kubernetes" but their repo contains a single YAML copied from a tutorial, CGE scores their Kubernetes at 0.12, not 0.80. Claims and evidence are independently scored.

---

**Q: How accurate are the transfer coefficients?**

Transfer coefficients are computed from a mathematical feature model measuring:
- Type system compatibility
- Paradigm overlap
- Concurrency model similarity
- Ecosystem distance
- Pattern reuse

The coefficients are grounded in the Stack Overflow Developer Survey 2024 ecosystem data and validated against known technology transition patterns. They are continuously refinable via the custom UCG expansion feature on Enterprise plans.

---

**Q: Can CGE integrate with our ATS (Applicant Tracking System)?**

Yes. CGE is a REST API. Any ATS that supports webhooks or API integrations can pipe candidates through CGE. Common integrations: Greenhouse, Lever, Workday, BambooHR, custom in-house systems.

---

**Q: How do we explain scores to candidates or clients?**

Every match result includes a human-readable `explanation` block. The `strengths`, `gaps`, and `transfer_opportunities` fields are designed to be copy-pasted directly into client reports or candidate feedback letters.

---

**Q: What's the learning curve to integrate?**

If you can make HTTP requests, you can use CGE. The Swagger UI at `/docs` is auto-generated from the code. Most teams go from "first API call" to "ranking a full candidate pool" in under a day.

---

## What CGE Is Not

CGE is not a replacement for human judgment. It is a **measurement tool**.

It will not tell you whether to hire someone. It tells you:
- What they demonstrably know, at what depth
- How much of what they know transfers to your role
- What gaps exist, and how long they will realistically take to close
- Which combination of candidates best covers a project

The placement decision remains yours. CGE removes the noise so you can focus on it.

---

## Quick Reference — API Cheat Sheet

```
Base URL: https://api.yourcge.com
Auth:     Authorization: Bearer <jwt-token>
Docs:     https://api.yourcge.com/docs

── Candidate ─────────────────────────────────────────────────────
POST /api/v1/infer-capability     Scan a code repo → capability profile
POST /api/v1/match                Score candidate vs role
POST /api/v1/simulate-transition  Can they grow into a target role?

── Role ──────────────────────────────────────────────────────────
POST /api/v1/decompose-role       Parse job description → requirements

── Multi-Candidate ───────────────────────────────────────────────
POST /api/v1/build-team           Select optimal team from a pool

── Learning ──────────────────────────────────────────────────────
POST /api/v1/learn-path           Optimal path between two technologies (free)

── Graph ─────────────────────────────────────────────────────────
GET  /api/v1/graph/nodes          Browse the 183-node UCG
GET  /api/v1/graph/transfer       Transfer coefficient between any two nodes
GET  /api/v1/graph/reachable      All skills reachable from a starting point

── Health ────────────────────────────────────────────────────────
GET  /health                      System status + graph size
```

---

## Get Started

1. **Request a demo key** — we'll provision a Starter key with 20 free matches so you can test against your real candidate pool
2. **Point it at a repo** — any repo: GitHub public link, private clone, or take-home test submission
3. **See what you've been missing** — paste your best role, run your top 10 candidates, and see the scores

> Contact: [your-email@company.com] · [Your Company Name] · API documentation at `/docs` on any deployment

---

*CGE — Capability Graph Engine. Built with FastAPI, PostgreSQL, tree-sitter, and a graph that knows how skills actually transfer.*
