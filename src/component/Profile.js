import React from "react";

function Profile({ name, age }) {
  return (
    <div className="style">
      <div className="BIO">
        <h2>{name}</h2>
        <h3>{age}</h3>
      </div>
    </div>
  );
}

export default Profile;
