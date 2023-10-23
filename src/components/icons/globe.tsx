import {FC} from 'react'

export const GlobeIcon: FC<{className: string}> = ({className}) => {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse opacity="0.25" cx="12" cy="12" rx="4" ry="10" transform="rotate(-90 12 12)" fill="current" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9879 3.30118C11.3781 2.88858 11.7204 2.75 12 2.75C12.2796 2.75 12.6219 2.88858 13.0121 3.30118C13.4038 3.71536 13.7911 4.35495 14.1321 5.20748C14.388 5.84734 14.6096 6.58631 14.7865 7.4025C13.8962 7.30277 12.9616 7.25 12 7.25C11.0384 7.25 10.1038 7.30277 9.21354 7.4025C9.3904 6.58631 9.61199 5.84734 9.86793 5.20748C10.2089 4.35495 10.5962 3.71536 10.9879 3.30118ZM7.63641 7.63641C7.84323 6.52904 8.12744 5.51983 8.47522 4.65039C8.69034 4.11258 8.93444 3.61652 9.20735 3.17903C6.34478 4.08446 4.08446 6.34478 3.17903 9.20735C3.61652 8.93444 4.11258 8.69034 4.65039 8.47522C5.51983 8.12744 6.52904 7.84323 7.63641 7.63641ZM2.75 12C2.75 12.0002 2.75 12.0003 2.75 12.0005C2.75016 12.28 2.88881 12.6221 3.30118 13.0121C3.71536 13.4038 4.35495 13.7911 5.20748 14.1321C5.84734 14.388 6.58631 14.6096 7.4025 14.7865C7.30277 13.8962 7.25 12.9616 7.25 12C7.25 11.0384 7.30277 10.1038 7.4025 9.21354C6.58631 9.3904 5.84734 9.61199 5.20747 9.86793C4.35495 10.2089 3.71536 10.5962 3.30118 10.9879C2.88858 11.3781 2.75 11.7204 2.75 12ZM8.94628 15.0537C8.81954 14.0991 8.75 13.0726 8.75 12C8.75 10.9274 8.81954 9.90086 8.94628 8.94628C9.90086 8.81954 10.9274 8.75 12 8.75C13.0726 8.75 14.0991 8.81954 15.0537 8.94628C15.1805 9.90086 15.25 10.9274 15.25 12C15.25 13.0726 15.1805 14.0991 15.0537 15.0537C14.0991 15.1805 13.0726 15.25 12 15.25C10.9274 15.25 9.90086 15.1805 8.94628 15.0537ZM7.63641 16.3636C6.52904 16.1568 5.51983 15.8726 4.65039 15.5248C4.11258 15.3097 3.61652 15.0656 3.17903 14.7927C4.08446 17.6552 6.34478 19.9155 9.20735 20.821C8.93444 20.3835 8.69034 19.8874 8.47522 19.3496C8.12744 18.4802 7.84323 17.471 7.63641 16.3636ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM20.821 9.20735C19.9155 6.34478 17.6552 4.08446 14.7927 3.17903C15.0656 3.61652 15.3097 4.11258 15.5248 4.65039C15.8726 5.51983 16.1568 6.52904 16.3636 7.63641C17.471 7.84323 18.4802 8.12744 19.3496 8.47522C19.8874 8.69034 20.3835 8.93444 20.821 9.20735ZM16.5975 9.21354C17.4137 9.3904 18.1527 9.61199 18.7925 9.86793C19.6451 10.2089 20.2846 10.5962 20.6988 10.9879C21.1114 11.3781 21.25 11.7204 21.25 12C21.25 12.2796 21.1114 12.6219 20.6988 13.0121C20.2846 13.4038 19.6451 13.7911 18.7925 14.1321C18.1527 14.388 17.4137 14.6096 16.5975 14.7865C16.6972 13.8962 16.75 12.9616 16.75 12C16.75 11.0384 16.6972 10.1038 16.5975 9.21354ZM16.3636 16.3636C17.471 16.1568 18.4802 15.8726 19.3496 15.5248C19.8874 15.3097 20.3835 15.0656 20.821 14.7927C19.9155 17.6552 17.6552 19.9155 14.7927 20.821C15.0656 20.3835 15.3097 19.8874 15.5248 19.3496C15.8726 18.4802 16.1568 17.471 16.3636 16.3636ZM14.7865 16.5975C14.6096 17.4137 14.388 18.1527 14.1321 18.7925C13.7911 19.6451 13.4038 20.2846 13.0121 20.6988C12.6219 21.1114 12.2796 21.25 12 21.25C11.7204 21.25 11.3781 21.1114 10.9879 20.6988C10.5962 20.2846 10.2089 19.6451 9.86793 18.7925C9.61199 18.1527 9.3904 17.4137 9.21354 16.5975C10.1038 16.6972 11.0384 16.75 12 16.75C12.9616 16.75 13.8962 16.6972 14.7865 16.5975Z"
        fill="current"
      />
    </svg>
  )
}