'use client'

import {getCookie} from '@/app/actions'
import {GearIcon} from '@/components/icons/gear'
import {MoonIcon} from '@/components/icons/moon'
import {SunIcon} from '@/components/icons/sun'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'
import {PopoverNote} from './popover-note'
import {usePathname} from 'next/navigation'
import {Locale} from '@/i18n.config'

const dictionary = {
  en: {
    cookieNote: 'Accept essential Cookies to use themes.'
  },
  de: {
    cookieNote: 'Akzeptiere essenzielle cookies, um Themes zu nutzen.'
  }
}

const themes = [
  {id: 'light', name: 'Light Mode', icon: SunIcon},
  {id: 'dark', name: 'Dark Mode', icon: MoonIcon},
  {id: 'system', name: 'System Preference', icon: GearIcon}
]

export const ThemeButton = () => {
  const [consent, setConsent] = useState<boolean>(false)
  const [showNote, setShowNote] = useState<boolean>(false)
  const {theme, setTheme} = useTheme()
  const lang = usePathname()!.split('/')[1] as Locale

  const onChange = async (value: string) => {
    setTheme(value)
  }

  useEffect(() => {
    const checkCookie = async () => {
      const cookie = await getCookie('consent')
      if (cookie?.value) setConsent(true)
    }
    checkCookie()
  }, [])

  return (
    <DropdownMenu.Root>
      <div className="relative">
        {consent ? (
          <DropdownMenu.Trigger
            disabled={!consent}
            className="flex h-7 items-center rounded-md px-2 text-indigo-500 hover:text-indigo-700 focus:bg-white/30 focus:outline-none dark:text-indigo-300 dark:hover:text-indigo-200 dark:focus:bg-white/10 disabled:opacity-50"
          >
            <MoonIcon className="theme-icon-dark h-4" />
            <SunIcon className="theme-icon-light h-4" />
          </DropdownMenu.Trigger>
        ) : (
          <button
            onClick={() => {
              setShowNote(true)
              setTimeout(() => setShowNote(false), 3000)
            }}
            className="flex h-7 items-center rounded-md px-2 text-indigo-500 hover:text-indigo-700 focus:bg-white/30 focus:outline-none dark:text-indigo-300 dark:hover:text-indigo-200 dark:focus:bg-white/10"
          >
            <MoonIcon className="theme-icon-dark h-4" />
            <SunIcon className="theme-icon-light h-4" />
          </button>
        )}
        {showNote && <PopoverNote>{dictionary[lang].cookieNote}</PopoverNote>}
      </div>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={10}
          className="relative z-50 rounded-lg border border-slate-200 bg-slate-100/60 p-2 shadow-lg backdrop-blur-lg dark:border-slate-700 dark:bg-black/70"
        >
          <DropdownMenu.RadioGroup value={theme} onValueChange={onChange}>
            {themes.map(({id, icon}, index) => {
              const Icon = icon
              return (
                <DropdownMenu.RadioItem
                  key={index}
                  value={id}
                  className="relative flex h-7 cursor-pointer items-center rounded-md border border-transparent px-2 focus:bg-white/30 focus:outline-none data-[state=checked]:text-indigo-500 dark:focus:bg-white/10 dark:data-[state=checked]:text-indigo-300"
                >
                  <DropdownMenu.ItemIndicator className="absolute inset-2 bg-indigo-400/80 blur-md" />
                  <Icon className="relative h-4" />
                </DropdownMenu.RadioItem>
              )
            })}
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Arrow className="relative z-10 -mb-px h-1.5 w-3 fill-current text-slate-200 dark:text-slate-700" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
