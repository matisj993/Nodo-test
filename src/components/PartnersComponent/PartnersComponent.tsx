import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./PartnersComponent.module.scss"
const images = [
    { src: '/img/av.svg', alt: 'Image 1' },
    { src: '/img/BLOP.svg', alt: 'Image 2' },
    { src: '/img/DM.svg', alt: 'Image 3' },
    { src: '/img/hesta.svg', alt: 'Image 4' },
    { src: '/img/MADI.png', alt: 'Image 5' },
    { src: '/img/PML.svg', alt: 'Image 5' },
    { src: '/img/SUPER.svg', alt: 'Image 5' },
    { src: '/img/VIB.png', alt: 'Image 5' },

  ];


export const PartnersComponent = () => {
    return(
        <div className={styles['container-section']}>
            <h2 className={styles['title']}>Formamos equipo</h2>
            <SliderComponent images={images}/>
        </div>
    )
}