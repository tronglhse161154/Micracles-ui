
import { useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useOTPconfirmModal from "../../hooks/useOTPconfirmModal";
import { confirmUser } from "../../../lib/api/Authen";

const OTPConfirmModal = () => {
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  });
  const OTPconfirmModal = useOTPconfirmModal();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first: "",
      second: "",
      third: "",
      fourth: "",
      fitht: "",
      sixth: "",
    },
    //resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const code = `${otp.first}${otp.second}${otp.third}${otp.fourth}${otp.fifth}${otp.sixth}`;
      const email = OTPconfirmModal.email;
      console.log(email)
      await confirmUser(email, code);
      toast.success("User verified successfully");
      OTPconfirmModal.onClose();
      navigate("/");
      
      setOtp({
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: '',
        sixth: ''
      });
  
    } catch (error) {
      console.error("Error verify user:", error);
      toast.error("Error verify user. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (value.length <= 1) {
      setOtp({ ...otp, [id]: value });

      // Move focus to the next input field if current field is filled
      if (value.length === 1) {
        const nextInput = document.getElementById(getNextInputId(id));
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const getNextInputId = (currentId) => {
    const ids = ["first", "second", "third", "fourth", "fifth", "sixth"];
    const currentIndex = ids.indexOf(currentId);
    return ids[currentIndex + 1];
  };
  const getPrevInputId = (currentId) => {
    const ids = ["first", "second", "third", "fourth", "fifth", "sixth"];
    const currentIndex = ids.indexOf(currentId);
    return ids[currentIndex - 1];
  };
  const handleKeyDown = (e) => {
    const { id, value } = e.target;
    if (e.key === "Backspace" && value === "") {
      const prevInput = document.getElementById(getPrevInputId(id));
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Please confirm code has been sent to your email" />
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white h-64 py-3 rounded text-center">
              <h1 className="text-2xl font-bold">OTP Verification</h1>
              <div className="flex flex-col mt-4">
                <span>Enter the OTP you received at</span>
                <span className="font-bold">{OTPconfirmModal.email}</span>
              </div>
              <div
                id="otp"
                className="flex flex-row justify-center text-center px-2 mt-5"
              >
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  type="text"
                  id="first"
                  maxLength="1"
                  value={otp.first}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  type="text"
                  id="second"
                  maxLength="1"
                  value={otp.second}
                  onChange={handleChange}
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  type="text"
                  id="third"
                  maxLength="1"
                  value={otp.third}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  type="text"
                  id="fourth"
                  maxLength="1"
                  value={otp.fourth}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  type="text"
                  id="fifth"
                  maxLength="1"
                  value={otp.fifth}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  type="text"
                  id="sixth"
                  maxLength="1"
                  value={otp.sixth}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className="flex justify-center text-center mt-5">
                <a
                  className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"
                  //onClick={""}
                >
                  <span className="font-bold">Resend OTP</span>
                  <i className="bx bx-caret-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={OTPconfirmModal.isOpen}
      title="Verify"
      actionLabel={
        isLoading ? <ClipLoader size={20} color={"#fff"} /> : "Continue"
      }
      onClose={OTPconfirmModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default OTPConfirmModal;
