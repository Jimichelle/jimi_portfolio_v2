'use client'
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface ProjectsProps {
    children: React.ReactNode;
}

const Projects: React.FC<ProjectsProps> = ({children }) => {

    const pathname = usePathname();

    const routes = useMemo( () => [
        {
            label : 'Discord Bot',
            active: pathname === '/',
            href: '/',
            date : 'march 2024'
        },
        {
            label : 'Portfolio',
            active: pathname === '/',
            href: '/',
            date : 'march 2024'
        },
        {
            label : 'Spotify Clone',
            active: pathname === '/',
            href: 'https://spotify-clone-jimichelle.vercel.app/',
            date : 'september 2023'
        },
        {
            label : 'EMAJ Website',
            active: pathname === '/',
            href: 'https://emaj78.org',
            date : 'May 2023'
        },
        {
            label : 'Design of a Cardiac Sensor',
            active: pathname === '/',
            href: '#',
            date : '2021 - 2022'
        },
        {
            label : 'Design of a search engine',
            active: pathname === '/',
            href: '#',
            date : '2020 - 2021'
        },
        {
            label : 'Study of a guitar tuner',
            active: pathname === '/',
            href: '/slide_accodeur_de_guitare.pdf',
            date : '2019 - 2020'
        }

    ], [])

    return (
        <main className="flex flex-col p-5 py-10 text-right">
            <h1 className="text-xs py-4">Projects</h1>
            <nav className=" gap-y-2">
                {routes.map((items) => (
                    <a
                        key={items.label}
                        href={items.href}
                        className={"flex flex-row items-center justify-end hover:opacity-[0.5]"}
                    >
                        <p
                        className="text-sm px-1 opacity-0 sm:opacity-100"
                        >
                            {items.date}  
                        </p>
                        <h2
                        className="md:text-3xl text-xl"
                        >
                            {items.label}
                        </h2>
                    </a>
                ))}
            </nav>
        </main>
    )
}

export default Projects