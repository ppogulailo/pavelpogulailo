import Image from 'next/image'
import {Button} from '@/components/Button'
import Link from 'next/link'

export default async function Overview() {
    const images = [
        {logo: 'github.svg', href: 'https://github.com/ppogulailo'},
        {logo: 'linkedin.svg', href: 'https://linkedin.com/pogulailopavel'},
        {logo: 'twitter.svg', href: 'https://twitter.com'},
        {
            logo: 'cv.png',
            href: 'https://drive.google.com/file/d/1TBARV_6kX1eeKjYeZGy9o4Y9zaUYSiug/view?usp=drive_link',
        },
    ]
    const buttons = [
        {text: 'Employments', href: '/employments'},
        {text: 'Courses', href: '/courses'},
        {text: 'Skills', href: '/skills'},
        {text: 'StartUps', href: '/startUps'},
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
                        {images.map(({logo, href}, index) => (
                            <a
                                href={href}
                                className="p-4 rounded-full mr-4 relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
                            >
                                <Image
                                    key={index}
                                    src={`/assets/logos/${logo}`}
                                    alt="Github-Image"
                                    width={30}
                                    height={30}
                                />
                                <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-purple-500"></div>
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        {buttons.map(({text, href}, index) => (
                            <Link href={href} key={index} className="w-[700px]">
                                <Button>{text}</Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
