import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import icon from "../assets/icons.png";

const NavBar = () => {
    return (
        <nav className="w-full flex justify-between items-center border-b shadow-sm bg-white sm:px-8 px-2 py-2">
            <div>
                <Link to="/">
                    <div className="flex">
                        <img className="w-15 h-15 object-contain " src={icon} />
                        <span className="m-auto pl-2">Image Generator</span>
                    </div>
                </Link>
            </div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav >
    )
}

export default NavBar;
