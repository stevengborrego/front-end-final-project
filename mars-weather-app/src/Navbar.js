function Navbar() {
  return ( 
  <nav className="navbar Nav">
    <ul>
      <li>
        <a className="navbar-brand" href="/">Home</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/dashboard">Dashboard</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/photos">Photos</a>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;