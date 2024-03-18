'use client'
import { useMemo } from "react";
import React from "react";

interface SkillsProps {
    children: React.ReactNode;
}

const Skills: React.FC<SkillsProps> = ({ children }) => {

    const Languages = useMemo( () => [
        {
            label : 'HTML5 / CSS3'
        },
        {
            label : 'JavaScript / TypeScript'
        },
        {
            label : 'Python'
        },
        {
            label : 'C'
        },
        {
            label : 'Java'
        },
        {
            label : 'SQL'
        },
        {
            label : 'PHP'
        }
    ], [])

    const Framework = useMemo( () => [
        {
            label : 'React'
        },
        {
            label : 'Next.js'
        },
        {
            label : 'Tailwind'
        },
        {
            label : 'Wordpress'
        }
    ], [])

    const Tools = useMemo( () => [
        {
            label : 'GitHub'
        },
        {
            label : 'Mathlabs'
        },
        {
            label : 'VSCode'
        },
        {
            label : 'Figma'
        },
        {
            label : 'Adobe Suite'
        },
        {
            label : 'Office 365'
        },
        {
            label : 'OSINT'
        }
    ], [
    ])

    return(
        <main className="flex flex-col p-5 text-right text-white z-10">
            <h1 className="font-bold text-xl py-1 z-10">
                    Skills
            </h1>
            <div className="flex md:flex-row flex-col">
                <div className="p-4">
                    <h2 className="font-bold text-lg py-1">
                        Languages
                    </h2>
                    <ul>
                        {Languages.map((items) => (
                            <li
                                key={items.label}
                                className="text-sm hover:opacity-50"
                            >
                                {items.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4">
                    <h2 className="font-bold text-lg py-1"> 
                        Frameworks
                    </h2>
                    <ul>
                        {Framework.map((items) => (
                            <li
                                key={items.label}
                                className="text-sm hover:opacity-50"
                            >
                                {items.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4">
                    <h2 className="font-bold text-lg py-1">
                        Tools
                    </h2>
                    <ul>
                        {Tools.map((items) => (
                            <li
                                key={items.label}
                                className="text-sm hover:opacity-50"
                            >
                                {items.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Skills