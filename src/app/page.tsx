import Image from 'next/image'
import {Button} from '@/components/Button'

export default async function Overview() {
    const images = [
        {logo: 'github.svg', href: 'https://github.com/ppogulailo'},
        {logo: 'linkedin.svg', href: 'https://linkedin.com/pogulailopavel'},
        {logo: 'twitter.svg', href: 'https://twitter.com'},
    ]
    return (
        <>
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
                    <div className="m-auto flex justify-center">
                        <Image
                            className="rounded-full"
                            src="/assets/profile.jpg"
                            alt="Profile Image"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="text-3xl text-center mt-2">Pavel Pogulailo</div>
                    <div className="mt-5">
                        Highly skilled Node JS Developer with 3.5 years of comertial experience in
                        optimizing and deploying high-performance applications for ecommerce,
                        healthcare etc. Worked with whole list of AWS main services. Skilled in
                        optimizing processes, enhancing robustness, ensuring scalability, conducting
                        code reviews, and mentoring.
                    </div>
                    <div className="flex justify-center mt-4">
                        {images.map(({logo, href}, key) => (
                            <a href={href}>
                                <Image
                                    key={key}
                                    className="rounded-full mr-4"
                                    src={`/assets/logos/${logo}`}
                                    alt="Github-Image"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        ))}
                    </div>
                    <div className="m-auto">
                        <Button>Employments</Button>
                        <Button>Courses</Button>
                        <Button>Skills</Button>
                        <Button>StartUps</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
