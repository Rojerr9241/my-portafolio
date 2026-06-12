"use client"

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center p-2 rounded-md hover:bg-white/10">
          <CiMenuFries className='text-[32px] text-accent' />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className='text-white mt-32 mb-40 text-center text-2xl'>
                <Link href={"/"}>
                <h1 className="text-4xlfont-semibold">
                  Rodrigo<span className="text-accent">.</span></h1>
                </Link>
            </div>
            {/* nav links */}
            <nav className="flex flex-col items-center justify-center gap-6">
                {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.path}
                    className={`text-lg font-medium capitalize transition-all hover:text-accent-hover ${
                    pathname === link.path ? "text-accent border-b-2 border-accent hover:border-accent-hover" : "text-muted-foreground"
                    }`}
                >
                    {link.name}
                </Link>
                ))}
            </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MobileNav