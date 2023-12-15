// twitter/x facebook linkedin youtube twitch tiktok github
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitch, FaTiktok, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
    const Links = {
        Product: [
            'Features',
            'Enterprise',
            'Copilot',
            'Security',
            'Pricing',
            'Team',
            'Resources',
            'Roadmap',
            'Compare GitHub'
        ],
        Platform: ['Developer API', 'Partners', 'Electron', 'GitHub Desktop'],
        Support: [
            'Docs',
            'Community Forum',
            'Professional Services',
            'Premium Support',
            'Skills',
            'Status',
            'Contact GitHub'
        ],
        Company: [
            'About',
            'Customer stories',
            'Blog',
            'The ReadME Project',
            'Careers',
            'Press',
            'Inclusion',
            'Social Impact',
            'Shop'
        ]
    }

    const legalLinks = [
        {
            name: 'Terms',
            link: 'https://docs.github.com/site-policy/github-terms/github-terms-of-service'
        },
        {
            name: 'Privacy',
            link: 'https://docs.github.com/site-policy/privacy-policies/github-privacy-statement'
        },
        { name: 'Sitemap', link: 'https://github.com/sitemap' },
        { name: 'What is Git?', link: 'https://github.com/git-guides' },
        { name: 'Manage cookies', link: '' },
        { name: 'Do not share my personal information', link: '' }
    ]

    return (
        <>
            <footer className=" w-full max-w-6xl flex items-start justify-between px-5">
                <div className=" text-sm max-w-sm">
                    <p className=" text-gray-200 font-semibold">
                        Subscribe to our developer newsletter
                    </p>
                    <p className=" text-gray-500 mb-4">
                        Get tips, technical guides, and best practices. Once a month. Right in your
                        inbox.
                    </p>
                    <button className=" border-2 border-gray-500 hover:text-white transition text-base hover:border-white">
                        Subscribe
                    </button>
                </div>
                {Object.entries(Links).map(([heading, links]) => (
                    <ul className=" flex flex-col items-start justify-evenly gap-2 text-gray-500 text-base font-sans">
                        <li className=" font-mono">{heading}</li>
                        {links.map((link) => (
                            <li>
                                <a
                                    href=""
                                    className=" hover:text-blue-500 hover:underline cursor-pointer">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                ))}
            </footer>

            {/* Bottom most area of footer */}
            <section className=" w-full max-w-6xl mt-12 flex items-center justify-between py-6 px-2">
                <nav className=" text-gray-400 text-xs">
                    <ul className=" flex items-center justify-evenly gap-3">
                        <li>© 2023 GitHub, Inc.</li>
                        {legalLinks.map((link) => (
                            <li>
                                <a
                                    href={link.link}
                                    className=" hover:text-blue-500 hover:underline cursor-pointer">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav className=" flex items-center justify-evenly gap-3 [&>svg]:fill-gray-400">
                    <a href="https://x.com/github">
                        <FaXTwitter className=" w-5 h-auto" />
                    </a>
                    <a href="https://www.facebook.com/GitHub">
                        <FaFacebookF className=" w-5 h-auto" />
                    </a>
                    <a href="https://www.linkedin.com/company/github">
                        <FaLinkedinIn className=" w-5 h-auto" />
                    </a>
                    <a href="https://www.youtube.com/github">
                        <FaYoutube className=" w-5 h-auto" />
                    </a>
                    <a href="https://www.twitch.tv/github">
                        <FaTwitch className=" w-5 h-auto" />
                    </a>
                    <a href="https://www.tiktok.com/@github">
                        <FaTiktok className=" w-5 h-auto" />
                    </a>
                    <a href="https://github.com/github">
                        <FaGithub className=" w-5 h-auto" />
                    </a>
                </nav>
            </section>
        </>
    )
}
