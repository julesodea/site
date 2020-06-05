import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [toggled, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggled);
    !toggled
      ? document.body.classList.add('overflow')
      : document.body.classList.remove('overflow');
  }

  function removeToggle() {
    setToggle(false);
    document.body.classList = '';
  }

  return (
    <nav className={`nav`}>
      <div className={`menubar`} onClick={handleClick}>
        <div className={toggled ? `menubar-top toggled` : `menubar-top`} />
        <div
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
            <a onClick={removeToggle}>ANOTHER PAGES</a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
