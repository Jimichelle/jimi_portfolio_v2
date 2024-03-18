'use client'

import { usePathname } from "next/navigation";

import { useMemo } from "react";

interface SkillsProps {
    children: React.ReactNode;
}

const Skills: React.FC<SkillsProps> = ({ children }) => {

    return(
        <main>
            <p>Skills</p>
        </main>
    )
}

export default Skills