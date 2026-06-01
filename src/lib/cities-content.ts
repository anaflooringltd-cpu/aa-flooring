import type { CitySlug } from "@/lib/site-config";

export interface CityContent {
  slug: CitySlug;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  localNotes: string;
}

export const citiesContent: Partial<Record<CitySlug, CityContent>> = {
  coquitlam: {
    slug: "coquitlam",
    metaTitle: "Flooring Installation in Coquitlam, BC — A&A Flooring",
    metaDescription:
      "Hardwood, vinyl, and laminate floors installed across Coquitlam — from Burquitlam to Westwood Plateau. Same-day site visits available.",
    intro:
      "Coquitlam is home base. Our shop is on Smith Ave just off Como Lake, and most of the work we do happens within a 10-minute drive of it. We know the strata buildings around Burquitlam Station, the older homes in Maillardville, and the new builds going up around Burke Mountain.",
    neighborhoods: [
      "Burquitlam",
      "Westwood Plateau",
      "Maillardville",
      "Eagle Ridge",
      "Burke Mountain",
      "Como Lake",
    ],
    localNotes:
      "Older homes around Maillardville often have plywood subfloors that have settled — we plan an extra day for floor flattening on those. Strata buildings near the Evergreen Line require IIC 50+ acoustic underlay, which we always carry in stock.",
  },

  "port-moody": {
    slug: "port-moody",
    metaTitle: "Flooring Installation in Port Moody, BC — A&A Flooring",
    metaDescription:
      "Hardwood, vinyl, and laminate flooring installed across Port Moody — Inlet Centre, Heritage Mountain, Newport Village.",
    intro:
      "Port Moody is a 7-minute drive from our Coquitlam shop, and we work the city often — particularly the high-rise condos around Inlet Centre Station and the heritage homes near the brewery district.",
    neighborhoods: [
      "Inlet Centre",
      "Heritage Mountain",
      "Newport Village",
      "Heritage Woods",
      "Glenayre",
    ],
    localNotes:
      "Most newer towers in Port Moody have strata flooring policies requiring underlayment with documented IIC ratings. We submit the specs to your strata management office before the job starts so there&rsquo;s no friction at install.",
  },

  burnaby: {
    slug: "burnaby",
    metaTitle: "Flooring Installation in Burnaby, BC — A&A Flooring",
    metaDescription:
      "Trusted hardwood, vinyl, and laminate installation across Burnaby — Brentwood, Metrotown, Lougheed, Edmonds.",
    intro:
      "Burnaby is a city of contrasts for floors: glass-and-steel towers downtown, mid-century ramblers in Capitol Hill, and post-war bungalows around Edmonds. We&rsquo;ve worked all of it.",
    neighborhoods: [
      "Brentwood",
      "Metrotown",
      "Lougheed",
      "Edmonds",
      "Capitol Hill",
      "Burnaby Heights",
    ],
    localNotes:
      "Burnaby strata buildings often have restrictive flooring approval processes. We&rsquo;ve submitted documentation to most major property management firms in the city and can typically turn approval around in a few business days.",
  },

  vancouver: {
    slug: "vancouver",
    metaTitle: "Flooring Installation in Vancouver, BC — A&A Flooring",
    metaDescription:
      "Hardwood, vinyl, and custom flooring installed across Vancouver — Mount Pleasant, Kitsilano, East Van, Fairview, Marpole.",
    intro:
      "Vancouver is where character homes meet modern condos. We work everything from heritage Craftsman homes in Strathcona to Yaletown lofts and mid-century homes on the West Side.",
    neighborhoods: [
      "Mount Pleasant",
      "Kitsilano",
      "Strathcona",
      "Fairview",
      "East Van",
      "Marpole",
      "Cambie",
    ],
    localNotes:
      "Heritage homes in Strathcona, Mount Pleasant, and Kitsilano often have original fir floors worth saving. We&rsquo;ll always assess for refinishing before recommending replacement — sometimes a sand-and-stain is the right answer.",
  },

  "port-coquitlam": {
    slug: "port-coquitlam",
    metaTitle: "Flooring Installation in Port Coquitlam, BC — A&A Flooring",
    metaDescription:
      "Hardwood, vinyl, and laminate flooring installed across Port Coquitlam — Citadel, Birchland Manor, Hyde Creek, Riverwood.",
    intro:
      "Port Coquitlam is a 10-minute drive from our shop, and we know the city well — from the newer family homes in Citadel Heights to the townhouses along the Poco Trail corridor. It&rsquo;s a city of well-kept homes where owners take real pride in their renovations.",
    neighborhoods: [
      "Citadel",
      "Birchland Manor",
      "Hyde Creek",
      "Riverwood",
      "Oxford Heights",
      "Mary Hill",
    ],
    localNotes:
      "Many Port Coquitlam homes were built in the 1980s and 90s with builder-grade carpet over plywood subfloors — a straightforward swap for hardwood or vinyl plank. Newer townhouse complexes near the West Coast Express station often have strata bylaws requiring acoustic underlayment.",
  },

  "new-westminster": {
    slug: "new-westminster",
    metaTitle: "Flooring Installation in New Westminster, BC — A&A Flooring",
    metaDescription:
      "Hardwood, vinyl, and laminate flooring installed across New Westminster — Queens Park, Sapperton, Uptown, Queensborough.",
    intro:
      "New Westminster is BC&rsquo;s oldest city, and it shows in the housing stock: grand heritage homes in Queens Park, converted warehouses in Sapperton, and a growing number of high-rise condos along the SkyTrain corridor. Each type needs a different approach — and we&rsquo;ve worked them all.",
    neighborhoods: [
      "Queens Park",
      "Sapperton",
      "Uptown",
      "Queensborough",
      "Glenbrooke North",
      "Brow of the Hill",
    ],
    localNotes:
      "Queens Park heritage homes frequently have original Douglas fir subfloors in excellent condition — we always assess whether the existing wood is worth saving before recommending a full replacement. Queensborough condos near Columbia Station typically require strata-approved acoustic underlay with IIC documentation.",
  },

  surrey: {
    slug: "surrey",
    metaTitle: "Flooring Installation in Surrey, BC — A&A Flooring",
    metaDescription:
      "Hardwood, vinyl, and laminate flooring installed across Surrey — Fleetwood, Newton, South Surrey, White Rock, Clayton Heights.",
    intro:
      "Surrey is the Lower Mainland&rsquo;s largest city by area, and its housing market reflects that scale: sprawling new builds in Clayton Heights, established family neighbourhoods in Fleetwood, and the upscale homes of South Surrey and White Rock. We travel throughout the city regularly.",
    neighborhoods: [
      "Fleetwood",
      "Newton",
      "Clayton Heights",
      "South Surrey",
      "White Rock",
      "Cloverdale",
    ],
    localNotes:
      "New builds in Clayton and Grandview Heights often come with builder-grade flooring that homeowners upgrade within the first few years — we&rsquo;re well-versed in these layouts. South Surrey and White Rock homes tend to be larger, with open-concept main floors where consistent hardwood makes a strong impression.",
  },

  "maple-ridge": {
    slug: "maple-ridge",
    metaTitle: "Flooring Installation in Maple Ridge, BC — A&A Flooring",
    metaDescription:
      "Hardwood, vinyl, and laminate flooring installed across Maple Ridge — Albion, Thornhill, Silver Valley, Cottonwood.",
    intro:
      "Maple Ridge homeowners tend to have more space — larger lots, multi-level homes, and less strata paperwork. It&rsquo;s a city where hardwood installation really shines, and we&rsquo;ve done a lot of beautiful work out here in Silver Valley, Albion, and along the Alouette River corridor.",
    neighborhoods: [
      "Albion",
      "Thornhill",
      "Silver Valley",
      "Cottonwood",
      "Websters Corners",
      "Haney",
    ],
    localNotes:
      "Maple Ridge homes are often on larger lots with full basements — a great opportunity for engineered hardwood or luxury vinyl plank below grade where solid wood isn&rsquo;t suitable. The drive from our Coquitlam shop takes about 25 minutes, and we schedule Maple Ridge installs in dedicated full-day blocks.",
  },
};
