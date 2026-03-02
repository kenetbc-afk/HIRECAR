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

#### AI Workflows
- **Automated Credit Intake** — Bot collects client credit data, pulls reports, identifies disputes
- **Dispute Letter Generator** — AI drafts dispute letters based on credit report analysis
- **Tradeline Strategy Engine** — AI recommends optimal tradeline actions
- **Collections Alert Monitor** — Bot monitors for new collections, auto-triggers protection workflows
- **Coaching Session Prep** — AI pre-analyzes client profile before CreditWithKen sessions
- **Credit Score Projection** — AI models projected score improvements over time

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

#### AI Workflows
- **HBI Score Calculator** — AI continuously scores operator across all behavioral metrics
- **BRE Compliance Checker** — Bot audits operator status against BRE requirements
- **VDI Auto-Scorer** — AI reviews uploaded docs and calculates VDI score
- **Cure Window Alerter** — Bot monitors cure deadlines and sends escalating reminders
- **Vendor Audit Prep Bot** — AI pre-audits vendor relationships before formal review

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

#### AI Workflows
- **Invoice Generator Bot** — AI creates invoices from completed service records
- **Payment Reminder Engine** — Bot sends escalating payment reminders on schedule
- **Follow-Up Scheduler** — AI schedules follow-ups based on client milestone and activity
- **Follow-Up Script Generator** — Bot prepares talking points and context for each follow-up
- **Aging Report Analyzer** — AI identifies at-risk accounts and recommends collection actions
- **Budget Forecaster** — Bot models department spending and flags overruns
- **Revenue Projector** — AI forecasts revenue by department, service, and client cohort
- **Strategic Planning Advisor** — Bot analyzes performance data and recommends quarterly goals
- **Audit Trail Logger** — AI maintains comprehensive audit logs for all financial transactions

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

#### AI Workflows
- **Onboarding Concierge** — AI guides new members through enrollment, profile setup, and initial service activation
- **Service Recommender** — Bot analyzes member profile and journey phase to recommend relevant services
- **Appointment Coordinator** — AI schedules across departments, prevents conflicts, sends reminders
- **Document Organizer** — Bot auto-files incoming documents into the vault, tags them, and links to relevant services
- **Support Triage Bot** — AI categorizes support requests, resolves common issues, escalates complex ones
- **Member Health Monitor** — Bot tracks engagement, flags at-risk members (inactive, overdue, stalled)
- **Renewal & Retention Engine** — AI manages membership renewals, sends upgrade recommendations, prevents churn
- **Satisfaction Scorer** — Bot aggregates feedback and service metrics into a member satisfaction score
- **Cross-Department Coordinator** — AI ensures smooth handoffs when a member's needs span multiple departments
- **Notification Orchestrator** — Bot manages notification frequency and priority so members aren't overwhelmed

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
