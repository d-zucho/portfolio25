import BgGradient from '@/components/BgGradient'
import Image from 'next/image'

export default function Home() {
  return (
    <div
      className='bg-my-bg w-full h-screen relative overflow-hidden
  '
    >
      <BgGradient className='w-fit h-fit absolute top-0 left-1/2 -translate-x-1/2' />
    </div>
  )
}
