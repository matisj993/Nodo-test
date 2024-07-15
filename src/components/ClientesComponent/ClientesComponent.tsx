import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./ClientesComponent.module.scss"

const images = [
    { src: '/img/concepto.svg', alt: 'Image 1' },
    { src: '/img/ecomerce.svg', alt: 'Image 2' },
    { src: '/img/golden pack.svg', alt: 'Image 3' },
    { src: '/img/grandiet.svg', alt: 'Image 4' },
    { src: '/img/lomo.svg', alt: 'Image 5' },
    { src: '/img/mb.svg', alt: 'Image 5' },
    { src: '/img/moussa.svg', alt: 'Image 5' },
    { src: '/img/mutual medica.svg', alt: 'Image 5' },
    { src: '/img/nina.svg', alt: 'Image 5' },
    { src: '/img/tarjeta surcredito.svg', alt: 'Image 5' },
  ];

export const ClientesComponent = () => {
    return(
        <div className={styles['container-section']}>
            <h2 className={styles['title']}>Confían en nosotros</h2>
            <SliderComponent images={images}/>
        </div>
    )
}