import Link from 'next/link';

export default function Landing() {
  return (
    <section className='container flex height landing' style={{}}>
      <h1 className='title'>Hello! I'm Jules.</h1>
      <p className='subtitle'>
        Welcome.
      </p>
      <Link href='/projects'>
        <a className='landing-button'>Recent Work</a>
      </Link>
    </section>
  );
}
