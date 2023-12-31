import {Heading} from '../atoms/heading'
import {Section} from '../layout/section'
import {Paragraph} from '../atoms/paragraph'
import {FC} from 'react'
import {Button} from '../atoms/button'

type Content = {
  heading: string
  text: string
  cta: {caption: string; href: string}
  questions: {q: string; a: string}[]
}

export const FAQ: FC<{content: Content}> = ({content}) => {
  return (
    <Section className="pt-24 lg:pt-48 grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-16 pb-16 lg:pb-24">
      <div>
        <Heading level={2} html={content.heading} />
        <Paragraph className="my-7 max-w-lg" html={content.text} />
        <Button href={content.cta.href} secondary>
          {content.cta.caption}
        </Button>
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        {content.questions.map(({q, a}, index) => (
          <div key={index}>
            <h4 className="text-black dark:text-white font-semibold">{q}</h4>
            <Paragraph className="mt-4 max-w-lg" html={a} />
          </div>
        ))}
      </div>
    </Section>
  )
}
