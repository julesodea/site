import Link from 'next/link';

export default function Landing() {
  return (
    <section
      className='container flex height landing'
      style={{ transform: `translateY(-10vh)` }}
    >
      <h1 className='title'>Welcome.</h1>
      <p className='subtitle'>I am creating a new website.</p>
      <Link href='/page'>
        <a className='landing-button'>See More</a>
      </Link>
    </section>
  );
}
