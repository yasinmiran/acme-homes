import ListingCard from "../../components/listing-card.tsx";
import { fetchNearbyStays } from "../../api/listings.ts";
import { Listing } from "../../models/listing.ts";
import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import Button from "../../components/button.tsx";

export default function NearbyStays() {

    const { status, data, error } = useQuery({
        queryKey: [ 'nearby-stays' ],
        queryFn: fetchNearbyStays,
    });

    const onPreviousClick = () => {

    };

    const onNextClick = () => {

    };

    if (status === 'pending') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <span>Error: { error.message }</span>
    }

    return (
        <Fragment>
            <h4 className="text-xl tracking-tight text-gray-800">
                Nearby Stays
            </h4>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                { data?.map((listing: Listing, id: number) => (
                    <ListingCard key={ id } model={ listing }/>
                )) }
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className="flex justify-between">
                <div>
                    <p>Showing 1-6 of 25</p>
                </div>
                <div className="flex space-x-2">
                    <Button onClick={ onPreviousClick } secondary>Previous</Button>
                    <Button onClick={ onNextClick }>Next</Button>
                </div>
            </div>
        </Fragment>
    );
}