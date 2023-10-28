import Navigation from "../components/navigation.tsx";
import NearbyStays from "../features/places/nearby-stays.tsx";
import SuggestedPlaces from "../features/places/suggested-places.tsx";

export default function Home() {
    return (
        <div className="min-h-full">
            <Navigation/>
            <div className="py-10 mx-auto">
                <header>
                    <div className="mx-auto px-4 max-w-7xl">
                        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                            Available Stays
                        </h1>
                    </div>
                </header>
                <main className=" mx-auto px-4 py-8 max-w-7xl">
                    <SuggestedPlaces/>
                    <div className="py-6"></div>
                    <NearbyStays/>
                </main>
            </div>
        </div>
    );

}