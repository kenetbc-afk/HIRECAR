/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HIRECAR MarketWatch! — Figma Workflow Blueprint Generator
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * HOW TO USE:
 * 1. Open Figma (Desktop App or Browser)
 * 2. Open your target file (or create a new one)
 * 3. Go to: Plugins → Development → Open Console
 * 4. Paste this ENTIRE script into the console
 * 5. Press Enter — the plugin will auto-generate the full workflow board
 *
 * WHAT IT CREATES:
 * - Master frame: "HIRECAR Workflow Blueprint"
 * - Client Milestone Journey (5 phases)
 * - All 16 Department cards with AI bot workflows
 * - Gamification Engine visual
 * - Cross-department connection diagram
 * - Master Funnel Convergence Map
 *
 * Generated: 2026-03-03 — HIRECAR Governing Rights & Workflow Blueprint
 * ═══════════════════════════════════════════════════════════════════════════
 */

(async () => {

  // ─── DESIGN TOKENS ──────────────────────────────────────────────────
  const C = {
    ink:       { r: 0.067, g: 0.094, b: 0.125 },  // #111820
    ink2:      { r: 0.118, g: 0.145, b: 0.188 },  // #1e2530
    ink3:      { r: 0.176, g: 0.208, b: 0.251 },  // #2d3540
    slate:     { r: 0.239, g: 0.290, b: 0.345 },  // #3d4a58
    mid:       { r: 0.420, g: 0.447, b: 0.502 },  // #6b7280
    muted:     { r: 0.604, g: 0.639, b: 0.678 },  // #9aa3ad
    border:    { r: 0.867, g: 0.882, b: 0.906 },  // #dde1e7
    bg:        { r: 1, g: 1, b: 1 },               // #ffffff
    white:     { r: 1, g: 1, b: 1 },
    cta:       { r: 0.788, g: 0.573, b: 0.039 },  // #c9920a (gold)
    ctaBg:     { r: 0.996, g: 0.953, b: 0.816 },  // #fef3d0
    live:      { r: 0.753, g: 0.224, b: 0.169 },  // #c0392b
    member:    { r: 0.059, g: 0.298, b: 0.459 },  // #0f4c75
    memberLt:  { r: 0.910, g: 0.949, b: 0.976 },  // #e8f2f9
    green:     { r: 0, g: 0.902, b: 0.463 },      // #00e676
    greenDim:  { r: 0.067, g: 0.180, b: 0.133 },
    cyan:      { r: 0, g: 0.737, b: 0.831 },      // #00bcd4
    purple:    { r: 0.475, g: 0.333, b: 0.831 },  // #7955d4
    orange:    { r: 0.898, g: 0.533, b: 0.153 },  // #e58827
    darkBg:    { r: 0.051, g: 0.067, b: 0.090 },  // #0d1117
  };

  // Phase colors
  const PHASE_COLORS = {
    INTAKE:     { r: 0.204, g: 0.396, b: 0.643 },  // blue
    RECOVERY:   { r: 0.753, g: 0.224, b: 0.169 },  // red
    REBUILDING: { r: 0.788, g: 0.573, b: 0.039 },  // gold
    OPERATING:  { r: 0, g: 0.651, b: 0.318 },       // green
    SCALING:    { r: 0.475, g: 0.333, b: 0.831 },   // purple
  };

  // ─── FONTS ──────────────────────────────────────────────────────────
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  // ─── HELPERS ────────────────────────────────────────────────────────
  function solid(c, opacity = 1) {
    return [{ type: 'SOLID', color: c, opacity }];
  }

  function createText(text, size, weight, color, width) {
    const t = figma.createText();
    const style = weight >= 700 ? "Bold" : weight >= 600 ? "Semi Bold" : weight >= 500 ? "Medium" : "Regular";
    t.fontName = { family: "Inter", style };
    t.characters = text;
    t.fontSize = size;
    t.fills = solid(color);
    if (width) {
      t.resize(width, t.height);
      t.textAutoResize = 'HEIGHT';
    }
    return t;
  }

  function createCard(w, h, fill, cornerRadius = 12, stroke = null) {
    const r = figma.createRectangle();
    r.resize(w, h);
    r.fills = solid(fill);
    r.cornerRadius = cornerRadius;
    if (stroke) {
      r.strokes = solid(stroke.color);
      r.strokeWeight = stroke.weight || 1;
    }
    return r;
  }

  function createFrame(name, w, h, opts = {}) {
    const f = figma.createFrame();
    f.name = name;
    f.resize(w, h);
    f.fills = opts.fill ? solid(opts.fill) : [];
    if (opts.autoLayout) {
      f.layoutMode = opts.direction || 'VERTICAL';
      f.primaryAxisSizingMode = opts.primarySizing || 'AUTO';
      f.counterAxisSizingMode = opts.counterSizing || 'AUTO';
      f.itemSpacing = opts.spacing || 16;
      f.paddingTop = opts.padding || 0;
      f.paddingBottom = opts.padding || 0;
      f.paddingLeft = opts.padding || 0;
      f.paddingRight = opts.padding || 0;
    }
    if (opts.cornerRadius) f.cornerRadius = opts.cornerRadius;
    return f;
  }

  // ─── 16 DEPARTMENTS DATA ───────────────────────────────────────────
  const DEPARTMENTS = [
    {
      id: 'CREDIT', name: 'Credit Repair', icon: '💳', color: C.cta,
      phase: ['INTAKE','RECOVERY','REBUILDING'],
      desc: 'HIRECREDIT — Post-Incident Financial Recovery',
      workflows: [
        { bot: 'CreditScan Bot', trigger: 'Client onboarding OR collision event detected', action: 'Pull credit report, flag negatives, calculate HBI baseline', xp: 100, score: 'HBI' },
        { bot: 'DisputeEngine Bot', trigger: 'HBI < 60 OR negative tradeline detected', action: 'Auto-generate dispute letters, file with bureaus, track 30/60/90 day cycles', xp: 200, score: 'HBI' },
        { bot: 'CollectionsShield Bot', trigger: 'Collection account appears on report', action: 'Validate debt, send cease/desist, negotiate pay-for-delete', xp: 150, score: 'HBI' },
        { bot: 'CreditCoach Bot', trigger: 'Client enters REBUILDING phase', action: 'Weekly credit tips, spending alerts, utilization monitoring', xp: 50, score: 'HBI' },
        { bot: 'ApprovalPath Bot', trigger: 'HBI >= 70 AND client requests funding', action: 'Generate Approval Pathway Blueprint, map to funding products', xp: 250, score: 'FPI' },
        { bot: 'TradeLine Bot', trigger: 'Dispute resolved OR new account opened', action: 'Update tradeline tracker, recalculate HBI, notify client', xp: 75, score: 'HBI' },
      ]
    },
    {
      id: 'COLLISION', name: 'Collision + Claims', icon: '💥', color: C.live,
      phase: ['INTAKE','RECOVERY'],
      desc: 'Multi-party collision claims management & PIFR',
      workflows: [
        { bot: 'CollisionIntake Bot', trigger: 'New collision report filed OR police report uploaded', action: 'Parse collision data, identify all parties, create claims timeline', xp: 150, score: 'CRI' },
        { bot: 'ClaimsCycle Bot', trigger: 'Collision intake complete', action: 'Track insurance claims across all parties, flag delays, auto-follow-up', xp: 200, score: 'CRI' },
        { bot: 'PIFREngine Bot', trigger: 'Claims cycle > 30 days OR admin failure detected', action: 'Generate PIFR packet, compile evidence timeline, prepare dispute', xp: 300, score: 'CRI' },
        { bot: 'CustodyLog Bot', trigger: 'Vehicle enters repair OR rental custody', action: 'Track vehicle custody chain, document handoffs, flag gaps', xp: 100, score: 'VDI' },
        { bot: 'AdminFailure Bot', trigger: 'Insurance company misses SLA OR documentation error found', action: 'Flag admin failure, generate complaint letter, escalate to supervisor', xp: 175, score: 'CRI' },
      ]
    },
    {
      id: 'OPERATOR', name: 'Operator Standards', icon: '📋', color: C.member,
      phase: ['REBUILDING','OPERATING'],
      desc: 'BRE System, HBI Scoring, VDI Standards compliance',
      workflows: [
        { bot: 'HBIScoringBot', trigger: 'Weekly schedule OR manual trigger by client', action: 'Calculate HBI score (0-100), flag cure items, generate report', xp: 100, score: 'HBI' },
        { bot: 'VDIAudit Bot', trigger: 'Document uploaded OR monthly VDI cycle', action: 'Audit vehicle documents, check expiration dates, score VDI (0-100)', xp: 125, score: 'VDI' },
        { bot: 'BREEngine Bot', trigger: 'HBI + VDI scores updated', action: 'Run Business Readiness Engine, classify Revenue vs Cure Lane', xp: 150, score: 'BRE' },
        { bot: 'VendorAudit Bot', trigger: 'New vendor added OR quarterly review cycle', action: 'Verify vendor credentials, insurance, compliance. Score vendor reliability', xp: 100, score: 'BRE' },
        { bot: 'CureWindow Bot', trigger: 'BRE classifies client in Cure Lane', action: 'Set 30-day cure window, daily check-ins, remediation tasks', xp: 200, score: 'BRE' },
        { bot: 'RevenueGate Bot', trigger: 'Cure window complete AND all items resolved', action: 'Clear for Revenue Lane, unlock premium services, notify account team', xp: 300, score: 'BRE' },
      ]
    },
    {
      id: 'RECOVERY', name: 'Recovery + PIFR', icon: '🔄', color: C.orange,
      phase: ['RECOVERY','REBUILDING'],
      desc: 'Post-Incident Financial Recovery tiered products',
      workflows: [
        { bot: 'PIFRTriage Bot', trigger: 'New incident report OR collision claim filed', action: 'Assess incident severity, recommend PIFR tier (Core/Plus/Max/Shield)', xp: 150, score: 'CRI' },
        { bot: 'RecoveryTimeline Bot', trigger: 'PIFR tier selected', action: 'Build full recovery timeline, set milestones, assign tasks', xp: 200, score: 'CRI' },
        { bot: 'EvidenceCompiler Bot', trigger: 'New document uploaded for PIFR case', action: 'Organize evidence, check completeness, flag missing items', xp: 100, score: 'CRI' },
        { bot: 'SettlementTracker Bot', trigger: 'Settlement offer received OR negotiation milestone', action: 'Track all settlement offers, compare to target, recommend accept/counter', xp: 250, score: 'FPI' },
        { bot: 'RecoveryScore Bot', trigger: 'Monthly assessment OR case milestone reached', action: 'Calculate recovery progress %, update CRI score, adjust timeline', xp: 75, score: 'CRI' },
      ]
    },
    {
      id: 'INSURANCE', name: 'Auto Insurance', icon: '🛡️', color: C.cyan,
      phase: ['INTAKE','OPERATING'],
      desc: 'Operator policies, fleet coverage, gap insurance',
      workflows: [
        { bot: 'PolicyScan Bot', trigger: 'Client onboarding OR policy renewal date approaching', action: 'Analyze current coverage, identify gaps, recommend upgrades', xp: 125, score: 'FPI' },
        { bot: 'QuoteEngine Bot', trigger: 'Coverage gap identified OR client requests quote', action: 'Pull multi-carrier quotes, compare rates, present options', xp: 150, score: 'FPI' },
        { bot: 'FleetCoverage Bot', trigger: 'New vehicle added to fleet OR annual fleet review', action: 'Ensure all fleet vehicles covered, batch policy updates', xp: 100, score: 'VDI' },
        { bot: 'ClaimsAssist Bot', trigger: 'Insurance claim filed', action: 'Guide through claims process, track status, flag delays', xp: 175, score: 'CRI' },
        { bot: 'BillingFog Bot', trigger: 'Payment missed OR billing discrepancy detected', action: 'Analyze billing, identify errors, dispute overcharges, prevent collections', xp: 200, score: 'FPI' },
      ]
    },
    {
      id: 'FUNDING', name: 'Business Funding', icon: '💰', color: C.green,
      phase: ['OPERATING','SCALING'],
      desc: 'SeedXchange — 24hr qualification, fleet expansion capital',
      workflows: [
        { bot: 'FundingReady Bot', trigger: 'Client enters OPERATING phase OR requests funding assessment', action: 'Run funding readiness check: HBI, BRE, revenue, time-in-business', xp: 200, score: 'FPI' },
        { bot: 'SeedXchange Bot', trigger: 'Funding readiness score >= 70', action: 'Submit to SeedXchange, 24hr qualification, match with capital sources', xp: 300, score: 'FPI' },
        { bot: 'FleetExpansion Bot', trigger: 'Funding approved AND fleet growth plan submitted', action: 'Calculate fleet expansion ROI, recommend vehicle types, project revenue', xp: 250, score: 'MSI' },
        { bot: 'CapitalDeploy Bot', trigger: 'Funds disbursed', action: 'Track capital deployment, monitor ROI, flag underperformance', xp: 150, score: 'FPI' },
        { bot: 'RepayTracker Bot', trigger: 'Repayment schedule active', action: 'Monitor payments, send reminders, flag risk of default', xp: 100, score: 'FPI' },
      ]
    },
    {
      id: 'MOBILITY', name: 'Mobility + Rentals', icon: '🚗', color: C.member,
      phase: ['OPERATING','SCALING'],
      desc: 'Luxury fleet, daily drivers, airport transfers, long-term',
      workflows: [
        { bot: 'FleetMatch Bot', trigger: 'Client searches vehicles OR reservation request', action: 'Match to available fleet, check eligibility, present options with pricing', xp: 100, score: 'MSI' },
        { bot: 'Reservation Bot', trigger: 'Vehicle selected by client', action: 'Process reservation, collect deposit, confirm availability, send confirmation', xp: 150, score: 'MSI' },
        { bot: 'HandoffCoordinator Bot', trigger: 'Reservation date approaches (24hr)', action: 'Coordinate vehicle prep, confirm pickup details, send directions', xp: 75, score: 'MSI' },
        { bot: 'FleetHealth Bot', trigger: 'Daily fleet scan OR vehicle return', action: 'Inspect vehicle condition, log mileage, schedule maintenance if needed', xp: 100, score: 'VDI' },
        { bot: 'RentalRevenue Bot', trigger: 'Monthly cycle', action: 'Calculate rental revenue per vehicle, utilization rates, pricing optimization', xp: 125, score: 'MSI' },
      ]
    },
    {
      id: 'ROADSIDE', name: 'Roadside + Emergency', icon: '🚨', color: C.live,
      phase: ['INTAKE','OPERATING'],
      desc: '24/7 roadside, EV charging, tire/battery, towing',
      workflows: [
        { bot: 'EmergencyDispatch Bot', trigger: 'Emergency request (roadside button OR call)', action: 'Locate client via GPS, dispatch nearest provider, ETA tracking', xp: 200, score: 'MSI' },
        { bot: 'TowCoordinator Bot', trigger: 'Vehicle non-drivable confirmed', action: 'Arrange tow, coordinate with repair shop, update custody log', xp: 150, score: 'VDI' },
        { bot: 'EVCharge Bot', trigger: 'EV battery low alert OR charge request', action: 'Locate nearest charger, reserve spot, provide routing', xp: 75, score: 'MSI' },
        { bot: 'MaintenanceScheduler Bot', trigger: 'Mileage threshold OR service interval reached', action: 'Schedule oil change/tire/battery service, send reminders, confirm booking', xp: 100, score: 'VDI' },
      ]
    },
    {
      id: 'ENTERTAINMENT', name: 'Entertainment + Culture', icon: '🎬', color: C.purple,
      phase: ['OPERATING','SCALING'],
      desc: 'Garage Series, Wrap Culture, community events',
      workflows: [
        { bot: 'ContentCurator Bot', trigger: 'New content published OR weekly content calendar', action: 'Curate city-specific entertainment, auto-tag, push to relevant clients', xp: 50, score: 'MSI' },
        { bot: 'EventPromoter Bot', trigger: 'Event created OR 7 days before event', action: 'Generate event promotion, target eligible members, track RSVPs', xp: 100, score: 'MSI' },
        { bot: 'CommunityEngagement Bot', trigger: 'Client completes 3+ interactions in week', action: 'Suggest community content, invite to events, award engagement XP', xp: 75, score: 'MSI' },
        { bot: 'StorySpotlight Bot', trigger: 'Operator milestone achieved (tier up, badge earned)', action: 'Feature operator story, create content piece, share across channels', xp: 150, score: 'MSI' },
      ]
    },
    {
      id: 'INTELLIGENCE', name: 'MW Intelligence', icon: '📊', color: C.cyan,
      phase: ['RECOVERY','REBUILDING','OPERATING','SCALING'],
      desc: 'MCI reports, HBI distribution, collision data analytics',
      workflows: [
        { bot: 'DataCollector Bot', trigger: 'New collision data available OR monthly data refresh', action: 'Ingest LA collision data (810K+ records), update MCI dataset', xp: 100, score: 'MSI' },
        { bot: 'ReportGenerator Bot', trigger: 'Client requests report OR quarterly schedule', action: 'Generate custom intelligence report, market analysis, competitor data', xp: 200, score: 'MSI' },
        { bot: 'HBIDistribution Bot', trigger: 'Monthly HBI recalculation complete', action: 'Generate HBI distribution chart, rank operator, identify trends', xp: 150, score: 'HBI' },
        { bot: 'AlertEngine Bot', trigger: 'Market anomaly detected OR threshold breach', action: 'Push real-time alert to operators, recommend actions', xp: 125, score: 'MSI' },
        { bot: 'ExportEngine Bot', trigger: 'Data export requested by client', action: 'Package data export (239K format), apply access controls, deliver', xp: 75, score: 'MSI' },
      ]
    },
    {
      id: 'PLAYBOOKS', name: 'Playbooks + Guides', icon: '📖', color: C.cta,
      phase: ['REBUILDING','OPERATING'],
      desc: 'Operator guides, HBI playbook, VDI checklist, cure window',
      workflows: [
        { bot: 'PlaybookAssign Bot', trigger: 'Client enters new phase OR score drops below threshold', action: 'Assign relevant playbook, create checklist, set deadlines', xp: 100, score: 'BRE' },
        { bot: 'ChecklistTracker Bot', trigger: 'Playbook assigned OR checklist item due', action: 'Track checklist progress, send reminders, verify completions', xp: 75, score: 'BRE' },
        { bot: 'ExhibitReady Bot', trigger: 'Client approaching audit OR compliance review', action: 'Pre-audit check, compile required documents, generate exhibit packet', xp: 200, score: 'VDI' },
        { bot: 'GuideRecommender Bot', trigger: 'Score improvement stalls OR client asks for help', action: 'Analyze gaps, recommend specific playbook sections, create action plan', xp: 125, score: 'BRE' },
      ]
    },
    {
      id: 'COACHING', name: 'CreditWithKen', icon: '🎓', color: C.cta,
      phase: ['RECOVERY','REBUILDING','OPERATING'],
      desc: '1-on-1 credit coaching, funding readiness, approval pathway',
      workflows: [
        { bot: 'SessionScheduler Bot', trigger: 'Client books coaching OR follow-up due', action: 'Schedule 1-on-1 session, send prep materials, set agenda', xp: 100, score: 'HBI' },
        { bot: 'CoachPrep Bot', trigger: '24hr before scheduled session', action: 'Pull client data, generate coaching brief, highlight key focus areas', xp: 75, score: 'HBI' },
        { bot: 'ActionPlan Bot', trigger: 'Post-session (coaching completed)', action: 'Generate action items from session, set deadlines, track follow-through', xp: 150, score: 'HBI' },
        { bot: 'ProgressTracker Bot', trigger: 'Weekly check-in OR action item due date', action: 'Review progress on coaching goals, celebrate wins, flag at-risk items', xp: 100, score: 'HBI' },
      ]
    },
    {
      id: 'MEMBERSHIP', name: 'First Class Membership', icon: '⭐', color: C.cta,
      phase: ['OPERATING','SCALING'],
      desc: 'Tiered membership, private driver, chauffeur access',
      workflows: [
        { bot: 'QualificationEngine Bot', trigger: 'Apply to Qualify submitted', action: 'Run qualification matrix: HBI, BRE, revenue, fleet size, time-in-business', xp: 200, score: 'MSI' },
        { bot: 'MemberOnboard Bot', trigger: 'Qualification approved', action: 'Create member profile, assign tier, activate benefits, send welcome kit', xp: 300, score: 'MSI' },
        { bot: 'TierMonitor Bot', trigger: 'Monthly score update OR significant activity', action: 'Check tier eligibility, auto-upgrade/downgrade, notify member', xp: 100, score: 'MSI' },
        { bot: 'BenefitsEngine Bot', trigger: 'Member accesses benefit OR new benefit available', action: 'Serve eligible benefits, track usage, recommend unused perks', xp: 75, score: 'MSI' },
        { bot: 'RenewalBot', trigger: '30 days before membership renewal', action: 'Assess member value, generate renewal offer, process auto-renewal', xp: 150, score: 'MSI' },
      ]
    },
    {
      id: 'CHAUFFEUR', name: 'Chauffeur + Private Driver', icon: '🎩', color: C.ink,
      phase: ['OPERATING','SCALING'],
      desc: 'Private driver booking, chauffeur services, premium transport',
      workflows: [
        { bot: 'DriverMatch Bot', trigger: 'Chauffeur/Private Driver booking request', action: 'Match available driver, check vehicle, confirm booking, send ETA', xp: 150, score: 'MSI' },
        { bot: 'RouteOptimizer Bot', trigger: 'Booking confirmed', action: 'Optimize route, calculate fare, set pickup/dropoff coordinates', xp: 75, score: 'MSI' },
        { bot: 'DriverRating Bot', trigger: 'Trip completed', action: 'Collect rating, update driver score, flag issues, reward excellence', xp: 50, score: 'MSI' },
        { bot: 'FleetScheduler Bot', trigger: 'Daily morning schedule OR new booking added', action: 'Optimize driver-vehicle assignments, minimize deadheading, balance load', xp: 100, score: 'MSI' },
      ]
    },
    {
      id: 'FLEET', name: 'Fleet Management', icon: '🏎️', color: C.slate,
      phase: ['OPERATING','SCALING'],
      desc: 'Vehicle lifecycle, maintenance tracking, fleet analytics',
      workflows: [
        { bot: 'VehicleOnboard Bot', trigger: 'New vehicle acquired', action: 'Register vehicle, set up VDI profile, schedule initial inspection, assign fleet ID', xp: 200, score: 'VDI' },
        { bot: 'MaintenanceAI Bot', trigger: 'Mileage threshold OR time interval OR alert', action: 'Schedule maintenance, coordinate with shop, update service history', xp: 125, score: 'VDI' },
        { bot: 'ComplianceWatch Bot', trigger: 'Registration/insurance/smog expiration approaching', action: 'Alert owner, auto-schedule renewal, track completion', xp: 150, score: 'VDI' },
        { bot: 'DepreciationTracker Bot', trigger: 'Monthly valuation cycle', action: 'Calculate vehicle value, depreciation rate, recommend sell/keep', xp: 100, score: 'FPI' },
        { bot: 'UtilizationBot', trigger: 'Weekly fleet review', action: 'Analyze per-vehicle utilization, revenue per mile, recommend rebalancing', xp: 125, score: 'MSI' },
      ]
    },
    {
      id: 'CREDITCARD', name: 'HIRECAR Credit Card', icon: '💎', color: C.cta,
      phase: ['OPERATING','SCALING'],
      desc: 'Branded credit card program, rewards, spend tracking',
      workflows: [
        { bot: 'CardQualification Bot', trigger: 'Credit card application submitted', action: 'Check HBI score, credit history, membership status, approve/deny', xp: 200, score: 'FPI' },
        { bot: 'CardOnboard Bot', trigger: 'Application approved', action: 'Issue virtual card, set limits, activate rewards program', xp: 250, score: 'FPI' },
        { bot: 'SpendAnalytics Bot', trigger: 'Transaction posted OR weekly summary', action: 'Categorize spend, track rewards earned, identify optimization opportunities', xp: 75, score: 'FPI' },
        { bot: 'RewardsEngine Bot', trigger: 'Qualifying transaction OR reward threshold reached', action: 'Award points/cashback, notify member, suggest redemption options', xp: 50, score: 'FPI' },
        { bot: 'FraudWatch Bot', trigger: 'Unusual transaction pattern detected', action: 'Flag transaction, alert cardholder, temporary hold if high risk', xp: 100, score: 'FPI' },
      ]
    },
  ];

  // ─── CLIENT MILESTONE JOURNEY ───────────────────────────────────────
  const MILESTONES = [
    {
      phase: 'INTAKE', color: PHASE_COLORS.INTAKE, icon: '📥',
      title: 'Phase 1: INTAKE',
      subtitle: 'Client onboarding, data capture, baseline assessment',
      entry: 'Lead captured via Apply to Qualify OR collision event reported',
      departments: ['CREDIT','COLLISION','INSURANCE','ROADSIDE'],
      scoring: 'HBI baseline calculated, VDI initial scan, CRI if collision',
      exit: 'All intake data captured, baseline scores set, assigned to track',
      xpRange: '0 – 500 XP',
    },
    {
      phase: 'RECOVERY', color: PHASE_COLORS.RECOVERY, icon: '🔧',
      title: 'Phase 2: RECOVERY',
      subtitle: 'Active dispute, claims management, financial triage',
      entry: 'Intake complete AND (HBI < 60 OR active collision claim OR collections)',
      departments: ['CREDIT','COLLISION','RECOVERY','COACHING','INTELLIGENCE'],
      scoring: 'HBI improving, CRI actively tracked, disputes in progress',
      exit: 'No active disputes > 90 days, HBI >= 55, no new collections 60 days',
      xpRange: '500 – 2,000 XP',
    },
    {
      phase: 'REBUILDING', color: PHASE_COLORS.REBUILDING, icon: '🏗️',
      title: 'Phase 3: REBUILDING',
      subtitle: 'Score improvement, compliance building, standard achievement',
      entry: 'Recovery exit criteria met AND assigned rebuilding track',
      departments: ['CREDIT','OPERATOR','RECOVERY','PLAYBOOKS','COACHING','INTELLIGENCE'],
      scoring: 'HBI 55-75+, VDI being built, BRE in Cure Lane moving to Revenue',
      exit: 'HBI >= 70, VDI >= 80, BRE = Revenue Lane, all playbooks complete',
      xpRange: '2,000 – 5,000 XP',
    },
    {
      phase: 'OPERATING', color: PHASE_COLORS.OPERATING, icon: '✅',
      title: 'Phase 4: OPERATING',
      subtitle: 'Full services active, revenue generating, fleet growing',
      entry: 'BRE = Revenue Lane AND HBI >= 70 AND VDI >= 80',
      departments: ['OPERATOR','INSURANCE','FUNDING','MOBILITY','ROADSIDE','ENTERTAINMENT','INTELLIGENCE','PLAYBOOKS','COACHING','MEMBERSHIP','CHAUFFEUR','FLEET','CREDITCARD'],
      scoring: 'All 6 scores active, composite score tracked, tier progression',
      exit: 'Composite Score >= 85 AND Fleet >= 5 AND Revenue >= $10K/mo AND 6+ months in Operating',
      xpRange: '5,000 – 15,000 XP',
    },
    {
      phase: 'SCALING', color: PHASE_COLORS.SCALING, icon: '🚀',
      title: 'Phase 5: SCALING',
      subtitle: 'Multi-fleet, advanced funding, elite membership, market expansion',
      entry: 'Operating exit criteria met AND Elite tier application approved',
      departments: ['FUNDING','MOBILITY','ENTERTAINMENT','INTELLIGENCE','MEMBERSHIP','CHAUFFEUR','FLEET','CREDITCARD'],
      scoring: 'All scores 85+, maximum XP accrual, Elite challenges/quests active',
      exit: 'N/A — continuous scaling, mentor status available',
      xpRange: '15,000+ XP',
    },
  ];

  // ─── GAMIFICATION ENGINE ────────────────────────────────────────────
  const GAMIFICATION = {
    tiers: [
      { name: 'Standard', xp: 0, color: C.mid },
      { name: 'Operator', xp: 1000, color: C.cyan },
      { name: 'First Class', xp: 5000, color: C.cta },
      { name: 'Elite', xp: 15000, color: C.purple },
    ],
    scores: [
      { id: 'HBI', name: 'Health & Business Index', range: '0-100', desc: 'Credit health + business viability' },
      { id: 'VDI', name: 'Vehicle Documentation Index', range: '0-100', desc: 'Fleet documentation completeness' },
      { id: 'BRE', name: 'Business Readiness Engine', range: '0-100', desc: 'Revenue vs Cure Lane classification' },
      { id: 'CRI', name: 'Claims Recovery Index', range: '0-100', desc: 'Active claims + recovery progress' },
      { id: 'FPI', name: 'Financial Performance Index', range: '0-100', desc: 'Revenue, funding, card activity' },
      { id: 'MSI', name: 'Member Services Index', range: '0-100', desc: 'Engagement, services, community' },
    ],
    badges: [
      { name: 'First Scan', condition: 'Complete first HBI scan', xp: 100 },
      { name: 'Document Pro', condition: 'VDI reaches 80+', xp: 250 },
      { name: 'Revenue Ready', condition: 'BRE classifies Revenue Lane', xp: 500 },
      { name: 'Recovery Champion', condition: 'Complete a PIFR case successfully', xp: 750 },
      { name: 'Fleet Commander', condition: 'Register 3+ vehicles', xp: 400 },
      { name: 'Credit Hero', condition: 'HBI improves 20+ points', xp: 600 },
      { name: 'Funded', condition: 'Receive first SeedXchange funding', xp: 1000 },
      { name: 'First Class', condition: 'Achieve First Class Membership', xp: 1500 },
      { name: 'Elite Operator', condition: 'Reach Elite tier (15,000 XP)', xp: 2000 },
    ],
    pattern: ['GREET', 'GUIDE', 'ACT', 'REWARD', 'NEXT'],
  };

  // ═══════════════════════════════════════════════════════════════════
  // BUILD THE FIGMA BOARD
  // ═══════════════════════════════════════════════════════════════════

  const PAGE = figma.currentPage;
  const BOARD_W = 8000;
  const BOARD_H = 12000;

  // ─── TITLE SECTION ──────────────────────────────────────────────────
  const titleFrame = createFrame('Title Section', BOARD_W, 200, { fill: C.ink });
  titleFrame.x = 0; titleFrame.y = 0;
  PAGE.appendChild(titleFrame);

  const titleText = createText('HIRECAR MarketWatch! — Workflow Blueprint', 48, 700, C.white, BOARD_W - 80);
  titleText.x = 40; titleText.y = 40;
  titleFrame.appendChild(titleText);

  const subtitleText = createText('16 Departments · 80+ AI Bot Workflows · 5 Client Milestone Phases · Gamification Engine', 20, 400, C.muted, BOARD_W - 80);
  subtitleText.x = 40; subtitleText.y = 110;
  titleFrame.appendChild(subtitleText);

  const dateText = createText('Generated: 2026-03-03 · HIRECAR Governing Rights & Workflow Blueprint v1.0', 14, 400, C.mid, BOARD_W - 80);
  dateText.x = 40; dateText.y = 150;
  titleFrame.appendChild(dateText);

  // ─── CLIENT MILESTONE JOURNEY ───────────────────────────────────────
  const journeyY = 240;
  const journeyFrame = createFrame('Client Milestone Journey', BOARD_W, 700, { fill: C.darkBg });
  journeyFrame.x = 0; journeyFrame.y = journeyY;
  PAGE.appendChild(journeyFrame);

  const journeyTitle = createText('CLIENT MILESTONE JOURNEY', 28, 700, C.white, BOARD_W - 80);
  journeyTitle.x = 40; journeyTitle.y = 20;
  journeyFrame.appendChild(journeyTitle);

  const journeySubtitle = createText('INTAKE → RECOVERY → REBUILDING → OPERATING → SCALING', 16, 400, C.cta, BOARD_W - 80);
  journeySubtitle.x = 40; journeySubtitle.y = 60;
  journeyFrame.appendChild(journeySubtitle);

  const phaseWidth = (BOARD_W - 120) / 5;
  MILESTONES.forEach((m, i) => {
    const px = 40 + i * (phaseWidth + 10);
    const py = 100;

    // Phase card background
    const pCard = createCard(phaseWidth, 560, C.ink2, 16, { color: m.color, weight: 2 });
    pCard.x = px; pCard.y = py;
    journeyFrame.appendChild(pCard);

    // Phase header
    const phBg = createCard(phaseWidth, 60, m.color, 0);
    phBg.x = px; phBg.y = py;
    phBg.topLeftRadius = 16; phBg.topRightRadius = 16;
    phBg.bottomLeftRadius = 0; phBg.bottomRightRadius = 0;
    journeyFrame.appendChild(phBg);

    const phTitle = createText(`${m.icon} ${m.title}`, 16, 700, C.white, phaseWidth - 20);
    phTitle.x = px + 10; phTitle.y = py + 10;
    journeyFrame.appendChild(phTitle);

    const phSub = createText(m.subtitle, 11, 400, { r: 1, g: 1, b: 1 }, phaseWidth - 20);
    phSub.x = px + 10; phSub.y = py + 34;
    journeyFrame.appendChild(phSub);

    // Entry criteria
    const entryLabel = createText('ENTRY:', 10, 700, m.color, phaseWidth - 24);
    entryLabel.x = px + 12; entryLabel.y = py + 75;
    journeyFrame.appendChild(entryLabel);

    const entryText = createText(m.entry, 10, 400, C.muted, phaseWidth - 24);
    entryText.x = px + 12; entryText.y = py + 90;
    journeyFrame.appendChild(entryText);

    // Active departments
    const deptLabel = createText('DEPARTMENTS:', 10, 700, m.color, phaseWidth - 24);
    deptLabel.x = px + 12; deptLabel.y = py + 150;
    journeyFrame.appendChild(deptLabel);

    const deptText = createText(m.departments.join(', '), 9, 400, C.muted, phaseWidth - 24);
    deptText.x = px + 12; deptText.y = py + 165;
    journeyFrame.appendChild(deptText);

    // Scoring
    const scoreLabel = createText('SCORING:', 10, 700, m.color, phaseWidth - 24);
    scoreLabel.x = px + 12; scoreLabel.y = py + 230;
    journeyFrame.appendChild(scoreLabel);

    const scoreText = createText(m.scoring, 10, 400, C.muted, phaseWidth - 24);
    scoreText.x = px + 12; scoreText.y = py + 245;
    journeyFrame.appendChild(scoreText);

    // Exit criteria
    const exitLabel = createText('EXIT:', 10, 700, m.color, phaseWidth - 24);
    exitLabel.x = px + 12; exitLabel.y = py + 320;
    journeyFrame.appendChild(exitLabel);

    const exitText = createText(m.exit, 10, 400, C.muted, phaseWidth - 24);
    exitText.x = px + 12; exitText.y = py + 335;
    journeyFrame.appendChild(exitText);

    // XP Range
    const xpLabel = createText('XP RANGE:', 10, 700, m.color, phaseWidth - 24);
    xpLabel.x = px + 12; xpLabel.y = py + 420;
    journeyFrame.appendChild(xpLabel);

    const xpText = createText(m.xpRange, 14, 600, C.green, phaseWidth - 24);
    xpText.x = px + 12; xpText.y = py + 435;
    journeyFrame.appendChild(xpText);

    // Arrow connector (except last)
    if (i < 4) {
      const arrow = createText('→', 32, 700, C.cta);
      arrow.x = px + phaseWidth + 0; arrow.y = py + 20;
      journeyFrame.appendChild(arrow);
    }
  });

  // ─── GAMIFICATION ENGINE ────────────────────────────────────────────
  const gamY = journeyY + 740;
  const gamFrame = createFrame('Gamification Engine', BOARD_W, 500, { fill: C.ink });
  gamFrame.x = 0; gamFrame.y = gamY;
  PAGE.appendChild(gamFrame);

  const gamTitle = createText('GAMIFICATION ENGINE — Governing Rules', 28, 700, C.cta, BOARD_W - 80);
  gamTitle.x = 40; gamTitle.y = 20;
  gamFrame.appendChild(gamTitle);

  // Tiers row
  const tierLabel = createText('TIERS:', 14, 700, C.white);
  tierLabel.x = 40; tierLabel.y = 70;
  gamFrame.appendChild(tierLabel);

  GAMIFICATION.tiers.forEach((tier, i) => {
    const tx = 140 + i * 220;
    const tCard = createCard(200, 50, C.ink2, 8, { color: tier.color, weight: 2 });
    tCard.x = tx; tCard.y = 65;
    gamFrame.appendChild(tCard);

    const tText = createText(`${tier.name} — ${tier.xp.toLocaleString()}+ XP`, 13, 600, tier.color, 180);
    tText.x = tx + 10; tText.y = 78;
    gamFrame.appendChild(tText);
  });

  // Scores row
  const scoresLabel = createText('6 SCORING SYSTEMS:', 14, 700, C.white);
  scoresLabel.x = 40; scoresLabel.y = 135;
  gamFrame.appendChild(scoresLabel);

  const scoreW = (BOARD_W - 160) / 6;
  GAMIFICATION.scores.forEach((score, i) => {
    const sx = 40 + i * (scoreW + 12);
    const sCard = createCard(scoreW, 90, C.ink2, 8, { color: C.cyan, weight: 1 });
    sCard.x = sx; sCard.y = 165;
    gamFrame.appendChild(sCard);

    const sId = createText(score.id, 18, 700, C.cyan, scoreW - 16);
    sId.x = sx + 8; sId.y = 175;
    gamFrame.appendChild(sId);

    const sName = createText(score.name, 10, 400, C.muted, scoreW - 16);
    sName.x = sx + 8; sName.y = 200;
    gamFrame.appendChild(sName);

    const sRange = createText(score.range, 11, 600, C.green, scoreW - 16);
    sRange.x = sx + 8; sRange.y = 230;
    gamFrame.appendChild(sRange);
  });

  // Badges row
  const badgeLabel = createText('9 BADGES:', 14, 700, C.white);
  badgeLabel.x = 40; badgeLabel.y = 275;
  gamFrame.appendChild(badgeLabel);

  const badgeW = (BOARD_W - 120) / 3;
  GAMIFICATION.badges.forEach((badge, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const bx = 40 + col * (badgeW + 10);
    const by = 305 + row * 60;

    const bCard = createCard(badgeW, 50, C.ink2, 8, { color: C.cta, weight: 1 });
    bCard.x = bx; bCard.y = by;
    gamFrame.appendChild(bCard);

    const bName = createText(`🏅 ${badge.name}`, 12, 600, C.cta, badgeW - 100);
    bName.x = bx + 8; bName.y = by + 8;
    gamFrame.appendChild(bName);

    const bCond = createText(badge.condition, 9, 400, C.muted, badgeW - 100);
    bCond.x = bx + 8; bCond.y = by + 28;
    gamFrame.appendChild(bCond);

    const bXp = createText(`+${badge.xp} XP`, 11, 700, C.green);
    bXp.x = bx + badgeW - 85; bXp.y = by + 15;
    gamFrame.appendChild(bXp);
  });

  // AI Interaction Pattern
  const patLabel = createText('AI WORKFLOW PATTERN:', 14, 700, C.white);
  patLabel.x = 40; patLabel.y = 460;
  gamFrame.appendChild(patLabel);

  const patText = createText(GAMIFICATION.pattern.join(' → '), 18, 700, C.green);
  patText.x = 280; patText.y = 456;
  gamFrame.appendChild(patText);

  // ─── 16 DEPARTMENT CARDS ────────────────────────────────────────────
  const deptStartY = gamY + 540;
  const COLS = 4;
  const CARD_W = (BOARD_W - 80 - (COLS - 1) * 20) / COLS;

  // Department section title
  const deptSectionTitle = createFrame('Department Section Title', BOARD_W, 60, { fill: C.ink });
  deptSectionTitle.x = 0; deptSectionTitle.y = deptStartY;
  PAGE.appendChild(deptSectionTitle);

  const deptTitleText = createText('ALL 16 DEPARTMENTS — AI Bot Workflows', 28, 700, C.white, BOARD_W - 80);
  deptTitleText.x = 40; deptTitleText.y = 12;
  deptSectionTitle.appendChild(deptTitleText);

  let currentY = deptStartY + 80;

  DEPARTMENTS.forEach((dept, idx) => {
    const col = idx % COLS;
    const row = Math.floor(idx / COLS);
    const cardX = 40 + col * (CARD_W + 20);

    // Calculate card height based on workflows
    const workflowHeight = dept.workflows.length * 105;
    const cardH = 180 + workflowHeight;

    if (col === 0 && idx > 0) {
      // Find max height of previous row
      const prevRowStart = idx - COLS;
      let maxH = 0;
      for (let j = prevRowStart; j < idx && j < DEPARTMENTS.length; j++) {
        const h = 180 + DEPARTMENTS[j].workflows.length * 105;
        if (h > maxH) maxH = h;
      }
      currentY += maxH + 24;
    }

    const cardY = col === 0 ? currentY : currentY;

    // Card background
    const card = createCard(CARD_W, cardH, C.ink2, 16, { color: dept.color, weight: 2 });
    card.x = cardX; card.y = cardY;
    PAGE.appendChild(card);

    // Department header bar
    const headerBar = createCard(CARD_W, 50, dept.color, 0);
    headerBar.x = cardX; headerBar.y = cardY;
    headerBar.topLeftRadius = 16; headerBar.topRightRadius = 16;
    PAGE.appendChild(headerBar);

    // Department name
    const deptName = createText(`${dept.icon} ${dept.name}`, 16, 700, C.white, CARD_W - 20);
    deptName.x = cardX + 10; deptName.y = cardY + 8;
    PAGE.appendChild(deptName);

    // Department ID
    const deptId = createText(dept.id, 10, 600, { r: 1, g: 1, b: 1 });
    deptId.x = cardX + CARD_W - 80; deptId.y = cardY + 12;
    PAGE.appendChild(deptId);

    // Phase badges
    const deptPhase = createText(`Phases: ${dept.phase.join(' · ')}`, 9, 400, C.muted, CARD_W - 20);
    deptPhase.x = cardX + 10; deptPhase.y = cardY + 30;
    PAGE.appendChild(deptPhase);

    // Description
    const deptDesc = createText(dept.desc, 11, 400, C.muted, CARD_W - 20);
    deptDesc.x = cardX + 10; deptDesc.y = cardY + 58;
    PAGE.appendChild(deptDesc);

    // Workflow count
    const wfCount = createText(`${dept.workflows.length} Bot Workflows`, 12, 700, C.green, CARD_W - 20);
    wfCount.x = cardX + 10; wfCount.y = cardY + 80;
    PAGE.appendChild(wfCount);

    // Separator
    const sep = createCard(CARD_W - 20, 1, C.ink3, 0);
    sep.x = cardX + 10; sep.y = cardY + 100;
    PAGE.appendChild(sep);

    // Individual workflows
    dept.workflows.forEach((wf, wi) => {
      const wfY = cardY + 110 + wi * 105;

      // Bot name
      const botName = createText(`🤖 ${wf.bot}`, 12, 700, C.cyan, CARD_W - 30);
      botName.x = cardX + 15; botName.y = wfY;
      PAGE.appendChild(botName);

      // Trigger
      const trigLabel = createText('TRIGGER:', 8, 700, C.cta);
      trigLabel.x = cardX + 15; trigLabel.y = wfY + 18;
      PAGE.appendChild(trigLabel);

      const trigText = createText(wf.trigger, 9, 400, C.muted, CARD_W - 90);
      trigText.x = cardX + 70; trigText.y = wfY + 18;
      PAGE.appendChild(trigText);

      // Action
      const actLabel = createText('ACTION:', 8, 700, C.green);
      actLabel.x = cardX + 15; actLabel.y = wfY + 42;
      PAGE.appendChild(actLabel);

      const actText = createText(wf.action, 9, 400, C.muted, CARD_W - 90);
      actText.x = cardX + 70; actText.y = wfY + 42;
      PAGE.appendChild(actText);

      // XP and Score badges
      const xpBadge = createText(`+${wf.xp} XP`, 10, 700, C.green);
      xpBadge.x = cardX + 15; xpBadge.y = wfY + 72;
      PAGE.appendChild(xpBadge);

      const scoreBadge = createText(`→ ${wf.score}`, 10, 600, C.cyan);
      scoreBadge.x = cardX + 90; scoreBadge.y = wfY + 72;
      PAGE.appendChild(scoreBadge);

      // Separator between workflows
      if (wi < dept.workflows.length - 1) {
        const wfSep = createCard(CARD_W - 40, 1, C.ink3, 0);
        wfSep.x = cardX + 20; wfSep.y = wfY + 92;
        PAGE.appendChild(wfSep);
      }
    });
  });

  // ─── FUNNEL CONVERGENCE MAP ─────────────────────────────────────────
  // Calculate where departments end
  let lastDeptY = currentY;
  // Get the last row's max height
  const lastRowStart = Math.floor((DEPARTMENTS.length - 1) / COLS) * COLS;
  let lastRowMaxH = 0;
  for (let j = lastRowStart; j < DEPARTMENTS.length; j++) {
    const h = 180 + DEPARTMENTS[j].workflows.length * 105;
    if (h > lastRowMaxH) lastRowMaxH = h;
  }
  const funnelY = lastDeptY + lastRowMaxH + 60;

  const funnelFrame = createFrame('Funnel Convergence', BOARD_W, 400, { fill: C.ink });
  funnelFrame.x = 0; funnelFrame.y = funnelY;
  PAGE.appendChild(funnelFrame);

  const funnelTitle = createText('MASTER FUNNEL CONVERGENCE MAP', 28, 700, C.cta, BOARD_W - 80);
  funnelTitle.x = 40; funnelTitle.y = 20;
  funnelFrame.appendChild(funnelTitle);

  const funnelDesc = createText(
    'All 219 front-page links → 3 funnel types → APPLY TO QUALIFY terminal conversion',
    14, 400, C.muted, BOARD_W - 80
  );
  funnelDesc.x = 40; funnelDesc.y = 60;
  funnelFrame.appendChild(funnelDesc);

  // Three funnel type cards
  const funnels = [
    { name: 'CONTENT FUNNEL', desc: 'Read/Info actions → Desktop Mode → Scroll engagement → Article consumption → Awareness', color: C.cyan, count: '~57 active links' },
    { name: 'SERVICE FUNNEL', desc: 'Reserve/Purchase actions → Slide 5 Purchase Carousel → Product selection → Application', color: C.cta, count: '~30 JS CTAs' },
    { name: 'EXTERNAL HANDOFF', desc: 'HIRECAR.LA / Partner links → Exit to external properties → Separate conversion funnels', color: C.mid, count: '3 external exits' },
  ];

  const funnelCardW = (BOARD_W - 120) / 3;
  funnels.forEach((f, i) => {
    const fx = 40 + i * (funnelCardW + 20);

    const fCard = createCard(funnelCardW, 140, C.ink2, 12, { color: f.color, weight: 2 });
    fCard.x = fx; fCard.y = 100;
    funnelFrame.appendChild(fCard);

    const fName = createText(f.name, 16, 700, f.color, funnelCardW - 24);
    fName.x = fx + 12; fName.y = 115;
    funnelFrame.appendChild(fName);

    const fDesc = createText(f.desc, 11, 400, C.muted, funnelCardW - 24);
    fDesc.x = fx + 12; fDesc.y = 140;
    funnelFrame.appendChild(fDesc);

    const fCount = createText(f.count, 12, 700, C.green, funnelCardW - 24);
    fCount.x = fx + 12; fCount.y = 210;
    funnelFrame.appendChild(fCount);
  });

  // Terminal conversion
  const termCard = createCard(BOARD_W - 80, 80, C.cta, 12);
  termCard.x = 40; termCard.y = 280;
  funnelFrame.appendChild(termCard);

  const termText = createText('⚡ APPLY TO QUALIFY — Terminal Conversion Point — First Class Qualification', 20, 700, C.ink, BOARD_W - 160);
  termText.x = 80; termText.y = 295;
  funnelFrame.appendChild(termText);

  const termSub = createText('Lead Capture → Verify → Thank You → LIVE Access → Full Hero Carousel Active', 13, 400, C.ink2, BOARD_W - 160);
  termSub.x = 80; termSub.y = 325;
  funnelFrame.appendChild(termSub);

  // ─── SUMMARY STATS ──────────────────────────────────────────────────
  const statsY = funnelY + 440;
  const statsFrame = createFrame('Summary Stats', BOARD_W, 120, { fill: C.darkBg });
  statsFrame.x = 0; statsFrame.y = statsY;
  PAGE.appendChild(statsFrame);

  const stats = [
    { label: 'Departments', value: '16' },
    { label: 'AI Bot Workflows', value: `${DEPARTMENTS.reduce((sum, d) => sum + d.workflows.length, 0)}` },
    { label: 'Milestone Phases', value: '5' },
    { label: 'Scoring Systems', value: '6' },
    { label: 'Badges', value: '9' },
    { label: 'Gamification Tiers', value: '4' },
    { label: 'Front Page Links', value: '219' },
    { label: 'Terminal Funnels', value: '3' },
  ];

  const statW = (BOARD_W - 80) / stats.length;
  stats.forEach((s, i) => {
    const sx = 40 + i * statW;

    const sValue = createText(s.value, 32, 700, C.cta);
    sValue.x = sx; sValue.y = 20;
    statsFrame.appendChild(sValue);

    const sLabel = createText(s.label, 11, 400, C.muted);
    sLabel.x = sx; sLabel.y = 65;
    statsFrame.appendChild(sLabel);
  });

  const footerText = createText('HIRECAR MarketWatch! — Workflow Blueprint v1.0 — Generated 2026-03-03 — Auto Operator Intelligence', 12, 400, C.mid, BOARD_W - 80);
  footerText.x = 40; footerText.y = 90;
  statsFrame.appendChild(footerText);

  // ─── ZOOM TO FIT ────────────────────────────────────────────────────
  figma.viewport.scrollAndZoomIntoView(PAGE.children);

  figma.notify('✅ HIRECAR Workflow Blueprint generated! 16 departments, 80+ workflows, gamification engine.', { timeout: 5000 });

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('✅ HIRECAR Workflow Blueprint — Generation Complete');
  console.log(`   ${DEPARTMENTS.length} Departments`);
  console.log(`   ${DEPARTMENTS.reduce((sum, d) => sum + d.workflows.length, 0)} AI Bot Workflows`);
  console.log(`   ${MILESTONES.length} Milestone Phases`);
  console.log(`   ${GAMIFICATION.scores.length} Scoring Systems`);
  console.log(`   ${GAMIFICATION.badges.length} Badges`);
  console.log(`   ${GAMIFICATION.tiers.length} Gamification Tiers`);
  console.log('═══════════════════════════════════════════════════════════════');

})();
