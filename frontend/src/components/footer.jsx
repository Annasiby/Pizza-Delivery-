import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Pizza App. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
