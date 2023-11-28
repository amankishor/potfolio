import "./me.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contatct</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonial">Testimonial</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#work">Work</a>
            </li>
        </ul>
      
    </div>
  )
}
