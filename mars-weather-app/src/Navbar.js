function Navbar() {
  return ( 
  <nav className="Nav">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
      <a href="/weather">Weather</a>
      </li>
      <li>
      <a href="/photos">Photos</a>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;