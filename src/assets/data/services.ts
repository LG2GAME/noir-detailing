import services1Image from '../images/services_1.webp'
import services2Image from '../images/services_2.webp'
import services3Image from '../images/services_3.webp'

export const services: {
  image: { src: string; alt: string }
  header: string
  list: string[]
  link: string
}[] = [
  {
    image: { src: services1Image.src, alt: 'Ceramic coating' },
    header: 'Ceramic coating',
    list: [
      'Long-lasting paint protection',
      'Deep gloss and enhanced finish',
      'Hydrophobic surface technology'
    ],
    link: ''
  },
  {
    image: { src: services2Image.src, alt: 'Paint correction' },
    header: 'Paint correction',
    list: [
      'Removal of paint imperfections',
      'Restoration of clarity and depth',
      'Machine polishing process'
    ],
    link: ''
  },
  {
    image: { src: services3Image.src, alt: 'Interior detailing' },
    header: 'Interior detailing',
    list: [
      'Deep cleaning and restoration',
      'Premium leather care',
      'Refined interior finish'
    ],
    link: ''
  }
]
