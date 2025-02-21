import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import useAuth from "../hooks/useAuth";

export const SignIn = () => {
  const { isSignedIn, signInWithGoogle, logOut } = useAuth();
  const isSmallScreen = useMediaQuery({ maxWidth: 425 });

  const buttonProps = {
    variant: "secondary",
    className: `btn ${isSmallScreen ? "btn-sm" : ""}`,
    onClick: isSignedIn ? logOut : signInWithGoogle,
    style: isSmallScreen ? { maxWidth: "75px" } : {},
  };

  return <Button {...buttonProps}>{isSignedIn ? "Log Out" : "Sign In"}</Button>;
};
