import Image from 'next/image'
import {Section} from '../layout/section'

const logos = [
  {src: '/images/logos/stackbit.svg', alt: 'Stackbit', height: 24, width: 138, scale: 0.8},
  {src: '/images/logos/contentlayer.svg', alt: 'Contentlayer', height: 24, width: 135},
  {src: '/images/logos/urlbox.svg', alt: 'Urlbox', height: 24, width: 103},
  {src: '/images/logos/netlify.svg', alt: 'Netlify', height: 24, width: 59, scale: 1.6},
  {src: '/images/logos/effect.svg', alt: 'Effect', height: 24, width: 84},
  {src: '/images/logos/airbus.svg', alt: 'Airbus', height: 24, width: 130, scale: 0.8},
  {src: '/images/logos/scoo.svg', alt: 'Scoo Brewery', height: 24, width: 101},
  {src: '/images/logos/clearyst.svg', alt: 'Clearyst', height: 24, width: 92}
]

export const LogoCloud = () => {
  return (
    <Section className="pb-12 lg:pb-16 -mt-4">
      <div className="relative overflow-x-hidden lg:-mx-16">
        <div>
          <div className="flex animate-scroll py-4">
            {[...logos, ...logos, ...logos].map(({src, alt, width, height, scale}, index) => (
              <div key={index} className="shrink-0 relative h-8 w-64" style={{scale}}>
                <Image src={src.replace('.svg', '-black.svg')} alt={alt} fill className="object-center object-contain dark:hidden" />
                <Image src={src.replace('.svg', '-white.svg')} alt={alt} fill className="object-center object-contain hidden dark:block" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute h-full w-32 top-0 left-0 bg-gradient-to-r from-white dark:from-[#0E1117]" />
        <div className="absolute h-full w-32 top-0 right-0 bg-gradient-to-l from-white dark:from-[#0E1117]" />
      </div>
    </Section>
  )
}
