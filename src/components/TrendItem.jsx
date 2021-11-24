const TrendItem = () => {
    return (
        <>
            <div className="flex">
                <div className="flex-1">
                    <figure class="p-3">
                        <img src="https://picsum.photos/id/1005/300/200" alt="berita" class="rounded-lg shadow-lg" />
                    </figure>
                    <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">20 September 2021</p>
                    <h2 className="px-4 ml-2 w-48 font-bold text-white">Yakali pal pale pale pale pal</h2>
                    <p className="px-4 ml-2 mt-1 mb-3 w-48 text-xs text-gray-400">Seorang Kudanil Wakacupaw</p>
                </div>
            </div>
            <hr className="border-gray-600" />
        </>
    )
}

export default TrendItem;