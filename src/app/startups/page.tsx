export default async function StartUps() {
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
                <div className="font-black text-3xl">StartUps</div>
                <div className="mt-5">Page about project that i'm created, or working on</div>
            </div>
        </div>
    )
}
