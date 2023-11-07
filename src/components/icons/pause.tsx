import {FC} from 'react'

export const PauseIcon: FC<{className: string}> = ({className}) => {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.25"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.7157 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21H6.8C7.92011 21 8.48016 21 8.90798 20.782C9.28431 20.5903 9.59027 20.2843 9.78201 19.908C10 19.4802 10 18.9201 10 17.8V6.2C10 5.0799 10 4.51984 9.78201 4.09202C9.59027 3.7157 9.28431 3.40973 8.90798 3.21799C8.48016 3 7.92011 3 6.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.7157 3.40973 3.40973 3.7157 3.21799 4.09202ZM14.218 4.09202C14 4.51984 14 5.0799 14 6.2V17.8C14 18.9201 14 19.4802 14.218 19.908C14.4097 20.2843 14.7157 20.5903 15.092 20.782C15.5198 21 16.0799 21 17.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.7157 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H17.2C16.0799 3 15.5198 3 15.092 3.21799C14.7157 3.40973 14.4097 3.7157 14.218 4.09202Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.2 2.25H6.16957H6.16954C5.6354 2.24999 5.18956 2.24998 4.82533 2.27974C4.44545 2.31078 4.08879 2.37789 3.75153 2.54973C3.23408 2.81339 2.81339 3.23408 2.54973 3.75153C2.37789 4.08879 2.31078 4.44545 2.27974 4.82533C2.24998 5.18956 2.24999 5.6354 2.25 6.16954V6.16957V6.2V17.8V17.8304V17.8305C2.24999 18.3646 2.24998 18.8104 2.27974 19.1747C2.31078 19.5546 2.37789 19.9112 2.54973 20.2485C2.81339 20.7659 3.23408 21.1866 3.75153 21.4503C4.08879 21.6221 4.44545 21.6892 4.82533 21.7203C5.18956 21.75 5.6354 21.75 6.16955 21.75H6.2H6.8H6.83045C7.3646 21.75 7.81044 21.75 8.17467 21.7203C8.55456 21.6892 8.91121 21.6221 9.24848 21.4503C9.76592 21.1866 10.1866 20.7659 10.4503 20.2485C10.6221 19.9112 10.6892 19.5546 10.7203 19.1747C10.75 18.8104 10.75 18.3646 10.75 17.8304V17.8V6.2V6.16957C10.75 5.63542 10.75 5.18957 10.7203 4.82533C10.6892 4.44545 10.6221 4.08879 10.4503 3.75153C10.1866 3.23408 9.76592 2.81339 9.24848 2.54973C8.91121 2.37789 8.55456 2.31078 8.17467 2.27974C7.81044 2.24998 7.36461 2.24999 6.83047 2.25H6.83044H6.8H6.2ZM4.43251 3.88624C4.52307 3.8401 4.66036 3.79822 4.94748 3.77476C5.24336 3.75058 5.62757 3.75 6.2 3.75H6.8C7.37243 3.75 7.75664 3.75058 8.05252 3.77476C8.33965 3.79822 8.47693 3.8401 8.56749 3.88624C8.80269 4.00609 8.99392 4.19731 9.11376 4.43251C9.1599 4.52307 9.20179 4.66036 9.22524 4.94748C9.24942 5.24336 9.25 5.62757 9.25 6.2V17.8C9.25 18.3724 9.24942 18.7566 9.22524 19.0525C9.20179 19.3396 9.1599 19.4769 9.11376 19.5675C8.99392 19.8027 8.80269 19.9939 8.56749 20.1138C8.47693 20.1599 8.33965 20.2018 8.05252 20.2252C7.75664 20.2494 7.37243 20.25 6.8 20.25H6.2C5.62757 20.25 5.24336 20.2494 4.94748 20.2252C4.66036 20.2018 4.52307 20.1599 4.43251 20.1138C4.19731 19.9939 4.00609 19.8027 3.88624 19.5675C3.8401 19.4769 3.79822 19.3396 3.77476 19.0525C3.75058 18.7566 3.75 18.3724 3.75 17.8V6.2C3.75 5.62757 3.75058 5.24336 3.77476 4.94748C3.79822 4.66036 3.8401 4.52307 3.88624 4.43251C4.00609 4.19731 4.19731 4.00609 4.43251 3.88624ZM17.2 2.25H17.1696H17.1695C16.6354 2.24999 16.1896 2.24998 15.8253 2.27974C15.4454 2.31078 15.0888 2.37789 14.7515 2.54973C14.2341 2.81339 13.8134 3.23408 13.5497 3.75153C13.3779 4.08879 13.3108 4.44545 13.2797 4.82533C13.25 5.18956 13.25 5.63541 13.25 6.16957V6.2V17.8V17.8304C13.25 18.3646 13.25 18.8104 13.2797 19.1747C13.3108 19.5546 13.3779 19.9112 13.5497 20.2485C13.8134 20.7659 14.2341 21.1866 14.7515 21.4503C15.0888 21.6221 15.4454 21.6892 15.8253 21.7203C16.1896 21.75 16.6354 21.75 17.1695 21.75H17.2H17.8H17.8305C18.3646 21.75 18.8104 21.75 19.1747 21.7203C19.5546 21.6892 19.9112 21.6221 20.2485 21.4503C20.7659 21.1866 21.1866 20.7659 21.4503 20.2485C21.6221 19.9112 21.6892 19.5546 21.7203 19.1747C21.75 18.8104 21.75 18.3646 21.75 17.8304V17.8V6.2V6.16957C21.75 5.63542 21.75 5.18957 21.7203 4.82533C21.6892 4.44545 21.6221 4.08879 21.4503 3.75153C21.1866 3.23408 20.7659 2.81339 20.2485 2.54973C19.9112 2.37789 19.5546 2.31078 19.1747 2.27974C18.8104 2.24998 18.3646 2.24999 17.8305 2.25H17.8304H17.8H17.2ZM15.4325 3.88624C15.5231 3.8401 15.6604 3.79822 15.9475 3.77476C16.2434 3.75058 16.6276 3.75 17.2 3.75H17.8C18.3724 3.75 18.7566 3.75058 19.0525 3.77476C19.3396 3.79822 19.4769 3.8401 19.5675 3.88624C19.8027 4.00609 19.9939 4.19731 20.1138 4.43251C20.1599 4.52307 20.2018 4.66036 20.2252 4.94748C20.2494 5.24336 20.25 5.62757 20.25 6.2V17.8C20.25 18.3724 20.2494 18.7566 20.2252 19.0525C20.2018 19.3396 20.1599 19.4769 20.1138 19.5675C19.9939 19.8027 19.8027 19.9939 19.5675 20.1138C19.4769 20.1599 19.3396 20.2018 19.0525 20.2252C18.7566 20.2494 18.3724 20.25 17.8 20.25H17.2C16.6276 20.25 16.2434 20.2494 15.9475 20.2252C15.6604 20.2018 15.5231 20.1599 15.4325 20.1138C15.1973 19.9939 15.0061 19.8027 14.8862 19.5675C14.8401 19.4769 14.7982 19.3396 14.7748 19.0525C14.7506 18.7566 14.75 18.3724 14.75 17.8V6.2C14.75 5.62757 14.7506 5.24336 14.7748 4.94748C14.7982 4.66036 14.8401 4.52307 14.8862 4.43251C15.0061 4.19731 15.1973 4.00609 15.4325 3.88624Z"
      />
    </svg>
  )
}