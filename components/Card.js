import styles from '../styles/Card.module.css'

const Card = ({title, body}) => {
    return (  
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{body}</p>

        </div>
    );
}
 
export default Card;