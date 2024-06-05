import styles from "./styles.module.css"

export default function FeautureContent(props){
    return(
        <div className={styles.featureSubContainer}>            
        <div className={styles.featureBox}>
            <h4>{props.tagline}</h4>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div>
                <button className={styles.featureButtonBorder}>button</button>
                <button className={styles.featureButton}>button</button>
            </div>
        </div>
        </div>
    )
}