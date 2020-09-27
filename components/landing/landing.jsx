import Link from 'next/link';

export default function Landing() {
  return (
    <section
      className='container flex height landing'
      style={{ transform: `translateY(-10vh)` }}
    >
      <h1 className='title'>Hello!</h1>
      <p className='subtitle'>
        I am creating a new website. This is a small blurb I haven't come up
        with yet.
      </p>
      <Link href='/projects'>
        <a className='landing-button'>See More</a>
      </Link>
    </section>
  );
}
