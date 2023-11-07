import {FC} from 'react'

export const RocketIcon: FC<{className: string}> = ({className}) => {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.25"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.9997 9C5.90928 10.0905 5.36407 10.6358 5.07262 11.2239C4.5181 12.343 4.51813 13.6569 5.07269 14.776C5.36416 15.3642 5.90939 15.9094 6.99985 16.9998C8.09039 18.0904 8.63566 18.6357 9.22386 18.9271C10.343 19.4817 11.657 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745L20.1248 11.8745C20.8166 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27698C21.9992 8.81665 21.9992 8.32749 21.9992 7.34918L21.9992 6.8C21.9992 5.11984 21.9992 4.27977 21.6722 3.63803C21.3846 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1992 2L16.6503 2C15.6719 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895ZM15.0024 10.9995C16.107 10.9995 17.0024 10.1041 17.0024 8.99951C17.0024 7.89494 16.107 6.99951 15.0024 6.99951C13.8979 6.99951 13.0024 7.89494 13.0024 8.99951C13.0024 10.1041 13.8979 10.9995 15.0024 10.9995Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5567 1.24999L16.6503 1.25L17.1991 1.25L17.2313 1.25C18.0441 1.24999 18.6997 1.24999 19.2306 1.29337C19.7773 1.33803 20.2574 1.43239 20.7016 1.65873C21.4072 2.01825 21.9809 2.59193 22.3404 3.29754C22.5668 3.74176 22.6611 4.2219 22.7058 4.76853C22.7492 5.29944 22.7492 5.95505 22.7491 6.76788L22.7491 6.8L22.7491 7.34918L22.7492 7.44271C22.7493 8.33151 22.7494 8.90431 22.6179 9.45205C22.5016 9.9367 22.3097 10.4 22.0493 10.825C21.7549 11.3053 21.3499 11.7103 20.7213 12.3387L20.7213 12.3387L20.6552 12.4048L19.3141 13.746L19.7319 15.8334L19.7536 15.9419C19.9173 16.7581 20.0305 17.3224 19.9762 17.8786C19.9282 18.3693 19.784 18.8458 19.5517 19.2807C19.2885 19.7736 18.8814 20.1805 18.2926 20.7688L18.2143 20.8471L16.5311 22.5303C16.3752 22.6862 16.1586 22.7656 15.9389 22.7474C15.7192 22.7292 15.5186 22.6153 15.3904 22.4359L13.2936 19.5003C13.2325 19.5354 13.1711 19.5684 13.1091 19.5991C11.7801 20.2577 10.2198 20.2577 8.89085 19.5991C8.19073 19.2522 7.56398 18.6252 6.58122 17.6419L6.46952 17.5302L6.35778 17.4185C5.37461 16.4358 4.7476 15.8091 4.40067 15.109C3.74213 13.7801 3.7421 12.2199 4.40059 10.8909C4.43129 10.829 4.46417 10.7676 4.49931 10.7065L1.56455 8.61019C1.38515 8.48205 1.27122 8.28146 1.25304 8.06175C1.23486 7.84204 1.31427 7.62545 1.47017 7.46956L3.15367 5.78611L3.23193 5.70782C3.8202 5.11913 4.22699 4.71206 4.71982 4.44885C5.15467 4.2166 5.63104 4.07237 6.12169 4.02441C6.67775 3.97007 7.24201 4.08314 8.05803 4.24666L8.16657 4.2684L10.253 4.68572L11.5943 3.34438L11.6604 3.27823C12.2888 2.64955 12.6938 2.2444 13.1741 1.95003C13.5991 1.68957 14.0625 1.49763 14.5472 1.38126C15.095 1.24974 15.6678 1.24984 16.5567 1.24999ZM6.46934 8.46969L8.97836 5.96048L7.87238 5.73927C6.90562 5.5459 6.57396 5.48736 6.2676 5.5173C5.97321 5.54607 5.68739 5.63261 5.42648 5.77196C5.15495 5.91698 4.91147 6.14965 4.21432 6.84678L3.15685 7.90422L5.4194 9.52039L5.97759 8.96213C6.09786 8.84104 6.22447 8.71449 6.3576 8.5814L6.46934 8.46969ZM5.74464 11.5569C5.94487 11.1528 6.31124 10.7543 7.20413 9.8569L11.0304 6.03027C11.0361 6.02454 11.0417 6.01874 11.0472 6.01285L12.655 4.405C13.372 3.68789 13.6475 3.41918 13.9579 3.22897C14.2487 3.05076 14.5657 2.91943 14.8974 2.83981C15.2513 2.75482 15.6361 2.75 16.6503 2.75L17.1991 2.75C18.0516 2.75 18.6458 2.75059 19.1085 2.78838C19.5623 2.82547 19.8231 2.8946 20.0206 2.99524C20.444 3.21095 20.7882 3.55516 21.0039 3.97852C21.1046 4.17604 21.1737 4.43681 21.2108 4.89068C21.2486 5.35331 21.2491 5.94755 21.2491 6.8L21.2491 7.34918C21.2491 8.36319 21.2443 8.74796 21.1594 9.1019C21.0798 9.4335 20.9485 9.75051 20.7703 10.0413C20.5801 10.3516 20.3114 10.6271 19.5945 11.3442L14.4696 16.4694C13.3363 17.6028 12.8931 18.032 12.443 18.2551C11.5337 18.7057 10.4662 18.7057 9.55686 18.2551C9.1849 18.0708 8.81765 17.7457 8.06174 16.9988L9.53018 15.5303C9.82307 15.2374 9.82307 14.7626 9.53018 14.4697C9.23729 14.1768 8.76241 14.1768 8.46952 14.4697L7.00108 15.9381C6.25412 15.1822 5.92902 14.8149 5.7447 14.443C5.29412 13.5337 5.29409 12.4662 5.74464 11.5569ZM16.0964 20.8436L14.4803 18.581L18.0395 15.0212L18.261 16.1278C18.4546 17.0947 18.5132 17.4264 18.4833 17.7328C18.4545 18.0272 18.368 18.3131 18.2286 18.5741C18.0836 18.8456 17.8509 19.0892 17.1536 19.7864L16.0964 20.8436ZM13.7524 8.99951C13.7524 8.30916 14.3121 7.74951 15.0024 7.74951C15.6928 7.74951 16.2524 8.30916 16.2524 8.99951C16.2524 9.68987 15.6928 10.2495 15.0024 10.2495C14.3121 10.2495 13.7524 9.68987 13.7524 8.99951ZM15.0024 6.24951C13.4837 6.24951 12.2524 7.48073 12.2524 8.99951C12.2524 10.5183 13.4837 11.7495 15.0024 11.7495C16.5212 11.7495 17.7524 10.5183 17.7524 8.99951C17.7524 7.48073 16.5212 6.24951 15.0024 6.24951Z"
      />
    </svg>
  )
}