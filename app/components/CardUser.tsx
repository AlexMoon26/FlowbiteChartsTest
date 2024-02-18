import React from "react";

export const CardUser = ({ first_name, last_name, avatar }) => {
  return (
    <div className="flex items-center gap-5 hover:shadow-sm cursor-pointer">
      <img className="w-10 h-10 rounded" src={avatar} alt="Avatar" />
      {first_name} {last_name}
    </div>
  );
};
