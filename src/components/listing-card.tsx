export default function ListingCard() {
    return (
        <div className="bg-white lg:max-w-4xl shadow-md rounded-xl p-4 pt-5">
            <div className="flex gap-x-4 justify-between">
                <div>
                    <h3 className="font-bold font-sans">Santa Cruz, California</h3>
                    <p>2 Bedrooms, 2 Bathrooms</p>
                    <p>Oct 5 - Oct 21</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 }
                         stroke="currentColor" className="w-6 h-6">
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
                    $ 2000
                </div>
            </div>
        </div>
    );
}