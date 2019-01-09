import React from "react";
import { Link } from "react-router-dom";

function Header() {
 return (
  <header style={headerStyle}>
   <h1>NoteVine</h1>
   <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
  </header>
 )
}

const headerStyle = {
 background: "#333",
 color: "#f2f2f2",
 padding: "10px",
 textAlign: "center",
}

const linkStyle = {
 color: "#f2f2f2",
 textAlign: "center"
}

export default Header;