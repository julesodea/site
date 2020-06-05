import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [toggled, setToggle] = useState(false);

  const menuBarTop = useRef(null);
  const menuBarBottom = useRef(null);

  function handleClick() {
    setToggle(!toggled);
    if (!toggled) {
      document.body.classList.add('overflow');
    } else {
      document.body.classList.remove('overflow');
    }
  }
  function removeToggle() {
    setToggle(false);
  }

  return (
    <nav className={`nav`}>
      <div className={`menubar`} onClick={handleClick}>
        <div
          ref={menuBarTop}
          className={toggled ? `menubar-top toggled` : `menubar-top`}
        />
        <div
          ref={menuBarBottom}
          className={toggled ? `menubar-bottom toggled` : `menubar-bottom`}
        />
      </div>
      <ul className={`link-container`}>
        <Link href='/'>
          <a>One</a>
        </Link>
        <Link href='/page'>
          <a>One</a>
        </Link>
        <Link href='/'>
          <a>One</a>
        </Link>
      </ul>

      <div className={toggled ? 'menu toggled' : 'menu'}>
        <ul className={toggled ? 'menu-links toggled' : 'menu-links'}>
          <Link href='/'>
            <a onClick={removeToggle}>HOME</a>
          </Link>
          <Link href='/page'>
            <a onClick={removeToggle}>PAGE ONE</a>
          </Link>
          <Link href='/'>
            <a onClick={removeToggle}>ANOTHER PAGE</a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
