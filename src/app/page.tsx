import Image from 'next/image'

export default async function Index() {
    const images = ['github.svg', 'linkedin.svg', 'twitter.svg']
    return (
        <>
            <div className="mb-16 w-full mt-72">
                <div
                    className=" max-w-[1237px] m-auto bg-gray-100  rounded-[8px] border border-gray-300 bg-gradient-to-b from-[#D9D9D905] to-[#ba3a3a05] bg-[300%_auto] p-4 shadow-lg dark:border-[#ffffff22] md:rounded-[40px] lg:bg-cover lg:p-12"
                    style={{
                        backgroundImage: 'url(/img/grid-dash.svg)',
                        backgroundPosition: 'top',
                        backgroundRepeat: 'revert-layer',
                        zIndex: '0',
                    }}
                >
                    <div className="m-auto flex justify-center">
                        <Image
                            className="rounded-full"
                            src="/assets/profile.jpg" // Correct path relative to the `public` directory
                            alt="Profile Image"
                            width={200} // Adjust the width as needed
                            height={200} // Adjust the height as needed
                        />
                    </div>
                    <div className="text-3xl text-center mt-2">Pavel Pogulailo</div>
                    <div className="flex">
                        {images.map((path, key) => (
                            <Image
                                key={key}
                                className="rounded-full"
                                src={`/assets/logos/${path}`}
                                alt="Github-Image"
                                width={30}
                                height={30}
                            />
                        ))}
                    </div>
                    {/*<div className='flex w-full items-center justify-center p-4 lg:pb-8 '>*/}
                    {/*    <div className='w-full max-w-[1237px]'>*/}
                    {/*        <div className="relative grid grid-cols-1 gap-8 rounded-[25px] border-[2px] border-transparent bg-gray-100 bg-clip-padding p-8 text-sm text-gray-900 before:absolute before:inset-0 before:z-[-1] before:m-[-2px] before:rounded-[inherit] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500 before:content-[''] dark:bg-[#09101F] dark:text-[#AAB7D2] md:grid-cols-3 lg:p-12">*/}
                    {/*            <Image*/}
                    {/*                src="/assets/profile.jpg" // Correct path relative to the `public` directory*/}
                    {/*                alt="Profile Image"*/}
                    {/*                width={200} // Adjust the width as needed*/}
                    {/*                height={200} // Adjust the height as needed*/}
                    {/*            />*/}
                    {/*            <div className='text-3xl'>Pavel Pogulailo</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}
