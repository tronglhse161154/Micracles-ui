import {
  BellIcon,
  CartIcon,
  SearchIcon,
  UserIcon,
  YughiOhIcon,
  PokemonIcon,
  DigimonIcon,
  ShadowverseIcon,
} from "../../common/icons";
import Container from "../../ui/Container";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import useSearchModal from "../../hooks/useSearchModal";
import { useSelector } from "react-redux";

function Navbar() {
  const searchModal = useSearchModal();
  const currentUser = useSelector((state) => state.users.currentUser);

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.carts.cartItems);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="fixed z-30 left-2 right-2 bottom-2 lg:bottom-auto lg:top-4 lg:left-4 lg:right-4 max-w-[1400px] mx-auto lg:flex lg:gap-4 lg:items-center">
      <div className="bg-yellow-50 backdrop-blur-md lg:grow flex items-center pl-3 pr-1 py-1 lg:pl-4 rounded-3xl gap-2 lg:gap-4 h-[85px] opacity-90 shadow-custom-overflow ">
        <Container>
          <div className="flex flex-row items-center justify-center hover:text-neutral-800 ">
            <div className="relative flex gap-20 items-center mr-[120px]">
              <div className="rounded-full hover:bg-[#FFE8AC] transition cursor-pointer">
                <BellIcon />
              </div>

              <div className="hover:no-underline  px-3 py-2 rounded-full flex flex-col md:flex-row md:gap-2 justify-center items-center relative md:md-bold-caps whitespace-nowrap">
                <Link to="/">
                  <span>Liên hệ</span>
                </Link>
              </div>
            </div>

            <div className="hover:no-underline  px-3 py-2 rounded-full flex flex-col md:flex-row md:gap-2 justify-center items-center relative md:md-bold-caps whitespace-nowrap">
              <Link to="/category/Pokémon%20Card%20Game">
                <PokemonIcon w={130} h={100} />
              </Link>
            </div>

            <div className="hover:no-underline  px-3 py-2 rounded-full flex flex-col md:flex-row md:gap-2 justify-center items-center relative md:md-bold-caps whitespace-nowrap">
              <Link to="/elite-exclusive">
                <YughiOhIcon w={130} h={100} />
              </Link>
            </div>

            <Link to="/">
              <Logo w="100" h="100" />
            </Link>

            <div className="hover:no-underline px-3 py-2 rounded-full flex flex-col md:flex-row md:gap-2 justify-center items-center relative md:md-bold-caps whitespace-nowrap">
              <Link to="/digimon">
                <DigimonIcon w={130} h={100} />
              </Link>
            </div>

            <div className="hover:no-underline px-3 py-2 rounded-full flex flex-col md:flex-row md:gap-2 justify-center items-center relative md:md-bold-caps whitespace-nowrap">
              <Link to="/one-piece">
                <ShadowverseIcon w={130} h={100} />
              </Link>
            </div>

            <div className="relative flex gap-10 ml-[120px] items-center ">
              <div
                className="rounded-full hover:bg-primary transition cursor-pointer"
                onClick={searchModal.onOpen}
              >
                <SearchIcon />
              </div>
              <div className="rounded-full hover:bg-primary transition cursor-pointer">
                <Link to="/viewcart">
                  <CartIcon />
                  {totalQuantity > 0 && (
                    <span className="absolute -top-2 -left-[-80px] bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                      {totalQuantity}
                    </span>
                  )}
                </Link>
              </div>
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
