const PageNotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-center px-4 mb-[-50px]">
            <h1 className="text-[120px] font-extrabold text-[#0D5B58] drop-shadow-lg animate-bounce">
                404
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl text-gray-800 font-medium">
                Oeps! Deze pagina bestaat niet.
            </p>
            <p className="mt-2 text-gray-600 max-w-md">
                De pagina die je zoekt is misschien verplaatst, verwijderd, of heeft nooit bestaan.
            </p>
            <a
                href="/"
                className="mt-6 inline-block px-6 py-3 bg-[#0D5B58] text-white text-lg font-semibold rounded-full shadow-md hover:bg-[#0a4745] transition duration-300"
            >
                Terug naar Home
            </a>
        </div>
    );
}
export default PageNotFound;