// Library and package imports
import { Footer, Header, Onboarding, ReferenceLink } from './components/index'
import { featuredCompanies } from './featuredCompanies'

// Asset imports
import heroDesktop from '/hero-desktop.webp'
import heroMobile from '/hero-mobile.webp'
import copilotEditor from '/copilot-editor.png'
import copilotSidebar from '/copilot-sidebar.png'
import githubActions2 from '/github-actions-2.png'
import githubCodespaces from '/github-codespaces.png'
import githubMobile from '/github-illu-mobile.png'
import security from '/security.jpg'
import issuesList from '/issues-list.png'
import codeScanning from '/code-scanning.png'
import dependabot from '/dependabot.png'
import secretScanning2 from '/secret-scanning-2.png'
import projectPlan from '/project-plan.png'
import pullRequest from '/pull-request.png'
import discussions from '/discussions.png'
import pullRequest2 from '/pull-requests-2.png'
import sponsors from '/sponsors.jpg'

export default function App() {
    return (
        <main className=" flex flex-col items-center">
            <Header />
            <div>
                <img
                    src={heroDesktop}
                    alt="Hero image desktop"
                    className=" absolute left-[67%] w-[min(1118px,max(100vh,100vw))] pointer-events-none top-0"
                />
                <img src={heroMobile} alt="Hero image mobile" className=" absolute sm:hidden" />
            </div>
            <section className=" w-full max-w-6xl flex flex-col items-start justify-evenly relative p-5 pt-28">
                <h1 className=" text-white text-8xl font-semibold">{`Let's build from here`}</h1>
                <h6 className=" text-2xl text-gray-400 mb-20">{`The world's leading AI-powered developer platform`}</h6>

                {/* Asking user to sign up for enterprise trial */}
                <Onboarding />

                {/* Featured companies */}
                <div className=" mt-40 flex flex-col items-start justify-evenly gap-8">
                    <h6 className=" text-2xl text-gray-400">{`Trusted by the world's leading organizations ↘️`}</h6>
                    {featuredCompanies.map((company) => (
                        <img src={company.src} alt={company.alt} className={company.className} />
                    ))}
                </div>
            </section>
            <section className=" w-full max-w-6xl flex flex-col items-start justify-evenly relative my-24 [&>h1]:text-5xl [&>h1]:text-white font-medium">
                <h3 className=" text-2xl mb-4">Productivity</h3>
                <h1>
                    <span className=" text-green-500">Accelerate innovation</span>
                    <br />
                    <span>Our AI-powered platform increases the pace of software development.</span>
                </h1>
                <img
                    src={copilotEditor}
                    alt="Copilot editor"
                    className=" w-full mt-32 rounded-lg border border-gray-700"
                />
            </section>
            <section className=" w-full max-w-6xl flex flex-col items-start justify-evenly relative font-medium gap-4">
                <h2 className=" text-gray-400 [&>span]:text-white text-2xl max-w-lg">
                    <span>GitHub Copilot</span> empowers developers to complete tasks 55% faster
                    with contextualized AI coding assistance across workflows.
                </h2>
                <ReferenceLink title="Explore GitHub Copilot" link="" />
                <img
                    src={copilotSidebar}
                    alt=""
                    className=" absolute w-[480px] h-auto rounded-lg left-[56%] bottom-[32%]"
                />

                <p className=" text-green-600 text-sm mt-28 border border-green-500 p-1 px-2 rounded-full">
                    Did you know?
                </p>
                <h3 className=" text-7xl text-green-500">22% increase</h3>
                <p className=" max-w-md text-white text-2xl">
                    in developer productivity after three years with GitHub
                </p>
                <ReferenceLink title="Read the report" link="" />
            </section>
            <section className=" w-full max-w-7xl mt-10 mb-6 relative font-semibold">
                <div className=" w-full rounded-lg bg-gray-800/50 flex items-center justify-evenly border border-gray-700 overflow-y-hidden h-[30rem]">
                    <div className=" w-1/2 h-full p-16 flex flex-col items-start justify-between">
                        <p className=" text-2xl text-gray-400 [&>span]:text-white">
                            <span>GitHub Actions</span> automates your build, test, and deployment
                            workflow with simple and secure CI/CD.
                        </p>
                        <ReferenceLink title="Discover GitHub Actions" link="" />
                    </div>
                    <img src={githubActions2} alt="Github Actions" className=" w-1/2 h-full" />
                </div>
            </section>

            <section className=" w-full max-w-7xl my-2 relative font-semibold flex items-center justify-evenly gap-6">
                <div className=" w-full flex flex-col items-end justify-between bg-gray-800/50 border border-gray-700 rounded-lg">
                    <div className=" mb-14 p-14">
                        <p className=" text-2xl text-gray-400 [&>span]:text-white mb-6 max-w-lg">
                            <span>GitHub Codespaces</span> offers a complete dev environment in
                            seconds. Code, build, test, and open pull requests from any repo.
                        </p>
                        <ReferenceLink title="Check out GitHub Codespaces" link="" />
                    </div>
                    <img
                        src={githubCodespaces}
                        alt="Github Actions"
                        className=" w-auto h-full max-h-96"
                    />
                </div>

                <div className=" w-full flex flex-col items-end justify-between bg-gray-800/50 border border-gray-700 rounded-lg">
                    <div className=" mb-14 p-14">
                        <p className=" text-2xl text-gray-400 [&>span]:text-white mb-6 max-w-lg">
                            <span>GitHub Mobile</span> fits your projects in your pocket, so you
                            never miss a beat while on the go.
                        </p>
                        <ReferenceLink title="Discover GitHub Actions" link="" />
                    </div>
                    <img
                        src={githubMobile}
                        alt="Github Actions"
                        className=" w-auto h-full max-h-96"
                    />
                </div>
            </section>

            <section className=" w-full max-w-6xl my-12 relative font-medium">
                <div className=" max-w-2xl flex flex-col items-start justify-evenly gap-4 text-white">
                    <h2 className=" text-2xl mb-4">Application Security</h2>
                    <h3 className=" text-5xl [&>span]:text-teal-500">
                        <span>Empower developers</span>
                        <br />
                        With GitHub, you can secure code in minutes.
                    </h3>
                </div>
            </section>

            <section className=" w-full max-w-7xl mt-10 mb-6 relative font-semibold">
                <div className=" w-full rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700 h-[30rem]">
                    <img src={security} alt="Github Actions" className=" w-full h-full" />
                </div>
            </section>

            <section className=" w-full max-w-6xl my-12 flex flex-col items-start justify-evenly relative font-medium gap-4">
                <h2 className=" text-gray-400 [&>span]:text-white text-2xl max-w-lg">
                    <span>GitHub Advanced Security</span> enables you to find and fix
                    vulnerabilities with ease and ship secure code quickly.
                </h2>
                <ReferenceLink title="Dive into GitHub Advanced Security" link="" />
                <img
                    src={issuesList}
                    alt=""
                    className=" absolute w-[540px] h-auto rounded-lg left-[56%] bottom-[32%]"
                />

                <p className=" text-teal-600 text-sm mt-28 border border-teal-500 p-1 px-2 rounded-full">
                    Did you know?
                </p>
                <h3 className=" text-7xl text-teal-500 border-teal-500">7x faster</h3>
                <p className=" max-w-md text-white text-2xl">
                    vulnerability fixes with GitHub<sup>1</sup>
                </p>
            </section>

            <section className=" w-full max-w-7xl mt-10 mb-6 relative font-semibold">
                <div className=" w-full rounded-lg bg-gray-800/50 flex items-center justify-evenly border border-gray-700 overflow-y-hidden h-[30rem]">
                    <div className=" w-1/2 h-full p-16 flex flex-col items-start justify-between">
                        <p className=" text-2xl text-gray-400 [&>span]:text-white">
                            <span>Code scanning</span> is our code analysis tool that helps you
                            remediate issues in your code.
                        </p>
                        <ReferenceLink title="Download the latest SAST ebook" link="" />
                    </div>
                    <img src={codeScanning} alt="Github Actions" className=" w-1/2 h-full" />
                </div>
            </section>

            <section className=" w-full max-w-7xl my-2 relative font-semibold flex items-center justify-evenly gap-6">
                <div className=" w-full flex flex-col items-end justify-between bg-gray-800/50 border border-gray-700 rounded-lg">
                    <div className=" mb-14 p-14">
                        <p className=" text-2xl text-gray-400 [&>span]:text-white mb-6 max-w-lg">
                            <span>Dependabot</span> makes it easy to find and fix vulnerable
                            dependencies in your supply chain.
                        </p>
                        <ReferenceLink title="Explore Dependabot" link="" />
                    </div>
                    <img
                        src={dependabot}
                        alt="Github Actions"
                        className=" w-auto h-full max-h-96"
                    />
                </div>

                <div className=" w-full flex flex-col items-end justify-between bg-gray-800/50 border border-gray-700 rounded-lg">
                    <div className=" mb-14 p-14">
                        <p className=" text-2xl text-gray-400 [&>span]:text-white mb-6 max-w-lg">
                            <span>Secret scanning</span> automatically looks for partner patterns
                            and prevents fraudulent use of accidentally committed secrets.
                        </p>
                        <ReferenceLink title="Read about secret scanning" link="" />
                    </div>
                    <img
                        src={secretScanning2}
                        alt="Github Actions"
                        className=" w-auto h-full max-h-96"
                    />
                </div>
            </section>

            <section className=" w-full max-w-6xl mt-28 mb-10 relative font-medium">
                <div className=" max-w-2xl flex flex-col items-start justify-evenly gap-4 text-white">
                    <h2 className=" text-2xl mb-4">Collaboration</h2>
                    <h3 className=" text-5xl [&>span]:text-pink-400">
                        <span>Supercharge collaboration</span>
                        <br />
                        GitHub helps your teams work more efficiently together.
                    </h3>
                </div>
            </section>

            <section className=" w-full max-w-7xl mt-10 mb-6 relative font-semibold">
                <div className=" w-full rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700">
                    <img src={projectPlan} alt="Github Actions" className=" w-full h-full" />
                </div>
            </section>

            <section className=" w-full max-w-6xl my-12 flex flex-col items-start justify-evenly relative font-medium gap-4">
                <h2 className=" text-gray-400 [&>span]:text-white text-2xl max-w-lg">
                    <span>GitHub Issues and GitHub Projects</span> supply project management tools
                    that adapt to your team alongside your code.
                </h2>
                <ReferenceLink title="Get started with GitHub Issues" link="" />
                <img
                    src={pullRequest}
                    alt=""
                    className=" absolute w-[540px] h-auto rounded-lg left-[56%] bottom-[32%]"
                />

                <p className=" text-pink-500 text-sm mt-28 border border-pink-400 p-1 px-2 rounded-full">
                    Did you know?
                </p>
                <h3 className=" text-7xl text-pink-400 border-pink-400">80%</h3>
                <p className=" max-w-md text-white text-2xl">
                    reduction in onboarding time with GitHub<sup>2</sup>
                </p>
            </section>

            <section className=" w-full max-w-6xl my-2 relative font-semibold flex items-center justify-evenly gap-6">
                <div className=" w-full flex flex-col items-end justify-between bg-gray-800/50 border border-gray-700 rounded-lg">
                    <div className=" mb-14 p-14">
                        <p className=" text-2xl text-gray-400 [&>span]:text-white mb-6 max-w-lg">
                            <span>GitHub Discussions</span> creates space to ask questions and have
                            open-ended conversations.
                        </p>
                        <ReferenceLink title="Jump into GitHub Discussions" link="" />
                    </div>
                    <img
                        src={discussions}
                        alt="Github Actions"
                        className=" w-auto h-full max-h-96"
                    />
                </div>

                <div className=" w-full flex flex-col items-end justify-between bg-gray-800/50 border border-gray-700 rounded-lg">
                    <div className=" mb-14 p-14">
                        <p className=" text-2xl text-gray-400 [&>span]:text-white mb-6 max-w-lg">
                            <span>Pull requests</span> allow real-time communication and
                            collaboration about code changes.
                        </p>
                        <ReferenceLink title="Check out pull requests" link="" />
                    </div>
                    <img
                        src={pullRequest2}
                        alt="Github Actions"
                        className=" w-auto h-full max-h-96"
                    />
                </div>
            </section>

            <section className=" w-full max-w-6xl mt-10 mb-6 relative font-semibold">
                <div className=" w-full rounded-lg bg-gray-800/50 flex items-center justify-evenly border border-gray-700 overflow-y-hidden h-[24rem]">
                    <div className=" w-1/2 h-full p-16 flex flex-col items-start justify-between">
                        <p className=" text-2xl text-gray-400 [&>span]:text-white">
                            <span>GitHub Sponsors</span> lets you support your favorite open source
                            maintainers and projects.
                        </p>
                        <ReferenceLink title="Invest with GitHub Sponsors" link="" />
                    </div>
                    <img src={sponsors} alt="Github Actions" className=" w-1/2 h-auto" />
                </div>
            </section>

            <section className=" w-full max-w-6xl flex flex-col items-start justify-evenly relative p-5 pt-28 my-4">
                <h1 className=" text-white text-5xl font-extrabold max-w-2xl mb-6">
                    Over 100 million developers call GitHub home<sup>3</sup>
                </h1>
                <h6 className=" text-xl text-gray-500 mb-20 max-w-2xl">{`Whether you're scaling your startup or just learning how to code, GitHub is your home. Join the world's largest developer platform to build the innovations that empower humanity. Let's build from here.`}</h6>

                {/* Asking user (again) to sign up for enterprise trial */}
                <Onboarding />
            </section>

            {/* Citations for above features */}
            <section className=" w-full max-w-6xl flex flex-col items-start justify-evenly relative p-5 my-4">
                <ul className=" flex flex-col items-start justify-evenly gap-4 text-gray-400 text-sm max-w-4xl">
                    <li>
                        <sup>1 </sup>
                        {`This 7X times factor is based on data from the industry's longest running analysis of fix rates Veracode State of Software Security 2023, which cites the average time to fix 50% of flaws as 198 days vs. GitHub's fix rates of 72% of flaws with in 28 days which is at a minimum of 7X faster when compared.`}
                    </li>
                    <li>
                        <sup>2 </sup>
                        The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced
                        Security, a commissioned study conducted by Forrester Consulting, 2022.
                        Results are for a composite organization based on interviewed customers.
                    </li>
                    <li>
                        <sup>3 </sup>
                        {`There are now 100 million developers around the world using GitHub. `}
                        <a href="https://github.blog/2023-01-25-100-million-developers-and-counting/">
                            <u>Read the blog post.</u>
                        </a>
                    </li>
                </ul>
            </section>
            <Footer />
        </main>
    )
}
