import Designation from "./designation.tsx";
import { Listing } from "../models/listing.ts";

export interface ListingCardProps {
    model: Listing;
}

export default function ListingCard({ model }: ListingCardProps) {

    const normalizeString = () => {
        const { bedrooms, bathrooms } = model;
        const bedroomText = bedrooms === 1 ? 'Bedroom' : 'Bedrooms';
        const bathroomText = bathrooms === 1 ? 'Bathroom' : 'Bathrooms';
        return `${ bedrooms } ${ bedroomText }, ${ bathrooms } ${ bathroomText }`;
    };

    return (
        <div
            className="bg-white lg:max-w-4xl shadow-md rounded-xl p-4 pt-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer">
            <div className="flex gap-x-4 justify-between">
                <div className="flex flex-col space-y-2">
                    <h6 className="font-light text-xs hidden">{ model.id }</h6>
                    <h3 className="font-bold">{ model.location }</h3>
                    <div>
                        <p className="text-slate-500 text-sm">
                            { normalizeString() }
                        </p>
                        <p className="text-sm text-slate-400">
                            { model.available_dates }
                        </p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Designation designation={ model.designation }/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 }
                         stroke="currentColor"
                         className="w-6 h-6 mt-1.5 transition-colors duration-300 hover:text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                    </svg>
                </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className="flex gap-x-4 justify-between">
                <div>
                    Total
                </div>
                <div>
                    ${ model.price }
                </div>
            </div>
        </div>
    );
}