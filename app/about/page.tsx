'use client'

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface AboutProps {
    children: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
    
        const pathname = usePathname();
    
        const routes = useMemo(() => [
            {
                label: 'Informations',
                active: pathname === '/about',
                href: '/about'
            },
            {
                label: 'linkedin',
                active: pathname === '/about',
                href: 'https://www.linkedin.com/in/jimi-denysiak-574b43172/'
            },
            {
                label: 'github',
                active: pathname === '/about',
                href: ''
            },
        ], [])

        return(
            <main>
                <p>About</p>
            </main>
        )
}

export default About
