import styles from './main.module.scss';
import React, { useState } from 'react';
import greenM from '../../img/main/green_m.png';
import redM from '../../img/main/red_m.png';
import whiteM from '../../img/main/white_m.png';
import blackM from '../../img/main/black_m.png';
import blueM from '../../img/main/blue_m.png';
import innerBlue from '../../img/main/design_colors_inner_blue.jpg';
import innerBlack from '../../img/main/design_colors_inner_black.jpg';
import innerGreen from '../../img/main/design_colors_inner_green.jpg';
import innerRed from '../../img/main/design_colors_inner_red.jpg';
import innerWhite from '../../img/main/design_colors_inner_white.jpg';
import caseBlue from '../../img/main/case_blue.jpg';
import caseBlack from '../../img/main/case_black.jpg';
import caseGreen from '../../img/main/case_green.jpg';
import caseRed from '../../img/main/case_red.jpg';
import caseWhite from '../../img/main/case_white.jpg';

export default function Main({ selectedColor, setSelectedColor }) {
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <main className={styles.main}>
      <section className={styles.choose_color}>
        <div className='container'>
          <h3 className={styles.choose_color__title}>Choose your color</h3>
          <p className={styles.choose_color__text}>
            The perfect balance between the purity of hi‑fi and the magic of
            AirPods. The ultimate personal audio experience.
          </p>

          <div className={styles.choose_color__list}>
            <button
              className={`${styles.choose_color__btn} ${
                selectedColor === 'color__blue'
                  ? styles.choose_color__btn_active
                  : ''
              }`}
              data-button='color__blue'
              onClick={() => handleColorClick('color__blue')}>
              <img src={blueM} alt='blue_m' />
            </button>

            <button
              className={`${styles.choose_color__btn} ${
                selectedColor === 'color__green'
                  ? styles.choose_color__btn_active
                  : ''
              }`}
              data-button='color__green'
              onClick={() => handleColorClick('color__green')}>
              <img src={greenM} alt='green_m' />
            </button>

            <button
              className={`${styles.choose_color__btn} ${
                selectedColor === 'color__white'
                  ? styles.choose_color__btn_active
                  : ''
              }`}
              data-button='color__white'
              onClick={() => handleColorClick('color__white')}>
              <img src={whiteM} alt='white_m' />
            </button>

            <button
              className={`${styles.choose_color__btn} ${
                selectedColor === 'color__red'
                  ? styles.choose_color__btn_active
                  : ''
              }`}
              data-button='color__red'
              onClick={() => handleColorClick('color__red')}>
              <img src={redM} alt='red_m' />
            </button>

            <button
              className={`${styles.choose_color__btn} ${
                selectedColor === 'color__black'
                  ? styles.choose_color__btn_active
                  : ''
              }`}
              data-button='color__black'
              onClick={() => handleColorClick('color__black')}>
              <img src={blackM} alt='black_m' />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.composition}>
        <div className='container'>
          <h2 className={`${styles.composition__title} ${styles.main__title} `}>
            An extremely original composition.
          </h2>
          <p className={styles.composition__text}>
            Introducing the reinvention of over-the-ear headphones. From the
            cushion to the headband, the AirPods Max are designed with acoustic
            insulation in mind, adapted to many head shapes, so you can immerse
            yourself in the purity of sound.
          </p>

          <div className={styles.composition__inner}>
            <div className={styles.composition_inner_text}>
              <p>
                The headband is made of breathable mesh, distributing the weight
                to reduce pressure on the head.
              </p>
              <p>
                The stainless steel structure is wrapped in a soft-touch
                material to provide a remarkable harmony between resistance,
                flexibility and comfort.
              </p>
              <p>
                The telescoping arms expand and stay in any position you want,
                allowing you to maintain fit and isolation.
              </p>
            </div>

            <img
              className={`${styles.content_item} ${
                selectedColor === 'color__blue'
                  ? styles.content_item__active
                  : ''
              }`}
              src={innerBlue}
              alt=''
            />

            <img
              className={`${styles.content_item} ${
                selectedColor === 'color__red'
                  ? styles.content_item__active
                  : ''
              }`}
              src={innerRed}
              alt=''
            />
            <img
              className={`${styles.content_item} ${
                selectedColor === 'color__green'
                  ? styles.content_item__active
                  : ''
              }`}
              src={innerGreen}
              alt=''
            />
            <img
              className={`${styles.content_item} ${
                selectedColor === 'color__black'
                  ? styles.content_item__active
                  : ''
              }`}
              src={innerBlack}
              alt=''
            />
            <img
              className={`${styles.content_item} ${
                selectedColor === 'color__white'
                  ? styles.content_item__active
                  : ''
              }`}
              src={innerWhite}
              alt=''
            />
          </div>
        </div>
      </section>

      <section className={styles.case}>
        <div className='container'>
          <h2 className={`${styles.case__title} ${styles.main__title} `}>
            It even preserves the battery.
          </h2>
          <p className={styles.case__text}>
            When stored in the sleek and lightweight <span>Smart Case</span> ,
            AirPods Max enter a low-power state to save energy.
          </p>
          <img
            className={`${styles.content_item} ${
              selectedColor === 'color__blue' ? styles.content_item__active : ''
            }`}
            src={caseBlue}
            alt=''
          />
          <img
            className={`${styles.content_item} ${
              selectedColor === 'color__green'
                ? styles.content_item__active
                : ''
            }`}
            src={caseGreen}
            alt=''
          />
          <img
            className={`${styles.content_item} ${
              selectedColor === 'color__red' ? styles.content_item__active : ''
            }`}
            src={caseRed}
            alt=''
          />
          <img
            className={`${styles.content_item} ${
              selectedColor === 'color__black'
                ? styles.content_item__active
                : ''
            }`}
            src={caseBlack}
            alt=''
          />
          <img
            className={`${styles.content_item} ${
              selectedColor === 'color__white'
                ? styles.content_item__active
                : ''
            }`}
            src={caseWhite}
            alt=''
          />

          <h2 className={`${styles.energy__title} ${styles.main__title} `}>
            Stayin' alive, stayin' alive.
          </h2>
          <p className={styles.energy__nam}>20</p>
          <p className={styles.energy__text}>
            hours of music, movies and calls with Active Noise Cancellation and
            Custom Spatial Audio turned on.<span>5</span> And just 5 minutes of
            charging via the Lightning connector gives you an hour and a half of
            sound. <span>6</span>
          </p>
        </div>
      </section>

      <section className={styles.audio}>
        <div className='container'>
          <div className={styles.audio__inner}>
            <div className={styles.audio__box}>
              <p className={styles.audio__text}>
                Custom Spatial Audio with dynamic head tracking provides a
                surround sound experience worthy of a movie theater.
              </p>

              <p className={styles.audio__text}>
                Through built-in gyroscopes and accelerometers, AirPods Max and
                your iPhone, iPad, Mac or Apple TV detect the slightest head
                movements and keep the sound steady on your device.
              </p>
              <p className={styles.audio__text}>
                And with Apple Music, custom Spatial Audio with dynamic head
                tracking creates a unique three-dimensional listening
                experience.
              </p>
              <button className={styles.audio__btn}>buy</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* export default function Main() {


 


  return (
    <main className={styles.main}>
      <section className={styles.choose_color}>
        <div className='container'>
          <h3 className={styles.choose_color__title}>Choose your colour</h3>
          <p className={styles.choose_color__text}>
            The perfect balance between the purityof hi‑fi and the magic of
            AirPods. The ultimate personal audio experience.
          </p>
          <div className={styles.choose_color__list}>


  



            <button className={`${styles.choose_color__btn} ${styles.choose_color__btn_active} `}data-button="color__blue">
              <img src={blueM} alt='green_m' />
            </button>

            <button className={styles.choose_color__btn}data-button="color__green">
              <img src={greenM} alt='green_m' />
            </button>

            <button className={styles.choose_color__btn}data-button="color__white">
              <img src={whiteM} alt='white_m' />
            </button>

            <button className={styles.choose_color__btn}data-button="color__red">
              <img src={redM} alt='red_m' />
            </button>

            <button className={styles.choose_color__btn}data-button="color__black">
              <img src={blackM} alt='black_m' />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.composition}>
        <div className='container'>
          <h2 className={`${styles.composition__title} ${styles.main__title} `}>
            An extremely original composition.
          </h2>
          <p className={styles.composition__text}>
            Introducing the reinvention of over-the-ear headphones. From the
            cushion to the headband, the AirPods Max are designed with acoustic
            insulation in mind, adapted to many head shapes, so you can immerse
            yourself in the purity of sound.
          </p>

          <div className={styles.composition__inner}>
            <div className={styles.composition_inner_text}>
              <p>
                The headband is made of breathable mesh, distributing the weight
                to reduce pressure on the head.
              </p>
              <p>
                The stainless steel structure is wrapped in a soft-touch
                material to provide a remarkable harmony between resistance,
                flexibility and comfort.
              </p>
              <p>
                The telescoping arms expand and stay in any position you want,
                allowing you to maintain fit and isolation.
              </p>
            </div>
            <img className='content_item  color__blue  content_item__active' src={innerBlue} alt='' />
            <img className='content_item  color__red' src={innerRed} alt='' />
            <img className='content_item  color__green' src={innerGreen} alt='' />
            <img className='content_item  color__black' src={innerBlack} alt='' />
            <img className='content_item  color__white' src={innerWhite} alt='' />
          </div>
        </div>
      </section>


      <section className={styles.case}>
        <div className='container'>
          <h2 className={`${styles.case__title} ${styles.main__title} `}>
            It even preserves the battery.
          </h2>
          <p className={styles.case__text}>
            When stored in the sleek and lightweight <span>Smart Case</span> ,
            AirPods Max enter a low-power state to save energy.
          </p>

          <img className='content_item  color__blue content_item__active' src={caseBlue} alt='case_blue' />
          <img className='content_item  color__green' src={caseGreen} alt='case_green' />
          <img className='content_item  color__red' src={caseRed} alt='case_red' />
          <img className='content_item  color__black' src={caseBlack} alt='case_black' />
          <img className='content_item  color__white' src={caseWhite} alt='case_white' />

          <h2 className={`${styles.energy__title} ${styles.main__title} `}>
            Stayin' alive, stayin' alive.
          </h2>
          <p className={styles.energy__nam}>20</p>
          <p className={styles.energy__text}>
            hours of music, movies and calls with Active Noise Cancellation and
            Custom Spatial Audio turned on.<span>5</span> And just 5 minutes of
            charging via the Lightning connector gives you an hour and a half of
            sound. <span>6</span>
          </p>
        </div>
      </section>


      <section className={styles.audio}>
        <div className='container'>
          <div className={styles.audio__inner}>
            <div className={styles.audio__box}>
              <p className={styles.audio__text}>
                Custom Spatial Audio with dynamic head tracking provides a
                surround sound experience worthy of a movie theater.
              </p>

              <p className={styles.audio__text}>
                Through built-in gyroscopes and accelerometers, AirPods Max and
                your iPhone, iPad, Mac or Apple TV detect the slightest head
                movements and keep the sound steady on your device.
              </p>
              <p className={styles.audio__text}>
                And with Apple Music, custom Spatial Audio with dynamic head
                tracking creates a unique three-dimensional listening
                experience.
              </p>
              <button className={styles.audio__btn}>buy</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
 */
