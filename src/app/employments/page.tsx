export default async function Employments() {
    const jobArray = [
        {
            header: 'Full-stack Developer, Mapme',
            texts: [
                'Rewrited site from Angular v.2, to Vue 3, resulting in a 50% reduction in development time to write new features, and reduce time to find new developers.',
                'Implemented e2e and unit testing for the entire application, resulting in a reduced the testing time for application functions.',
                'Implemented CI/CD into the project and changed its architecture, resulting in a 25% reduction in development time and a 15% increase in team productivity.\n',
            ],
        },
        {
            header: 'Node.js Developer, Miteyda',
            texts: [
                'Hired 10 employees, resulting in a 75% the speed of project code implementing.',
                'Implemented new cloud architecture, resulting in an increase in availability of more than 30%, and reduced the number of crashes.',
                'Developed and deployed a microservices architecture for a high- traffic e-commerce website, resulting in a 25% increase in page load speed and a 20% increase in overall site performance.',
            ],
        },
        {
            header: 'Node.js Developer, Admiral Studio',
            texts: [
                'Optimized a RESTful API for a healthcare application, reducing response times by 50% and improving overall system performance by 30%.',
                'Implemented ReCaptcha verification, resulting in a 90% less bots site visit.',
                'Implement swagger documentation, resulting in a 25% reduction in development time and a 15% increase in team productivity.',
            ],
        },
    ]
    return (
        <div className="h-100 h-screen flex justify-center">
            <div
                className="max-w-[1237px] m-auto rounded-[8px] border border-gray-300 bg-gradient-to-b from-[#D9D9D905] to-[#ba3a3a05] bg-[300%_auto] p-4 shadow-lg dark:border-[#ffffff22] md:rounded-[40px] lg:bg-cover lg:p-12"
                style={{
                    backgroundImage: 'url(/assets/grid-dash.svg)',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'revert-layer',
                    zIndex: '0',
                }}
            >
                <div className="font-black text-3xl">Employment History</div>
                {jobArray.map(({header, texts}, index) => (
                    <div key={index} className="ml-5">
                        <div className="mt-5 font-bold text-xl">{header}</div>
                        {texts.map((text, index) => (
                            <div className="mt-2" key={index}>
                                {text}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
