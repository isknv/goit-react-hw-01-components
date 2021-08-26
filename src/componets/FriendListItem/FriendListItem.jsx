import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ friend }) => {
  return (
    <>
      <li className={styles.item}>
        <div className={styles.container}>
          <span
            className={friend.isOnline ? styles.online : styles.ofline}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="80"
          />
          <p className={styles.name}>{friend.name}</p>
        </div>
      </li>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};

export default FriendListItem;
