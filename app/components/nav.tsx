'use client';
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface NavProps {
    children: React.ReactNode;
}

const NavProps: React.FC<NavProps> = ({ children }) => {

    const pathname = usePathname();

    const routes = useMemo( () => [
        {
            label : 'Home',
            active: pathname === '/',
            href: '/'
        },
        {
            label : 'About',
            active: pathname === '/about',
            href: '/about'
        },
        {
            label : 'Skills',
            active: pathname === '/skills',
            href: '/skills'
        },
        {
          label : 'Projects',
          active: pathname === '/projects',
          href: '/projects'
        },
        {
            label : 'Contact',
            active: pathname === '/contact',
            href: '/contact'
        },
    ], [])

    return(
        <main className="flex flex-col items-center justify-between text-white z-10 ">
      <div className="relative flex flex-row justify-between mx-[2dvw] my-[5dvh] border-white border-[1px] h-[90dvh] w-[94dvw] ">
        <section className="flex flex-col z-10  overscroll-y-none ">
          <div className="p-5 w-[34dvw] ">
            <h2 className="text-3xl font-NeueMontreal">
              Jimi Denysiak
            </h2>
            <p className="text-xs">
              Junior Developer
            </p>
          </div>
          <nav className="flex flex-col gap-y-1 px-5 py-4 text-sm">
            {routes.map((items) => (
                <a
                    key={items.label}
                    href={items.href}
                    className={`${
                    items.active ? "text-blue-400" : "text-white"
                    }`}
                >
                    {items.label}
                </a>
                
            ))}
          </nav>
        </section>
        <section className="">
          {children}
        </section>
      </div>
    </main>
    )
}

export default NavProps;