import React from "react";

const FilterSection = () => {
  const handleFilter = () => {};

  return (
    <div class="m-10 max-w-64 w-screen overflow-hidden rounded-lg border border-gray-200 shadow-sm text-gray-700 h-[230px] min-w-[220px]">
      {/* <summary class="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
        <span class="text-sm font-medium"> Toggle Filters </span>

        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary> */}

      <form action="" class="flex border-t border-gray-200 lg:border-t-0">
        <fieldset class="w-full">
          <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
            Filters
          </legend>

          <div class="space-y-2 px-5 py-6">
            <div class="flex items-center">
              <input
                id="New"
                type="checkbox"
                name="type[New]"
                class="h-5 w-5 rounded border-gray-300"
              />

              <label for="New" class="ml-3 text-sm font-medium">
                {" "}
                All{" "}
              </label>
            </div>

            <div class="flex items-center">
              <input
                id="Used"
                type="checkbox"
                name="type[Used]"
                class="h-5 w-5 rounded border-gray-300"
              />

              <label for="Used" class="ml-3 text-sm font-medium">
                {" "}
                Men{" "}
              </label>
            </div>

            <div class="flex items-center">
              <input
                id="Branded"
                type="checkbox"
                name="type[Branded]"
                class="h-5 w-5 rounded border-gray-300"
              />

              <label for="Branded" class="ml-3 text-sm font-medium">
                {" "}
                Women{" "}
              </label>
            </div>
          </div>
        </fieldset>
      </form>

      <div class="">
        <div class="flex justify-between border-t border-gray-200 px-5 py-3">
          <button
            name="reset"
            type="button"
            class="rounded text-xs font-medium text-gray-600 underline"
          >
            Reset All
          </button>

          <button
            name="commit"
            class="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95"
            onClick={handleFilter}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
