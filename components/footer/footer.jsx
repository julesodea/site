import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/page'>
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className='end'>Contact</a>
            </Link>
          </li>
        </ul>
        <a className='title'>O'DEA.</a>
      </div>
    </footer>
  );
}
