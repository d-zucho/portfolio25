import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Menu } from 'lucide-react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/data'

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
          <Menu size={32} />
        </SheetTrigger>
        <SheetContent className='text-white/90 bg-my-bg w-[300px] border-l-gray-600/50'>
          <SheetHeader>
            <SheetTitle className='text-my-dark-gray font-montserrat'>
              Danny Libor
            </SheetTitle>
            <VisuallyHidden.Root>
              <SheetDescription>Frontend Developer</SheetDescription>
            </VisuallyHidden.Root>
          </SheetHeader>
          <div className='w-full h-full px-8 py-20 flex flex-col gap-12 items-center'>
            {NAV_LINKS.map((link) => (
              <SheetClose key={link.label} asChild>
                <Link
                  key={link.label}
                  href={link.href}
                  className='hover:text-teal-400 transition duration-300  ease-in-out text-lg tracking-wider
                last:px-12 last:py-3 last:bg-teal-800 last:rounded-2xl last:w-full last:text-white'
                >
                  {link.title}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
