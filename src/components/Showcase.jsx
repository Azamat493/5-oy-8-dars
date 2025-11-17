import React, { useState, useEffect } from "react";
import axios from "axios";
import SVG1 from "../assets/images/SVG1.png";

const Showcase = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 56000000 });
  const [selectedColors, setSelectedColors] = useState(new Set());
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [likedProducts, setLikedProducts] = useState(new Set());

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://691aa27e2d8d7855756f8c58.mockapi.io/products"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке товаров:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter((product) => {
      const priceInRange =
        product.price >= priceRange.min && product.price <= priceRange.max;

      const colorMatch =
        selectedColors.size === 0 || selectedColors.has(product.color);

      const brandMatch =
        selectedBrands.size === 0 || selectedBrands.has(product.brand);

      return priceInRange && colorMatch && brandMatch;
    });

    setFilteredProducts(filtered);
  }, [products, priceRange, selectedColors, selectedBrands]);

  const handlePriceChange = (type, value) => {
    if (type === "min") {
      setPriceRange((prev) => ({ ...prev, min: parseInt(value) || 0 }));
    } else {
      setPriceRange((prev) => ({ ...prev, max: parseInt(value) || 56000000 }));
    }
  };

  const toggleColor = (color) => {
    const newColors = new Set(selectedColors);
    if (newColors.has(color)) {
      newColors.delete(color);
    } else {
      newColors.add(color);
    }
    setSelectedColors(newColors);
  };

  const toggleBrand = (brand) => {
    const newBrands = new Set(selectedBrands);
    if (newBrands.has(brand)) {
      newBrands.delete(brand);
    } else {
      newBrands.add(brand);
    }
    setSelectedBrands(newBrands);
  };

  const toggleLike = (productId) => {
    const newLiked = new Set(likedProducts);
    if (newLiked.has(productId)) {
      newLiked.delete(productId);
    } else {
      newLiked.add(productId);
    }
    setLikedProducts(newLiked);
  };

  const uniqueColors = [...new Set(products.map((p) => p.color))];
  const uniqueBrands = [...new Set(products.map((p) => p.brand))];

  const colorMap = {
    Черный: "#000000",
    Белый: "#FFFFFF",
    Красный: "#FF0000",
    Синий: "#0000FF",
    Зеленый: "#00FF00",
    Желтый: "#FFFF00",
    Розовый: "#FFC0CB",
    Фиолетовый: "#800080",
    Серый: "#808080",
    Бежевый: "#F5F5DC",
    Голубой: "#ADD8E6",
    Оранжевый: "#FFA500",
    Коричневый: "#A52A2A",
    Радужный:
      "linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B008B)",
    "Розовое золото": "#B76E79",
    Серебристый: "#C0C0C0",
    Золотой: "#FFD700",
    Градиент: "linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)",
    Прозрачный: "transparent",
    Разноцветный:
      "repeating-linear-gradient(45deg, #FF0000, #FF0000 10px, #00FF00 10px, #00FF00 20px, #0000FF 20px, #0000FF 30px)",
  };

  return (
    <div className="flex max-w-[1440px] sm:flex-row flex-col m-auto md:w-[80%] w-full">
      <div className="md:w-64 bg-white p-4 md:p-6 border-b md:border-r border-gray-200">
        <h3 className="font-semibold text-base leading-[119%] text-[#1f2026] font-family mb-4">
          Цена, сум
        </h3>
        <div className="flex md:flex-row flex-col gap-2 mb-4">
          <input
            type="number"
            placeholder="от 5000"
            value={priceRange.min}
            onChange={(e) => handlePriceChange("min", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <input
            type="number"
            placeholder="до 56000000"
            value={priceRange.max}
            onChange={(e) => handlePriceChange("max", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-base leading-[119%] text-[#1f2026] font-family mb-4">
            Цвет
          </h3>
          <div className="space-y-3">
            {uniqueColors.map((color) => {
              const colorValue = colorMap[color] || "#CCCCCC";

              return (
                <div key={color} className="flex items-center gap-2">
                  <button
                    onClick={() => toggleColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      selectedColors.has(color)
                        ? "border-gray-900 scale-110"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                    style={{
                      backgroundColor: colorValue,
                      backgroundImage:
                        colorValue.includes("linear-gradient") ||
                        colorValue.includes("repeating-linear-gradient")
                          ? colorValue
                          : "none",
                    }}
                    title={color}
                  />
                  <span className="text-sm text-gray-700 font-family">
                    {color}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-base leading-[119%] text-[#1f2026] font-family mb-4">
            Бренд
          </h3>
          <div className="space-y-2">
            {uniqueBrands.map((brand) => (
              <div key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  id={`brand-${brand}`}
                  checked={selectedBrands.has(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="mr-2"
                />
                <label
                  htmlFor={`brand-${brand}`}
                  className="font-medium text-[13px] leading-[123%] text-[#1f2026] font-family"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="sm:m-0 m-auto object-cover"
                />
                <button
                  onClick={() => toggleLike(product.id)}
                  className={`absolute top-2 right-2 p-2 rounded-full cursor-pointer ${
                    likedProducts.has(product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <svg width="20" height="20" fill="currentColor" className="">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.828a4 4 0 010-5.656z" />
                  </svg>
                </button>
              </div>
              <div className="mb-2">
                <div className="flex mt-1 flex-col items-start">
                  <span className="font-semibold text-sm leading-[129%] text-[#7f4dff] flex gap-1 font-family">
                    {product.price.toLocaleString()} сум{" "}
                    <img src={SVG1} alt="" />{" "}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="font-normal text-xs leading-[133%] text-[#7e818c] font-family">
                      {product.originalPrice.toLocaleString()} сум
                    </span>
                  )}
                </div>
                <div className="font-normal text-[11px] leading-[145%] text-[#1f1f26] font-family bg-[#ff0] inline-block px-2 py-1 rounded mt-1">
                  {product.monthlyPayment.toLocaleString()} сум/мес
                </div>
              </div>
              <div className="flex flex-col grow">
                <h3 className="mb-2 font-normal text-xs leading-[133%] text-[#1f2026] font-family">
                  {product.name}
                </h3>
                <div className="flex justify-between items-start mb-2">
                  {product.isNew && (
                    <span className="font-normal text-xs leading-[133%] text-[#7e818c] font-family">
                      Новинка
                    </span>
                  )}
                </div>

                {!product.isNew && (
                  <div className="flex items-center mb-3">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.32279 0.887954C6.11862 0.790604 5.88141 0.790604 5.67723 0.887954C5.50072 0.972112 5.4034 1.11823 5.35433 1.19839C5.30359 1.28126 5.25151 1.38682 5.20075 1.48972L4.12288 3.67336L1.71185 4.02577C1.59836 4.04233 1.48191 4.05933 1.38745 4.08204C1.29607 4.10402 1.12711 4.15154 0.992657 4.29346C0.837112 4.45765 0.76396 4.68325 0.793571 4.90747C0.819166 5.10129 0.928088 5.23891 0.989188 5.31033C1.05235 5.38415 1.13667 5.46625 1.21885 5.54626L2.96275 7.24481L2.55127 9.64395C2.53184 9.75707 2.51192 9.87312 2.50424 9.97001C2.49682 10.0637 2.48965 10.2392 2.583 10.411C2.69098 10.6098 2.88292 10.7492 3.10535 10.7905C3.29766 10.8261 3.4623 10.7651 3.54912 10.729C3.63889 10.6918 3.7431 10.637 3.84468 10.5835L6.00001 9.45005L8.15535 10.5835C8.25693 10.637 8.36114 10.6918 8.45091 10.729C8.53773 10.7651 8.70237 10.8261 8.89467 10.7905C9.11711 10.7492 9.30904 10.6098 9.41702 10.411C9.51037 10.2392 9.5032 10.0637 9.49578 9.97001C9.48811 9.87312 9.46818 9.75708 9.44876 9.64397L9.03727 7.24481L10.7812 5.54624C10.8634 5.46623 10.9477 5.38414 11.0108 5.31033C11.0719 5.23891 11.1809 5.10129 11.2065 4.90747C11.2361 4.68325 11.1629 4.45765 11.0074 4.29346C10.8729 4.15154 10.704 4.10402 10.6126 4.08204C10.5181 4.05933 10.4017 4.04233 10.2882 4.02577L7.87714 3.67336L6.7993 1.48976C6.74853 1.38686 6.69644 1.28127 6.6457 1.19839C6.59662 1.11823 6.4993 0.972112 6.32279 0.887954Z"
                        fill="#FFB54C"
                      />
                    </svg>
                    <span className="font-normal text-xs leading-[133%] text-[#7e818c] font-family">
                      {product.rating} ({product.reviewCount} отзывов)
                    </span>
                  </div>
                )}

                <div className="mt-auto">
                  <button className="bg-[#7000ff] cursor-pointer flex items-center gap-1 justify-center font-medium text-sm leading-[129%] tracking-[0.01em] text-center text-white font-family rounded-lg w-full h-8 hover:bg-purple-700 transition-colors">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.64362 4.61622V6.02399C4.64362 6.28389 4.85431 6.49458 5.11421 6.49458C5.37411 6.49458 5.5848 6.28389 5.5848 6.02399V4.61223H9.66326V6.02399C9.66326 6.2839 9.87389 6.49458 10.1338 6.49458C10.3937 6.49458 10.6044 6.2839 10.6044 6.02399V4.61622C10.755 4.61919 10.8853 4.62441 11.0015 4.63353C11.2631 4.65403 11.4161 4.69224 11.5349 4.74863C11.788 4.86876 11.9995 5.06145 12.1428 5.3022C12.21 5.4152 12.2623 5.56397 12.3072 5.82247C12.353 6.08669 12.3852 6.42679 12.4311 6.91622L12.528 7.95027C12.5523 8.20904 12.7818 8.39915 13.0405 8.37488C13.2993 8.35063 13.4893 8.12119 13.4651 7.86242L13.3664 6.8094C13.3227 6.34342 13.2873 5.9665 13.2345 5.66165C13.18 5.34695 13.1013 5.07245 12.9516 4.82099C12.7129 4.41975 12.3603 4.09859 11.9385 3.89838C11.6742 3.77292 11.3935 3.72019 11.0751 3.69523C10.9237 3.68336 10.7554 3.67732 10.568 3.67424C10.3437 2.25025 9.11103 1.16125 7.62402 1.16125C6.13701 1.16125 4.90435 2.25025 4.68007 3.67424C4.4926 3.67732 4.32432 3.68336 4.17293 3.69523C3.85451 3.72019 3.57386 3.77292 3.30953 3.89838C2.88777 4.09859 2.5351 4.41975 2.29639 4.82099C2.14679 5.07245 2.06811 5.34695 2.01353 5.66165C1.96067 5.9665 1.92534 6.34341 1.88166 6.80937L1.50143 10.8651C1.44958 11.4181 1.4079 11.8628 1.40463 12.2233C1.40129 12.5935 1.43683 12.921 1.56846 13.2273C1.7765 13.7116 2.14106 14.1119 2.60374 14.3642C2.89648 14.5239 3.21927 14.5899 3.58807 14.621C3.94736 14.6514 4.39397 14.6514 4.94941 14.6514H7.62402C7.88391 14.6514 8.09461 14.4408 8.09461 14.1808C8.09461 13.921 7.88391 13.7103 7.62402 13.7103H4.97056C4.38904 13.7103 3.98234 13.7099 3.66745 13.6832C3.35752 13.657 3.18295 13.608 3.05436 13.5379C2.77676 13.3866 2.55802 13.1463 2.4332 12.8559C2.37538 12.7213 2.34295 12.5428 2.34577 12.2319C2.34863 11.9158 2.38619 11.5109 2.44047 10.9319L2.81694 6.91621C2.86283 6.42679 2.89505 6.08669 2.94087 5.82247C2.98569 5.56397 3.03802 5.4152 3.10525 5.3022C3.24848 5.06145 3.46008 4.86876 3.71314 4.74862C3.83193 4.69224 3.98494 4.65403 4.24648 4.63353C4.36275 4.62441 4.49305 4.61919 4.64362 4.61622ZM5.63937 3.67105H9.60867C9.39623 2.7717 8.58828 2.10243 7.62402 2.10243C6.65975 2.10243 5.85181 2.7717 5.63937 3.67105ZM11.3887 9.31811C11.6487 9.31811 11.8593 9.52879 11.8593 9.78875V11.2005H13.2711C13.531 11.2005 13.7417 11.4111 13.7417 11.6711C13.7417 11.931 13.531 12.1417 13.2711 12.1417H11.8593V13.5535C11.8593 13.8133 11.6487 14.024 11.3887 14.024C11.1289 14.024 10.9181 13.8133 10.9181 13.5535V12.1417H9.50636C9.24648 12.1417 9.03578 11.931 9.03578 11.6711C9.03578 11.4111 9.24648 11.2005 9.50636 11.2005H10.9181V9.78875C10.9181 9.52879 11.1289 9.31811 11.3887 9.31811Z"
                        fill="white"
                      />
                    </svg>
                    Завтра
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Нет товаров, соответствующих выбранным фильтрам
          </div>
        )}
      </div>
    </div>
  );
};

export default Showcase;
