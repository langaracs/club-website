type Props = {
  small?: boolean
}

function Logo({ small }: Props) {
  const textSize = small ? 'text-3xl md:text-5xl' : 'text-6xl md:text-8xl'
  const padding = small ? 'px-2 mb-1' : 'px-4 mb-2'

  return (
    <div
      style={{ width: 'max-content' }}
      className={`${textSize} text-right font-bold tracking-tighter leading-tight select-none cursor-default`}
    >
      <div className={`${padding} whitespace-no-wrap`}>langara</div>
      <div className={`rounded-lg ${padding} bg-black text-white`}>
        <span className="text-brand-orange">.</span>
        cs
      </div>
    </div>
  )
}

export default Logo
