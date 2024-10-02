import { useState } from "react";
import Container from "../components/ui/Container";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { LeftArrowIcon } from "../components/common/icons";
import { Link } from "react-router-dom";
import Upload from "../components/ui/Upload";
import CustomInput from "../components/ui/CustomInput";
import Button from "../components/ui/Button";

const currentUser = (state) => state.users.currentUser;
const selectUserId = (state) => state.users.currentUser?.ID;
const selectUserEmail = (state) => state.users.currentUser?.Email;

const CreatePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      productname: "",
      description: "",
      price: "",
      categoryTypeIds: [],
    },
  });

  const [imageFile, setImageFile] = useState(null);

  //const validatePrice = (value) => {
  //const regex = /^\d+(\.\d{1,2})?$/;
  //if (!value) return "Price is required";
  //if (!regex.test(value)) return "Enter a valid price (e.g., 12.34)";
  //return true;
  //};

  //   GetAllCategory();

  //   const onSubmit = async (data) => {
  //     if (!color || !type) {
  //       toast.error("Please select both color and type.");
  //       return;
  //     }
  //     if (!imageFile) {
  //       toast.error("Please upload an image.");
  //       return;
  //     }
  //     nProgress.start();

  //     try {
  //       setIsLoading(true);

  //       console.log("Product created with ID:", productID);
  //       if (imageFile) {
  //         console.log("Uploading image file:", imageFile);
  //         await uploadImage(productID, imageFile);
  //       }
  //       toast.success("Created product successfully!");
  //       router.push("/");
  //       setImageFile(null);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       console.error("Error creating product or uploading image:", error);
  //       if (error.response.status === 400) {
  //         toast.error("Please enter product detail !");
  //       } else if (error.response.status === 500) {
  //         toast.error("Server error: Please try again later.");
  //       } else {
  //         toast.error("Unexpected error: " + error.response.status);
  //       }
  //     } finally {
  //       nProgress.done();
  //     }
  //   };

  //   const handleCancel = () => {
  //     router.push("/");
  //   };

  return (
    <div className="my-28 ">
      <Container>
        <div className="my-7">
          <Link to="/">
            <button className="font-semibold text-white bg-gray-500 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg py-2 px-4 rounded-full inline-flex items-center ml-5">
              <LeftArrowIcon />
              Back
            </button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-40 ">
          <Upload onImageChange={setImageFile} required />
          <div className="flex-flex-col border-[1px] border-t-4 border-primary w-full p-10 ">
            <span className="font-semibold text-2xl mb-40">
              Card information
            </span>
            <div className="max-w-[500px] ">
              <CustomInput
                id="productname"
                label="Product name"
                type="string"
                register={register}
                errors={errors}
                required="Product name is required"
              />

              <CustomInput
                id="quantity"
                label="Quantity"
                type="number"
                register={register}
                errors={errors}
                required="Quantity is required"
              />

              <CustomInput
                id="price"
                label="Price"
                type="number"
                register={register}
                errors={errors}
                formatPrice
                validate
                control={control}
                required="Price is required"
              />
            </div>
            <span className="font-mono text-sm">
              Note that if you create means you accepted with our policy
            </span>
            <div className="flex flex-row gap-5 mt-5">
              <Button
                label="Create"
                containerStyles="hover:no-underline hover:rounded-tl-2xl hover:rounded-br-2xl hover:bg-primary transition-all duration-100 ease-out clickable flex items-center whitespace-nowrap justify-center font-semibold p-2 sm-bold-caps gap-x-2 border border-primary
    hover:text-black hover:border-primary
    active:border-primary active:text-black
    w-full text-black cursor-pointer"
              />
              <Button
                label="Cancel"
                containerStyles="hover:no-underline hover:rounded-tl-2xl hover:rounded-br-2xl hover:bg-secondary transition-all duration-100 ease-out clickable flex items-center whitespace-nowrap justify-center font-semibold p-2 sm-bold-caps gap-x-2 border border-secondary
    hover:text-black hover:border-secondary
    active:border-primary active:text-black
    w-full text-black cursor-pointer"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreatePage;
