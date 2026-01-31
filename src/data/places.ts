export type Place = {
  name: string;
  slug: string;
  area: string;
  locationNote: string; // e.g. "Online" / "Near London Bridge" (avoid full address)
  website?: string;
  contact?: string; // e.g. email or booking link (public)
  specialisms: string[];
  sessionFormat: string; // e.g. "Online / in-person"
  acceptingNewClients: boolean;
  blurb: string;
  updatedAt: string; // YYYY-MM-DD
  disclaimer?: string;
};

export const PLACES: Place[] = [
  {
    name: "Example Therapist — London Bridge",
    slug: "example-therapist-london-bridge",
    area: "London Bridge",
    locationNote: "Near London Bridge (exact location shared upon booking)",
    website: "https://example.com",
    contact: "https://example.com/book",
    specialisms: ["Anxiety", "Stress"],
    sessionFormat: "In-person / online",
    acceptingNewClients: true,
    blurb:
      "Template listing. Verify credentials and availability directly with the provider.",
    updatedAt: "2026-01-31",
    disclaimer:
      "This directory is informational and not medical advice. If you are in crisis, contact emergency services.",
  },
  {
    name: "Example Online Therapist",
    slug: "example-online-therapist",
    area: "Online",
    locationNote: "Online",
    website: "https://example.com",
    contact: "https://example.com/contact",
    specialisms: ["Relationship counselling"],
    sessionFormat: "Online",
    acceptingNewClients: true,
    blurb:
      "Template listing. Always confirm fees, availability, and registration status.",
    updatedAt: "2026-01-31",
    disclaimer:
      "This directory is informational and not medical advice. If you are in crisis, contact emergency services.",
  },
];

export function listAreas(): string[] {
  return Array.from(new Set(PLACES.map((p) => p.area))).sort();
}
