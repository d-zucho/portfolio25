import { NAV_LINKS } from '@/lib/data'
import Link from 'next/link'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <div className='font-semibold items-center gap-8 z-10 hidden md:flex'>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={'/'}
            className='hover:text-teal-400 transition duration-300  ease-in-out text-sm'
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className='md:hidden'>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
