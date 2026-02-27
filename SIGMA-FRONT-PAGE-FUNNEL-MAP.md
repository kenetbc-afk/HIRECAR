# HIRECAR MarketWatch! — Front Page Sigma: Link-to-Funnel Lifecycle Map

> Every link on the front page traced through its funnel lifecycle.
> Sigma (Σ) = the sum of all actions per section that feed into the conversion funnels.

---

## MASTER STATE MACHINE (Remote Entry Sequence)

All "Apply" / "Purchase" / "Reserve" actions ultimately feed into this state machine:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    REMOTE ENTRY STATE MACHINE                               │
│                                                                             │
│  ┌──────┐    ┌──────────────┐    ┌───────────┐    ┌────────┐               │
│  │ idle │───▶│ tronOverlay  │───▶│ leadModal │───▶│ verify │               │
│  └──────┘    └──────────────┘    └───────────┘    └────────┘               │
│     │              │                   │               │                    │
│     │              │ (remembered       │ (no mobile)   │ (4-digit code)    │
│     │              │  user: skip       │               │                    │
│     │              │  lead modal)      ▼               ▼                    │
│     │              │            ┌──────────┐    ┌──────────┐               │
│     │              └───────────▶│ thankYou │◀───│ thankYou │               │
│     │                           └──────────┘    └──────────┘               │
│     │                                │                                      │
│     │                                ▼                                      │
│     │                         ┌────────────┐                                │
│     │                         │  carStart   │ (v20: collapsed)              │
│     │                         └────────────┘                                │
│     │                                │                                      │
│     │         (remembered user)      ▼                                      │
│     │         ┌──────────────┐ ┌──────────────┐                             │
│     └────────▶│ pushToStart  │▶│ heroRevealed │  ← FINAL STATE             │
│               └──────────────┘ └──────────────┘                             │
│                                      │                                      │
│                                      ▼                                      │
│                             [LIVE button glows]                              │
│                          [Name · LIVE displayed]                             │
│                        [Full hero carousel active]                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Lead Data Captured at `leadModal`:
| Field        | Required | Storage                          |
|-------------|----------|----------------------------------|
| First Name  | Yes      | localStorage `mw_lead_data`      |
| Last Name   | Yes      | localStorage `mw_lead_data`      |
| Mobile      | No       | localStorage `mw_lead_data`      |
| TOS Accept  | Yes      | (gate only)                      |
| Remember Me | No       | Controls `remember` flag in JSON |

---

## Σ1 — UTILITY BAR (Top Sticky Bar)

```
╔══════════════════════════════════════════════════════════════════════════╗
║  UTILITY BAR — 4 Actions                                               ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  [Subscribe]          [HIRECAR.LA ↗]       [Member Login]  [Apply →]   ║
║      │                     │                    │              │        ║
║      ▼                     ▼                    ▼              ▼        ║
║  Σ1-A: Subscribe      Σ1-B: External       Σ1-C: Member   Σ1-D: CTA   ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Σ1-A: Subscribe
```
User clicks "Subscribe"
    └──▶ href="#" (placeholder — no active funnel destination)
         └──▶ FUTURE: Email capture / newsletter signup funnel
              └──▶ Expected integration: CRM lead list
