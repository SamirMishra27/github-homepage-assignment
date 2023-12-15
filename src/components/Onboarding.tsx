export default function Onboarding() {
    return (
        <div className=" flex items-center justify-evenly">
            <div className=" rounded-lg overflow-hidden">
                <input
                    type="text"
                    placeholder="Email address"
                    className=" p-2 pl-3 placeholder:text-gray-400 max-w-[16rem] m-0 border-none outline-purple-100"
                />
                <button className=" p-2 px-6 font-semibold bg-[#6e40c9] rounded-none outline-none">
                    Sign up for GitHub
                </button>
            </div>
            <div className=" mx-4 w-px h-8 bg-gray-700" />
            <a
                href=""
                className=" font-semibold rounded-lg border border-purple-400 p-2 px-6 hover:border-white transition text-white">
                Start a free enterprise trial
            </a>
        </div>
    )
}
