import { set } from 'date-fns';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [toggle, setToggled] = useState(false);

  function handleToggle() {
    setToggled(!toggle);
  }

  return (
    <div class={toggle ? 'floating-menu toggled' : 'floating-menu'}>
      <div className='menu-title' onClick={handleToggle}>
        Menu
      </div>
      {toggle ? (
        <div class='floating-menu-options'>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
