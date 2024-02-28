import React from 'react'

interface IButton {
    children: React.ReactNode
}

export const Button = ({children}: IButton) => {
    return (
        <div className="mt-2">
            <div className="pointer-events-none relative rounded-lg shadow-lg ">
                <div className="relative isolate z-10 m-[-2px] overflow-hidden rounded-[inherit] p-[3px]">
                    <div className="relative z-50">
                        <div className="flex items-center space-x-3 rounded-lg border border-[#ffffff10] bg-gray-50 px-8 py-4 font-bold text-gray-900 hover:bg-gray-200 dark:bg-[#0e1422] dark:text-white">
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
        </div>
    )
}
