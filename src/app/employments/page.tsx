import {jobsHistory} from '@/app/employments/data'

export default async function Employments() {
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
                {jobsHistory.map(({header, texts}, index) => (
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
