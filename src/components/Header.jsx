import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="flex px-4 py-2 justify-between shadow-md">
      <img src="/logo.svg" alt="Logo" />
      {isSignedIn ? (
        <span className="flex gap-4 items-center justify-center">
          <Link to={"/dashboard"}>
            <Button variant="outline" size="sm">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </span>
      ) : (
        <Link to={"/auth/signin"}>
          <Button>Get started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
