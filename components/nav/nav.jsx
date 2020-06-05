import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  const menuBarTop = useRef(null);
  const menuBarBottom = useRef(null);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <nav className={`nav`}>
      <div className={`menubar`} onClick={handleClick}>
        <div
          ref={menuBarTop}
          className={toggle ? `menubar-top` : `menubar-top toggled `}
        />
        <div
          ref={menuBarBottom}
          className={toggle ? `menubar-bottom` : `menubar-bottom toggled `}
        />
      </div>
      <ul className={`link-container`}>
        <Link href="/">
          <a>One</a>
        </Link>
        <Link href="/">
          <a>One</a>
        </Link>
        <Link href="/">
          <a>One</a>
        </Link>
      </ul>
    </nav>
  );
}
