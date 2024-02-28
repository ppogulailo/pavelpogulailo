import React from 'react'

export const Button = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="mb-12 flex justify-center">
            <a href="https://cloud.axiom.co">
                <div className="pointer-events-none relative rounded-lg shadow-lg ">
                    <div className="relative isolate z-10 m-[-2px] overflow-hidden rounded-[inherit] p-[3px]">
                        <div className="animate-buttonStroke bg-buttonConicGradient absolute inset-0 origin-[center_center] blur-[4px] will-change-transform"></div>
                        <div className="relative z-50">
                            <div className="flex items-center space-x-3 rounded-lg border border-[#ffffff10] bg-gray-100 px-8 py-4 font-bold text-gray-900 hover:bg-gray-200 dark:bg-[#0e1422] dark:text-white">
                                <span>{children}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5px"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-5 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
