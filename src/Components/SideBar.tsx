import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const SideBar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        //console.log(data);

        const UniqueCategorys = Array.from(
          new Set(data.products.map((product) => product.category))
        );

        setCategories(UniqueCategorys);

        //console.log(UniqueCategorys);
      } catch (error: any) {
        console.log("Error occured", error);
      }
    };
    fetchCategories();
  }, []);

  const {
    searchQuery,

    setSearchQuery,

    selectedCategory,

    setSelectedCategory,

    minPrice,

    setMinPrice,

    maxPrice,

    setMaxPrice,

    setKeyword,
  } = useFilter();

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleRadioChangeCategories = (category: string) => {
    setSelectedCategory(category);
  };

  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>
      <section>
        <input
          className="border-2 rounded px-2 py-3 w-full sm:mb-0"
          type="text"
          placeholder="Search product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex justify-center items-center mt-3">
          <input
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            type="text"
            placeholder="min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            type="text"
            placeholder="max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>

        {/**------------ Category Section ------------*/}
        <div className="mb-5">
          <h1 className="text-xl font-semibold">Categories</h1>
        </div>
        <section>
          {categories.map((category, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name="category"
                value={category}
                onChange={() => handleRadioChangeCategories(category)}
                checked={selectedCategory === category}
                className="mr-2 w-[16px] h-[16px]"
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>

        {/*---------- KeyWords Section ----------*/}

        <div className="mb-5 mt-4">
          <h2 className="text-xl font-semibold mb-3">KeyWords</h2>
          <div>
            {keywords.map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200"
              >
                {keyword.toLocaleUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={handleResetFilters}
          className="w-full mb-[4rem] py-2 text-white bg-black rounded mt-5"
        >
          Reset Filter
        </button>
      </section>
    </div>
  );
};

export default SideBar;
