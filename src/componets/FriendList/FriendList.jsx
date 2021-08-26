import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({friends}) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => 
        <FriendListItem key={friend.id} friend={friend}/>
      )}
    </ul>
  )
}

export default FriendList
