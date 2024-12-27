import Image from 'next/image'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Navbar from '@/components/Nav/Navbar'

const Header = () => {
  return (
    <header className='text-white/90 py-8 z-50'>
      <MaxWidthWrapper>
        {/* main flex container */}
        <div className='flex justify-between items-center'>
          {/* Image Wrapper */}
          <div>
            <Image src={'/logo-main.svg'} width={100} height={50} alt='logo' />
          </div>
          {/* Navigation */}
          <Navbar />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
