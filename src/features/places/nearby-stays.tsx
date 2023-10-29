import ListingCard from "../../components/listing-card.tsx";
import { fetchNearbyStays } from "../../api/listings.ts";
import { Listing } from "../../models/listing.ts";
import { useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Button from "../../components/button.tsx";

export default function NearbyStays() {

    const [ maxItems ] = useState(6);
    const [ page, setPage ] = useState(0);
    const [ totalItems, setTotalItems ] = useState(1);

    const {
        error,
        status,
        data,
        isPlaceholderData
    } = useQuery({
        queryKey: [ 'nearby-stays', page ],
        queryFn: () => fetchNearbyStays({ offset: page }),
        placeholderData: keepPreviousData
    })

    useEffect(() => {
        if (data) {
            setTotalItems(data.total_count)
        }
    }, [ data ]);

    const getCurrentRangeText = () => {
        // Adding +1 to page because we start the offset from 0.
        const start = ((page + 1) - 1) * maxItems + 1;
        let end = (page + 1) * maxItems;
        // Ensure the end value doesn't exceed the total.
        if (end > totalItems) {
            end = totalItems;
        }
        return `Showing ${ start }-${ end } of ${ totalItems }`;
    }

    const onPreviousClick = () => {
        setPage(old => Math.max(old - 1, 0))
    };

    const onNextClick = () => {
        const hasMore = true;
        if (!isPlaceholderData && hasMore) {
            setPage((old) => old + 1);
        }
    };

    if (status === 'pending') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <span>Error: { error.message }</span>
    }

    return (
        <div>
            <h4 className="text-xl tracking-tight text-gray-800">
                Nearby Stays
            </h4>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                { data?.results.map((listing: Listing, id: number) => (
                    <ListingCard key={ id } model={ listing }/>
                )) }
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className="flex justify-between">
                <div>
                    <p className="text-gray-600 text-sm">
                        { getCurrentRangeText() }
                    </p>
                </div>
                <div className="flex space-x-2">
                    <Button
                        disabled={ page === 0 }
                        onClick={ onPreviousClick }>
                        Previous
                    </Button>
                    <Button onClick={ onNextClick }>Next</Button>
                </div>
            </div>
        </div>
    );

}