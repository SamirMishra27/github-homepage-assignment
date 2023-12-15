import { FaGithub } from 'react-icons/fa'
import { IoMdSearch } from 'react-icons/io'

export default function Header() {
    return (
        <header className=" max-w-[96rem] w-full flex justify-between items-center p-2 bg-transparent z-10 relative">
            <div className=" p-2 flex items-center justify-evenly gap-4">
                <FaGithub className=" w-8 h-auto fill-white mr-2" />
                <nav>
                    <ul className=" flex items-center justify-evenly p-0 gap-x-6">
                        {['Product', 'Solutions', 'Open Source', 'Pricing'].map((item, index) => (
                            <li
                                key={index}
                                className=" text-white text-base font-sans hover:opacity-75 transition cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Sign in & Sign up buttons */}
            <div className=" p-2 flex items-center justify-evenly gap-4">
                <div className=" w-[20rem] h-8 flex items-center justify-start p-1 bg-sky-200/25 rounded-lg border border-sky-200/30">
                    <IoMdSearch className=" w-6 h-auto fill-white mr-2" />
                    <input
                        type="text"
                        placeholder="Search or jump to..."
                        className=" w-full h-full p-0.5 bg-transparent outline-none placeholder:text-gray-200 text-gray-200 text-sm font-sans"
                    />
                </div>
                {['Sign In', 'Sign Up'].map((item, index) => (
                    <a
                        key={index}
                        href=""
                        className={
                            ' font-sans text-white p-1 px-2 rounded-lg hover:opacity-75 transition' +
                            (index === 1 ? ' border border-white' : '')
                        }>
                        {item}
                    </a>
                ))}
            </div>
        </header>
    )
}
