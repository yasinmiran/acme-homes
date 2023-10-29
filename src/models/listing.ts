import { Designation } from "../components/designation.tsx";

export interface Listing {
    id: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    available_dates: string;
    designation: Designation;
    price: number;
    favourite: boolean;
}
