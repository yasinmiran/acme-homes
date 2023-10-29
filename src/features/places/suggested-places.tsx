import ListingCard from "../../components/listing-card.tsx";
import { fetchSuggestedPlaces } from "../../api/listings.ts";
import { useQuery } from "@tanstack/react-query";
import { Listing } from "../../models/listing.ts";
import { Fragment } from "react";

export default function SuggestedPlaces() {

    const { status, data, error } = useQuery({
        queryKey: [ 'places-to-stay' ],
        queryFn: fetchSuggestedPlaces,
    });

    if (status === 'pending') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <span>Error: { error.message }</span>
    }

    return (
        <Fragment>
            <h4 className="text-xl tracking-tight text-gray-800">
                Places You Might Like
            </h4>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                { data?.results.map((listing: Listing, id: number) => (
                    <ListingCard key={ id } model={ listing }/>
                )) }
            </div>
        </Fragment>
    );

}