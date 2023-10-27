import Navigation from "./components/navigation.tsx";
import ListingCard from "./components/listing-card.tsx";

function App() {
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
                    <h4 className="text-xl tracking-tight text-gray-800">
                        Places You Might Like
                    </h4>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        <ListingCard></ListingCard>
                        <ListingCard></ListingCard>
                        <ListingCard></ListingCard>
                    </div>
                    <div className="py-6"></div>
                    <h4 className="text-xl tracking-tight text-gray-800">
                        Nearby Stays
                    </h4>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        <ListingCard></ListingCard>
                        <ListingCard></ListingCard>
                        <ListingCard></ListingCard>
                        <ListingCard></ListingCard>
                        <ListingCard></ListingCard>
                        <ListingCard></ListingCard>
                    </div>
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <div className="flex justify-between">
                        <div>
                            <p>Showing 1-6 of 25</p>
                        </div>
                        <div>
                            <button>Previous</button>
                            <button>Next</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App
