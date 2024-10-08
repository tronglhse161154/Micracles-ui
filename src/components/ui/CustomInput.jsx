"use client";
import { FaDongSign } from "react-icons/fa6";
import { NumericFormat } from "react-number-format";
import { Controller } from "react-hook-form";

const CustomInput = ({
  id,
  label,
  disabled,
  formatPrice,
  control,
  register,
  required,
  errors,
  placeholder,
  validate,
  type
}) => {
  return (
    <div className="my-4">
      <div className="relative">
        {formatPrice && (
          <FaDongSign
            size={24}
            className="text-neutral-700 absolute bottom-[0.5px] left-3 transform -translate-y-1/2"
          />
        )}
        <label className="block text-gray-700 font-bold mb-1">{label}</label>
        {formatPrice ? (
          <Controller
            control={control}
            name={id}
            rules={{ required, validate }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <NumericFormat
                id={id}
                disabled={disabled}
                value={value}
                onValueChange={(values) => {
                  onChange(values.floatValue);
                }}
                placeholder={placeholder}
                thousandSeparator=","
                decimalScale={0}
                prefix=""
                className={`w-full p-2 border border-gray-300 rounded 
                  ${formatPrice ? "pl-10" : "pl-4"}
                  ${errors[id] ? "border-rose-500" : "border-neutral-300"}
                  ${
                    errors[id]
                      ? "focus:border-rose-500"
                      : "focus:border-neutral-black"
                  }
                `}
              />
            )}
          />
        ) : (
          <input
            id={id}
            disabled={disabled}
            type={type}
            {...register(id, { required, validate })}
            placeholder={placeholder}
            className={`w-full p-2 border border-gray-300 rounded 
              ${formatPrice ? "pl-10" : "pl-4"}
              ${errors[id] ? "border-rose-500" : "border-neutral-300"}
              ${
                errors[id]
                  ? "focus:border-rose-500"
                  : "focus:border-neutral-black"
              }
            `}
          />
        )}
      </div>
      {errors[id] && (
          <p className="text-red-500 text-xs mt-1">{errors[id].message}</p>
        )}
    </div>
  );
};

export default CustomInput;
