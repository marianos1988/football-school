import "@/styles/Spinner.css"

type Props = {
  active: boolean,
  section: string,
}

export const Spinner = ({ active, section }: Props) => {
  return (
    <div className={(active) ? (`sp-${section} sp-active`) : (`sp-${section}`)}>
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" />
          </filter>
        </defs>
        <circle className='circle-spinner' cx="50" cy="50" r="45"/>
      </svg>
    </div>
  ) 
}