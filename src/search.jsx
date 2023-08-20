const Search = ({ setSearch }) => {

    return (<>
        <div className="bg-[#1d1d1f]">
            <div className="flex items-center justify-center container mx-auto">
                <div className="font-semibold text-xl my-3 hidden md:block text-white">Zeather</div>
                <div className="flex md:w-1/4 w-2/3 mx-auto px-3 rounded-lg my-4 items-center gap-3 bg-[#f7f7f7] border">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div>
                    <div className="w-full">
                        <input type="text" onKeyUp={(e) => { e.key === "Enter" ? setSearch(e.target.value) : <></> }} placeholder="Search" className="py-1 w-full sm:text-lg text-[#000]/80 bg-transparent block outline-none" />
                    </div>

                </div>
                <a href="https://linkedin.com/in/zayn-dev" target="_blank" rel='noreferrer' className="border md:block hidden border-white p-2 rounded-lg text-white hover:bg-white hover:text-[#1d1d1f] cursor-pointer transition-all duration-150">
                    Contact Developer
                </a>
            </div>
        </div>

        {/*  */}
    </>)
}

export default Search;