import {getDictionary} from '../../utils/get-dictionary'
import {Hero} from '@/components/sections/hero'
import {LogoCloud} from '@/components/sections/logo-cloud'
import {PainPoints} from '@/components/sections/pain-points'
import {Locale} from '@/i18n.config'

export default async function Page({params: {lang}}: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(lang)

  return (
    <main>
      <Hero content={dictionary.hero} />
      <LogoCloud />
      <PainPoints content={dictionary.painPoints} />
    </main>
  )
}
