import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

const useAuthUser = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  return userEmail;
};

export default useAuthUser;
