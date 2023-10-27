import Navigation from "./components/navigation.tsx";
import ListingCard from "./components/listing-card.tsx";

function App() {
    return (
        <div className="min-h-full">
            <Navigation/>
            <div className="py-10">
                <header>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto sm:px-6 lg:px-8">
                        <ListingCard></ListingCard>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App
