import img from '../../assets/Error404.jpeg'
import styles from './Error.module.css';

export default function Error() {
    return(
        <div className={styles.containerError}>
            <img src={img} alt="Error404" />
        </div>
    )
}