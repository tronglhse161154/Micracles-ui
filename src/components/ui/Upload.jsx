
import { useState } from "react";
import { UploadIcon } from "../common/icons";

const Upload = ({ onImageChange, resetImage, required }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

    if (file && allowedTypes.includes(file.type)) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
        onImageChange(file);
        setErrorMessage(""); // Clear any previous error messages
      };
      reader.readAsDataURL(file);
    } else {
      setErrorMessage("Please select a valid image file (png, jpg, jpeg)");
    }
  };
  

  return (
    <div className="z-9 top-0 h-full flex">
      <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
        <div
          className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
          style={{ width: "450px" }}
        >
          {selectedImage ? (
            <div className="">
              <img
                src={selectedImage}
                alt="Selected Image"
                style={{ maxWidth: "100%" }}
              />
            </div>
          ) : (
            <div className="input_field flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  onChange={handleImageChange}
                  multiple
                />
                <UploadIcon />
                <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                  Select
                </div>
              </label>

              <div className="title text-indigo-500 uppercase">
                or drop files here
              </div>
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 mt-2">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
