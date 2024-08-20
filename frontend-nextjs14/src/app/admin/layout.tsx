export default function LayoutAdmin({ children }:{children:React.ReactNode}) {
    return(
      <>
        <div className="container-all">
          { children }
        </div>
      </>
    )
}