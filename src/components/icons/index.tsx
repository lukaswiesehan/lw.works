import {FC} from 'react'
import {AlertIcon} from './alert'
import {ArrowIcon} from './arrow'
import {CalendarIcon} from './calendar'
import {CartIcon} from './cart'
import {CheckIcon} from './check'
import {CheckSquareIcon} from './check-square'
import {CloseIcon} from './close'
import {GearIcon} from './gear'
import {GlobeIcon} from './globe'
import {InstagramIcon} from './instagram'
import {LinkedinIcon} from './linkedin'
import {LockIcon} from './lock'
import {MenuIcon} from './menu'
import {MoonIcon} from './moon'
import {PlanetIcon} from './planet'
import {StarIcon} from './star'
import {SunIcon} from './sun'
import {TrashIcon} from './trash'
import {TwitterIcon} from './twitter'
import {UserIcon} from './user'
import {UserPlusIcon} from './user-plus'
import {TargetIcon} from './target'
import {TimeFastIcon} from './time-fast'
import {WalletIcon} from './wallet'
import {HeartStashIcon} from './heart-stash'
import {RocketIcon} from './rocket'
import {LightningIcon} from './lightning'
import {QuotesIcon} from './quotes'
import {InfinityIcon} from './infinity'
import {PauseIcon} from './pause'
import {AtomIcon} from './atom'
import {FolderIcon} from './folder'
import {EmailIcon} from './email'
import {FingerprintIcon} from './fingerprint'
import {ChevronDownIcon} from './chevron-down'
import {PhoneIcon} from './phone'
import {SendIcon} from './send'
import {HouseIcon} from './house'
import {WhatsappIcon} from './whatsapp'
import {CalendarSolidIcon} from './calendar-solid'
import {LocationIcon} from './location'
import {EmailSolidIcon} from './email-solid'

const icons = {
  alert: AlertIcon,
  atom: AtomIcon,
  arrow: ArrowIcon,
  calendar: CalendarIcon,
  'calendar-solid': CalendarSolidIcon,
  cart: CartIcon,
  'check-square': CheckSquareIcon,
  check: CheckIcon,
  'chevron-down': ChevronDownIcon,
  close: CloseIcon,
  email: EmailIcon,
  'email-solid': EmailSolidIcon,
  fingerprint: FingerprintIcon,
  folder: FolderIcon,
  gear: GearIcon,
  globe: GlobeIcon,
  'heart-stash': HeartStashIcon,
  house: HouseIcon,
  infinity: InfinityIcon,
  instagram: InstagramIcon,
  lightning: LightningIcon,
  linkedin: LinkedinIcon,
  location: LocationIcon,
  lock: LockIcon,
  menu: MenuIcon,
  moon: MoonIcon,
  pause: PauseIcon,
  phone: PhoneIcon,
  planet: PlanetIcon,
  quotes: QuotesIcon,
  rocket: RocketIcon,
  send: SendIcon,
  star: StarIcon,
  sun: SunIcon,
  target: TargetIcon,
  'time-fast': TimeFastIcon,
  trash: TrashIcon,
  twitter: TwitterIcon,
  user: UserIcon,
  'user-plus': UserPlusIcon,
  wallet: WalletIcon,
  whatsapp: WhatsappIcon
}

export type IconName = keyof typeof icons

export const Icon: FC<{name: IconName; className: string}> = ({name, className}) => {
  const IconComponent = icons[name]
  if (!IconComponent) return null
  return <IconComponent className={`${className}`} />
}
