import React from "react";
import { CardUser } from "./CardUser";

const CardUserItem = ({ topUsers }) => {
  return (
    <ul className="flex flex-col gap-5">
      {topUsers.map((user, i) => (
        <CardUser
          key={i}
          last_name={user.last_name}
          first_name={user.first_name}
          avatar={user.avatar}
        />
      ))}
    </ul>
  );
};

export default CardUserItem;
