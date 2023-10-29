import { Listing } from "../models/listing.ts";

export function toListingModel(obj: Record<string, unknown>): Listing {
    return {
        id: obj.id,
        location: obj.smart_location,
        available_dates: "Oct 16 - Oct 28",
        bathrooms: obj.bathrooms,
        bedrooms: obj.bedrooms,
        designation: "USUALLY_BOOKED",
        price: 2000
    } as Listing;
}

export function getRandomIndices(limit: number, maxIndex: number): number[] {
    const indices = new Set<number>();
    while (indices.size < limit) {
        const randomIndex = Math.floor(Math.random() * maxIndex);
        indices.add(randomIndex);
    }
    return [ ...indices ];
}

export function assignDesignations(models: Listing[]): Listing[] {
    const indicesToAssign = getRandomIndices(2, models.length);
    for (let i = 0; i < models.length; i++) {
        if (indicesToAssign.includes(i)) {
            models[i].designation = i === indicesToAssign[0] ? "USUALLY_BOOKED" : "LOW_RATE";
        } else {
            models[i].designation = "NONE";
        }
    }
    return models;
}
