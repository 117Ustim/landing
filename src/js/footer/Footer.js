import styles from './footer.module.scss';
import logo_white from '../../img/logo_white.svg';
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <a className={styles.footer__link} href='#/'>
          Find a retailer near you
        </a>
        <p className={styles.footer__text}>
          Or call <a href='tel:800 207 758'>800 207 758</a>
        </p>
        <a className={styles.logo} href='#/'>
          <img src={logo_white} alt='' />
        </a>
        <ul className={styles.footer__list}>
          <li className={styles.footer__item}>Copyright © 2023 Apple Inc. </li>
          <li className={styles.footer__item}>All rights reserved.</li>
          <li className={styles.footer__item}>
            <a href='#/'>Legal Notices</a>
          </li>
          <li className={styles.footer__item}>
            <a href='#/'>Site Map</a>
          </li>
          <li className={styles.footer__item}>
            <a href='#/'>Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
