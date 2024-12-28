interface BgGradientProps {
  className?: string
}

const BgGradient = ({ className }: BgGradientProps) => {
  return (
    <div className={className}>
      <div
        className={
          'w-[470px] h-[180px] rounded-full bg-my-blue/40 absolute -top-32 blur-[236px]  right-20'
        }
      ></div>
      <div className='w-[370px] h-[200px] rounded-full absolute bg-my-red/40 -top-[100px] -right-[100px] blur-[236px]'></div>
      <div className='w-[370px] h-[110px] rounded-full absolute bg-my-yellow/40 -top-[140px] -right-[230px] blur-[236px]'></div>
    </div>
  )
}

export default BgGradient
