import { BellIcon, CartIcon, SearchIcon, UserIcon } from "../../common/icons";
import Container from "../../ui/Container";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <div className="sticky top-0 w-full bg-white z-20 shadow-sm">
      <div className="pt-4 border-none">
        <Container>
          <div className="flex flex-row items-center justify-center gap-3 md:gap-0 font-semibold">
            <div className="relative flex gap-10 items-center">
              <div className="rounded-full hover:bg-neutral-100 transition cursor-pointer">
                <BellIcon />
              </div>

              <div className="hidden md:block font-semibold py-3 px-4 mr-[120px] rounded-full hover:bg-neutral-100 transition cursor-pointer">
                <Link to="/pokemon">
                  <span>Contact us</span>
                </Link>
              </div>
            </div>

            <div className="hidden md:block font-semibold py-3 px-4 mx-7 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              <Link to="/pokemon">
                <span>Pokemon Card Game</span>
              </Link>
            </div>

            <div className="hidden md:block font-semibold py-3 px-4 mx-7 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              <Link to="/elite-exclusive">
                <span>The Elite Exclusive</span>
              </Link>
            </div>

            <Link to="/">
              <Logo />
            </Link>

            <div className="hidden md:block font-semibold py-3 px-4 mx-7 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              <Link to="/digimon">
                <span>Digimon Card Game</span>
              </Link>
            </div>

            <div className="hidden md:block font-semibold py-3 px-4 mx-7 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              <Link to="/one-piece">
                <span>One Piece Card Game</span>
              </Link>
            </div>

            <div className="relative flex gap-10 ml-[120px] items-center ">
              <div className="rounded-full hover:bg-neutral-100 transition cursor-pointer">
                <SearchIcon />
              </div>
              <div className="rounded-full hover:bg-neutral-100 transition cursor-pointer">
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
