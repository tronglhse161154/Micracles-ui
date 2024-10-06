import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const selectCategories = (state) => state.categories.categoriesList;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const BrandSelect = ({ onBrandChange }) => {
  const brands = useSelector(selectCategories);
  
  const [selected, setSelected] = useState(brands[0] || null);

  useEffect(() => {
    if (brands.length > 0 && !selected) {
      setSelected(brands[0]);
    }
  }, [brands, selected]);

  useEffect(() => {
    if (selected) {
      console.log("Selected Brand ID:", selected.id); // Debugging log
      onBrandChange(selected.id);
    }
  }, [selected, onBrandChange]);

  if (!selected) {
    return null; // or you can return some loading state or message
  }
  return (
    <Listbox
      value={selected}
      onChange={setSelected}
      as="div"
      className="relative my-10"
    >
      {({ open }) => (
        <>
          <Label className="block text-gray-700 font-bold my-4">Thương hiệu</Label>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="block truncate">{selected.type}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {brands.map((brand) => (
                <ListboxOption
                  key={brand.id}
                  className={({ focus }) =>
                    classNames(
                      focus ? "bg-indigo-600 text-white" : "text-gray-900",
                      "relative cursor-default select-none py-2 pl-3 pr-9"
                    )
                  }
                  value={brand}
                >
                  {({ selected, focus }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "ml-3 block truncate"
                          )}
                        >
                          {brand.type}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={classNames(
                            focus ? "text-white" : "text-indigo-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default BrandSelect;
