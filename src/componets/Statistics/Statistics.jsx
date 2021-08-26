import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: generateColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function generateColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

Statistics.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statistics;
