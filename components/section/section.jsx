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
              yScroll > 600 ? 'toggled section-content' : 'section-content'
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
      <div className='section-container'>
        <div className='section'>
          <div
            className={
              yScroll > 1200 ? 'toggled section-content' : 'section-content'
            }
          >
            <img src='/images/img2.png' alt='img' />
            <div className='section-content-text padding-left'>
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
          </div>
        </div>
      </div>
      <div className='section-container'>
        <div className='section'>
          <div
            className={
              yScroll > 2000 ? 'toggled section-content' : 'section-content'
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
    </>
  );
}
