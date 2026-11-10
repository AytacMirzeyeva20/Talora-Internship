function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="logo">
            <span className="border"> T </span>
            <a href="#home" className="navbar-brand">Talora</a>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#home">Ana səhifə</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#about">Haqqimizda</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#programs">Proqram</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Əlaqə</a>
            </li>
</ul>
    </nav>
    </>
        )
}
export default Navbar;