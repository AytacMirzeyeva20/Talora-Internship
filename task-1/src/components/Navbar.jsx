function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="logo">
            <span className="border"> T </span>
            <a href="#" className="navbar-brand">Talora</a>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Ana səhifə</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Proqram</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Əlaqə</a>
            </li>
</ul>
    </nav>
    </>
        )
}
export default Navbar;