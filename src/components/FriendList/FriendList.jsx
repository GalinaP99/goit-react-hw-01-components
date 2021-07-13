import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
