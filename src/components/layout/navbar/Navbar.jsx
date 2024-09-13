import { BellIcon, CartIcon, SearchIcon, UserIcon } from "../../common/icons";
import Container from "../../ui/Container";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <div className="fixed z-30 left-2 right-2 bottom-2 lg:bottom-auto lg:top-4 lg:left-4 lg:right-4 max-w-[1400px] mx-auto lg:flex lg:gap-4 lg:items-center mb-[200px]">
      <div className="bg-yellow-50 backdrop-blur-md lg:grow flex items-center pl-3 pr-1 py-1 lg:pl-4 rounded-3xl gap-2 lg:gap-4 h-[85px] opacity-75 shadow-custom-overflow ">
        <Container>
          <div className="flex flex-row items-center justify-center hover:text-neutral-800 ">
            <div className="relative flex gap-5 items-center mr-[120px]">
              <div className="rounded-full hover:bg-[#FFE8AC] transition cursor-pointer">
                <BellIcon />
              </div>

              <div className="hover:no-underline hover:bg-primary px-3 py-2 rounded-full flex flex-col md:flex-row md:gap-2 justify-center items-center relative md:md-bold-caps whitespace-nowrap">
                <Link to="/">
                  <span>Contact us</span>
                </Link>
              </div>
            </div>

            <div className="hover:no-underline hover:bg-primary px-3 py-2 rounded-full flex flex-col md:flex-row md:gap-2 justify-center items-center relative md:md-bold-caps whitespace-nowrap">
              <Link to="/pokemon">
                <span>Pokemon Card Game</span>
              </Link>
            </div>

            <div className="hover:no-underline hover:bg-primary px-3 py-2 rounded-full flex flex-col md:flex-row md:gap-2 justify-center items-center relative md:md-bold-caps whitespace-nowrap">
              <Link to="/elite-exclusive">
                <span>The Elite Exclusive</span>
              </Link>
            </div>

            <Link to="/">
              <Logo w="100" h="100"/>
            </Link>

            <div className="hover:no-underline hover:bg-primary px-3 py-2 rounded-full flex flex-col md:flex-row md:gap-2 justify-center items-center relative md:md-bold-caps whitespace-nowrap">
              <Link to="/digimon">
                <span>Digimon Card Game</span>
              </Link>
            </div>

            <div className="hover:no-underline hover:bg-primary px-3 py-2 rounded-full flex flex-col md:flex-row md:gap-2 justify-center items-center relative md:md-bold-caps whitespace-nowrap">
              <Link to="/one-piece">
                <span>One Piece Card Game</span>
              </Link>
            </div>

            <div className="relative flex gap-10 ml-[120px] items-center ">
              <div className="rounded-full hover:bg-primary transition cursor-pointer">
                <SearchIcon />
              </div>
              <div className="rounded-full hover:bg-primary transition cursor-pointer">
                <Link to="/viewcard">
                <CartIcon />
                </Link>
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
