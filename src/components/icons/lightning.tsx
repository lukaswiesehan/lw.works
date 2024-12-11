import {FC} from 'react'

export const LightningIcon: FC<{className: string}> = ({className}) => {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.25"
        d="M5.11929 10.1007L9.72579 4.34261C11.0366 2.70406 11.692 1.88479 12.2668 1.79439C12.7643 1.71614 13.2679 1.89278 13.6075 2.26468C13.9999 2.69433 13.9999 3.74351 13.9999 5.84187V7.6C13.9999 8.44008 13.9999 8.86012 14.1634 9.18099C14.3072 9.46323 14.5366 9.6927 14.8189 9.83651C15.1398 10 15.5598 10 16.3999 10H17.0064C18.6049 10 19.4042 10 19.8147 10.3277C20.1717 10.6127 20.3794 11.0448 20.3789 11.5016C20.3784 12.0269 19.8791 12.651 18.8805 13.8993L14.274 19.6574C12.9631 21.2959 12.3077 22.1152 11.7329 22.2056C11.2354 22.2839 10.7318 22.1072 10.3922 21.7353C9.99988 21.3057 9.99988 20.2565 9.99988 18.1581V16.4C9.99988 15.5599 9.99988 15.1399 9.83639 14.819C9.69258 14.5368 9.46311 14.3073 9.18086 14.1635C8.86 14 8.43996 14 7.59988 14H6.99338C5.39483 14 4.59555 14 4.18504 13.6723C3.82802 13.3873 3.62032 12.9552 3.62082 12.4984C3.62138 11.9731 4.12069 11.349 5.11929 10.1007Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0534 2.76989C12.8836 2.5843 12.632 2.49618 12.3835 2.53526C12.3841 2.53517 12.3843 2.53511 12.3843 2.53511C12.3844 2.53513 12.3419 2.54393 12.2449 2.61256C12.139 2.68745 12.0005 2.8103 11.8164 3.00426C11.4441 3.39651 10.976 3.98055 10.3116 4.81111L5.70507 10.5692C5.19642 11.205 4.84798 11.6418 4.62155 11.9843C4.38746 12.3384 4.37097 12.4686 4.37094 12.4992C4.37069 12.7276 4.47454 12.9437 4.65305 13.0861C4.67693 13.1052 4.78894 13.1737 5.21167 13.2121C5.62056 13.2492 6.17927 13.25 6.9935 13.25H7.6H7.62893C8.02428 13.25 8.36535 13.25 8.64627 13.2729C8.94278 13.2971 9.2377 13.3506 9.52148 13.4952C9.94485 13.7109 10.2891 14.0551 10.5048 14.4785C10.6494 14.7623 10.7029 15.0572 10.7271 15.3537C10.75 15.6346 10.75 15.9757 10.75 16.3711V16.4V18.1581C10.75 19.2218 10.7507 19.9702 10.7964 20.5091C10.819 20.7756 10.8503 20.958 10.8862 21.0826C10.9179 21.1924 10.9446 21.2275 10.9466 21.2301C11.1164 21.4157 11.368 21.5038 11.6165 21.4647C11.609 21.4659 11.6501 21.4617 11.7551 21.3874C11.861 21.3125 11.9995 21.1897 12.1836 20.9957C12.5559 20.6035 13.024 20.0194 13.6884 19.1889L18.2949 13.4307C18.8036 12.7949 19.152 12.3582 19.3785 12.0157C19.6126 11.6616 19.629 11.5313 19.6291 11.5008C19.6293 11.2724 19.5255 11.0563 19.347 10.9138C19.3231 10.8948 19.2111 10.8263 18.7883 10.7879C18.3794 10.7507 17.8207 10.75 17.0065 10.75H16.4H16.3711C15.9757 10.75 15.6347 10.75 15.3537 10.7271C15.0572 10.7028 14.7623 10.6493 14.4785 10.5047C14.0552 10.289 13.711 9.94483 13.4952 9.52146C13.3506 9.23768 13.2972 8.94276 13.2729 8.64626C13.25 8.36533 13.25 8.02426 13.25 7.62891V7.59999V5.84186C13.25 4.77822 13.2493 4.02976 13.2036 3.49087C13.181 3.2244 13.1497 3.04198 13.1138 2.91735C13.0821 2.80739 13.0553 2.77234 13.0534 2.76989ZM12.1504 1.05348C12.8967 0.936108 13.6521 1.20107 14.1615 1.75892C14.5446 2.17849 14.6493 2.78637 14.6983 3.36412C14.75 3.97421 14.75 4.78683 14.75 5.80372V5.84186V7.59999C14.75 8.0324 14.7506 8.3116 14.7679 8.52411C14.7846 8.72786 14.8129 8.80339 14.8317 8.84048C14.9037 8.9816 15.0184 9.09633 15.1595 9.16824C15.1966 9.18713 15.2721 9.21539 15.4759 9.23204C15.6884 9.2494 15.9676 9.24998 16.4 9.24998H17.0065H17.0444C17.8115 9.24997 18.439 9.24996 18.924 9.29402C19.4032 9.33754 19.8961 9.43289 20.2827 9.74151C20.8183 10.169 21.1298 10.8172 21.1291 11.5024C21.1285 11.9971 20.8951 12.4416 20.6297 12.8429C20.3611 13.2492 19.9691 13.7392 19.4899 14.3382L19.4662 14.3678L14.8597 20.1259L14.8359 20.1557C14.2007 20.9497 13.693 21.5843 13.2715 22.0284C12.8723 22.4489 12.4109 22.8582 11.8496 22.9465C11.1033 23.0639 10.3479 22.7989 9.83853 22.2411C9.45538 21.8215 9.35073 21.2136 9.30173 20.6359C9.24999 20.0258 9.25 19.2131 9.25 18.1962V18.1581V16.4C9.25 15.9676 9.24942 15.6884 9.23206 15.4759C9.21541 15.2721 9.18715 15.1966 9.16826 15.1595C9.09635 15.0184 8.98162 14.9036 8.8405 14.8317C8.80341 14.8128 8.72787 14.7846 8.52413 14.7679C8.31162 14.7506 8.03242 14.75 7.6 14.75H6.9935H6.95558C6.18853 14.75 5.56102 14.75 5.07598 14.7059C4.5968 14.6624 4.10391 14.5671 3.71728 14.2585C3.18175 13.831 2.8702 13.1828 2.87094 12.4976C2.87148 12.0028 3.10493 11.5584 3.37028 11.157C3.63889 10.7508 4.03091 10.2607 4.5101 9.66177L4.53377 9.63219L9.14027 3.87407L9.16407 3.84432C9.79932 3.05025 10.307 2.41568 10.7285 1.97159C11.1277 1.55106 11.5891 1.14176 12.1504 1.05348Z"
      />
    </svg>
  )
}
