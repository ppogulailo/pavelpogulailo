import {skills1, skills2} from '@/app/skills/data'

export default async function Skills() {
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
                <div className="font-black text-3xl">Skills</div>
                <div className="flex">
                    <span className="mr-20">
                        {skills1.map((text, index) => (
                            <div key={index} className="ml-5">
                                <div className="skill-dot mt-5 font-bold text-xl">{text}</div>
                            </div>
                        ))}
                    </span>
                    <span>
                        {skills2.map((text, index) => (
                            <div key={index} className="ml-5">
                                <div className="mt-5 font-bold text-xl skill-dot">{text}</div>
                            </div>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    )
}
