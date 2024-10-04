import Image from 'next/image';
import React from 'react';
import { styles } from './logo.css';

export default function Logo() {
  return (
    <div>
      <div className={styles.logoWrapper}>
        <Image
          src={'/images/logo.svg'}
          alt="logo"
          fill
          priority={true}
          className={styles.logo}
        />
      </div>
      <div>
        <h1 className={styles.logoText}>Q-Maker</h1>
      </div>
    </div>
  );
}
