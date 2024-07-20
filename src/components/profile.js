import React from "react";
import Data from "../assets/data.json";
import "./profile.css";

function Profile({ onSelectCharacter }) {
  return (
    <div className="profile">
      <div className="profile-container">
        {Data.map((Character, index) => (
          <img
            key={index}
            alt={Character.Name}
            src={require(`../assets/${Character.Border}`)}
            onClick={() => onSelectCharacter(Character)}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;