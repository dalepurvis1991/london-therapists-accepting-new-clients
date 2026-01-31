import placesJson from "./places.json";

export type Place = {
  name: string;
  slug: string;
  area: string;
  locationNote: string;
  website?: string;
  contact?: string;
  specialisms: string[];
  sessionFormat: string;
  acceptingNewClients: boolean;
  blurb: string;
  updatedAt: string;
  disclaimer?: string;
  _source?: unknown;
};

export const PLACES = placesJson as Place[];

export function listAreas(): string[] {
  return Array.from(new Set(PLACES.map((p) => p.area))).sort();
}
