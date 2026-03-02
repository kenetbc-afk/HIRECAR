# HIRECAR — Departments, Projects & AI Workflows

> Organizational blueprint for building out department UI pages, AI-driven workflows,
> and the Client Milestone Journey that connects everything.

---

## Client Milestone Journey (The Connective Tissue)

Every client moves through a **progression** — from first contact to fully operational.
Each department's UI and AI workflows activate based on where the client is in their journey.

```
┌─────────────┐    ┌──────────────┐    ┌───────────────┐    ┌──────────────┐    ┌─────────────┐
│  1. INTAKE   │───▶│ 2. RECOVERY  │───▶│ 3. REBUILDING │───▶│ 4. OPERATING │───▶│ 5. SCALING  │
│              │    │              │    │               │    │              │    │             │
│ First contact│    │ Claims, PIFR │    │ Credit repair │    │ Standards,   │    │ Funding,    │
│ Assessment   │    │ Insurance    │    │ Compliance    │    │ HBI scoring  │    │ Fleet, Mktg │
│ Onboarding   │    │ Roadside     │    │ Planning      │    │ Dashboard    │    │ Growth      │
└─────────────┘    └──────────────┘    └───────────────┘    └──────────────┘    └─────────────┘
```

**Milestone triggers** determine which department pages/tools a client sees.
AI bots monitor milestones and auto-surface the next relevant workflow.

---

## Interactive AI Workflows + Gamification System

> All AI workflows across Accounting, Operations, Credit Disputes, Billing, and
> HIRECAR Services are **interactive** — the member engages directly with the AI
> through guided conversations, decision trees, and real-time feedback loops.
> Every interaction is **gamified** using HIRECAR's native scoring methodologies.

### Gamification Engine — Core Mechanics

