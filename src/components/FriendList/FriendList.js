import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <li key={id} className={style.item}>
          <span className={isOnline ? style.online : style.offline}></span>
          <div className={style.imgWrapper}>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
          </div>
          <p className={style.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
