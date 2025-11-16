import React, { useState } from "react";
import SVG from "../assets/images/SVG.png";
import Link from "../assets/images/Link.png";
import Topsales from "../assets/images/Topsales.png.png";
import feshn3110 from "../assets/images/feshn3110.png.png";
import hobbi2110 from "../assets/images/hobbi2110.png.png";
import smart2010 from "../assets/images/smart2010.png.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  };

  return (
    <>
      <div id="top"></div>
      <header className="bg-white">
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#f0f2f5]">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="#1F2026"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0007 2.29175C6.66393 2.29175 3.95898 4.99669 3.95898 8.33341C3.95898 9.97621 4.70055 11.5091 5.91249 13.0828C6.93437 14.4097 8.24233 15.707 9.63348 17.0868C9.75528 17.2076 9.87771 17.329 10.0007 17.4512C10.1236 17.329 10.246 17.2076 10.3678 17.0868C11.759 15.707 13.0669 14.4097 14.0888 13.0828C15.3008 11.5091 16.0423 9.97621 16.0423 8.33341C16.0423 4.99669 13.3374 2.29175 10.0007 2.29175ZM2.70898 8.33341C2.70898 4.30634 5.97357 1.04175 10.0007 1.04175C14.0277 1.04175 17.2923 4.30634 17.2923 8.33341C17.2923 10.3726 16.3672 12.173 15.0792 13.8455C14.0015 15.2448 12.6223 16.6122 11.2323 17.9903C10.9688 18.2515 10.7049 18.5131 10.4426 18.7754C10.1985 19.0195 9.80279 19.0195 9.55871 18.7754C9.29642 18.5131 9.03254 18.2515 8.76904 17.9903C7.37904 16.6122 5.99977 15.2448 4.92214 13.8455C3.63409 12.173 2.70898 10.3726 2.70898 8.33341ZM10.0007 6.45841C8.96512 6.45841 8.12565 7.29788 8.12565 8.33341C8.12565 9.36895 8.96512 10.2085 10.0007 10.2085C11.0362 10.2085 11.8757 9.36895 11.8757 8.33341C11.8757 7.29788 11.0362 6.45841 10.0007 6.45841ZM6.87565 8.33341C6.87565 6.60752 8.27476 5.20841 10.0007 5.20841C11.7265 5.20841 13.1257 6.60752 13.1257 8.33341C13.1257 10.0593 11.7265 11.4585 10.0007 11.4585C8.27476 11.4585 6.87565 10.0593 6.87565 8.33341Z"
                fill="#1F2026"
              />
            </svg>
            <span className="font-medium text-sm leading-[171%] text-black font-family">
              Ташкент
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.34974 7.68306C4.59382 7.43898 4.98955 7.43898 5.23363 7.68306L10 12.4494L14.7664 7.68306C15.0105 7.43898 15.4062 7.43898 15.6503 7.68306C15.8944 7.92713 15.8944 8.32286 15.6503 8.56691L10.4419 13.7752C10.1979 14.0193 9.80218 14.0193 9.5581 13.7752L4.34974 8.56691C4.10567 8.32286 4.10567 7.92713 4.34974 7.68306Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <img src={SVG} alt="" />
            <span className="font-medium text-sm leading-[286%] text-center text-[#1f2026] font-family">
              Русский
            </span>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full z-999 bg-[#e2dede] border-b border-gray-200 pb-4">
            <div className="px-4 pt-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="font-medium text-sm text-[#7f4dff] font-family"
                >
                  Стать продавцом
                </a>
                <a
                  href="#"
                  className="font-medium text-sm text-[#7f4dff] font-family"
                >
                  Открыть пункт выдачи
                </a>
                <a
                  href="#"
                  className="font-medium text-sm text-[#4d4f59] font-family"
                >
                  Вопрос-ответ
                </a>
                <a
                  href="#"
                  className="font-medium text-sm text-[#4d4f59] font-family"
                >
                  Мои заказы
                </a>
              </div>

              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3C9.79086 3 8 4.79086 8 7V8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8V7C16 4.79086 14.2091 3 12 3ZM9.5 7C9.5 5.61929 10.6193 4.5 12 4.5C13.3807 4.5 14.5 5.61929 14.5 7V8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8V7ZM5.50232 19.3686C5.97321 16.2577 9.01803 14.5 12.0022 14.5C14.9858 14.5 18.031 16.2577 18.5019 19.3686C18.5046 19.3866 18.5025 19.3972 18.5 19.4048C18.497 19.4137 18.4903 19.4269 18.4759 19.442C18.4453 19.4741 18.3894 19.5039 18.3171 19.5039H5.68718C5.61487 19.5039 5.55898 19.4741 5.52838 19.442C5.51394 19.4269 5.50726 19.4137 5.50427 19.4048C5.50174 19.3972 5.49961 19.3865 5.50232 19.3686ZM12.0022 13C8.57321 13 4.64037 15.0404 4.01922 19.1441C3.85624 20.2208 4.75727 21.0039 5.68718 21.0039H18.3171C19.247 21.0039 20.148 20.2208 19.985 19.1441C19.3638 15.0404 15.4306 13 12.0022 13Z"
                      fill="#1F2026"
                    />
                  </svg>
                  <span className="font-medium text-sm text-[#1f2026] font-family">
                    Войти
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 5.5C5.26935 5.5 3.5 7.30906 3.5 9.5C3.5 10.4282 3.87684 11.4436 4.5487 12.5105C5.21692 13.5716 6.14148 14.6274 7.15127 15.6219C8.55769 17.007 10.0318 18.1879 11.1708 19.1003C11.4734 19.3427 11.7523 19.5661 12 19.7694C12.2477 19.5661 12.5266 19.3427 12.8292 19.1003C13.9682 18.1879 15.4423 17.007 16.8487 15.6219C17.8585 14.6274 18.7831 13.5716 19.4513 12.5105C20.1232 11.4436 20.5 10.4282 20.5 9.5C20.5 7.30898 18.7314 5.5 16.5 5.5C14.3473 5.5 13.0738 7.20226 12.7262 7.74742C12.3889 8.27655 11.6111 8.27653 11.2738 7.74742C10.9262 7.20225 9.65273 5.5 7.5 5.5ZM2 9.5C2 6.49094 4.43065 4 7.5 4C9.73143 4 11.2249 5.30207 12 6.21581C12.7751 5.30207 14.2686 4 16.5 4C19.5702 4 22 6.49102 22 9.5C22 10.8218 21.4706 12.1189 20.7206 13.3098C19.9669 14.5066 18.954 15.6539 17.9013 16.6906C16.4429 18.1269 14.808 19.4384 13.6502 20.3672C13.1649 20.7565 12.7634 21.0786 12.4939 21.3144C12.2111 21.5619 11.7889 21.5619 11.5061 21.3144C11.2366 21.0786 10.8351 20.7565 10.3498 20.3672C9.19201 19.4384 7.55712 18.1269 6.09873 16.6906C5.04602 15.6539 4.03308 14.5066 3.27942 13.3098C2.52941 12.1189 2 10.8218 2 9.5Z"
                      fill="#1F2026"
                    />
                  </svg>
                  <span className="font-medium text-sm text-[#1f2026] font-family">
                    Избранное
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.87">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 6.5C9 4.88779 10.2402 3.5 12 3.5C13.7598 3.5 15 4.88779 15 6.5V7.5H9V6.5ZM7.5 9V11.5H9V9H15V11.5H16.5V9H18.5V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V9H7.5ZM7.5 7.5V6.5C7.5 4.11221 9.35984 2 12 2C14.6402 2 16.5 4.11221 16.5 6.5V7.5H19.25H20V8.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V8.25V7.5H4.75H7.5Z"
                        fill="#1F2026"
                      />
                    </g>
                  </svg>
                  <span className="font-medium text-sm text-[#1f2026] font-family">
                    Корзина
                  </span>
                </div>
              </div>
            </div>

            <div className="px-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <span className="font-normal text-sm text-[#4d4f59] font-second-family">
                  Категории
                </span>
                <button
                  onClick={toggleCategoryMenu}
                  className="focus:outline-none"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10.6667C8.20713 10.6608 8.39653 10.5832 8.55047 10.4162L12.2987 6.53811C12.429 6.4069 12.5 6.23991 12.5 6.04309C12.5 5.64947 12.1922 5.33337 11.8016 5.33337C11.6122 5.33337 11.4287 5.41091 11.2925 5.54808L8.00593 8.96697L4.70744 5.54808C4.57131 5.41687 4.39374 5.33337 4.19842 5.33337C3.80778 5.33337 3.5 5.64947 3.5 6.04309C3.5 6.23991 3.57103 6.4069 3.70124 6.53811L7.45547 10.4162C7.61527 10.5832 7.79287 10.6667 8 10.6667Z"
                      fill="#7E818C"
                    />
                  </svg>
                </button>
              </div>

              {isCategoryMenuOpen && (
                <div className="pt-4 flex flex-col space-y-3">
                  <div className="flex items-center gap-2">
                    <img src={Topsales} alt="" />
                    <span className="font-semibold cursor-pointer text-xs text-[#1f2026] font-family">
                      Товары недели
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={feshn3110} alt="" />
                    <span className="font-semibold cursor-pointer text-xs text-[#1f2026] font-family">
                      Зимняя коллекция
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={hobbi2110} alt="" />
                    <span className="font-semibold cursor-pointer text-xs text-[#1f2026] font-family">
                      Хобби и творчество
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={smart2010} alt="" />
                    <span className="font-semibold cursor-pointer text-xs text-[#1f2026] font-family">
                      Смартфоны
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-normal cursor-pointer text-sm text-[#4d4f59] font-second-family">
                      Туризм, рыбалка и охота
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-normal cursor-pointer text-sm text-[#4d4f59] font-second-family">
                      Электроника
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-normal cursor-pointer text-sm text-[#4d4f59] font-second-family">
                      Бытовая техника
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-normal cursor-pointer text-sm text-[#4d4f59] font-second-family">
                      Одежда
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-normal cursor-pointer text-sm text-[#4d4f59] font-second-family">
                      Обувь
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-normal cursor-pointer text-sm text-[#4d4f59] font-second-family">
                      Ещё
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="hidden md:block">
          <div className="bg-[#f0f2f5]">
            <div className="flex max-w-[1240px] m-auto w-full mdd:flex-row flex-col gap-0 mddd:gap-4 items-center justify-center mdd:justify-between px-6 py-2">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.0007 2.29175C6.66393 2.29175 3.95898 4.99669 3.95898 8.33341C3.95898 9.97621 4.70055 11.5091 5.91249 13.0828C6.93437 14.4097 8.24233 15.707 9.63348 17.0868C9.75528 17.2076 9.87771 17.329 10.0007 17.4512C10.1236 17.329 10.246 17.2076 10.3678 17.0868C11.759 15.707 13.0669 14.4097 14.0888 13.0828C15.3008 11.5091 16.0423 9.97621 16.0423 8.33341C16.0423 4.99669 13.3374 2.29175 10.0007 2.29175ZM2.70898 8.33341C2.70898 4.30634 5.97357 1.04175 10.0007 1.04175C14.0277 1.04175 17.2923 4.30634 17.2923 8.33341C17.2923 10.3726 16.3672 12.173 15.0792 13.8455C14.0015 15.2448 12.6223 16.6122 11.2323 17.9903C10.9688 18.2515 10.7049 18.5131 10.4426 18.7754C10.1985 19.0195 9.80279 19.0195 9.55871 18.7754C9.29642 18.5131 9.03254 18.2515 8.76904 17.9903C7.37904 16.6122 5.99977 15.2448 4.92214 13.8455C3.63409 12.173 2.70898 10.3726 2.70898 8.33341ZM10.0007 6.45841C8.96512 6.45841 8.12565 7.29788 8.12565 8.33341C8.12565 9.36895 8.96512 10.2085 10.0007 10.2085C11.0362 10.2085 11.8757 9.36895 11.8757 8.33341C11.8757 7.29788 11.0362 6.45841 10.0007 6.45841ZM6.87565 8.33341C6.87565 6.60752 8.27476 5.20841 10.0007 5.20841C11.7265 5.20841 13.1257 6.60752 13.1257 8.33341C13.1257 10.0593 11.7265 11.4585 10.0007 11.4585C8.27476 11.4585 6.87565 10.0593 6.87565 8.33341Z"
                      fill="#1F2026"
                    />
                  </svg>
                  <span className="font-medium text-sm leading-[171%] text-black font-family">
                    Ташкент
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.34974 7.68306C4.59382 7.43898 4.98955 7.43898 5.23363 7.68306L10 12.4494L14.7664 7.68306C15.0105 7.43898 15.4062 7.43898 15.6503 7.68306C15.8944 7.92713 15.8944 8.32286 15.6503 8.56691L10.4419 13.7752C10.1979 14.0193 9.80218 14.0193 9.5581 13.7752L4.34974 8.56691C4.10567 8.32286 4.10567 7.92713 4.34974 7.68306Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <span className="font-medium text-sm leading-[171%] text-black font-family">
                  Пункты выдачи
                </span>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="font-medium text-sm leading-[100%] text-[#7f4dff] font-family hover:text-purple-700"
                >
                  Стать продавцом
                </a>
                <a
                  href="#"
                  className="font-medium text-sm leading-[100%] text-[#7f4dff] font-family hover:text-purple-700"
                >
                  Открыть пункт выдачи
                </a>
                <a
                  href="#"
                  className="font-medium text-sm leading-[100%] text-[#4d4f59] font-family hover:text-gray-900"
                >
                  Вопрос-ответ
                </a>
                <a
                  href="#"
                  className="font-medium text-sm leading-[100%] text-[#4d4f59] font-family hover:text-gray-900"
                >
                  Мои заказы
                </a>
                <div className="flex items-center gap-2">
                  <img src={SVG} alt="" />
                  <span className="font-medium text-sm leading-[286%] text-center text-[#1f2026] font-family">
                    Русский
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-w-[1240px] m-auto flex-wrap gap-4 w-full items-center justify-center lgg:justify-between px-6 py-4">
            <div className="flex items-center gap-6">
              <img src={Link} alt="" />
              <button className="flex transition-transform cursor-pointer duration-200 hover:scale-110 items-center gap-2 px-4 py-2 bg-[#e5e5ff] rounded-[4px] font-medium text-sm leading-[129%] tracking-[0.01em] text-center text-[#7f4dff] font-family">
                <div className="flex flex-col items-center">
                  <div className=" w-[13px] h-0.5  rounded-[2px_2px_0_0] border-t-2 border-t-[#7f4dff] border-solid"></div>
                  <div className="w-[15px] h-0.5 mb-px rounded-[2px_2px_0_0] border-t-2 border-t-[#7f4dff] border-solid"></div>
                  <div className="w-[18px] h-[12px] border-2 border-solid border-[#7f4dff] rounded-[2px]"></div>
                </div>
                Каталог
              </button>
            </div>
            <div className="flex-1 max-w-2xl mx-6">
              <div className="relative w-full flex">
                <input
                  type="text"
                  placeholder="Искать товары и категории"
                  className="w-full min-w-[240px] h-10 px-4 py-2 font-normal text-sm text-[#757575] font-family border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="w-[75px]  flex items-center justify-center absolute right-0 bg-[#edeff2] h-10 rounded-[0_4px_4px_0] border-r-[rgba(54,55,64,0.2)] border-y-[rgba(54,55,64,0.2)] border-b border-solid border-r border-t hover:text-gray-700">
                  <svg
                    className="transition-transform cursor-pointer duration-200 hover:scale-110"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5 10.5C15.5 13.2614 13.2614 15.5 10.5 15.5C7.73858 15.5 5.5 13.2614 5.5 10.5C5.5 7.73858 7.73858 5.5 10.5 5.5C13.2614 5.5 15.5 7.73858 15.5 10.5ZM14.3398 15.7451C13.264 16.5341 11.9364 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 11.9364 16.5341 13.264 15.7451 14.3398L19.709 18.3036C20.097 18.6917 20.097 19.3209 19.709 19.709C19.3209 20.097 18.6917 20.097 18.3036 19.709L14.3398 15.7451Z"
                      fill="#4D4F59"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex cursor-pointer items-center gap-2">
                <svg
                  className="transition-transform cursor-pointer duration-200 hover:scale-110"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3C9.79086 3 8 4.79086 8 7V8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8V7C16 4.79086 14.2091 3 12 3ZM9.5 7C9.5 5.61929 10.6193 4.5 12 4.5C13.3807 4.5 14.5 5.61929 14.5 7V8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8V7ZM5.50232 19.3686C5.97321 16.2577 9.01803 14.5 12.0022 14.5C14.9858 14.5 18.031 16.2577 18.5019 19.3686C18.5046 19.3866 18.5025 19.3972 18.5 19.4048C18.497 19.4137 18.4903 19.4269 18.4759 19.442C18.4453 19.4741 18.3894 19.5039 18.3171 19.5039H5.68718C5.61487 19.5039 5.55898 19.4741 5.52838 19.442C5.51394 19.4269 5.50726 19.4137 5.50427 19.4048C5.50174 19.3972 5.49961 19.3865 5.50232 19.3686ZM12.0022 13C8.57321 13 4.64037 15.0404 4.01922 19.1441C3.85624 20.2208 4.75727 21.0039 5.68718 21.0039H18.3171C19.247 21.0039 20.148 20.2208 19.985 19.1441C19.3638 15.0404 15.4306 13 12.0022 13Z"
                    fill="#1F2026"
                  />
                </svg>
                <span className="font-medium text-sm leading-[100%] text-center text-[#1f2026] font-family">
                  Войти
                </span>
              </div>

              <div className="flex cursor-pointer items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform cursor-pointer duration-200 hover:scale-110"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.5 5.5C5.26935 5.5 3.5 7.30906 3.5 9.5C3.5 10.4282 3.87684 11.4436 4.5487 12.5105C5.21692 13.5716 6.14148 14.6274 7.15127 15.6219C8.55769 17.007 10.0318 18.1879 11.1708 19.1003C11.4734 19.3427 11.7523 19.5661 12 19.7694C12.2477 19.5661 12.5266 19.3427 12.8292 19.1003C13.9682 18.1879 15.4423 17.007 16.8487 15.6219C17.8585 14.6274 18.7831 13.5716 19.4513 12.5105C20.1232 11.4436 20.5 10.4282 20.5 9.5C20.5 7.30898 18.7314 5.5 16.5 5.5C14.3473 5.5 13.0738 7.20226 12.7262 7.74742C12.3889 8.27655 11.6111 8.27653 11.2738 7.74742C10.9262 7.20225 9.65273 5.5 7.5 5.5ZM2 9.5C2 6.49094 4.43065 4 7.5 4C9.73143 4 11.2249 5.30207 12 6.21581C12.7751 5.30207 14.2686 4 16.5 4C19.5702 4 22 6.49102 22 9.5C22 10.8218 21.4706 12.1189 20.7206 13.3098C19.9669 14.5066 18.954 15.6539 17.9013 16.6906C16.4429 18.1269 14.808 19.4384 13.6502 20.3672C13.1649 20.7565 12.7634 21.0786 12.4939 21.3144C12.2111 21.5619 11.7889 21.5619 11.5061 21.3144C11.2366 21.0786 10.8351 20.7565 10.3498 20.3672C9.19201 19.4384 7.55712 18.1269 6.09873 16.6906C5.04602 15.6539 4.03308 14.5066 3.27942 13.3098C2.52941 12.1189 2 10.8218 2 9.5Z"
                    fill="#1F2026"
                  />
                </svg>
                <span className="font-medium text-sm leading-[100%] text-center text-[#1f2026] font-family">
                  Избранное
                </span>
              </div>

              <div className="flex cursor-pointer items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform cursor-pointer duration-200 hover:scale-110"
                >
                  <g opacity="0.87">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 6.5C9 4.88779 10.2402 3.5 12 3.5C13.7598 3.5 15 4.88779 15 6.5V7.5H9V6.5ZM7.5 9V11.5H9V9H15V11.5H16.5V9H18.5V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V9H7.5ZM7.5 7.5V6.5C7.5 4.11221 9.35984 2 12 2C14.6402 2 16.5 4.11221 16.5 6.5V7.5H19.25H20V8.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V8.25V7.5H4.75H7.5Z"
                      fill="#1F2026"
                    />
                  </g>
                </svg>
                <span className="font-medium text-sm leading-[100%] text-center text-[#1f2026] font-family">
                  Корзина
                </span>
              </div>
            </div>
          </div>

          <div className="px-6 pb-4 max-w-[1240px] m-auto w-full">
            <div className="flex items-center justify-between gap-6 overflow-x-auto">
              <div className="flex mr-3 items-center gap-1">
                <img src={Topsales} alt="" />
                <span className="font-semibold cursor-pointer whitespace-nowrap text-xs leading-[120%] text-[#1f2026] font-family">
                  Товары недели
                </span>
              </div>

              <div className="flex mr-3 items-center gap-1">
                <img src={feshn3110} alt="" />
                <span className="font-semibold cursor-pointer whitespace-nowrap text-xs leading-[120%] text-[#1f2026] font-family">
                  Зимняя коллекция
                </span>
              </div>

              <div className="flex mr-3 items-center gap-1">
                <img src={hobbi2110} alt="" />
                <span className="font-semibold cursor-pointer whitespace-nowrap text-xs leading-[120%] text-[#1f2026] font-family">
                  Хобби и творчество
                </span>
              </div>

              <div className="flex mr-3 items-center gap-1">
                <img src={smart2010} alt="" />
                <span className="font-semibold cursor-pointer text-xs leading-[120%] text-[#1f2026] font-family">
                  Смартфоны
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-normal cursor-pointer whitespace-nowrap text-sm leading-[171%] text-[#4d4f59] font-second-family hover:text-[#1f2026] hover:font-normal hover:opacity-[0.87] hover:border-b-2 hover:border-[#1f2026]">
                  Туризм, рыбалка и охота
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-normal cursor-pointer text-sm leading-[171%] text-[#4d4f59] font-second-family hover:text-[#1f2026] hover:font-normal hover:opacity-[0.87] hover:border-b-2 hover:border-[#1f2026]">
                  Электроника
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-normal cursor-pointer whitespace-nowrap text-sm leading-[171%] text-[#4d4f59] font-second-family hover:text-[#1f2026] hover:font-normal hover:opacity-[0.87] hover:border-b-2 hover:border-[#1f2026]">
                  Бытовая техника
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-normal cursor-pointer text-sm leading-[171%] text-[#4d4f59] font-second-family hover:text-[#1f2026] hover:font-normal hover:opacity-[0.87] hover:border-b-2 hover:border-[#1f2026]">
                  Одежда
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-normal cursor-pointer text-sm leading-[171%] text-[#4d4f59] font-second-family hover:text-[#1f2026] hover:font-normal hover:opacity-[0.87] hover:border-b-2 hover:border-[#1f2026]">
                  Обувь
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-normal cursor-pointer text-sm leading-[171%] text-[#4d4f59] font-second-family hover:text-[#1f2026] hover:font-normal hover:opacity-[0.87] hover:border-b-2 hover:border-[#1f2026]">
                  Ещё
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10.6667C8.20713 10.6608 8.39653 10.5832 8.55047 10.4162L12.2987 6.53811C12.429 6.4069 12.5 6.23991 12.5 6.04309C12.5 5.64947 12.1922 5.33337 11.8016 5.33337C11.6122 5.33337 11.4287 5.41091 11.2925 5.54808L8.00593 8.96697L4.70744 5.54808C4.57131 5.41687 4.39374 5.33337 4.19842 5.33337C3.80778 5.33337 3.5 5.64947 3.5 6.04309C3.5 6.23991 3.57103 6.4069 3.70124 6.53811L7.45547 10.4162C7.61527 10.5832 7.79287 10.6667 8 10.6667Z"
                    fill="#7E818C"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
