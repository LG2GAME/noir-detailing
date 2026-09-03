import cube from '../icons/cube.svg'

export const whyNoir: {
  icon: { src: string; alt: string }
  title: string
  description: string
  link: string
}[] = [
  {
    icon: { src: cube.src, alt: 'Attention To Detail' },
    title: 'Attention To Detail',
    description:
      'Every vehicle receives meticulous attention, refined techniques and uncompromising quality.',
    link: '/about-us'
  },
  {
    icon: { src: cube.src, alt: 'Premium Products' },
    title: 'Premium Products',
    description:
      'We use advanced solutions designed to protect, enhance and preserve your vehicle.',
    link: '/about-us'
  },
  {
    icon: { src: cube.src, alt: 'Personal Approach' },
    title: 'Personal Approach',
    description:
      'Every project is carefully tailored to match your vehicle’s unique needs.',
    link: '/about-us'
  }
]
