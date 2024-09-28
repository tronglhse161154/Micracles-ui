
import { useCallback, useEffect, useState, useRef } from "react";

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const modalRef = useRef(null);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose(); // Close the modal if clicked outside
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside); // Attach event listener
    } else {
      document.removeEventListener("mousedown", handleClickOutside); // Remove event listener when modal is closed
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on unmount
    };
  }, [isOpen, handleClickOutside]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 ">
        <div className="relative w-full md:w-4/5 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto" ref={modalRef}>    
          {/*----------------------MODAL CONTENT HERE-------------------*/}
          <div
            className={`translate duration-300 h-full 
             ${showModal ? "translate-y-0" : "translate-y-full"}
             ${showModal ? "opacity-100" : "opacity-0"}
             `}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-h-max">
              {/*----------MODAL HEADER HERE----------------------*/}
              <div className="flex items-center p-6 rounded-t justify-center relative">
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*----------------MODAL BODY HERE----------------*/}
              <div className="relative p-6 flex-auto h-[700px]">{body}</div>
              {/*----------------MODAL FOOTER HERE----------------*/}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
