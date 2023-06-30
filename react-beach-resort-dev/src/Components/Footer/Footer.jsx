import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Mountgo | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span> Mountgo.com - All Rights Copyright
        Reserved 
      </p>
    </footer>
  );
}
