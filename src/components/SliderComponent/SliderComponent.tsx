'use client'

import React, { useEffect, useRef } from 'react';
import styles from './SliderComponent.module.scss';

interface SliderComponentProps {
  images: { src: string; alt: string }[];
}

const SliderComponent: React.FC<SliderComponentProps> = ({ images }) => {


  return (
    <div className={styles['slider']}>
      <div className={styles['slide-track']} >
        {images.map((image, index) => (
          <div key={index} className={styles['slide']}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
