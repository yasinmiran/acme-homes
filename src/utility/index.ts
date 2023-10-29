import { Listing } from "../models/listing.ts";

export function toListingModel(obj: Record<string, unknown>): Listing {
    return {
        id: obj.id,
        location: obj.smart_location,
        available_dates: "Oct 16 - Oct 28",
        bathrooms: obj.bathrooms,
        bedrooms: obj.bedrooms,
        designation: "USUALLY_BOOKED",
        price: obj.price || 786.42
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

export function assignFavourites(models: Listing[]): Listing[] {
    const indicesToAssign = getRandomIndices(2, models.length);
    // First, ensure all models have the 'favourite' property set to false
    for (const model of models) {
        model.favourite = false;
    }
    // Then, set the 'favourite' property to true for the randomly selected models
    for (const index of indicesToAssign) {
        models[index].favourite = true;
    }
    return models;
}
