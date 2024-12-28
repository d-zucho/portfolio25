import Image from 'next/image'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Navbar from '@/components/Nav/Navbar'
import MobileNav from '@/components/Nav/MobileNav'

const Header = () => {
  return (
    <header className='text-white/90 py-8 z-50'>
      <MaxWidthWrapper>
        {/* main flex container */}
        <div className='flex justify-between items-center bg-[#18181D] bg-opacity-50 border-2 border-slate-600/10 shadow-xl rounded-full px-4'>
          {/* Image Wrapper */}
          <div className='shrink-0'>
            <Image
              src={'/logo-main.svg'}
              width={100}
              height={50}
              alt='logo'
              className=' w-[75px]'
            />
          </div>
          {/* Navigation */}
          <Navbar />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
