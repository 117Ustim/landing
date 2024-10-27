import styles from './header.module.scss';
import logo from '../../img/logo.svg';
import airpodsRed from '../../img/phone/airpods-red.png';
import airpodsBlack from '../../img/phone/airpods-black.png';
import airpodsGreen from '../../img/phone/airpods-green.png';
import airpodsBlue from '../../img/phone/airpods-blue.png';
import airpodsWhite from '../../img/phone/airpods-white.png';

export default function Header({ selectedColor, setSelectedColor }) {
console.log(selectedColor)


  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header__top}>
          <div className={styles.logo}>
            <img src={logo} alt='' />
          </div>
          <nav className={styles.menu}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <a href='#/' className={styles.menu__link}>
                  Info
                </a>
                <a href='#/' className={styles.menu__link}>
                  Product
                </a>
                <a href='#/' className={styles.menu__link}>
                  Contacts
                </a>
                <button className={styles.menu__btn}>BUY</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header__content}>
          <h1 className={styles.title}>
            <span className={styles.title__air}>Air</span>
            <span className={styles.title__pod}>Pod</span>
            <span className={styles.title__s}>S</span>
            <span className={styles.title__m}>M</span>
            <span className={styles.title__ax}>AX</span>
          </h1>
          <div className={styles.header__content_images}>
            <img
              className={`${styles.content_item }${
                selectedColor === 'color__blue' 
                  ? styles.content_item__active
                  : '' 
              }` }
              src={airpodsBlue}
              alt=''
              
            />
            <img
              className={`${styles.content_item} ${
                selectedColor === 'color__red'
                  ? styles.content_item__active 
                  : ''
              }`}
              src={airpodsRed}
              alt=''
            />

            <img
              className={`${styles.content_item} ${
                selectedColor === 'color__black'
                  ? styles.content_item__active
                  : ''
              }`}
              src={airpodsBlack}
              alt=''
            />

            <img
              className={`${styles.content_item} ${
                selectedColor === 'color__green'
                  ? styles.content_item__active
                  : ''
              }`}
              src={airpodsGreen}
              alt=''
            />

            <img
              className={`${styles.content_item} ${
                selectedColor === 'color__white'
                  ? styles.content_item__active
                  : ''
              }`}
              src={airpodsWhite}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}
