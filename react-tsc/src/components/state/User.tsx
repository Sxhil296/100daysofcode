import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

function User() {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogIn = () => {
    setUser({
        name: "Patrick",
        email: "tapes@gmail.com"
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}

export default User;
