import { assignDesignations, toListingModel } from "../utility";

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
        const res = (await response.json());
        res.results = res.results.map(toListingModel);
        assignDesignations(res.results);
        return res;
    } catch (error) {
        console.error("There was a problem fetching the data:", error);
        throw error;
    }

}

export const fetchSuggestedPlaces = async () => {
    return fetchAirBnBListings({ limit: 3 });
};

export const fetchNearbyStays = fetchAirBnBListings;

