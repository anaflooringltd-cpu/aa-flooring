export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  readMinutes: number;
  excerpt: string;
  tags: string[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hardwood-flooring-cost-vancouver",
    title: "How Much Does Hardwood Flooring Cost in Vancouver? (2026 Guide)",
    metaTitle: "Hardwood Flooring Cost in Vancouver 2026 — A&A Flooring",
    metaDescription:
      "Real price ranges for hardwood flooring installation in Vancouver and the Lower Mainland. Solid vs engineered, supply vs install, and what affects the final cost.",
    publishedAt: "2026-05-15",
    readMinutes: 6,
    excerpt:
      "Hardwood flooring is one of the most popular renovations in Greater Vancouver — and one of the most misquoted. Here's what you'll actually pay in 2026, broken down honestly.",
    tags: ["Cost Guide", "Hardwood", "Vancouver"],
    sections: [
      {
        heading: "The Short Answer",
        paragraphs: [
          "For a typical Vancouver-area home, expect to pay $8–$18 CAD per square foot installed for engineered hardwood, and $12–$22 per square foot for solid hardwood. That covers supply and labour. On a 1,000 sq ft main floor, you're looking at a total of roughly $8,000–$22,000 depending on the wood species, finish, and subfloor condition.",
          "Those are wide ranges for a reason — hardwood pricing in BC is genuinely variable. The species you choose, whether the floor is pre-finished or site-finished, the condition of your subfloor, and the complexity of the layout all move the number significantly.",
        ],
      },
      {
        heading: "What Drives the Price",
        paragraphs: [
          "Wood species is the biggest variable. White oak — the most popular choice in Vancouver right now — runs $5–$9 per sq ft for material alone. Maple and birch are cheaper at $4–$7. Walnut and exotic species can hit $12–$18 per sq ft just for the wood.",
          "Pre-finished vs site-finished is the second big factor. Pre-finished hardwood is faster (1–2 days less on site) and dust-free, making it ideal for occupied homes. Site-finished gives you a flatter surface and unlimited stain options, but adds 3–4 days for drying time between coats — and that time costs money.",
        ],
        bullets: [
          "Subfloor prep: if your subfloor has high spots or soft areas, add $2–$4 per sq ft for grinding or patching",
          "Stair work: stair treads and nosings are priced separately, typically $80–$150 per step installed",
          "Furniture moving: most contractors charge $100–$300 extra, or you move it yourself",
          "Removal of existing flooring: $1–$3 per sq ft for carpet or tile removal and disposal",
        ],
      },
      {
        heading: "Engineered vs Solid: Which is Worth It in BC?",
        paragraphs: [
          "In Metro Vancouver's damp climate, engineered hardwood is often the smarter buy — even if it costs slightly less per square foot. Engineered wood is dimensionally stable across BC's humidity swings (wet winters, dry summers with air conditioning). Solid hardwood can gap or cup if the moisture conditions aren't right.",
          "For concrete subfloors — common in condos and basement suites — engineered is the only real option. Solid hardwood needs a plywood base and doesn't tolerate the moisture that concrete can release.",
        ],
      },
      {
        heading: "Getting an Accurate Quote",
        paragraphs: [
          "Any quote that doesn't include a site visit should be taken with a grain of salt. Subfloor condition, room shape, existing flooring removal, and stair complexity all affect the final number — and none of that can be assessed from a phone call.",
          "At A&A Flooring, we do free site visits throughout Coquitlam, Burnaby, Vancouver, and the Tri-Cities. We measure, assess the subfloor, and give you a written quote that covers everything — supply, labour, prep, and trim. No surprises at the end.",
        ],
      },
    ],
  },

  {
    slug: "hardwood-vs-vinyl-plank-bc",
    title: "Hardwood vs. Vinyl Plank Flooring: Which is Right for Your BC Home?",
    metaTitle: "Hardwood vs Vinyl Plank Flooring — BC Homeowner Guide | A&A Flooring",
    metaDescription:
      "Comparing hardwood and vinyl plank flooring for BC homes. Durability, cost, moisture resistance, and resale value — honest advice from a Coquitlam flooring contractor.",
    publishedAt: "2026-05-10",
    readMinutes: 5,
    excerpt:
      "Hardwood and luxury vinyl plank are the two most popular flooring choices in BC right now. They look similar but behave very differently. Here's how to choose.",
    tags: ["Hardwood", "Vinyl", "Comparison"],
    sections: [
      {
        heading: "The Honest Comparison",
        paragraphs: [
          "A decade ago this wasn't a close contest — hardwood was the clear premium choice and vinyl was for rentals. That's changed. Today's luxury vinyl plank (LVP) is a genuinely good product: waterproof, durable, and convincingly realistic. But it's not the same as hardwood, and the difference matters depending on what you're buying a floor for.",
        ],
      },
      {
        heading: "Where Vinyl Plank Wins",
        paragraphs: [
          "Waterproofing is vinyl's strongest card. In bathrooms, laundry rooms, kitchens, and basement suites, LVP is the practical choice. It handles spills, pet accidents, and humidity swings without swelling, gapping, or cupping. Hardwood in these areas is a risk.",
          "Cost is the other advantage. Quality LVP installed runs $6–$12 per sq ft in BC — roughly half the cost of mid-range hardwood. For rental properties, investment suites, or high-traffic areas where you expect wear, vinyl's economics are hard to argue with.",
        ],
        bullets: [
          "Basement suites and below-grade rooms: vinyl only, hardwood isn't suitable",
          "Households with dogs or young children: vinyl holds up better to daily abuse",
          "Strata buildings with strict waterproofing requirements: vinyl + acoustic underlay is the standard solution",
          "Budget renovations: vinyl gives you a quality look at a lower price point",
        ],
      },
      {
        heading: "Where Hardwood Wins",
        paragraphs: [
          "Longevity is hardwood's defining advantage. A well-installed hardwood floor can last 80–100 years. It can be sanded and refinished multiple times — changing the colour, fixing scratches, and essentially renewing the floor every 15–20 years. Vinyl cannot be refinished. When it's worn, it's replaced.",
          "Resale value is the other factor. In Metro Vancouver's real estate market, hardwood floors are a selling point that buyers actively look for. A home with original hardwood commands a higher price than an identical home with vinyl. If you're renovating to sell or to own long-term, hardwood typically pays for itself.",
        ],
      },
      {
        heading: "Our Recommendation",
        paragraphs: [
          "For main living areas, bedrooms, and hallways in a home you plan to own for more than 5 years: hardwood. For kitchens, bathrooms, basement suites, or any room with moisture exposure: vinyl plank. For a full renovation where you need both to coexist, we select the transition points carefully so the two floors meet cleanly.",
          "We install both products throughout the Lower Mainland. If you're not sure which is right for your specific situation, a site visit takes about 30 minutes and gives us enough information to make a clear recommendation.",
        ],
      },
    ],
  },

  {
    slug: "how-to-care-for-hardwood-floors",
    title: "How to Care for Hardwood Floors: A Complete Guide",
    metaTitle: "How to Care for Hardwood Floors — Complete Maintenance Guide | A&A Flooring",
    metaDescription:
      "Daily cleaning, seasonal maintenance, scratch prevention, and refinishing timelines for hardwood floors. Practical advice from a flooring contractor in Coquitlam, BC.",
    publishedAt: "2026-05-05",
    readMinutes: 7,
    excerpt:
      "Hardwood floors last a lifetime with the right care — or wear out in a decade with the wrong habits. Here's what actually matters for keeping your floors in great shape.",
    tags: ["Care & Maintenance", "Hardwood"],
    sections: [
      {
        heading: "Daily and Weekly Cleaning",
        paragraphs: [
          "The single most damaging thing to a hardwood floor is grit. Sand and dirt act like sandpaper underfoot — every footstep grinds the particles against the finish and eventually the wood. A regular sweeping or dry-mopping routine removes this before it becomes a problem.",
        ],
        bullets: [
          "Sweep or dry-mop daily in high-traffic areas (hallways, kitchen, front entry)",
          "Use a microfibre flat mop — it picks up fine dust that a broom scatters",
          "Vacuum weekly with a soft-bristle attachment — never a beater bar, which damages the finish",
          "Wipe spills immediately with a dry or barely damp cloth",
        ],
      },
      {
        heading: "What Not to Use",
        paragraphs: [
          "This is where most floor damage happens. Steam mops, wet mops, and excess water are the enemies of hardwood. Wood swells when it absorbs moisture, and even a sealed floor will allow water in at the seams over time. One season of steam mopping can cause cupping that requires a full sanding to fix.",
        ],
        bullets: [
          "No steam mops — ever",
          "No wet mopping — a barely damp microfibre cloth is the maximum",
          "No ammonia-based cleaners (Windex, Pine-Sol) — they strip the finish",
          "No oil soaps (Murphy's Oil Soap) on polyurethane-finished floors — they leave a residue that prevents future refinishing from bonding",
          "No vinegar — it's acidic and dulls the finish over time",
        ],
      },
      {
        heading: "Protecting Against Scratches",
        paragraphs: [
          "Scratches are inevitable, but most are preventable. The biggest culprits are furniture legs, dog nails, and outdoor shoes tracked in with grit.",
          "Felt pads on furniture legs are cheap and effective — replace them every 6–12 months as they compress and collect debris. Area rugs in high-traffic zones (dining tables, seating areas) protect the floor and add warmth. For dogs, keeping nails trimmed and placing a mat at the door reduces scratching significantly.",
        ],
      },
      {
        heading: "Humidity and Seasonal Movement",
        paragraphs: [
          "Wood is hygroscopic — it absorbs and releases moisture from the air, expanding and contracting with the seasons. In BC, this means floors are widest in the humid winter months and narrowest in dry summer with air conditioning. This movement is normal and expected.",
          "Keeping indoor humidity between 35–55% year-round minimizes this movement and prevents gapping, cupping, or crowning. A humidifier in winter and a dehumidifier or air conditioning in summer helps. Dramatic swings — like going away for a month in winter with the heat off — can cause floor damage that's expensive to fix.",
        ],
      },
      {
        heading: "When to Refinish",
        paragraphs: [
          "Most hardwood floors should be refinished every 15–25 years, depending on traffic and wear. Signs it's time: the finish is worn through in high-traffic areas, scratches reach the wood (not just the finish), or the floor looks dull even after cleaning.",
          "A screen-and-recoat (light sanding of just the finish, no wood removed) can extend the life between full refinishes and costs significantly less. We recommend it every 7–10 years as a maintenance step.",
        ],
      },
    ],
  },

  {
    slug: "engineered-vs-solid-hardwood",
    title: "Engineered vs. Solid Hardwood: What's the Difference?",
    metaTitle: "Engineered vs Solid Hardwood Flooring — Which to Choose | A&A Flooring",
    metaDescription:
      "Engineered and solid hardwood look identical but behave differently. Here's what BC homeowners need to know about stability, longevity, refinishing, and where each works best.",
    publishedAt: "2026-04-28",
    readMinutes: 5,
    excerpt:
      "Both are real wood. Both look beautiful. But engineered and solid hardwood are built differently, installed differently, and age differently. Here's how to choose.",
    tags: ["Hardwood", "Engineered", "Solid Wood"],
    sections: [
      {
        heading: "What's the Actual Difference?",
        paragraphs: [
          "Solid hardwood is exactly what it sounds like: a plank of wood milled from a single piece of timber, typically 3/4\" thick. Engineered hardwood has a real hardwood veneer on top — the part you see and walk on — bonded to multiple layers of plywood or high-density fibreboard underneath. Both products look identical from above. The difference is entirely in the construction.",
        ],
      },
      {
        heading: "Why Engineered Exists",
        paragraphs: [
          "Solid wood moves — a lot. It expands and contracts with changes in humidity and temperature, which is why it can't be glued or nailed directly to concrete, and why it's problematic below grade or in high-moisture rooms. Engineered hardwood was developed to solve this. The cross-ply construction of the base layers works against the movement of the wood veneer, resulting in a much more stable product.",
          "In BC's climate — wet winters, dry summers — this stability matters. Engineered hardwood performs reliably in conditions that would cause solid wood to cup or gap.",
        ],
      },
      {
        heading: "Where Each Works Best",
        paragraphs: [
          "Solid hardwood is ideal for main floors and upper levels in homes with plywood subfloors. It can be nailed or stapled — never glued or floated — and needs at least 18\" of ventilated crawl space below if installed over a crawl space. It's the better choice for homes where you want the option to refinish many times over a 50–80 year lifespan.",
          "Engineered hardwood works almost everywhere: over concrete slabs, in basement level rooms (above grade only — not true basements with moisture issues), in condos and strata buildings, and in the Lower Mainland's humid coastal climate. It can be glued, nailed, stapled, or floated.",
        ],
        bullets: [
          "Condos and strata: engineered only — floating install required to meet IIC sound ratings",
          "Basements above grade: engineered, with a moisture barrier",
          "True basements or below-grade rooms: vinyl plank — neither hardwood type is appropriate",
          "Heritage homes with original subfloor: solid hardwood, if the subfloor is sound",
        ],
      },
      {
        heading: "Can You Refinish Engineered Hardwood?",
        paragraphs: [
          "Yes — but fewer times than solid. A quality engineered floor with a 3–6mm hardwood layer can typically be sanded and refinished 2–4 times. A thin-veneer engineered floor (1–2mm) can be screen-and-recoated once or twice but not fully sanded.",
          "For comparison, a 3/4\" solid hardwood floor can be refinished 6–8 times over its lifetime. If longevity and the ability to change the stain colour decades from now matters to you, solid hardwood is worth the premium.",
        ],
      },
    ],
  },

  {
    slug: "best-flooring-for-condos-vancouver",
    title: "Best Flooring for Condos and Strata Buildings in Metro Vancouver",
    metaTitle: "Best Flooring for Condos in Vancouver — Strata-Approved Options | A&A Flooring",
    metaDescription:
      "Strata buildings in Metro Vancouver have specific flooring requirements. Here's what works, what gets approved, and how to avoid costly mistakes in your condo renovation.",
    publishedAt: "2026-04-20",
    readMinutes: 6,
    excerpt:
      "Condo flooring in Vancouver isn't as simple as choosing what you like — strata bylaws, IIC ratings, and building rules all apply. Here's how to navigate it.",
    tags: ["Condos", "Strata", "Vancouver", "Vinyl"],
    sections: [
      {
        heading: "The Strata Flooring Challenge",
        paragraphs: [
          "Most strata corporations in Metro Vancouver require flooring that meets minimum acoustic performance standards — typically IIC (Impact Insulation Class) 50 or higher. This rating measures how much impact sound (footsteps, dropped objects) transmits to the unit below. Fail to meet it, and you may be required to pull up your new floor.",
          "The good news is that meeting IIC 50 is straightforward if you know what you're doing. The combination of the right flooring product and the right underlay gets most floors well above the threshold.",
        ],
      },
      {
        heading: "What the Strata Rules Actually Require",
        paragraphs: [
          "Strata bylaws vary building by building — there's no single Metro Vancouver standard. Some buildings require IIC 50, others IIC 60 or higher. Some require floating floors only (no nailing or gluing, which would require drilling into the concrete). Some require pre-approval of your flooring selection before installation begins.",
          "Before you buy a single plank, get a copy of your strata's flooring bylaw. We do this as a standard step for every condo job — we've dealt with most of the major property management firms in the region and can tell you quickly what documentation you'll need.",
        ],
      },
      {
        heading: "The Best Flooring Options for Vancouver Condos",
        paragraphs: [
          "Luxury vinyl plank (LVP) with acoustic underlay is the most common solution — and often the best one. A quality LVP like SPC (stone polymer composite) combined with a 2mm acoustic underlay typically achieves IIC 60–70, well above most strata minimums. It's waterproof, handles the concrete subfloor well, and installs as a floating floor with no adhesive or fasteners.",
          "Engineered hardwood is the premium option for condos where hardwood aesthetics are a priority. It must be installed as a floating floor over a moisture barrier and appropriate underlay. Quality engineered hardwood with a good acoustic underlay typically achieves IIC 52–65 depending on the products used.",
        ],
        bullets: [
          "SPC vinyl plank + 2mm acoustic underlay: IIC 62–72, most cost-effective compliant solution",
          "Engineered hardwood + acoustic underlay: IIC 52–65, premium aesthetics, higher cost",
          "Laminate: generally not recommended in condos — harder surface, lower acoustic performance",
          "Solid hardwood: not suitable for concrete subfloors — not an option in most condos",
        ],
      },
      {
        heading: "The Documentation Process",
        paragraphs: [
          "Most strata corporations require written documentation before approving a flooring change: the product specifications, the underlay specifications, and the combined IIC rating (backed by a third-party test report). We provide this package as part of our condo installation service — it's something we've done dozens of times in Burnaby, Port Moody, Vancouver, and New Westminster.",
          "We submit the documentation to your strata management company, typically receive approval within a few business days, and then schedule the install. No surprises, no after-the-fact compliance issues.",
        ],
      },
    ],
  },

  {
    slug: "stair-tread-replacement-guide",
    title: "Stair Tread Replacement: Options, Cost & What to Expect",
    metaTitle: "Stair Tread Replacement Cost & Options — A&A Flooring Coquitlam",
    metaDescription:
      "Everything BC homeowners need to know about replacing stair treads: wood species, custom vs stock, cost ranges, and what the installation process looks like.",
    publishedAt: "2026-04-12",
    readMinutes: 5,
    excerpt:
      "Replacing stair treads transforms the look of a home as much as new flooring does — sometimes more. Here's what's involved, what it costs, and why custom-milled treads are worth considering.",
    tags: ["Stair Treads", "Custom Work", "Cost Guide"],
    sections: [
      {
        heading: "Stock Treads vs Custom-Milled Treads",
        paragraphs: [
          "Most big-box home improvement stores sell stock stair treads in limited dimensions and a handful of species. If your stairs are a standard width and you're happy with what's available, stock treads are a reasonable option. But most staircases aren't standard — widths vary, existing nosings may be a non-standard profile, and if you want the treads to match your main floor flooring exactly, stock is rarely the right answer.",
          "At A&A Flooring, we mill custom stair treads in our Coquitlam shop. We match the species, cut profile, and stain to your existing floor so the staircase reads as a continuous surface rather than a separate element. This is what separates a finished renovation from one that looks assembled from parts.",
        ],
      },
      {
        heading: "What It Costs",
        paragraphs: [
          "Stair tread replacement in BC typically runs $80–$180 per step installed, depending on the species, whether the work is custom or stock, and the complexity of the installation. A standard 14-step staircase with custom white oak treads and matching nosings would typically fall in the $1,500–$2,500 range for a full supply-and-install.",
          "Factors that move the price up: curved or winder stairs (non-standard shapes require more material and labour), site-finishing after installation (adds drying time), riser replacement (often done alongside treads), and matching existing stain colours precisely.",
        ],
        bullets: [
          "Stock tread, simple install: $80–$120 per step",
          "Custom-milled tread, matching existing floor: $120–$180 per step",
          "Site-finished (stained and coated on-site): add $30–$50 per step",
          "Riser replacement (front face of each step): add $30–$60 per step",
        ],
      },
      {
        heading: "The Installation Process",
        paragraphs: [
          "Tread replacement starts with removing the existing treads — usually carpet, old hardwood, or painted wood. The stringers (the structural side pieces) are inspected for any soft or damaged areas. New treads are cut to size in our shop, installed with construction adhesive and finish nails, and then the nosings and risers are fitted.",
          "For custom-milled treads, we bring samples to your home first to confirm the match to your existing floor before cutting. A typical 12–16 step staircase takes one full day to complete.",
        ],
      },
      {
        heading: "When to Do Stair Work",
        paragraphs: [
          "If you're also replacing your main floor, do the stairs at the same time. It's more cost-effective (one mobilization, one cleanup, consistent materials), and it ensures the species and finish match before the floor is laid. Trying to match an existing floor after the fact is harder and sometimes impossible.",
          "We serve homeowners throughout Coquitlam, Port Coquitlam, Burnaby, and the broader Lower Mainland. If your stairs need attention, a site visit will give us everything we need to quote the job accurately.",
        ],
      },
    ],
  },

  {
    slug: "how-to-choose-flooring-colour",
    title: "How to Choose the Right Flooring Colour for Your Home",
    metaTitle: "How to Choose Flooring Colour for Your Home | A&A Flooring BC",
    metaDescription:
      "Practical advice on choosing hardwood or vinyl floor colours that work with your walls, cabinets, and natural light. Common mistakes and how to avoid them.",
    publishedAt: "2026-04-05",
    readMinutes: 5,
    excerpt:
      "Floor colour is one of the most permanent design decisions in a home — and one of the most agonized over. Here's a practical framework for choosing well.",
    tags: ["Design", "Colour", "Hardwood"],
    sections: [
      {
        heading: "Start with What You're Keeping",
        paragraphs: [
          "The floor has to work with the fixed elements in your home — the things you're not replacing. Cabinets, countertops, wall colours, and trim are all reference points. Before looking at floor samples, make a list of the undertones in each of these elements. Warm undertones (yellows, reds, oranges) and cool undertones (greys, blues, greens) generally shouldn't be mixed — pick a lane.",
          "In most Lower Mainland homes, warm white or off-white walls pair naturally with warm-toned woods like natural white oak, honey maple, or warm walnut. Cooler grey walls work better with cooler-toned floors like grey-washed oak or whitened hardwood.",
        ],
      },
      {
        heading: "Light Makes Everything Different",
        paragraphs: [
          "A floor sample looks completely different in the store than it does in your home. The direction of your windows, the colour of your walls, and the colour temperature of your light fixtures all change how the floor reads. A floor that looks warm and honey-toned under fluorescent store lighting can look almost orange in a south-facing room with afternoon sun.",
          "Always take samples home. Tape them to the floor and observe them at different times of day — morning light, afternoon light, and evening artificial light. What you see in those three conditions is what you'll live with.",
        ],
      },
      {
        heading: "The Safest Choices (and Why)",
        paragraphs: [
          "Natural and light-medium tones — unfinished, natural, or light stains on white oak or maple — are consistently the most popular choices in Metro Vancouver for a reason: they work with almost everything, they don't show dust or pet hair as dramatically as dark floors, and they age well. Dark floors (espresso, ebony, very dark walnut) are striking but unforgiving — every scratch, dust bunny, and footprint is visible.",
          "Grey-toned hardwood had a moment in the mid-2010s and is now dated in most design contexts. If your home has a modern Scandinavian or industrial aesthetic, a cool grey-white can still work well — but it's a specific choice, not a safe default.",
        ],
        bullets: [
          "Natural/light oak: works with virtually any wall colour, shows age gracefully",
          "Medium warm brown (e.g. natural walnut): rich and classic, pairs with warm interiors",
          "Whitened/bleached oak: bright and modern, unforgiving of dirt, very on-trend",
          "Dark (espresso, ebony): dramatic, high-maintenance, best in low-traffic formal areas",
          "Grey-washed: dated for most styles, still appropriate for very modern/Scandinavian interiors",
        ],
      },
      {
        heading: "Get Samples Before You Commit",
        paragraphs: [
          "We always bring physical samples to site visits — not just small chips but larger boards that give a better sense of how the floor will read across a room. If you're choosing between two species or two stains, we can do a small test patch on an inconspicuous area of your subfloor to let you see exactly what the finished floor will look like before we commit to the whole project.",
          "Colour choice is personal, and it's permanent enough to be worth taking the time to get right.",
        ],
      },
    ],
  },

  {
    slug: "vinyl-plank-vs-laminate",
    title: "Vinyl Plank vs. Laminate: Which Lasts Longer in BC Homes?",
    metaTitle: "Vinyl Plank vs Laminate Flooring in BC — Which is Better? | A&A Flooring",
    metaDescription:
      "Vinyl plank (LVP) and laminate look similar but differ significantly in moisture resistance, durability, and lifespan. Here's which to choose for BC homes.",
    publishedAt: "2026-03-28",
    readMinutes: 5,
    excerpt:
      "Both vinyl plank and laminate are popular budget-friendly flooring options. They look similar but behave very differently in BC's wet climate. Here's the honest comparison.",
    tags: ["Vinyl", "Laminate", "Comparison"],
    sections: [
      {
        heading: "The Core Difference",
        paragraphs: [
          "Luxury vinyl plank (LVP) and laminate are often confused because they look similar and are sold side-by-side in showrooms. The key difference is in the core: vinyl plank is made entirely of PVC plastic, making it 100% waterproof. Laminate has a high-density fibreboard (HDF) core that absorbs water — which means it can swell, buckle, and be permanently damaged by moisture.",
          "In BC's wet climate, that difference is significant.",
        ],
      },
      {
        heading: "Where Moisture Matters",
        paragraphs: [
          "If your flooring will be anywhere near water — kitchens, bathrooms, entryways, laundry rooms, basement suites — vinyl plank is the only sensible choice between the two. Even a slow leak under the dishwasher, or wet boots tracked in from a rainy Vancouver winter, can cause laminate to bubble and delaminate. Vinyl plank handles all of this without damage.",
          "For dry areas with no moisture risk — a bedroom, a living room well away from the kitchen — laminate performs adequately and costs somewhat less. But most rooms in most homes have some moisture exposure, which is why vinyl plank has largely replaced laminate as the standard choice in new builds and renovations across the Lower Mainland.",
        ],
      },
      {
        heading: "Durability and Longevity",
        paragraphs: [
          "Modern vinyl plank with a 12–20 mil wear layer is genuinely durable — tough enough for households with dogs, children, and heavy traffic. A quality LVP floor should last 20–30 years with normal maintenance. Laminate with a good AC rating (AC3 or AC4) holds up well to surface wear, but its susceptibility to moisture means a single water event can end its life prematurely.",
          "Neither product can be refinished. When they're worn out, they're replaced. This is the key advantage of hardwood over both — a hardwood floor can be sanded and refinished multiple times, making it a longer-term investment even at a higher initial cost.",
        ],
        bullets: [
          "Vinyl plank: waterproof, 20–30 year lifespan, not refinishable",
          "Laminate: water-resistant only, 10–20 year lifespan in dry conditions, not refinishable",
          "Both: floating installation, no adhesive required, good for DIY",
          "Both: cannot be repaired if deeply scratched — damaged planks must be replaced",
        ],
      },
      {
        heading: "Which to Choose",
        paragraphs: [
          "For most renovations in Greater Vancouver, vinyl plank is the better choice between the two. The modest price premium over laminate is worth the moisture protection, especially in BC where rain comes in through doors and windows more than 150 days a year.",
          "If you're working with a tight budget and installing in a truly dry area (a bedroom in a well-maintained home with no pets or young children), laminate can work. But when in doubt, vinyl plank. You won't regret the waterproofing.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatBlogDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
