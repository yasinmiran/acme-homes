const API = 'https://public.opendatasoft.com/api/explore/v2.1';

export const fetchAirBnBListings = async (
    { limit = 20, offset = 0 }: { limit?: number; offset?: number }
) => {

    const url = `${ API }/catalog/datasets/airbnb-listings/records?limit=${ limit }&offset=${ offset }`;

    try {
        const response = await fetch(url);
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${ response.status }`);
        }
        return await response.json();
    } catch (error) {
        console.error("There was a problem fetching the data:", error);
        throw error;
    }


}