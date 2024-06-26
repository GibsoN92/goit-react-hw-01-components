import React from "react";
import css from "./FriendList.module.scss";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css["friends-list"]}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
