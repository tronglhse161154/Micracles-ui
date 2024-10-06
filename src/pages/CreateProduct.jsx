import { useState } from "react";
import Container from "../components/ui/Container";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { LeftArrowIcon } from "../components/common/icons";
import { Link, useNavigate } from "react-router-dom";
import Upload from "../components/ui/Upload";
import CustomInput from "../components/ui/CustomInput";
import Button from "../components/ui/Button";
import ProtectedRoute from "../components/ProtectedRoute";
import { GetAllCategory } from "../lib/api/Category";
import BrandSelect from "../components/ui/CategorySelect";
import useCreateProduct from "../lib/api/Product";
import { useSelector } from "react-redux";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import toast from "react-hot-toast";

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
      quantity: "",
      description: "",
      price: "",
      subCategoryId: "",
    },
  });

  const { createProduct, uploadImage, associateProductWithImage } = useCreateProduct();
  const [imageFile, setImageFile] = useState(null);
  const userId = useSelector(selectUserId);
  const updatedBy = useSelector(selectUserEmail);
  const [isLoading, setIsLoading] = useState(false);
  const [brand, setBrand] = useState("");
  const navigate = useNavigate()

  const validatePrice = (value) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    if (!value) return "Price is required";
    if (!regex.test(value)) return "Enter a valid price (e.g., 12.34)";
    return true;
  };

  GetAllCategory();

  const onSubmit = async (data) => {
    if (!imageFile) {
      toast.error("Please upload an image.");
      return;
    }
    nProgress.start();

    try {
      setIsLoading(true);
      const subCategoryId = brand;
      const pricess = data.price;
      const nameee = data.productname;
      const dess = data.description;
      const quantity =data.quantity;
      console.log("userId:" , userId)
      console.log("categoryTypeIds:", subCategoryId); // Debugging log
      console.log("price:", pricess); // Debugging log
      console.log("name:", nameee); // Debugging log
      console.log("des:", dess); // Debugging log
      console.log("quan:", quantity); // Debugging log


      const productID = await createProduct({
        productName: data.productname,
        userId: userId,   
        quantity: data.quantity,
        price: data.price.toString(),
        description: data.description,
        subCategoryId: brand.toString(),
      });
      console.log("Product created with ID:", productID);
      if (imageFile) {
        console.log("Uploading image file:", imageFile);
        const imageID = await uploadImage(productID, imageFile);
        console.log("Image uploaded with ID:", imageID);

        // Associate Product with Image
        await associateProductWithImage(productID, imageID);
        console.log("Product associated with image successfully.");
      }
      toast.success("Created product successfully!");
      
      setImageFile(null);
      setIsLoading(false);
      navigate("/");
      // Return userId and parameters after success
    return {
      userId,
      productID,
      productName: data.productname,
      price: data.price,
      description: data.description,
      subCategoryId,
    };
    } catch (error) {
      setIsLoading(false);
      console.error("Error creating product or uploading image:", error);
      if (error.response.status === 400) {
        toast.error("Please enter product detail !");
      } else if (error.response.status === 500) {
        toast.error("Server error: Please try again later.");
      } else {
        toast.error("Unexpected error: " + error.response.status);
      }
    } finally {
      nProgress.done();
    }
  };

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
              Trở về
            </button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-20 ">
          <Upload onImageChange={setImageFile} required />
          <div className="flex-flex-col border-[1px] border-t-4 border-primary w-full p-10 ">
            <span className="font-semibold text-2xl mb-40">
              Thông tin sản phẩm
            </span>
            <div className="max-w-[500px] ">
              <CustomInput
                id="productname"
                label="Tên sản phẩm"
                type="string"
                register={register}
                errors={errors}
                required="Product name is required"
              />

              <CustomInput
                id="quantity"
                label="Số lượng"
                type="number"
                register={register}
                errors={errors}
                required="Quantity is required"
              />

              <CustomInput
                id="price"
                label="Giá tiền"
                type="number"
                register={register}
                errors={errors}
                formatPrice
                validate
                control={control}
                required="Price is required"
              />
              <form className="mb-6 max-w-3xl">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                  <label htmlFor="description" className="sr-only">
                    Miêu tả sản phẩm
                  </label>
                  <textarea
                    id="description"
                    rows="6"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                    placeholder="Miêu tả..."
                    required
                    {...register("description", { required: true })}
                  ></textarea>
                  {errors.comment && (
                    <span className="text-red-500">Nhập miêu tả thẻ bài</span>
                  )}
                </div>
              </form>
              <BrandSelect onBrandChange={setBrand} />
            </div>
            <span className="font-mono text-sm my-10">
              Hãy kiểm tra lại thông tin trước khi tạo sản phẩm
            </span>
            <div className="flex flex-row gap-5 mt-5">
              <Button
                label="Tạo"
                onClick={handleSubmit(onSubmit)}
                containerStyles="hover:no-underline hover:rounded-tl-2xl hover:rounded-br-2xl hover:bg-primary transition-all duration-100 ease-out clickable flex items-center whitespace-nowrap justify-center font-semibold p-2 sm-bold-caps gap-x-2 border border-primary
    hover:text-black hover:border-primary
    active:border-primary active:text-black
    w-full text-black cursor-pointer"
              />
              <Button
                label="Làm mới"
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

export default ProtectedRoute(CreatePage, ["Member"]);
