import { Listing } from "../models/listing.ts";

const API = 'https://public.opendatasoft.com/api/explore/v2.1';

export const fetchAirBnBListings = async (
    { limit = 6, offset = 0 }: { limit?: number; offset?: number }
) => {

    const url = `${ API }/catalog/datasets/airbnb-listings/records?limit=${ limit }&offset=${ offset }`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${ response.status }`);
        }
        const result = (await response.json());
        return result.results.map(toListingModel);
    } catch (error) {
        console.error("There was a problem fetching the data:", error);
        throw error;
    }

}

export const fetchSuggestedPlaces = async () => {
    return fetchAirBnBListings({ limit: 3 });
};

export const fetchNearbyStays = async () => {
    return fetchAirBnBListings({});
};

// Data Mappers

const toListingModel = (obj: Record<string, unknown>): Listing => {
    return {
        location: obj.smart_location,
        available_dates: "Oct 16 - Oct 28",
        bathrooms: obj.bathrooms,
        bedrooms: obj.bedrooms,
        designation: "USUALLY_BOOKED",
        price: 2000
    } as Listing;
};
