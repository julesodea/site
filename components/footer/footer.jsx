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
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <span>logo</span>
      </div>
    </footer>
  );
}
