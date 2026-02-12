import dynamic from 'next/dynamic'

const Slider = dynamic(
  () => import('react-slick').then(mod => mod.default),
  { ssr: false }
)

export default Slider
