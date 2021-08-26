import styles from './FriendListItem.module.css'

const FriendListItem = ({friend}) => {
  return (
    <>
      <li className={styles.item}>
        <div className={styles.container}>
          <span className={ friend.isOnline ? styles.online : styles.ofline }></span>
          <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="80" />
          <p className={styles.name}>{friend.name}</p>
        </div>
      </li>
    </>
  )
}

export default FriendListItem
