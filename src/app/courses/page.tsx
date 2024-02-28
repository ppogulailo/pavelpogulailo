export default async function Courses() {
    const udemy = [
        'GitHub Actions - The Complete Guide',
        'Microservices with Node JS and React',
        'Jenkins, From Zero To Hero: Become a DevOps Jenkins Master',
        'Microservices Architecture - The Complete Guide',
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
                <div className="font-black text-3xl">Courses</div>
                <div>
                    <div className="font-black text-xl mt-10">Udemy</div>
                    {udemy.map((text, index) => (
                        <div key={index} className="skill-dot mt-5 font-bold text-xl">
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