```

### Σ1-B: HIRECAR.LA ↗
```
User clicks "HIRECAR.LA ↗"
    └──▶ href="#" (placeholder — intended: https://www.hirecar.la/)
         └──▶ EXIT to flagship site
              └──▶ Lifecycle terminates (external handoff)
              └──▶ User enters HIRECAR.LA funnel (separate property)
```

### Σ1-C: Member Login
```
User clicks "Member Login"
    └──▶ href="#member"
         └──▶ Scrolls to: sec-member (First Class Membership module)
              └──▶ FUNNEL: Member Authentication
                   ├──▶ Existing member → Sign-in flow
                   └──▶ New visitor → Upsell to First Class Membership
                        └──▶ Redirects to Apply to Qualify funnel (Σ1-D)
```

### Σ1-D: Apply to Qualify → (PRIMARY CTA)
```
User clicks "Apply to Qualify →"
    └──▶ href="#" (placeholder)
         └──▶ INTENDED FUNNEL: First Class Qualification
              ├──▶ Desktop mode: Scrolls to #rhs-apply (slide 5)
              └──▶ Remote mode: Triggers state machine
                   └──▶ idle → tronOverlay → leadModal → verify → thankYou → heroRevealed
                        └──▶ Then navigates to slide 5 (Purchase section)
```

---

## Σ2 — MASTHEAD (Logo + Brand Bar)

```
╔══════════════════════════════════════════════════════════════════════════╗
║  MASTHEAD — 3 Actions                                                   ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  [Brand/Logo]           [Sign In]              [Apply to Qualify →]     ║
║      │                     │                         │                  ║
║      ▼                     ▼                         ▼                  ║
║  Σ2-A: Brand           Σ2-B: Sign In           Σ2-C: CTA (=Σ1-D)      ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Σ2-A: Brand / Logo
```
User clicks Logo
    └──▶ Implicit: Scroll to top / reload
         └──▶ No funnel — identity anchor only
```

### Σ2-B: Sign In
```
User clicks "Sign In"
    └──▶ href="#member"
         └──▶ Same as Σ1-C (Member Login lifecycle)
```

### Σ2-C: Apply to Qualify →
```
    └──▶ Same lifecycle as Σ1-D (Primary CTA)
```

---

## Σ3 — MODE TOGGLE BAR

```
╔══════════════════════════════════════════════════════════════════════════╗
║  MODE TOGGLE — 2 Actions (changes entire page experience)              ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  [🖥 Desktop]                            [📱 Remote]                    ║
║      │                                       │                          ║
║      ▼                                       ▼                          ║
║  Σ3-A: Desktop Mode                    Σ3-B: Remote Mode               ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Σ3-A: Desktop Mode
```
User clicks "Desktop"
    └──▶ setMode('desktop')
         ├──▶ Removes dark-mode + remote-mode classes
         ├──▶ Shows full newspaper-style layout
         ├──▶ Clears all remote UI overlays
         ├──▶ Resets rhEntryState → 'idle'
         ├──▶ Persists to localStorage (mw_mode = 'desktop')
         └──▶ Scrolls to top
              └──▶ FUNNEL: Content consumption → scroll-based engagement
                   └──▶ Read articles → discover services → convert via section CTAs
```

### Σ3-B: Remote Mode
```
User clicks "Remote"
    └──▶ setMode('remote')
         ├──▶ Adds dark-mode + remote-mode classes
         ├──▶ Switches to full-screen vertical slide deck
         ├──▶ Triggers entry state machine (if idle):
         │    └──▶ rhStartRemoteEntry()
         │         ├──▶ Returning user (has mw_lead_data + remember):
         │         │    └──▶ Tron overlay (10s) → pushToStart → heroRevealed
         │         └──▶ New user:
         │              └──▶ Tron overlay (10s) → lead modal → [verify] → thankYou → heroRevealed
         ├──▶ Persists to localStorage (mw_mode = 'remote')
         ├──▶ Shows remote bottom bar
         └──▶ Updates entertainment label by city
              └──▶ FUNNEL: Immersive conversion journey
                   └──▶ Lead capture → slide navigation → Purchase (slide 5)
```

---

## Σ4 — BREAKING TICKER (Scrolling Marquee)

```
╔══════════════════════════════════════════════════════════════════════════╗
║  BREAKING TICKER — 5 Story Signals (awareness, not clickable)          ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  HIRECREDIT active ◆ 810,839 collisions ◆ SeedXchange Q1 ◆            ║
║  HBI Alert ◆ First Class Membership                                    ║
║      │                                                                  ║
║      ▼                                                                  ║
║  Σ4-A: Passive awareness — no direct click action                      ║
║  Purpose: Creates urgency + validates market intelligence               ║
║  Funnel role: TOP-OF-FUNNEL brand priming                              ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

Each ticker item maps to a product line:
```
"HIRECREDIT active in LA"        → Primes: Credit Repair funnel
"810,839 LA collisions"          → Primes: Collision + Claims / PIFR funnel
"SeedXchange Q1 2026"            → Primes: Business Funding funnel
"HBI Alert — Cure Lane"          → Primes: Operator Standards funnel
"First Class + Credit Card"      → Primes: Membership + Purchase funnel
```

---

## Σ5 — PRIMARY NAVIGATION (Mega-Menu Dropdowns)

```
╔══════════════════════════════════════════════════════════════════════════╗
║  PRIMARY NAV — 11 Categories × 3 Sub-columns Each                      ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  Credit     Collision  Operator   Recovery   Auto        Biz            ║
║  Repair▼    +Claims▼   Standards▼ +PIFR▼     Insurance▼  Funding▼      ║
║  [LEAD]                                                                 ║
║                                                                         ║
║  Mobility   Roadside   Entertain  MW Intel   Playbooks                 ║
║  +Rentals▼  ▼          ment▼      ligence▼   ▼                         ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Σ5-A: Credit Repair [LEAD] — 11 sub-links
```
Credit Repair (top-level)
    └──▶ href="#" → Scrolls to #sec-credit
         │
         ├── Services (5 links):
         │   ├── HIRECREDIT Overview       ──▶ #  → FUTURE: HIRECREDIT product page
         │   ├── Post-Incident Recovery    ──▶ #  → FUTURE: PIFR detail page
         │   ├── Credit Dispute + Tradeline──▶ #  → FUTURE: Service detail page
         │   ├── Collections Protection    ──▶ #  → FUTURE: Service detail page
         │   └── Auto Loan Catch-Up        ──▶ #  → FUTURE: Service detail page
         │       └──▶ ALL route to: Apply to Qualify funnel (end state)
         │
         ├── Coaching (3 links):
         │   ├── CreditWithKen 1-on-1      ──▶ #  → FUTURE: Booking page
         │   ├── Funding Readiness Program ──▶ #  → FUTURE: Program detail
         │   └── Approval Pathway Blueprint──▶ #  → FUTURE: Blueprint detail
         │       └──▶ ALL route to: CreditWithKen booking funnel
         │
         └── Intelligence (3 links):
             ├── Collision → Credit Timeline──▶ #  → FUTURE: Report/article
             ├── Billing Fog Guide          ──▶ #  → FUTURE: Guide/article
             └── How HIRECREDIT Works       ──▶ #  → FUTURE: Explainer
                 └──▶ ALL route to: Content consumption → awareness → Apply
```

### Σ5-B: Collision + Claims — 8 sub-links
```
Collision + Claims (top-level)
    └──▶ href="#"
         │
         ├── Coverage (3): LA Collision Data, Multi-Party, Claims Cycle
         │   └──▶ Content funnel → data awareness → PIFR upsell
         │
         ├── Recovery (3): PIFR SKU, Admin Failure, Custody Log
         │   └──▶ Service funnel → PIFR product selection → Apply
         │
         └── Data (2): MCI R-DATA-003, 239K Export
             └──▶ Intelligence funnel → report access → qualification
```

### Σ5-C: Operator Standards — 6 sub-links
```
Operator Standards (top-level)
    └──▶ href="#"
         │
         ├── BRE System (3): HBI Scoring, Revenue vs Cure Lane, Vendor Audit
         │   └──▶ Compliance funnel → HBI scoring → qualification → Revenue Lane
         │
         └── VDI Standards (3): Vehicle Doc Index, VDI 80+, Cure Window
             └──▶ Compliance funnel → documentation → VDI score improvement
```

### Σ5-D: Recovery + PIFR — 7 sub-links + preview card
```
Recovery + PIFR (top-level)
    └──▶ href="#"
         │
         ├── Recovery Services (4): PIFR Core, Plus, Max, Collections Shield
         │   └──▶ Product selection funnel → tiered SKU → purchase/apply
         │        ├── Core  = Basic recovery packet
         │        ├── Plus  = Multi-party claims
         │        ├── Max   = Full timeline defense
         │        └── Shield = Collections protection
         │
         ├── Intelligence (3): Admin Failure, Custody Log, Claims Tracker
         │   └──▶ Education funnel → problem awareness → PIFR upsell
         │
         └── [PREVIEW CARD]: "One Packet. One Timeline. Full Recovery."
             └──▶ Featured content → visual persuasion → More Info link
```

### Σ5-E: Auto Insurance — 7 sub-links
```
Auto Insurance (top-level)
    └──▶ href="#"
         │
         ├── Coverage (4): Operator Policies, Fleet, Gap/Deductible, Uninsured
         │   └──▶ Insurance product funnel → needs assessment → quote → apply
         │
         └── Resources (3): Delays→Collections, Billing Fog, Insurance+HIRECREDIT
             └──▶ Education funnel → cross-sell to HIRECREDIT
```

### Σ5-F: Biz Funding — 6 sub-links
```
Biz Funding (top-level)
    └──▶ href="#"
         │
         ├── SeedXchange (4): Q1 2026 Apps, 24hr Qualification, Fleet Expansion, Capital
         │   └──▶ Funding application funnel → qualification → 24hr process → approval
         │
         └── Readiness (3): Funding Assessment, HBI+Funding, Approval Pathway
             └──▶ Readiness assessment funnel → HBI scoring → funding access
```

### Σ5-G: Mobility + Rentals — 8 sub-links
```
Mobility + Rentals (top-level)
    └──▶ href="#" → Scrolls to #sec-mobility
         │
         ├── Fleet (4): Luxury, Daily Driver, Airport/Transfer, Long-Term
         │   └──▶ Rental booking funnel → vehicle selection → reservation
         │
         └── Membership (3): First Class, Private Driver, Chauffeur
             └──▶ Membership funnel → tier selection → qualification → apply
```

### Σ5-H: Roadside — 8 sub-links
```
Roadside (top-level)
    └──▶ href="#"
         │
         ├── Emergency (4): 24/7 Roadside, EV Charging, Tire/Battery, Tow
         │   └──▶ Emergency service funnel → immediate request → dispatch
         │
         └── Maintenance (3): Oil Change, Auto Glass, Detailing
             └──▶ Service booking funnel → schedule → confirm
```

### Σ5-I: Entertainment — 7 sub-links
```
Entertainment (top-level)
    └──▶ href="#" → Scrolls to #sec-ent
         │
         ├── Culture + Auto (4): Garage Series, Wrap Culture, Photography, Private Driver
         │   └──▶ Content funnel → brand engagement → community affinity → membership
         │
         └── Community (3): Operator Stories, Events, HIRECAR x LA
             └──▶ Community funnel → engagement → event attendance → brand loyalty
```

### Σ5-J: MW Intelligence — 6 sub-links
```
MW Intelligence (top-level)
    └──▶ href="#"
         │
         ├── Reports (4): MCI R-DATA-003, 239K Export, HBI Distribution, Collision Timeline
         │   └──▶ Data access funnel → report consumption → operator intelligence
         │
         └── Tools (3): HBI Calculator, BRE Checker, Operator Dashboard
             └──▶ Tool access funnel → self-assessment → qualification insight → apply
```

### Σ5-K: Playbooks — 7 sub-links
```
Playbooks (top-level)
    └──▶ href="#"
         │
         ├── Operator Guides (4): Exhibit-Ready, HBI Playbook, VDI Checklist, Cure Window
         │   └──▶ Education funnel → standard compliance → qualification readiness
         │
         └── Standards (3): Custody Log, Admin Failure Prevention, Revenue Lane
             └──▶ Compliance funnel → documentation → Revenue Lane eligibility
```

---

## Σ6 — REMOTE MODE HERO SLIDES (Vertical Slide Deck)

```
╔══════════════════════════════════════════════════════════════════════════╗
║  REMOTE HERO SLIDES — 6 Sections × 4 CTA Buttons Each                 ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  ┌──────────┐  ┌──────────┐  ┌──────────┐                              ║
║  │ Slide 0  │  │ Slide 1  │  │ Slide 2  │                              ║
║  │ CREDIT   │  │ STORIES  │  │ MOBILITY │                              ║
║  │ HERO     │  │          │  │          │                              ║
║  └──────────┘  └──────────┘  └──────────┘                              ║
║       │             │             │                                      ║
║  ┌──────────┐  ┌──────────┐  ┌──────────┐                              ║
║  │ Slide 3  │  │ Slide 4  │  │ Slide 5  │                              ║
║  │ SERVICES │  │ ENTERTAIN│  │ PURCHASE │                              ║
║  │          │  │ MENT     │  │ (APPLY)  │                              ║
║  └──────────┘  └──────────┘  └──────────┘                              ║
║                                                                         ║
║  Navigation: ↑/↓ arrows, side dots, or swipe                           ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Σ6-0: Credit Hero (Slide 0 — #rhs-hero)
```
"Your credit took a hit. We bring it back."

4 CTA Buttons:
┌────────────────────────────────────────────────────────────────────┐
│ [Read]        [Info]        [Reserve]       [⚡ Purchase]          │
│    │             │              │                │                 │
│    ▼             ▼              ▼                ▼                 │
│ setMode      rhUpdate       rhNavTo(5)      rhNavTo(5)            │
│ ('desktop')  TopStories     Purchase         Purchase             │
│              ('info')       Slide            Slide                 │
│    │             │              │                │                 │
│    ▼             ▼              ▼                ▼                 │
│ EXIT to      Stories HL     ┌──────────────────────┐              │
│ Desktop      changes to     │ PURCHASE CAROUSEL    │              │
│ mode         "How           │ (6 product cards)    │              │
│ (newspaper   HIRECREDIT     │ See Σ6-5 below       │              │
│  layout)     Works"         └──────────────────────┘              │
└────────────────────────────────────────────────────────────────────┘

3 News Cards:
┌────────────────────────────────────────────────────────────────────┐
│ [Card 1: Collision Data]  → rhCTA('credit','news1') → future     │
│ [Card 2: Recovery]        → rhCTA('credit','news2') → future     │
│ [Card 3: MW Intelligence] → rhCTA('credit','news3') → future     │
└────────────────────────────────────────────────────────────────────┘

5 Hero Dots (background image cycle):
    Each dot → rhGoHeroSlide(0-4) → changes hero background image
```

### Σ6-1: Top Stories (Slide 1 — #rhs-stories)
```
Headline dynamically set by last CTA action:
  'read'     → "810,839 Collisions in LA in 2024"
  'info'     → "How HIRECREDIT Recovery Works"
  'reserve'  → "Reserve Your HIRECAR First Class Vehicle"
  'purchase' → "HIRECAR Credit Card + Membership"

4 CTA Buttons: [Read] [Info] [Reserve] [⚡ Purchase]
    └──▶ Same lifecycle as Slide 0 CTAs
         + Updates headline/subtitle/cards via STORIES_VARIANTS

3 News Cards: Dynamic based on variant selection
    └──▶ rhCTA('stories','n1/n2/n3') → future article pages
```

### Σ6-2: Mobility (Slide 2 — #rhs-mobility)
```
"First Class Mobility."

5 CTA Buttons:
┌────────────────────────────────────────────────────────────────────┐
│ [Read] [Info] [Reserve] [⚡ Purchase] [Broker]                     │
│                   │           │          │                          │
│                   ▼           ▼          ▼                          │
│              rhNavTo(5)  rhNavTo(5)  rhCTA('mobility','broker')    │
│              Purchase    Purchase    → Broker membership flow       │
└────────────────────────────────────────────────────────────────────┘

3 News Cards:
    └──▶ rhCTA('mobility','n1/n2/n3') → future fleet/membership content
```

### Σ6-3: Services (Slide 3 — #rhs-services)
```
"Every service. One standard."

4 CTA Buttons: [Read] [Info] [Reserve] [⚡ Purchase]
    └──▶ Same lifecycle pattern

Service Cards within slide:
    ├── Collision + Claims → informational
    └── Recovery + PIFR → informational
```

### Σ6-4: Entertainment (Slide 4 — #rhs-ent)
```
"Entertainment + Auto."

4 CTA Buttons: [Trending] [News] [Weekend] [⚡ Culture]
┌────────────────────────────────────────────────────────────────────┐
│ rhCTA('ent','trending') → future trending content                  │
│ rhCTA('ent','news')     → future city-specific news                │
│ rhCTA('ent','weekend')  → future weekend events                    │
│ rhCTA('ent','culture')  → future culture features                  │
└────────────────────────────────────────────────────────────────────┘

4 Image Thumbnails:
    └──▶ rhSetEntBg(this, url) → changes section background image
         └──▶ Visual engagement only (no funnel transition)
```

### Σ6-5: Purchase / Apply (Slide 5 — #rhs-apply) ← CONVERSION SLIDE
```
"First Class Qualification"
"Standards are the price of volume. Apply to qualify for HIRECAR First Class."

THIS IS THE PRIMARY CONVERSION DESTINATION.
All "Purchase" and "Reserve" CTAs across every slide route HERE.

6-Card Product Carousel:
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  Card 1: HIRECAR Credit Card                                      │
│  ├── [ℹ️ Info] → rhCTA('credit-prog','info')                      │
│  └── [⚡ Buy]  → rhCTA('credit-prog','purchase')                  │
│       └──▶ FUTURE: Credit card application funnel                  │
│                                                                    │
│  Card 2: First Class Membership                                   │
│  ├── [📅 Reserve] → rhCTA('membership','reserve')                 │
│  └── [⚡ Buy]     → rhCTA('membership','purchase')                │
│       └──▶ FUTURE: Membership sign-up funnel                      │
│                                                                    │
│  Card 3: Collision + Claims (PIFR)                                │
│  ├── [ℹ️ Info] → rhCTA('collision','info')                        │
│  └── [⚡ Buy]  → rhCTA('collision','purchase')                    │
│       └──▶ FUTURE: PIFR SKU selection funnel                      │
│                                                                    │
│  Card 4: Chauffeur + Private Driver                               │
│  ├── [📅 Reserve] → rhCTA('chauffeur','reserve')                  │
│  └── [⚡ Buy]     → rhCTA('chauffeur','purchase')                 │
│       └──▶ FUTURE: Chauffeur booking funnel                       │
│                                                                    │
│  Card 5: Auto Insurance                                           │
│  ├── [ℹ️ Info] → rhCTA('insurance','info')                        │
│  └── [⚡ Buy]  → rhCTA('insurance','purchase')                    │
│       └──▶ FUTURE: Insurance quote funnel                          │
│                                                                    │
│  Card 6: MW Intelligence Report                                   │
│  ├── [📰 Read] → setMode('desktop')                               │
│  └── [⚡ Buy]  → rhCTA('report','purchase')                       │
│       └──▶ FUTURE: Report purchase/download funnel                 │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘

Stats Row (3 metrics):
    HBI Score · Funding Readiness · Approval Pathway
    └──▶ Visual credibility signals (no click action)
```

---

## Σ7 — DESKTOP CONTENT SECTIONS (Scroll Layout)

```
╔══════════════════════════════════════════════════════════════════════════╗
║  DESKTOP SCROLL SECTIONS — Section-by-Section                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  #sec-credit ──▶ #sec-stories ──▶ #sec-trending ──▶ #sec-credit-repair ║
║       │              │                │                    │            ║
║       ▼              ▼                ▼                    ▼            ║
║  #sec-mobility ──▶ #sec-ent ──▶ #sec-services ──▶ #sec-member         ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Σ7-A: Credit Module (#sec-credit)
```
HIRECREDIT — Post-Incident Financial Recovery
    ├── Content: PIFR process explanation, HBI scoring context
    ├── Cards: Service descriptions
    └── FUNNEL EXIT: Leads to Apply to Qualify
         └──▶ Cross-references: Credit Repair nav (Σ5-A)
```

### Σ7-B: Top Stories (#sec-stories)
```
Top Stories
    ├── Horizontal scroll cards
    ├── Article previews with tags + timestamps
    └── FUNNEL: Content engagement → awareness → deeper section exploration
```

### Σ7-C: Credit Repair + Insurance (#sec-credit-repair)
```
Credit Repair · Auto Insurance
    ├── Cross-product section
    └── FUNNEL: Insurance + Credit integration awareness
         └──▶ HIRECREDIT + Insurance cross-sell
```

### Σ7-D: Mobility (#sec-mobility)
```
Mobility + Rentals
    ├── Horizontal scroll vehicle cards
    ├── Fleet images with pricing indicators
    └── FUNNEL: Vehicle browsing → reservation interest → membership
```

### Σ7-E: Entertainment (#sec-ent)
```
Entertainment + Auto
    ├── Grid of entertainment/culture content
    ├── City-specific news label (LA/Vegas/SF)
    └── FUNNEL: Brand engagement → community → loyalty → membership
```

### Σ7-F: Services (#sec-services)
```
Services (horizontal scroll)
    ├── 12 service cards with images + "Coming Soon" badges
    │   ├── Collision + Claims
    │   ├── Recovery + PIFR
    │   ├── Auto Glass
    │   ├── Roadside
    │   ├── Vehicle Detailing
    │   ├── Oil Change
    │   ├── Tire Maintenance
    │   ├── Smog Check
    │   ├── Gas + EV Charging
    │   ├── Photography + Content
    │   └── Tint + Wraps [Coming Soon]
    └── FUNNEL: Service discovery → individual service funnels (future)
```

### Σ7-G: First Class Membership (#sec-member)
```
First Class Membership Module
    ├── Membership benefits display
    ├── Tier information
    └── FUNNEL: Membership awareness → qualification → Apply to Qualify
         └──▶ Terminal CTA: Apply to Qualify funnel
```

---

## Σ8 — QUICK JUMP DOTS (Right-Side Navigation)

```
╔══════════════════════════════════════════════════════════════════════════╗
║  QUICK JUMP — 8 Dots (Desktop scroll navigation)                      ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  • Masthead (top)         → scrollIntoView('masthead')                 ║
║  • Top Stories            → scrollIntoView('#sec-stories')             ║
║  • Credit                 → scrollIntoView('#sec-credit')              ║
║  • Trending               → scrollIntoView('#sec-trending')            ║
║  • Mobility               → scrollIntoView('#sec-mobility')            ║
║  • Entertainment          → scrollIntoView('#sec-ent')                 ║
║  • Services               → scrollIntoView('#sec-services')            ║
║  • Membership             → scrollIntoView('#sec-member')              ║
║                                                                         ║
║  FUNNEL: Navigation utility only — accelerates discovery               ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## Σ9 — REMOTE SIDE NAVIGATION (Dot Navigation)

```
╔══════════════════════════════════════════════════════════════════════════╗
║  REMOTE SIDE NAV — 6 Dots (Remote slide navigation)                   ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  ● Credit Recovery   → rhNavTo(0) → #rhs-hero                         ║
║  ○ Top Stories       → rhNavTo(1) → #rhs-stories                      ║
║  ○ Mobility          → rhNavTo(2) → #rhs-mobility                     ║
║  ○ Services          → rhNavTo(3) → #rhs-services                     ║
║  ○ Entertainment     → rhNavTo(4) → #rhs-ent                          ║
║  ○ Purchase          → rhNavTo(5) → #rhs-apply   ← CONVERSION        ║
║                                                                         ║
║  FUNNEL: Slide navigation — guides toward Purchase (slide 5)           ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## Σ10 — REMOTE BOTTOM BAR

```
╔══════════════════════════════════════════════════════════════════════════╗
║  REMOTE BOTTOM BAR — 3 Actions                                        ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  [Menu/Hub]              [Scroll to Top]          [Exit to Desktop]    ║
║      │                        │                        │               ║
║      ▼                        ▼                        ▼               ║
║  Scrolls to              window.scrollTo           setMode             ║
║  #remoteHub              ({top:0})                 ('desktop')         ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## Σ11 — COMPANY BAR (Brand Network)

```
╔══════════════════════════════════════════════════════════════════════════╗
║  COMPANY BAR — 5 Brand Entities                                        ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  HIRECAR LLC     HIRECREDIT     CreditWithKen   SeedXchange   MW!     ║
║  (Flagship)      (Credit)       (Coaching)       (Funding)    (Here)  ║
║      │               │              │                │           │     ║
║      ▼               ▼              ▼                ▼           ▼     ║
║  Visit            Visit          Book a           Apply        Current ║
║  HIRECAR.LA →     HIRECREDIT →   Session →        Now →        Site   ║
║      │               │              │                │                 ║
║      ▼               ▼              ▼                ▼                 ║
║  EXIT:            FUTURE:        FUTURE:          FUTURE:              ║
║  hirecar.la       hirecredit     booking          seedxchange          ║
║  (external)       product page   calendar         application          ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## Σ12 — FOOTER

```
╔══════════════════════════════════════════════════════════════════════════╗
║  FOOTER — 4 Columns + Legal                                           ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  Col 1: Brand + Contact                                                ║
║  ├── 3 email addresses → mailto funnels                                ║
║  ├── Physical address → trust signal                                   ║
║  └── Phone number → direct contact funnel                              ║
║                                                                         ║
║  Col 2: News Categories (11 links)                                     ║
║  └──▶ All href="#" → Mirror primary nav (Σ5) destinations              ║
║       └──▶ FUTURE: Individual category landing pages                   ║
║                                                                         ║
║  Col 3: HIRECAR Services (12 links)                                    ║
║  └──▶ All href="#" → Mirror service offerings                          ║
║       └──▶ FUTURE: Individual service booking pages                    ║
║                                                                         ║
║  Col 4: The Network (11 links)                                         ║
║  ├── HIRECAR.LA ↗       → EXIT: https://www.hirecar.la/               ║
║  ├── HIRECREDIT          → # → FUTURE: hirecredit site                ║
║  ├── CreditWithKen       → # → FUTURE: coaching site                  ║
║  ├── SeedXchange         → # → FUTURE: funding site                   ║
║  ├── First Class         → # → FUTURE: membership page                ║
║  ├── HIRECAR Credit Card → # → FUTURE: credit card application        ║
║  ├── Rent Your Vehicle   → # → FUTURE: vehicle listing portal         ║
║  ├── Become an Affiliate → # → FUTURE: affiliate program              ║
║  ├── Join Elite Network  → # → FUTURE: network application            ║
║  ├── Apply to Qualify    → # → FUTURE: qualification funnel           ║
║  └── Investor Relations  → mailto → email funnel                      ║
║                                                                         ║
║  Legal Bar:                                                            ║
║  └── ©2026 HIRECAR · Privacy Policy · Terms & Conditions               ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## Σ13 — MOBILE NAVIGATION DRAWER

```
╔══════════════════════════════════════════════════════════════════════════╗
║  MOBILE DRAWER — Full mobile navigation                                ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  Lead Category:                                                        ║
║  └── Credit Repair [LEAD] → #sec-credit + closeDrawer()               ║
║                                                                         ║
║  Services (7 links):                                                   ║
║  ├── Collision + Claims   → # + closeDrawer()                          ║
║  ├── Auto Glass           → # + closeDrawer()                          ║
║  ├── Tint + Wraps         → # + closeDrawer()                          ║
║  ├── Detailing            → # + closeDrawer()                          ║
║  ├── Maintenance          → # + closeDrawer()                          ║
║  ├── Photography+Content  → # + closeDrawer()                          ║
║  └── Roadside + Emergency → # + closeDrawer()                          ║
║                                                                         ║
║  Intelligence (2 links):                                               ║
║  ├── MW Intelligence      → # + closeDrawer()                          ║
║  └── Playbooks            → # + closeDrawer()                          ║
║                                                                         ║
║  More (3 links):                                                       ║
║  ├── Entertainment        → #sec-ent + closeDrawer()                   ║
║  ├── First Class Member.  → #sec-member + closeDrawer()                ║
║  └── HIRECAR.LA ↗         → https://www.hirecar.la/ + closeDrawer()   ║
║                                                                         ║
║  CTAs:                                                                 ║
║  ├── [Apply to Qualify →] → PRIMARY FUNNEL (=Σ1-D)                    ║
║  └── [Sign In to Member]  → #member (=Σ1-C)                           ║
║                                                                         ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## MASTER FUNNEL CONVERGENCE MAP

Every link on the front page ultimately feeds into one of these terminal funnels:

```
                    ┌─────────────────────────┐
                    │   ALL FRONT PAGE LINKS   │
                    └────────────┬────────────┘
                                 │
                    ┌────────────┼────────────┐
                    ▼            ▼            ▼
            ┌──────────┐  ┌──────────┐  ┌──────────┐
            │ CONTENT  │  │ SERVICE  │  │ EXTERNAL │
            │ FUNNEL   │  │ FUNNEL   │  │ HANDOFF  │
            └────┬─────┘  └────┬─────┘  └────┬─────┘
                 │             │             │
    Read/Info    │   Reserve/  │   HIRECAR   │
    actions      │   Purchase  │   .LA ↗     │
                 │   actions   │             │
                 ▼             ▼             ▼
         ┌──────────┐  ┌───────────┐  ┌──────────┐
         │ Desktop  │  │ Slide 5:  │  │ External │
         │ Mode     │  │ Purchase  │  │ Sites    │
         │ (news    │  │ Carousel  │  │          │
         │  layout) │  │           │  │          │
         └────┬─────┘  └─────┬────┘  └──────────┘
              │              │
              │    ┌─────────┼─────────┐
              │    ▼         ▼         ▼
              │  Credit   Membership  PIFR
              │  Card     Sign-Up     SKU
              │  Apply    Apply       Select
              │    │         │         │
              │    └─────────┼─────────┘
              │              │
              ▼              ▼
     ┌──────────────────────────────────┐
     │     APPLY TO QUALIFY             │
     │  First Class Qualification       │
     │                                  │
     │  Lead Capture → Verify →         │
     │  Thank You → LIVE Access         │
     │                                  │
     │  Terminal conversion point       │
     │  for the entire MarketWatch      │
     │  front page ecosystem            │
     └──────────────────────────────────┘
```

---

## LINK INVENTORY SUMMARY

| Section            | Total Links | Active Destinations | Placeholder (#) | External |
|-------------------|-------------|--------------------:|:---------------:|:--------:|
| Utility Bar        | 4           | 1 (#member)        | 3               | 0        |
| Masthead           | 3           | 1 (#member)        | 2               | 0        |
| Mode Toggle        | 2           | 2 (JS actions)     | 0               | 0        |
| Ticker             | 0           | 0 (display only)   | 0               | 0        |
| Primary Nav        | 11 + ~81 sub| 0                  | ~92             | 0        |
| Remote Slides      | ~30 buttons | 30 (JS: rhCTA)     | 0               | 0        |
| Desktop Sections   | ~15         | 0                  | ~15             | 0        |
| Quick Jump Dots    | 8           | 8 (JS scroll)      | 0               | 0        |
| Remote Side Nav    | 6           | 6 (JS: rhNavTo)    | 0               | 0        |
| Remote Bottom Bar  | 3           | 3 (JS actions)     | 0               | 0        |
| Company Bar        | 5           | 1                  | 4               | 1        |
| Footer             | ~37         | 1                  | ~35             | 1        |
| Mobile Drawer      | ~14         | 4                  | ~9              | 1        |
| **TOTAL**          | **~219**    | **~57**            | **~160**        | **3**    |

---

*Generated: 2026-02-27 — HIRECAR MarketWatch! Front Page Sigma Map v1.0*
*Source: HIRECAR MarketWatch! v18/v19/v20 — Auto Operator Intelligence*
