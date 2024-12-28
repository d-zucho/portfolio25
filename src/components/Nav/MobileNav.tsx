import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Menu } from 'lucide-react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
          <Menu size={32} />
        </SheetTrigger>
        <SheetContent className='text-white/90'>
          <SheetHeader>
            <SheetTitle>Danny Libor</SheetTitle>
            <VisuallyHidden.Root>
              <SheetDescription>Frontend Developer</SheetDescription>
            </VisuallyHidden.Root>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
