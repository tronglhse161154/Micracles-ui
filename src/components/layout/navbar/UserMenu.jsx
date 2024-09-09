import { useCallback, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { LoginIcon, SignupIcon, UserIcon } from "../../common/icons";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";



const UserMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const ToggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div
        onClick={ToggleOpen}
        className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition "
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <UserIcon />
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[10vw] md:w-3/1 bg-white overflow-hidden right-0 top-12 text-sm z-10">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                onClick={()=> navigate('/login')}
                label="Login"
                icon={<LoginIcon/>}
              />
              <MenuItem
                onClick={()=> navigate('/register')}
                label="Signup"
                icon={<SignupIcon/>}
              />
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
