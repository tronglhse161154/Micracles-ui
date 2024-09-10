import { BellIcon, CartIcon, SearchIcon, UserIcon } from "../../common/icons";
import Container from "../../ui/Container";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <div className="fixed z-30 left-2 right-2 bottom-2 lg:bottom-auto lg:top-4 lg:left-4 lg:right-4 max-w-[1600px] mx-auto lg:flex lg:gap-4 lg:items-center">
      <div className="bg-yellow-50 backdrop-blur-md lg:grow flex items-center pl-3 pr-1 py-1 lg:pl-4 rounded-3xl gap-2 lg:gap-4 h-[85px] opacity-75  ">
        <Container>
          <div className="flex flex-row items-center justify-center gap-3 md:gap-0 font-semibold">
            <div className="relative flex gap-10 items-center">
              <div className="rounded-full hover:bg-[#FFE8AC] transition cursor-pointer">
                <BellIcon />
              </div>

              <div className="hidden md:block font-semibold py-3 px-4 mr-[120px] rounded-full hover:bg-primary transition cursor-pointer">
                <Link to="/pokemon">
                  <span>Contact us</span>
                </Link>
              </div>
            </div>

            <div className="hidden md:block font-semibold py-3 px-4  rounded-full hover:bg-primary transition cursor-pointer">
              <Link to="/pokemon">
                <span>Pokemon Card Game</span>
              </Link>
            </div>

            <div className="hidden md:block font-semibold py-3 px-4 rounded-full hover:bg-primary transition cursor-pointer">
              <Link to="/elite-exclusive">
                <span>The Elite Exclusive</span>
              </Link>
            </div>

            <Link to="/">
              <Logo />
            </Link>

            <div className="hidden md:block font-semibold py-3 px-4  rounded-full hover:bg-primary transition cursor-pointer">
              <Link to="/digimon">
                <span>Digimon Card Game</span>
              </Link>
            </div>

            <div className="hidden md:block font-semibold py-3 px-4  rounded-full hover:bg-primary transition cursor-pointer">
              <Link to="/one-piece">
                <span>One Piece Card Game</span>
              </Link>
            </div>

            <div className="relative flex gap-10 ml-[120px] items-center ">
              <div className="rounded-full hover:bg-primary transition cursor-pointer">
                <SearchIcon />
              </div>
              <div className="rounded-full hover:bg-primary transition cursor-pointer">
                <CartIcon />
              </div>
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
