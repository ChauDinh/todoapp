import React from "react";

function Header() {
 return (
  <header style={headerStyle}>
   <h1>NoteVine</h1>
  </header>
 )
}

const headerStyle = {
 background: "#333",
 color: "#f2f2f2",
 padding: "10px",
 textAlign: "center",
}

export default Header;