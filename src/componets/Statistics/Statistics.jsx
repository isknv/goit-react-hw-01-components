import styles from './Statistics.module.css';

const Statistics = ({title, stats}) => { 
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}
      <ul className={styles.statList}>
        {stats.map(stat =>
          <li 
            key={stat.id}
            className={styles.item}
            style={{backgroundColor: generateColor()}} 
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        )}
      </ul>
    </section>
  )
}

export default Statistics

function generateColor() {
  return "#" + ((1<<24)*Math.random() | 0).toString(16)
}
