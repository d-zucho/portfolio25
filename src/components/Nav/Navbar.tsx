import { NAV_LINKS } from '@/lib/data'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='font-semibold flex gap-8 z-10'>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={'/'}
          className='hover:text-teal-600 transition duration-200 ease-linear'
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
