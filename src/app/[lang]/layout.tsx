import './globals.css'
import {Metadata} from 'next'
import {Lato, Sora, JetBrains_Mono} from 'next/font/google'
import Script from 'next/script'
import {BlurBackground} from '@/components/visuals/blur-background'
import {Navigation} from '@/components/layout/navigation'
import {Footer} from '@/components/layout/footer'
import Analytics from '@/components/functional/analytics'
import {getDictionary} from '@/utils/get-dictionary'
import {Locale} from '@/i18n.config'

const lato = Lato({weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--font-lato'})
const sora = Sora({weight: '800', subsets: ['latin'], display: 'swap', variable: '--font-sora'})
const mono = JetBrains_Mono({weight: '300', subsets: ['latin'], display: 'swap', variable: '--font-mono'})

export async function generateMetadata({params: {lang}}: {params: {lang: Locale}}): Promise<Metadata> {
  const dictionary = await getDictionary(lang)
  return dictionary.index.meta
}

export default async function Layout({params: {lang}, children}: {params: {lang: Locale}; children: React.ReactNode}) {
  const dictionary = await getDictionary(lang)

  return (
    <html lang="de" className={`relative ${lato.variable} ${sora.variable} ${mono.variable}`}>
      <head />
      <body className="overflow-x-hidden">
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <Script
          id="check-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (!('theme' in localStorage)) localStorage.theme = 'system'
              if (localStorage.theme === 'dark' || (localStorage.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `
          }}
        />
        <BlurBackground />
        <Navigation content={dictionary.navigation} />
        <div className="relative">{children}</div>
        <Footer content={dictionary.footer} />
      </body>
      <Analytics />
    </html>
  )
}
