import {Heading} from '../atoms/heading'
import {Section} from '../layout/section'
import {Paragraph} from '../atoms/paragraph'
import {FC} from 'react'
import {Button} from '../atoms/button'
import {Divider} from '../atoms/divider'

type Content = {
  heading: string
  text: string
  primary: {caption: string; href: string}
  secondary: {caption: string; href: string}
}

export const CTA: FC<{content: Content}> = ({content}) => {
  return (
    <>
      <Divider />
      <Section className="group relative overflow-hidden pt-24 pb-48 flex flex-col items-center">
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-indigo-400 w-1/2 h-32 blur-3xl sm:blur-4xl transition-opacity duration-500 opacity-40 group-hover:opacity-60"
          style={{borderRadius: '50% 50%'}}
        />
        <Heading level={2} size="xl" html={content.heading} />
        <Paragraph className="mt-7 mb-8 max-w-lg text-center" html={content.text} />
        <div className="flex gap-x-2">
          <Button href={content.primary.href}>{content.primary.caption}</Button>
          <Button href={content.secondary.href} secondary>
            {content.secondary.caption}
          </Button>
        </div>
      </Section>
    </>
  )
}
