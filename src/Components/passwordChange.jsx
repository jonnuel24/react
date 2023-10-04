import React from "react";

function PasswordChange() {
  return (
    <div>
      <div>
        <h2>Password Settings </h2>
      </div>
      <form action="submit">
        <div>
          <label htmlFor="currentPassword">Current Password</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" />
        </div>
        <button type="submit">Save Password</button>
      </form>
    </div>
  );
}

export default PasswordChange;
