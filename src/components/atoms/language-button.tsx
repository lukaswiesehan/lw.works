'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'
import {Locale, i18n} from '@/i18n.config'
import {getCookie, setCookie} from '@/app/actions'
import {getEquivalentPathname} from '@/utils/i18n/get-equivalent-pathname'

export const LanguageButton = () => {
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>(pathname.split('/')[1] as Locale)

  useEffect(() => {
    const equivalentPathname = getEquivalentPathname(pathname, locale)
    const currentLocale = pathname!.split('/')[1]
    if (currentLocale !== locale) {
      window.location.href = equivalentPathname === pathname ? pathname.replace(currentLocale, locale) : equivalentPathname
    }
  }, [locale, pathname])

  const onChange = async (value: string) => {
    const consent = await getCookie('consent')
    if (consent?.value) {
      await setCookie('locale', value)
    }
    setLocale(value as Locale)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex h-7 items-center rounded-md px-2 text-indigo-500 hover:text-indigo-700 focus:bg-white/30 focus:outline-none dark:text-indigo-300 dark:hover:text-indigo-200 dark:focus:bg-white/10">
        <span className="font-mono uppercase text-sm">{locale}</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={10}
          className="relative z-50 rounded-lg border border-slate-200 bg-slate-100/60 p-2 shadow-lg backdrop-blur-lg dark:border-slate-700 dark:bg-black/70"
        >
          <DropdownMenu.RadioGroup value={locale} onValueChange={onChange}>
            {i18n.locales.map((locale) => (
              <DropdownMenu.RadioItem
                key={locale}
                value={locale}
                className={`cursor-pointer relative flex h-7 items-center rounded-md border border-transparent font-mono uppercase focus:bg-white/30 focus:outline-none data-[state=checked]:text-indigo-500 dark:focus:bg-white/10 dark:data-[state=checked]:text-indigo-300 px-2 text-sm`}
              >
                <DropdownMenu.ItemIndicator className="absolute inset-2 bg-indigo-400/80 blur-md" />
                <span className="relative">{locale}</span>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Arrow className="relative z-10 -mb-px h-1.5 w-3 fill-current text-slate-200 dark:text-slate-700" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
