import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
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
