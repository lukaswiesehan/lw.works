import {FC} from 'react'

export const CartIcon: FC<{className: string}> = ({className}) => {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.25"
        d="M21.0262 10.5793L21.7642 8.11957C22.183 6.72337 22.3924 6.02528 22.241 5.47196C22.1083 4.98737 21.7981 4.57046 21.3721 4.30415C20.8856 4.00006 20.1568 4.00006 18.6991 4.00006H4.69232L6.1414 10.2794C6.44796 11.6078 6.60125 12.2721 6.96247 12.7675C7.28111 13.2045 7.71197 13.5473 8.20946 13.7595C8.77342 14.0001 9.45511 14.0001 10.8185 14.0001H16.4287C17.7101 14.0001 18.3508 14.0001 18.8913 13.7818C19.3684 13.5891 19.7879 13.277 20.1096 12.8754C20.4739 12.4204 20.658 11.8067 21.0262 10.5793Z"
        fill="current"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.50007 1.75H1.49998L1.00009 1.75006C0.585878 1.75011 0.250051 1.41437 0.25 1.00015C0.249949 0.585939 0.585695 0.250112 0.999908 0.250061L1.49991 0.25L1.5 1L1.50002 0.25H1.51311H1.51348C1.60834 0.25 1.67335 0.25 1.73339 0.251921C3.38955 0.30492 4.81459 1.43859 5.2386 3.04043C5.25374 3.09762 5.26814 3.15991 5.28894 3.25006H18.6991L18.7343 3.25006C19.4332 3.25005 20.0078 3.25004 20.4666 3.29105C20.9376 3.33315 21.3794 3.42424 21.7696 3.66818C22.3554 4.03436 22.7819 4.60761 22.9643 5.27392C23.0859 5.71779 23.0461 6.16714 22.9511 6.63038C22.8586 7.08156 22.6935 7.63185 22.4927 8.30123L22.4926 8.30135L22.4825 8.33509L21.7446 10.7948L21.7002 10.943C21.3758 12.0263 21.152 12.7735 20.695 13.3442C20.2929 13.8462 19.7685 14.2364 19.1721 14.4772C18.4941 14.751 17.7142 14.7506 16.5833 14.7501L16.4287 14.7501H10.8185H10.7906C10.708 14.7501 10.6273 14.7501 10.5486 14.75H6C5.30964 14.75 4.75 15.3096 4.75 16C4.75 16.6904 5.30964 17.25 6 17.25H9H17H21C21.4142 17.25 21.75 17.5858 21.75 18C21.75 18.4142 21.4142 18.75 21 18.75H19.4501C19.6419 19.125 19.75 19.5499 19.75 20C19.75 21.5188 18.5188 22.75 17 22.75C15.4812 22.75 14.25 21.5188 14.25 20C14.25 19.5499 14.3581 19.125 14.5499 18.75H11.4501C11.6419 19.125 11.75 19.5499 11.75 20C11.75 21.5188 10.5188 22.75 9 22.75C7.48122 22.75 6.25 21.5188 6.25 20C6.25 19.5499 6.35814 19.125 6.54985 18.75H6C4.48122 18.75 3.25 17.5188 3.25 16C3.25 14.4812 4.48122 13.25 6 13.25H6.38649C6.37639 13.2365 6.36636 13.223 6.35643 13.2093C6.10823 12.8689 5.94942 12.4926 5.81487 12.0573C5.68495 11.637 5.56482 11.1164 5.41687 10.4752L5.41059 10.448L3.96151 4.16871L3.83136 3.60468C3.80594 3.49453 3.79699 3.45619 3.78854 3.42426C3.53414 2.46316 2.67911 1.78295 1.68541 1.75115C1.65241 1.7501 1.61306 1.75 1.50009 1.75H1.50007ZM14.0097 13.2501C14.0064 13.25 14.0032 13.25 14 13.25H10.585C10.0156 13.2496 9.60256 13.2464 9.26886 13.222C8.9006 13.1951 8.68018 13.1449 8.50372 13.0696C8.1306 12.9105 7.80746 12.6534 7.56847 12.3256C7.45545 12.1706 7.35701 11.9671 7.24797 11.6143C7.13614 11.2525 7.0279 10.7855 6.87218 10.1107L5.6351 4.75006H18.6991C19.4419 4.75006 19.949 4.75077 20.333 4.78509C20.7125 4.81901 20.8783 4.87997 20.9745 4.94011C21.2408 5.10656 21.4347 5.36713 21.5176 5.67C21.5475 5.77944 21.5583 5.9558 21.4817 6.32899C21.4043 6.70666 21.2592 7.19257 21.0458 7.90406L20.3078 10.3638C19.9206 11.6546 19.7753 12.093 19.5241 12.4065C19.2829 12.7078 18.9683 12.9419 18.6104 13.0864C18.2379 13.2368 17.7763 13.2501 16.4287 13.2501H14.0097ZM9 18.75C8.30964 18.75 7.75 19.3096 7.75 20C7.75 20.6904 8.30964 21.25 9 21.25C9.69036 21.25 10.25 20.6904 10.25 20C10.25 19.3096 9.69036 18.75 9 18.75ZM17 18.75C16.3096 18.75 15.75 19.3096 15.75 20C15.75 20.6904 16.3096 21.25 17 21.25C17.6904 21.25 18.25 20.6904 18.25 20C18.25 19.3096 17.6904 18.75 17 18.75Z"
        fill="current"
      />
    </svg>
  )
}
