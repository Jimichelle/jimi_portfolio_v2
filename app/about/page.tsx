'use client'

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface AboutProps {
    children: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
    

        return(
            <main className="flex flex-col p-5 text-right text-white z-10">
                <h1 className="font-bold text-xl py-1 z-10">
                    About
                </h1>
                <p className="text-sm py-1 z-10">
                    Hello, I&apos;m Jimi Denysiak and I&apos;m a junior developer with a passion for web development. I&apos;m currently learning Next.js and other web technologies
                </p>
                <p className="text-sm py-1 z-10">
                    I&apos;m from France and I&apos;m studying Computer Science in Paris. I&apos;m preparing a Bachelor&apos;s degree in Computer Science
                </p>
                <p className="text-sm py-1 z-10">
                    I&apos;m currently searching for an apprenticeship in development in Île-de-France and I&apos;m open to any opportunity in the field of computer science
                </p>
            </main>
        )
}

export default About
