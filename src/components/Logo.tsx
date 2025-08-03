import { useId } from 'react'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <svg
      width="450"
      height="90"
      viewBox="0 0 450 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <text
        x="0"
        y="60"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="48"
        fontWeight="bold"
        fill="currentColor"
      >
        MERCURY
      </text>
      <circle cx="270" cy="45" r="8" fill="#45bff7" />
      <circle cx="300" cy="45" r="12" fill="#d1d5dc" />
      <circle cx="330" cy="45" r="6" fill="#d1d5dc" />
    </svg>
  )
}
