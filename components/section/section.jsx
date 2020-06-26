import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Section() {
  const [yScroll, setYScroll] = useState();

  useEffect(() => {
    function handleScroll() {
      const offsetY = window.pageYOffset;
      setYScroll(offsetY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className='section-container'>
        <div className='section'>
          <div
            className={
              yScroll > 400 ? 'toggled section-content' : 'section-content'
            }
          >
            <div className='section-content-text'>
              <h1>Work Title</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                harum explicabo beatae consectetur atque nulla cupiditate
                tenetur neque ducimus eum.
              </p>
              <div>
                <Link href='/page'>
                  <a>See case study</a>
                </Link>
              </div>
            </div>
            <img src='/images/img.jpg' alt='img' />
          </div>
        </div>
      </div>
      <div className='section-container bg-black'>
        <div className='section'>
          <div
            className={
              yScroll > 1000
                ? 'toggled section-content'
                : 'section-content flex'
            }
          >
            <img src='/images/img2.png' alt='img' />
            <div className='section-content-text padding-left align-center'>
              <h1 className='light-text'>Work Title</h1>
              <p className='light-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                harum explicabo beatae consectetur atque nulla cupiditate
                tenetur neque ducimus eum.
              </p>
              <div>
                <Link href='/page'>
                  <a>See case study</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-container'>
        <div className='section'>
          <div
            className={
              yScroll > 1800 ? 'toggled section-content' : 'section-content'
            }
          >
            <div className='section-content-text '>
              <h1>Work Title</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                harum explicabo beatae consectetur atque nulla cupiditate
                tenetur neque ducimus eum.
              </p>
              <div>
                <Link href='/page'>
                  <a>See case study</a>
                </Link>
              </div>
            </div>
            <img src='/images/img.jpg' alt='img' />
          </div>
        </div>
      </div>
    </>
  );
}
