import PortaModel from "../model/porta"
import styles from "../styles/Porta.module.css"

interface PortaProps {
    value: PortaModel
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada ? styles.selecionada : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}