import Designation from "./designation.tsx";
import { Listing } from "../models/listing.ts";
import FavouriteButton from "./favourite-button.tsx";

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
            className="bg-white lg:max-w-4xl shadow-md rounded-xl p-4 pt-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer relative">
            <div className="flex gap-x-4 justify-between">
                <Designation
                    designation={ model.designation }
                    className="xl:hidden absolute top-0 left-0 rounded-bl-none rounded-tr-none px-1.5 py-0.5 text-xs"/>
                <div className="flex flex-col space-y-2 mt-2 xl:mt-0">
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
                    <Designation
                        designation={ model.designation }
                        className="hidden xl:block"/>
                    <FavouriteButton
                        active={ model.favourite }/>
                </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className="flex gap-x-4 justify-between text-gray-600">
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