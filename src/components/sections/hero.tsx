'use client'

import {Button} from '@/components/atoms/button'
import {Heading} from '@/components/atoms/heading'
import {Paragraph} from '@/components/atoms/paragraph'
import {Section} from '@/components/layout/section'
import {Avatars} from '../atoms/avatars'
import {Subheading} from '../atoms/subheading'
import {FC, useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

type Content = {
  subheading: string
  heading: string
  text: string
  cta: {
    primary: {caption: string; href: string}
    secondary: {caption: string; href: string}
  }
  socialProof: {
    text: string
    count: number
  }
}

const avatars = [
  {
    src: '/images/avatars/jonathan-markwell.jpg',
    alt: 'Jonathan Markwell',
    blurHash:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAzADMDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMEAgUB/8QAHRABAAMAAwEBAQAAAAAAAAAAAAECAxEhMRIEE//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBQIB/8QAHREBAAEEAwEAAAAAAAAAAAAAAAIBAxEhBBIxMv/aAAwDAQACEQMRAD8A69o6TawsmOSNaoHHpvJ6TnaR2KR2bevb2le1XGgsG5wfWGM6nRVNvxFiA1wCeWsGSRqbNiNLH7FNs1T3jsUhm9uxW/anjTKuhsJ87nRZPvUbo3wHnIJdXU06k6apv6l31P2KBVk3fVmu3aPXXgiP0d+qVI6D7u3nqppo4+G3K7PTlOv6FjLK37Cf6BFvLnSxfwBQs+gVRbo4mfv0BUj8lpeuh+afHTx8ASOR9GYeHgAmK//Z'
  },
  {
    src: '/images/avatars/johannes-schickling.jpg',
    alt: 'Johannes Schickling',
    blurHash:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAzADMDASIAAhEBAxEB/8QAGgAAAwEAAwAAAAAAAAAAAAAAAAMEAgEFBv/EABoQAQADAQEBAAAAAAAAAAAAAAABAgMhETH/xAAXAQEBAQEAAAAAAAAAAAAAAAABAgAD/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD0l/iTaVN54i2s4upFp6ZnKa1umZ2Jq2ktk0sZEqiK0GfQUtXtxFvZTe3EW8ixUqW9+mZXT3nreUiRVrsM7HRKXOToleOVp3oL9BwaLTxJsptPE+hxtR2jrecOZjrVIGHTqGxJVW1Ym1v0Meg4k2yfQAKIn61UBgdVoAtQACH/2Q=='
  },
  {
    src: '/images/avatars/sean-c-davis.jpg',
    alt: 'Sean C. Davis',
    blurHash:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAzADMDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgABA//EABgQAQEBAQEAAAAAAAAAAAAAAAABEQIS/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAbEQEBAAIDAQAAAAAAAAAAAAAAAQIRAxIhMf/aAAwDAQACEQMRAD8A7Q5XKUvSq4OO7dNG0L2N7JvfhWsH0tNz5UkOoJ21lpYHUFVxQL0z0yxSE67PC0pRkLDcec9WpYjZ6rtg3k24l24Y6cLwvDv5V5JtXHysdLBsNjliOJqCejrCiQaxrKkFhRqRIrEkCf/Z'
  }
  // {
  //   src: '/images/avatars/michael-arnaldi.jpg',
  //   alt: 'Michael Arnaldi',
  //   blurHash:
  //     'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAzADMDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEBQIBBv/EACAQAQACAgEFAQEAAAAAAAAAAAABAgMRIQQTFDFBYRL/xAAYAQEBAQEBAAAAAAAAAAAAAAADAQIABP/EABkRAQEBAQEBAAAAAAAAAAAAAAABAhETIf/aAAwDAQACEQMRAD8AbaSbyJuVa5InHW3cSnixkWS1qR3aeE2Wxl78Is+XTs1NR7NoCGepjfsH4Btzsq21k4ir4gnlTQZEiaaexUOqWF3nhn9VuYnTTtTZGTB/XxcX6lYM1tv0Gz4n4Ho9GOR9NbCRkxNO2NPlonAysu2NzFFeSpcV5DqGzS4x7ddjfxRSh1caSOtQ+P8AgaHbgNsdXWTZQCjR5C49gC0TJ1FFQGYtdABpl//Z'
  // }
]

export const Hero: FC<{content: Content}> = ({content}) => {
  const [index, setIndex] = useState<number>(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((id) => (id === avatars.length - 1 ? 0 : id + 1)), 2000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <Section className="pt-32 pb-16 lg:pt-48">
      <Subheading>{content.subheading}</Subheading>
      <Heading level={1} className="max-w-lg">
        <span dangerouslySetInnerHTML={{__html: content.heading}} />
      </Heading>
      <Paragraph size="lg" className="mt-8 lg:mt-12 max-w-xl" html={content.text} />
      <div className="flex flex-wrap gap-2 mt-8">
        <Button href={content.cta.primary.href}>{content.cta.primary.caption}</Button>
        <Button href={content.cta.secondary.href} secondary>
          {content.cta.secondary.caption}
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8 text-sm">
        <Avatars avatars={avatars} plus={content.socialProof.count} />
        <div>
          <p className="leading-none">{content.socialProof.text}</p>
          <div className="relative h-5 font-bold text-black dark:text-white">
            <AnimatePresence initial={false}>
              <motion.div
                key={index}
                initial={{y: '-100%', opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{opacity: 0, transition: {duration: 0.2}}}
                className="absolute whitespace-nowrap top-0 left-0"
              >
                {avatars[index].alt}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  )
}