Built on HIRECAR's existing scoring systems, unified into a single progression framework:

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                     HIRECAR GAMIFICATION ENGINE                              ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │                    OPERATOR XP (Experience Points)                   │     ║
║  │  Every interaction earns XP. XP drives tier advancement.            │     ║
║  │                                                                     │     ║
║  │  XP Sources:                                                        │     ║
║  │  • Complete a dispute cycle ──────────── +150 XP                    │     ║
║  │  • Upload required document ──────────── +25 XP                     │     ║
║  │  • Pay invoice on time ───────────────── +50 XP                     │     ║
║  │  • Attend coaching session ───────────── +100 XP                    │     ║
║  │  • Achieve VDI 80+ on a vehicle ──────── +200 XP                    │     ║
║  │  • Complete a playbook ───────────────── +75 XP                     │     ║
║  │  • Refer a new member ────────────────── +300 XP                    │     ║
║  │  • Respond to follow-up within 24hr ──── +40 XP                    │     ║
║  │  • Maintain streak (7-day active) ────── +100 XP bonus             │     ║
║  └─────────────────────────────────────────────────────────────────────┘     ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │                    MEMBER TIERS (XP-Driven)                         │     ║
║  │                                                                     │     ║
║  │  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌──────────────┐    │     ║
║  │  │ STANDARD  │─▶│ OPERATOR  │─▶│ FIRST     │─▶│ ELITE        │    │     ║
║  │  │           │  │           │  │ CLASS     │  │ OPERATOR     │    │     ║
║  │  │ 0 XP     │  │ 1,000 XP  │  │ 5,000 XP  │  │ 15,000 XP    │    │     ║
║  │  │           │  │           │  │           │  │              │    │     ║
║  │  │ Basic     │  │ Priority  │  │ Premium   │  │ VIP access,  │    │     ║
║  │  │ access    │  │ support,  │  │ services, │  │ advisory     │    │     ║
║  │  │           │  │ discounts │  │ concierge │  │ board        │    │     ║
║  │  └───────────┘  └───────────┘  └───────────┘  └──────────────┘    │     ║
║  └─────────────────────────────────────────────────────────────────────┘     ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │                    SCORING SYSTEMS (Department-Native)               │     ║
║  │                                                                     │     ║
║  │  HBI Score (0–100)  ─── Operator behavioral health across all depts │     ║
║  │  VDI Score (0–100)  ─── Vehicle documentation completeness          │     ║
║  │  BRE Score (0–100)  ─── Business readiness & compliance             │     ║
║  │  CRI Score (0–100)  ─── Credit Recovery + Funding Index (HIRECREDIT)   │     ║
║  │                          Tracks: credit health, dispute success rate,  │     ║
║  │                          funding approvals (count + conditions),       │     ║
║  │                          repayment performance, and funding readiness  │     ║
║  │  FPI Score (0–100)  ─── Financial Performance Index (NEW — Acctg)   │     ║
║  │  MSI Score (0–100)  ─── Member Service Index (NEW — Membership)     │     ║
║  │                                                                     │     ║
║  │  All scores visible on Member Portal. Combined into HIRECAR         │     ║
║  │  Composite Score — the single number that represents overall        │     ║
║  │  member health and unlocks tier perks.                              │     ║
║  └─────────────────────────────────────────────────────────────────────┘     ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │                    ACHIEVEMENTS & BADGES                             │     ║
║  │                                                                     │     ║
║  │  🏆 Dispute Champion ──── 5 disputes resolved successfully          │     ║
║  │  🏆 Doc Master ──────── VDI 80+ on all vehicles                     │     ║
║  │  🏆 Clean Ledger ────── 6 months zero outstanding balance           │     ║
║  │  🏆 Recovery Pro ────── PIFR Max completed with full timeline       │     ║
║  │  🏆 Streak King ─────── 30-day active engagement streak            │     ║
║  │  🏆 Compliance Ace ──── BRE 90+ for 3 consecutive months           │     ║
║  │  🏆 Referral Engine ─── 10+ successful referrals                   │     ║
║  │  🏆 Early Bird ──────── 12 invoices paid before due date           │     ║
║  │  🏆 Full Operator ──── All 6 scores above 75                       │     ║
║  │                                                                     │     ║
║  │  Badges display on Member Profile + Operator Stories feature.       │     ║
║  └─────────────────────────────────────────────────────────────────────┘     ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │                    STREAKS, CHALLENGES & QUESTS                      │     ║
║  │                                                                     │     ║
║  │  Daily Streaks ────── Consecutive days of platform engagement        │     ║
║  │  Weekly Challenges ── Department-specific goals (e.g., "Upload 3    │     ║
║  │                       docs this week" or "Complete dispute round")   │     ║
║  │  Monthly Quests ───── Cross-department objectives (e.g., "Raise     │     ║
║  │                       HBI by 10 pts + clear 2 collections")         │     ║
║  │  Seasonal Events ──── Limited-time bonus XP events tied to          │     ║
║  │                       HIRECAR campaigns and activations              │     ║
║  │                                                                     │     ║
║  │  Quest Board visible in Member Portal with progress bars.           │     ║
║  └─────────────────────────────────────────────────────────────────────┘     ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │                    INTERACTIVE AI WORKFLOW PATTERN                   │     ║
║  │                                                                     │     ║
║  │  Every AI workflow follows this interactive loop:                    │     ║
║  │                                                                     │     ║
║  │  1. GREET ─── Bot introduces itself, explains the task, shows       │     ║
║  │               current score/streak/quest status                     │     ║
║  │  2. GUIDE ─── Conversational decision tree — bot asks questions,    │     ║
║  │               member answers, bot adapts next steps in real-time    │     ║
║  │  3. ACT ──── Bot performs the action (generates doc, files claim,   │     ║
║  │               calculates score) with member confirmation            │     ║
║  │  4. REWARD ── Bot awards XP, updates scores, checks for badge      │     ║
║  │               unlocks, shows progress toward next tier/quest        │     ║
║  │  5. NEXT ──── Bot recommends the next best action, queues the      │     ║
║  │               next workflow, or hands off to another department     │     ║
║  │                                                                     │     ║
║  │  Members can pause, resume, ask clarifying questions, or request    │     ║
║  │  a human operator at any point in the conversation.                 │     ║
║  └─────────────────────────────────────────────────────────────────────┘     ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

## Departments Overview

| #  | Department                  | Milestone Phase     | Status        |
|----|----------------------------|---------------------|---------------|
| 1  | Credit Repair (HIRECREDIT) | Rebuilding          | Active        |
| 2  | Collision + Claims         | Recovery            | Active        |
| 3  | Recovery + PIFR            | Recovery            | Active        |
| 4  | Operator Standards         | Operating           | Active        |
| 5  | Auto Insurance             | Recovery            | Coming 2026   |
| 6  | Biz Funding (SeedXchange)  | Scaling             | Coming 2026   |
| 7  | Mobility + Rentals         | Scaling             | Coming 2026   |
| 8  | Roadside                   | Recovery            | Coming 2026   |
| 9  | Entertainment              | Operating / Scaling | Active        |
| 10 | MW Intelligence            | All Phases          | Active        |
| 11 | Playbooks                  | All Phases          | Active        |
| 12 | Accounting, Follow-Up & Planning | All Phases    | New           |
| 13 | Marketing & Sales          | Intake / Scaling    | New           |
| 14 | HIRECAR Membership Services (Member Facing) | All Phases | Core Operations |
| 15 | HIRECAR HQ (Service Supplier / Service Buyer) | All Phases | Core Operations |
| 16 | Client Milestone Journey   | All Phases          | Core System   |

---

## Department Details & Projects

---

### 1. Credit Repair (HIRECREDIT) — Lead Category

**Phase:** Rebuilding
**Purpose:** Repair and rebuild client credit profiles post-incident

#### UI Pages/Apps
- **HIRECREDIT Dashboard** — Client-facing credit health overview
- **Credit Dispute Center** — Dispute builder with letter templates and tradeline strategy
- **Collections Protection Hub** — Active collections tracker and shield status
- **Auto Loan Recovery** — Loan catch-up calculator and negotiation tools
- **CreditWithKen Coaching Portal** — Session booking, progress tracking, 1-on-1 interface
- **Funding Readiness Assessment** — Pre-qualification scoring tied to HBI
- **Approval Pathway Blueprint** — Step-by-step roadmap UI

#### AI Workflows (Interactive + Gamified)

**CRI Score (Credit Recovery + Funding Index)** — The gamified score for this department. Starts at your current credit health baseline and rises as you complete dispute cycles, clear collections, follow tradeline strategy, and **successfully secure funding**. The CRI now tracks a **Funding Ledger** — every funding event with HIRECAR is logged with: amount, type (SeedXchange/fleet/capital), approval conditions, repayment terms, on-time payment history, and outcome. Successful funding completions boost CRI significantly; defaults lower it. Visible on your HIRECREDIT Dashboard with animated progress ring + funding history timeline.

- **Credit Intake Wizard** *(Interactive)* — Conversational AI walks the member step-by-step through credit data collection. Bot asks questions ("Which bureau pulled your report?", "When was the last missed payment?"), explains what each item means, and builds the dispute profile together with the member. Awards **+50 XP** on completion, unlocks the Dispute Center.
- **Dispute Builder** *(Interactive)* — AI presents each negative item from the credit report as a card. Member taps to review → bot explains the dispute angle → member confirms or adjusts → bot generates the dispute letter in real-time. Each completed dispute round earns **+150 XP** and advances the CRI Score. Progress bar shows "Round 1 of 3" etc. Unlocks **Dispute Champion** badge after 5 successful resolutions.
- **Tradeline Strategy Coach** *(Interactive)* — AI presents tradeline options as a decision tree. "Option A: Add authorized user tradeline (+15 pts est.) vs Option B: Secured card strategy (+8 pts/mo est.)" — member selects, bot explains tradeoffs, models projected impact visually. Each strategy executed earns **+75 XP**.
- **Collections Shield** *(Interactive + Alert)* — Bot monitors for new collections in real-time. When detected: pushes an interactive alert → walks member through response options → auto-generates protection letter if member approves. Clearing a collection = **+200 XP** + CRI boost. Maintaining zero new collections for 90 days unlocks **Clean Shield** badge.
- **CreditWithKen Session Prep** *(Interactive)* — Before each coaching session, bot runs a 5-minute interactive review: "Your CRI moved from 42 → 58 since last session. Here's what changed..." Member can flag questions for Ken. Attending earns **+100 XP**. Completing all prep questions = bonus **+25 XP**.
- **Score Projection Simulator** *(Interactive)* — Member adjusts sliders (pay down $X, dispute Y items, add Z tradeline) and AI shows projected credit score trajectory in real-time as an animated graph. Hitting a projected milestone triggers a **Quest**: "Reach 680 by Q3 — here's your path." Quest completion = **+500 XP** bonus.
- **Weekly Credit Challenge** *(Gamified)* — Bot issues a weekly micro-challenge: "Upload your latest credit report this week" (+25 XP), "Set up autopay on 2 accounts" (+50 XP), "Review and confirm your dispute status" (+30 XP). Streak of 4 consecutive weekly completions = **Streak King** progress.

---

### 2. Collision + Claims

**Phase:** Recovery
**Purpose:** LA collision data intelligence and claims lifecycle management

#### UI Pages/Apps
- **LA Collision Data Dashboard** — 810K+ collision data visualization, heatmaps, trends
- **Multi-Party Claims Tracker** — Track all parties, coverage, liability across complex claims
- **Claims Cycle Timeline** — Visual timeline from incident to resolution
- **MCI Report Viewer** — R-DATA-003 and other intelligence reports

#### AI Workflows
- **Claims Intake Bot** — Automated collection of accident details, photos, police reports
- **Multi-Party Liability Analyzer** — AI assesses fault distribution across parties
- **Claims Status Monitor** — Bot tracks insurer responses, flags delays, escalates stalls
- **Collision-to-Credit Impact Predictor** — AI maps how a collision event will impact credit timeline

---

### 3. Recovery + PIFR (Post-Incident Financial Recovery)

**Phase:** Recovery
**Purpose:** Financial recovery packets and defense after incidents

#### UI Pages/Apps
- **PIFR Intake Portal** — Guided intake for Core/Plus/Max tier selection
- **Recovery Packet Builder** — Assemble and review recovery documentation
- **Collections Shield Dashboard** — Active protection status and interventions
- **Admin Failure Tracker** — Log and track administrative failures by third parties
- **Custody Log Viewer** — Vehicle custody chain-of-evidence timeline
- **Claims Timeline Defense** — Interactive timeline builder for dispute evidence

#### AI Workflows
- **PIFR Tier Recommender** — AI analyzes situation and recommends Core/Plus/Max
- **Recovery Packet Generator** — AI assembles recovery documents from intake data
- **Admin Failure Pattern Detector** — Bot identifies patterns in insurer/admin failures
- **Custody Log Auditor** — AI audits custody records for gaps and inconsistencies
- **Statement of Work Generator** — AI produces SOW documents for recovery engagements
- **Audit Report Builder** — AI compiles audit findings into formal reports

---

### 4. Operator Standards

**Phase:** Operating
**Purpose:** Business readiness scoring, compliance, and operator certification

#### UI Pages/Apps
- **HBI Score Dashboard** — Real-time Business Intelligence score with breakdown
- **BRE Compliance Center** — Business Readiness Engine audit prep and status
- **VDI Tracker** — Vehicle Documentation Index scoring per vehicle
- **Revenue Lane vs Cure Lane** — Visual comparison and pathway selector
- **Vendor Audit Portal** — Vendor compliance tracking and audit scheduling
- **Cure Window Calibration** — Timeline management for compliance cure periods

#### AI Workflows (Interactive + Gamified)

**HBI, VDI, and BRE Scores** — The three native gamified scores for Operations. All three are visible on the HBI Score Dashboard with animated gauges. Raising any score earns XP and unlocks tier perks.

- **HBI Live Scorer** *(Interactive)* — AI presents your HBI breakdown as an interactive scorecard. Each of the 5 behavioral tiers is a tappable section — member clicks in, bot explains what's driving the score up or down, and offers a specific action: "Your response time is dragging Tier 3 down. Want me to set up auto-reply templates?" Member accepts → bot configures → score updates live. Each tier improvement = **+100 XP**. Reaching HBI 80+ unlocks **Operator Excellence** badge.
- **BRE Compliance Walkthrough** *(Interactive)* — Bot runs a guided audit as a checklist conversation. "Let's check your BRE status. First: business license — is this current? [Upload / Confirm / Skip]" Each item is a step; bot explains why it matters, flags gaps, and offers to auto-generate fix actions. Completing a full audit pass = **+150 XP**. Passing with zero gaps = **Compliance Ace** badge progress (need 3 consecutive months).
- **VDI Document Challenge** *(Interactive + Gamified)* — Each vehicle gets a VDI progress wheel. Bot prompts: "Your 2022 Escalade is at VDI 62. You're missing: registration renewal, last service record, insurance card. Upload any to level up." Each doc uploaded = **+25 XP** + VDI score bump. Hitting VDI 80+ on a vehicle = **+200 XP** + **Doc Master** badge progress. Bot sends weekly VDI Challenge: "Get 3 vehicles to VDI 80+ this month" = **+500 XP** quest.
- **Revenue Lane Navigator** *(Interactive)* — AI presents the Revenue Lane vs Cure Lane as a branching path visualization. Bot asks diagnostic questions about current business state, then recommends a lane with reasoning: "Based on your HBI of 72 and 2 open cure items, I recommend Cure Lane first. Here's the 3-step plan..." Member selects lane → bot builds the action plan → tracks progress. Completing a lane path = **+300 XP**.
- **Cure Window Coach** *(Interactive + Alert)* — Bot tracks all open cure windows as countdown timers. Sends escalating interactive nudges: "14 days left on your insurance cure — here's exactly what to submit. Want me to walk you through it now?" Member engages → bot guides step-by-step → awards **+75 XP** per cure resolved before deadline. Resolving all cures on time for a quarter = **Zero Cure** achievement.
- **Vendor Audit Game** *(Interactive + Gamified)* — Bot turns vendor audit prep into a readiness quiz. "I'll ask you 10 questions about your vendor relationships. For each one you're ready for, you earn points. Let's see your Vendor Readiness Score." Interactive Q&A → bot scores responses → flags gaps → generates prep actions. Scoring 90%+ = **+150 XP** + **Audit Ready** badge.
- **Monthly Operations Quest** *(Gamified)* — Cross-metric monthly challenge: "Raise HBI by 5, maintain VDI 80+ on all vehicles, and close 1 cure window." Progress bar tracks all three. Completing the quest = **+750 XP** + bonus toward tier upgrade.

---

### 5. Auto Insurance

**Phase:** Recovery
**Status:** Coming 2026
**Purpose:** Operator-grade insurance products and strategy

#### UI Pages/Apps
- **Policy Comparison Tool** — Side-by-side operator-grade policy comparison
- **Fleet Coverage Planner** — Multi-vehicle coverage optimization
- **Gap + Deductible Strategy** — Calculator and recommendation engine
- **Uninsured Motorist Defense** — Claim builder for UM/UIM situations
- **Insurance + HIRECREDIT Integration** — Unified view of insurance impact on credit

#### AI Workflows
- **Policy Recommender** — AI matches operator profile to optimal coverage
- **Claims-to-Collections Predictor** — Bot models when insurance delays become collections events
- **Billing Fog Analyzer** — AI decodes complex insurance billing statements
- **Coverage Gap Detector** — Bot identifies coverage gaps across fleet

---

### 6. Biz Funding (SeedXchange)

**Phase:** Scaling
**Status:** Coming 2026
**Purpose:** Operator capital programs and fleet expansion financing

#### UI Pages/Apps
- **SeedXchange Application Portal** — Guided funding application flow
- **24hr Qualification Dashboard** — Real-time application status
- **Fleet Expansion Calculator** — ROI modeling for fleet growth
- **Operator Capital Programs** — Available programs catalog
- **HBI Score + Funding Access** — Score-based eligibility view

#### AI Workflows
- **Application Pre-Qualifier** — AI scores application likelihood before submission
- **Funding Match Engine** — Bot matches operator to best capital programs
- **Fleet ROI Modeler** — AI projects return on fleet expansion investment
- **Document Prep Bot** — AI assembles required financial documentation
- **Approval Pathway Advisor** — Bot guides applicant through approval steps

---

### 7. Mobility + Rentals

**Phase:** Scaling
**Status:** Coming 2026
**Purpose:** Fleet rental operations and premium mobility services

#### UI Pages/Apps
- **Fleet Inventory Dashboard** — Available vehicles, status, pricing
- **Booking Portal** — Luxury, daily, airport, long-term booking flows
- **Membership Management** — First Class Access tier management
- **Private Driver Network** — Driver matching and scheduling
- **Chauffeur Services** — Premium service booking and tracking

#### AI Workflows
- **Dynamic Pricing Engine** — AI adjusts rental pricing based on demand/supply
- **Fleet Utilization Optimizer** — Bot maximizes vehicle deployment efficiency
- **Booking Concierge** — AI handles booking inquiries and recommendations
- **Driver Match Bot** — AI matches client preferences to available drivers

---

### 8. Roadside

**Phase:** Recovery
**Status:** Coming 2026
**Purpose:** Emergency roadside assistance and maintenance services

#### UI Pages/Apps
- **Emergency Request Portal** — One-tap roadside assistance request
- **Service Tracker** — Real-time ETA and service provider tracking
- **EV Charging Locator** — Emergency EV charging station finder
- **Maintenance Scheduler** — Oil, glass, detailing, tire/battery booking
- **Service History** — Complete vehicle service record

#### AI Workflows
- **Emergency Dispatch Bot** — AI triages request and dispatches nearest provider
- **ETA Predictor** — Bot calculates and updates arrival estimates in real-time
- **Preventive Maintenance Advisor** — AI recommends services based on vehicle data
- **Service Provider Matcher** — Bot selects optimal provider by location, rating, availability

---

### 9. Entertainment

**Phase:** Operating / Scaling
**Purpose:** Community engagement, culture content, and brand activation

#### UI Pages/Apps
- **LA Garage Feature Series** — Article/video content hub
- **Wrap Culture Gallery** — Vehicle wrap showcase and branding inspiration
- **Auto Photography Portfolio** — Community-submitted automotive photography
- **Private Driver Life** — Lifestyle content and stories
- **Events + Activations Calendar** — Upcoming community events
- **Operator Stories** — Profile features on HIRECAR operators

#### AI Workflows
- **Content Scheduler** — AI plans and queues content publication calendar
- **Community Engagement Bot** — Bot moderates submissions and highlights top content
- **Event Promotion Engine** — AI generates promotional materials for activations

---

### 10. MW Intelligence (MarketWatch Intelligence)

**Phase:** All Phases
**Purpose:** Data reports, analytics tools, and operator intelligence

#### UI Pages/Apps
- **Intelligence Dashboard** — Central hub for all reports and analytics
- **MCI R-DATA-003 Viewer** — LA 2024 collision data report
- **HBI Score Distribution** — Market-wide HBI analytics
- **Collision → Credit Timeline Tool** — Interactive impact timeline
- **BRE Compliance Checker** — Self-serve compliance assessment
- **Operator Dashboard** — Personalized operator performance view

#### AI Workflows
- **Report Generator** — AI compiles custom intelligence reports on demand
- **Trend Analyzer** — Bot identifies emerging patterns in collision/credit data
- **Anomaly Detector** — AI flags unusual patterns in operator metrics
- **Predictive Modeler** — Bot forecasts market trends and operator outcomes

---

### 11. Playbooks

**Phase:** All Phases
**Purpose:** Standardized guides, checklists, and operational procedures

#### UI Pages/Apps
- **Playbook Library** — Searchable catalog of all guides
- **Exhibit-Ready Packet Guide** — Interactive packet assembly walkthrough
- **HBI Scoring Playbook** — Step-by-step scoring methodology
- **VDI 80+ Checklist** — Interactive documentation checklist
- **Cure Window Calibration Guide** — Timeline planning tool
- **Admin Failure Prevention Guide** — Best practices reference

#### AI Workflows
- **Playbook Recommender** — AI suggests relevant playbooks based on client situation
- **Checklist Enforcer** — Bot verifies all checklist items before milestone advancement
- **Playbook Updater** — AI flags outdated content and suggests revisions
- **Custom Playbook Generator** — AI creates tailored playbooks for unique situations

---

### 12. Accounting, Follow-Up & Planning

**Phase:** All Phases
**Status:** New
**Purpose:** Financial tracking, client follow-up automation, and strategic planning

#### UI Pages/Apps
- **Accounting Dashboard** — Revenue tracking, invoicing, payment status per client
- **Invoice Generator** — Create and send invoices tied to services rendered
- **Payment Tracker** — Outstanding balances, payment plans, aging reports
- **Follow-Up Center** — Unified view of all pending client follow-ups across departments
- **Follow-Up Calendar** — Scheduled touchpoints, reminders, and escalation timelines
- **Planning Hub** — Strategic planning workspace with goals, OKRs, and milestones
- **Department Budget Tracker** — Budget allocation and spend tracking per department
- **Revenue Forecasting** — Projected revenue based on pipeline and active clients
- **Service Cost Calculator** — Cost-per-service analysis for pricing optimization

#### AI Workflows (Interactive + Gamified)

**FPI Score (Financial Performance Index)** — The gamified score for this department. Tracks payment timeliness, invoice clarity, budget adherence, and follow-up responsiveness. Visible on the Accounting Dashboard with trend line and peer comparison.

- **Invoice Walkthrough** *(Interactive)* — When a service completes, bot initiates: "Your PIFR Plus recovery is done. Let me build your invoice. Here's what's included..." Presents line items interactively — member reviews, confirms, or questions each. Bot explains charges in plain language. Approving and sending = **+30 XP**. Paying within 48hrs of issue = **+50 XP** bonus + FPI boost.
- **Payment Plan Builder** *(Interactive)* — For larger balances, bot offers: "I see $2,400 outstanding. Want to set up a plan? Here are 3 options..." Presents plan options as cards with monthly amounts, timelines, and total cost. Member selects → bot sets up auto-payments → tracks adherence. Each on-time payment = **+50 XP**. Completing a full payment plan = **+200 XP** + **Clean Ledger** badge progress.
- **Billing Clarity Bot** *(Interactive)* — Member can tap any invoice line item and ask "What's this?" Bot explains the charge, links it to the service record, and shows the SOW that authorized it. Zero confusion = better FPI. Members who review 100% of invoice items before paying earn a **Detail-Oriented** achievement.
- **Follow-Up Responder** *(Interactive + Gamified)* — When a follow-up is due, bot sends interactive prompt: "Quick check-in: How's your credit dispute Round 2 going? [On track / Need help / Completed]" Member responds → bot routes to appropriate next action. Responding within 24hrs = **+40 XP**. 10 consecutive fast responses = **Responsive Member** badge.
- **Budget Health Check** *(Interactive)* — Quarterly bot conversation: "Let's review your HIRECAR spend this quarter. You've used 3 services totaling $X. Here's your ROI so far..." Interactive breakdown with ROI per service. Bot recommends optimizations. Completing the review = **+50 XP**.
- **Aging Alert Game** *(Interactive + Gamified)* — Bot turns outstanding balances into a clearance challenge: "You have 2 invoices aging past 30 days. Clear both this week for a **+150 XP** bonus and FPI boost." Shows countdown timer. Clearing before the deadline = bonus XP + animated celebration. Maintaining zero aging for 6 months = **Clean Ledger** badge.
- **Planning Sprint** *(Interactive)* — Bot runs a quarterly planning session as a guided conversation: "Let's set your goals for Q2. Based on your journey, I recommend focusing on: [Credit: Reach 700] [Operations: HBI 80+] [Funding: Pre-qualify]. Which resonates?" Member selects → bot builds the action plan → sets milestone reminders. Completing quarterly goals = **+500 XP** quest reward.
- **Financial Snapshot** *(Interactive)* — Weekly 60-second interactive report: bot presents key numbers as swipeable cards (spent this week, saved this month, upcoming due, FPI trend). Member can drill into any card. Reviewing weekly = part of daily streak. 12 consecutive weeks = **Financially Aware** badge.
- **Audit Trail Explorer** *(Interactive)* — Member can ask bot: "Show me everything billed in January" or "Why did my FPI drop?" Bot pulls the audit trail, presents it visually, explains each event. Full transparency builds trust and engagement.

---

### 13. Marketing & Sales

**Phase:** Intake / Scaling
**Status:** New
**Purpose:** Client acquisition, brand growth, sales pipeline management, and conversion optimization

#### UI Pages/Apps
- **Sales Pipeline Dashboard** — Visual funnel from lead to closed client
- **Lead Intake Portal** — Landing pages and intake forms for new prospects
- **CRM View** — Client relationship management with interaction history
- **Campaign Manager** — Create, launch, and track marketing campaigns
- **Referral Program Hub** — Operator-to-operator referral tracking and rewards
- **Brand Asset Library** — Logos, templates, copy blocks, approved messaging
- **Sales Playbook** — Scripts, objection handling, and conversion workflows
- **Performance Analytics** — CAC, LTV, conversion rates, channel performance
- **Social Media Command Center** — Cross-platform content scheduling and analytics

#### AI Workflows
- **Lead Scoring Engine** — AI scores incoming leads by conversion likelihood
- **Lead Nurture Sequences** — Bot sends personalized drip campaigns based on lead behavior
- **Sales Script Generator** — AI creates customized pitch scripts per prospect profile
- **Campaign ROI Analyzer** — Bot tracks campaign spend vs. acquisition and recommends optimization
- **Referral Match Bot** — AI identifies high-value referral opportunities among operators
- **Content Generator** — Bot creates marketing copy, social posts, and email templates
- **Competitor Intelligence** — AI monitors market positioning and competitor activity
- **Conversion Optimizer** — Bot A/B tests messaging and recommends winning variants
- **Client Reactivation Engine** — AI identifies dormant clients and creates win-back campaigns

---

### 14. HIRECAR Membership Services (Member Facing)

**Phase:** All Phases
**Status:** Core Operations
**Purpose:** The operational function of HIRECAR — this is how members experience and interact with every service. Membership Services is the delivery layer that sits between the member and all departments, managing enrollment, access, service fulfillment, communication, and member satisfaction.

> **Key distinction:** Departments 1–13 define *what* HIRECAR offers.
> Membership Services defines *how* the member receives it.

#### UI Pages/Apps
- **Member Portal (Home)** — Personalized dashboard showing active services, upcoming actions, and journey status
- **Membership Enrollment** — Tiered membership signup (e.g., Standard, Operator, First Class) with plan comparison
- **Service Catalog** — Browsable catalog of all available HIRECAR services across departments, filtered by membership tier
- **My Services** — Active service subscriptions, usage history, and service status per department
- **Appointment & Scheduling Center** — Unified booking across all departments (credit sessions, roadside, rentals, coaching)
- **Document Vault** — Secure member document storage (claims, recovery packets, insurance docs, invoices, VDI records)
- **Message Center** — Unified inbox for all communications — AI bot messages, department updates, follow-ups, alerts
- **Support & Help Desk** — Ticket-based support with live chat, FAQ, and escalation paths
- **Member Profile & Settings** — Personal info, vehicle registry, payment methods, notification preferences
- **Referral & Rewards Hub** — Track referrals, earned rewards, loyalty points, and tier progression
- **Member Reviews & Feedback** — Rate services, submit feedback, view service quality metrics

#### AI Workflows (Interactive + Gamified)

**MSI Score (Member Service Index)** — The gamified score for this department. Reflects how engaged, responsive, and active a member is across all HIRECAR services. The MSI is the "heartbeat" score — it ties all department scores together from the member's perspective. Visible on the Member Portal with pulse animation.

**HIRECAR Composite Score** — The single number that combines HBI + VDI + BRE + CRI + FPI + MSI into one unified member health metric. Drives tier advancement and unlocks premium perks.

- **Welcome Journey** *(Interactive)* — When a new member enrolls, bot launches a guided onboarding quest: "Welcome to HIRECAR. I'm your concierge. Let's get you set up in 5 steps." Each step is an interactive conversation (profile → vehicle registry → first service → document upload → schedule first appointment). Each step completed = **+50 XP**. Completing all 5 = **+100 XP** bonus + **Onboarded** badge + MSI baseline established.
- **Service Discovery Engine** *(Interactive)* — Bot presents services as an interactive quiz: "Answer 5 questions and I'll show you exactly which HIRECAR services fit your situation." Swipeable cards with "This applies to me / Not right now" for each scenario. Results page shows matched services ranked by impact. Completing discovery = **+30 XP**. Activating a recommended service = **+75 XP**.
- **Appointment Game** *(Interactive + Gamified)* — Bot makes scheduling feel rewarding: "You have 3 services that need attention this month. Book all 3 and earn the **On Schedule** bonus (+100 XP)." Interactive calendar view — tap a service → bot suggests optimal times → member confirms. Showing up to all booked appointments in a month = **Perfect Attendance** badge progress.
- **Document Vault Quest** *(Interactive + Gamified)* — Bot gamifies document completeness: "Your vault is 62% complete. Here's what's missing..." Each missing doc is a mini-quest. Bot explains why it matters, how to get it, and offers to help (e.g., "Want me to request your insurance card from your provider?"). Each upload = **+25 XP** + vault completion % rises. Hitting 100% = **+200 XP** + **Vault Master** badge.
- **Support Concierge** *(Interactive)* — When member needs help, bot starts a conversational triage: "What do you need help with today?" → category selection → bot attempts resolution → if stuck, seamlessly connects to human with full context pre-loaded. Rating the support experience afterward = **+10 XP**. High ratings contribute to MSI.
- **Engagement Pulse** *(Interactive + Gamified)* — Bot tracks daily/weekly engagement and makes it visible: "You're on a 12-day streak! Here's what you've accomplished this week..." Animated streak counter on Member Portal. Daily login = **+5 XP**. 7-day streak = **+100 XP** bonus. 30-day streak = **Streak King** badge. Breaking a streak resets the counter but retains earned XP.
- **Tier Progression Coach** *(Interactive)* — Bot acts as a personal advisor for tier advancement: "You're 340 XP from Operator tier. Here are the 3 fastest ways to get there..." Presents actionable recommendations ranked by XP value and effort. Member taps one → bot queues the workflow. Reaching a new tier = celebration animation + **+500 XP** + unlocked perks displayed.
- **Cross-Department Navigator** *(Interactive)* — When a member's journey spans departments, bot manages the handoff conversationally: "Your credit dispute just resolved — great work! That moves you to the Operator Standards phase. Ready to check your HBI score?" Member confirms → bot bridges to the next department's workflow seamlessly, carrying context and XP progress.
- **Monthly Recap & Rewards** *(Interactive)* — End-of-month interactive report: bot walks member through achievements, score changes, XP earned, badges unlocked, and progress toward quests. Presented as swipeable achievement cards. "You earned 450 XP this month, raised your CRI by 12 points, and completed 2 quests. Here's your badge..." Reviewing the recap = **+20 XP**.
- **Renewal & Upgrade Advisor** *(Interactive)* — Before membership renewal, bot runs an interactive value review: "Here's what you used this year, what it saved you, and what you'd unlock at the next tier." Side-by-side comparison. Member can ask questions. Renewing = **+100 XP**. Upgrading tier = **+300 XP** + immediate access to new perks with guided tour.

---

### 15. HIRECAR HQ (Automotive Service Supplier / Automotive Service Buyer)

**Phase:** All Phases
**Status:** Core Operations
**Purpose:** The B2B backbone of HIRECAR — a marketplace and management system where automotive service suppliers list their services and HIRECAR (as the buyer) procures, vets, and routes those services to fulfill member needs. HQ is the supply chain engine that powers every department's service delivery.

> **Key distinction:** Membership Services is the *front of house* (member-facing).
> HIRECAR HQ is the *back of house* (supplier-facing, procurement, fulfillment).

#### UI Pages/Apps

**Supplier Side (Automotive Service Suppliers)**
- **Supplier Portal** — Onboarding, profile, service listings, and compliance status for service providers
- **Service Listing Manager** — Suppliers create/edit service offerings (towing, credit repair, body shops, insurance, EV charging, etc.)
- **Bid & RFQ Board** — Suppliers respond to HIRECAR requests for quotes on member service needs
- **Supplier Performance Dashboard** — Ratings, response times, fulfillment rates, member feedback
- **Payout & Billing Center** — Invoice submission, payment tracking, and payout history
- **Compliance & Certification Hub** — Upload licenses, insurance, certifications; track renewal deadlines
- **Supplier Communication Center** — Direct messaging with HIRECAR HQ operations team

**Buyer Side (HIRECAR as Procurement / Operations)**
- **Procurement Dashboard** — Overview of all active supplier relationships, contracts, and spend
- **Supplier Directory** — Searchable, filterable catalog of vetted suppliers by service type, region, rating
- **Service Fulfillment Tracker** — Track every service request from member need → supplier assignment → completion
- **Quality Assurance Console** — Review supplier performance, handle disputes, manage SLAs
- **Contract & Agreement Manager** — Create, negotiate, and store supplier contracts and SLAs
- **Cost Analysis & Optimization** — Service cost trends, supplier price comparison, margin analysis
- **Vendor Scorecard** — Aggregated supplier scoring (quality, reliability, cost, compliance)
- **Capacity Planner** — View supplier availability and capacity by region and service type

**Marketplace (Connecting Supply & Demand)**
- **Service Matching Engine UI** — Visual interface showing how member requests get matched to suppliers
- **Regional Coverage Map** — Geographic view of supplier coverage across LA, SF, and expansion markets
- **Rate Card Manager** — Standardized pricing tiers negotiated with supplier network

#### AI Workflows

**Supplier Management**
- **Supplier Vetting Bot** — AI reviews supplier applications, checks credentials, flags risks
- **Compliance Monitor** — Bot tracks supplier license/cert expirations, auto-sends renewal reminders
- **Performance Analyzer** — AI scores suppliers on quality, speed, cost, and member satisfaction
- **Supplier Onboarding Assistant** — Bot guides new suppliers through profile setup and listing creation

**Procurement & Fulfillment**
- **Service Matcher** — AI matches inbound member service requests to the best available supplier based on type, location, rating, availability, and cost
- **Auto-Dispatch Engine** — Bot automatically assigns and dispatches suppliers for time-sensitive services (roadside, towing)
- **Fulfillment Monitor** — AI tracks service delivery in real-time, flags delays, triggers escalation
- **Cost Optimizer** — Bot analyzes procurement spend and recommends supplier switches or renegotiations
- **Demand Forecaster** — AI predicts service demand by type and region to inform supplier capacity planning

**Quality & Operations**
- **SLA Enforcer** — Bot monitors supplier SLA compliance, auto-generates violation reports
- **Dispute Resolution Bot** — AI mediates service quality disputes between HIRECAR and suppliers
- **Rate Negotiator Assistant** — Bot provides market data and benchmarks to support rate negotiations
- **Supply Gap Detector** — AI identifies service categories or regions where supplier coverage is thin
- **Audit Bot** — Automated supplier audits checking documentation, insurance, and certification validity

---

### 16. Client Milestone Journey (Core System)

**Phase:** All Phases
**Purpose:** The system that connects all departments — tracks client progression and orchestrates which department tools, pages, and AI workflows are active

#### UI Pages/Apps
- **Journey Map Dashboard** — Visual client journey with current phase highlighted
- **Milestone Tracker** — Granular milestone completion tracking
- **Department Handoff View** — Shows which departments are active/upcoming for each client
- **Progress Timeline** — Historical view of all milestones achieved
- **Next Steps Panel** — AI-recommended next actions for the client

#### AI Workflows
- **Milestone Evaluator** — AI assesses when a client is ready to advance phases
- **Department Router** — Bot determines which department workflows to activate next
- **Journey Orchestrator** — AI coordinates cross-department workflows for seamless handoffs
- **Progress Reporter** — Bot generates periodic progress reports for clients and operators
- **Bottleneck Detector** — AI identifies where clients are stalling and recommends interventions
- **Completion Predictor** — Bot estimates timeline to next milestone based on historical data

---

## Architecture Notes

### How Departments Connect via the Journey

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                        HIRECAR SYSTEM ARCHITECTURE                         ║
╚══════════════════════════════════════════════════════════════════════════════╝

┌──────────────────────────────────────────────────────────────────────────────┐
│                    HIRECAR MEMBERSHIP SERVICES (Front of House)             │
│         The operational layer — how EVERY member experiences HIRECAR        │
│                                                                            │
│  ┌────────────┐ ┌──────────┐ ┌──────────────┐ ┌──────────┐ ┌───────────┐  │
│  │ Member     │ │ Service  │ │ Scheduling & │ │ Document │ │ Support & │  │
│  │ Portal     │ │ Catalog  │ │ Appointments │ │ Vault    │ │ Help Desk │  │
│  └────────────┘ └──────────┘ └──────────────┘ └──────────┘ └───────────┘  │
│                                                                            │
│  Member interacts here ──▶ Services delivered from departments below       │
└───────────────────────────────────┬──────────────────────────────────────────┘
                                    │
              ┌─────────────────────┼──────────────────────┐
              ▼                     ▼                      ▼
   ┌─────────────────┐  ┌────────────────────┐  ┌──────────────────┐
   │ MARKETING &     │  │ CLIENT MILESTONE   │  │ MW INTELLIGENCE  │
   │ SALES           │  │ JOURNEY            │  │ (Data & Reports) │
   │ (Lead capture)  │  │ (Routing backbone) │  │ (All phases)     │
   └────────┬────────┘  └────────┬───────────┘  └──────────────────┘
            │                    │
            ▼                    ▼
   ┌─────────────────────────────────────────────────────────────────┐
   │                    SERVICE DEPARTMENTS                          │
   │                                                                 │
   │  INTAKE ──▶ RECOVERY ──▶ REBUILDING ──▶ OPERATING ──▶ SCALING  │
   │                                                                 │
   │  ┌──────────────┐  ┌──────────────┐  ┌────────────────────┐    │
   │  │ Collision +  │  │ Recovery +   │  │ Credit Repair      │    │
   │  │ Claims       │  │ PIFR         │  │ (HIRECREDIT)       │    │
   │  └──────────────┘  └──────────────┘  └────────────────────┘    │
   │  ┌──────────────┐  ┌──────────────┐  ┌────────────────────┐    │
   │  │ Auto         │  │ Operator     │  │ Biz Funding        │    │
   │  │ Insurance    │  │ Standards    │  │ (SeedXchange)      │    │
   │  └──────────────┘  └──────────────┘  └────────────────────┘    │
   │  ┌──────────────┐  ┌──────────────┐  ┌────────────────────┐    │
   │  │ Roadside     │  │ Mobility +   │  │ Entertainment      │    │
   │  │              │  │ Rentals      │  │                    │    │
   │  └──────────────┘  └──────────────┘  └────────────────────┘    │
   │  ┌──────────────┐  ┌──────────────┐                            │
   │  │ Playbooks    │  │ Accounting,  │                            │
   │  │              │  │ Follow-Up &  │                            │
   │  │              │  │ Planning     │                            │
   │  └──────────────┘  └──────────────┘                            │
   └────────────────────────────┬────────────────────────────────────┘
                                │
                                │ Service requests fulfilled by ▼
                                │
┌───────────────────────────────┴──────────────────────────────────────────────┐
│                     HIRECAR HQ (Back of House)                              │
│     The B2B supply chain — automotive service suppliers & procurement       │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                      MARKETPLACE ENGINE                             │    │
│  │  ┌──────────────┐  ┌────────────────┐  ┌────────────────────────┐  │    │
│  │  │ Service      │  │ Regional       │  │ Rate Card              │  │    │
│  │  │ Matching     │  │ Coverage Map   │  │ Manager                │  │    │
│  │  └──────────────┘  └────────────────┘  └────────────────────────┘  │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│  ┌──────────────────────┐          ┌──────────────────────────────────┐    │
│  │ SUPPLIER SIDE        │          │ BUYER SIDE (HIRECAR Procurement) │    │
│  │                      │          │                                  │    │
│  │ • Supplier Portal    │  ◄───►   │ • Procurement Dashboard         │    │
│  │ • Service Listings   │          │ • Supplier Directory             │    │
│  │ • Bid & RFQ Board    │          │ • Fulfillment Tracker            │    │
│  │ • Performance Stats  │          │ • QA Console                     │    │
│  │ • Payout Center      │          │ • Contract Manager               │    │
│  │ • Compliance Hub     │          │ • Cost Optimization              │    │
│  └──────────────────────┘          └──────────────────────────────────┘    │
│                                                                             │
│  Suppliers: Tow companies, body shops, credit agencies, insurers,          │
│  EV charging networks, detailers, glass repair, rental fleets, etc.        │
└─────────────────────────────────────────────────────────────────────────────┘

FLOW:  Member ──▶ Membership Services ──▶ Department ──▶ HQ matches supplier ──▶ Service delivered
```

### AI Bot Delegation Model

Each department's AI workflows are designed to be **handed off to an AI bot** that:
1. **Monitors** — Watches for triggers (new client, milestone reached, deadline approaching)
2. **Executes** — Runs the workflow (generate document, send reminder, score application)
3. **Reports** — Logs results and surfaces them in the relevant dashboard
4. **Escalates** — Flags issues that need human review to the operator

---

## Next Steps

1. Build department UI pages starting with active departments
2. Implement Client Milestone Journey as the routing backbone
3. Stand up AI workflow engines per department
4. Connect everything through the Journey orchestrator
5. Launch "Coming 2026" departments as they become ready
