import React from "react";
import Link1 from "../assets/images/Link1.png";
import Link2 from "../assets/images/Link2.png";
import LinkSVG from "../assets/images/LinkSVG.png";
import LinkSVG1 from "../assets/images/LinkSVG1.png";
import LinkSVG2 from "../assets/images/LinkSVG2.png";
import LinkSVG3 from "../assets/images/LinkSVG3.png";

const Footer = () => {
  return (
    <footer className="bg-white pt-8 pb-6">
      <div className="md:hidden px-4">
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-sm leading-[136%] text-[#1f2026] font-second-family mb-3">
              О нас
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                >
                  Пункты выдачи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                >
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm leading-[136%] text-[#1f2026] font-second-family mb-3">
              Пользователям
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                >
                  Связаться с нами
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                >
                  Вопрос - Ответ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm leading-[136%] text-[#1f2026] font-second-family mb-3">
              Для предпринимателей
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                >
                  Продавайте на Uzum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                >
                  Вход для продавцов
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                >
                  Открыть пункт выдачи
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm leading-[136%] text-[#1f2026] font-second-family mb-3">
              Скачать приложение
            </h3>
            <div className="flex space-x-3 mb-4">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={Link1}
                  alt=""
                  className="transition-transform duration-200 hover:scale-105 w-24"
                />
              </a>

              <a
                href="https://play.google.com/store/apps?hl=ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={Link2}
                  alt=""
                  className="transition-transform duration-200 hover:scale-105 w-24"
                />
              </a>
            </div>

            <h3 className="font-medium text-sm leading-[136%] text-[#1f2026] font-second-family mb-3">
              Uzum в соцсетях
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={LinkSVG}
                  alt=""
                  className="transition-transform duration-200 hover:scale-105 w-6 h-6"
                />
              </a>
              <a
                href="https://t.me/Tolko_Nenado"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={LinkSVG1}
                  alt=""
                  className="transition-transform duration-200 hover:scale-105 w-6 h-6"
                />
              </a>
              <a
                href="https://www.facebook.com/?locale=ru_RU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={LinkSVG2}
                  alt=""
                  className="transition-transform duration-200 hover:scale-105 w-6 h-6"
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={LinkSVG3}
                  alt=""
                  className="transition-transform duration-200 hover:scale-105 w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t-[rgba(54,55,64,0.2)] border-t border-solid">
          <div className="space-y-3 mb-4">
            <a
              href="#"
              className="block font-medium text-sm leading-[129%] text-[#1f2026] font-second-family hover:text-gray-900"
            >
              Соглашение о конфиденциальности
            </a>
            <a
              href="#"
              className="block font-medium text-sm leading-[129%] text-[#1f2026] font-second-family hover:text-gray-900"
            >
              Пользовательское соглашение
            </a>
          </div>

          <div className="font-normal text-xs leading-[127%] text-[#7e818c] font-second-family text-center">
            ©2025© ООО «UZUM MARKET». ИНН 309376127. Все права защищены
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium text-sm leading-[136%] text-[#1f2026] font-second-family mb-4">
                О нас
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                  >
                    Пункты выдачи
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                  >
                    Вакансии
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm leading-[136%] text-[#1f2026] font-second-family mb-4">
                Пользователям
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                  >
                    Связаться с нами
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                  >
                    Вопрос - Ответ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm leading-[136%] text-[#1f2026] font-second-family mb-4">
                Для предпринимателей
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                  >
                    Продавайте на Uzum
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                  >
                    Вход для продавцов
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal text-xs leading-[133%] text-[#8b8e99] font-second-family hover:text-gray-900"
                  >
                    Открыть пункт выдачи
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm leading-[136%] text-[#1f2026] font-second-family mb-4">
                Скачать приложение
              </h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={Link1}
                    alt=""
                    className="transition-transform duration-200 hover:scale-105"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps?hl=ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={Link2}
                    alt=""
                    className="transition-transform duration-200 hover:scale-105"
                  />
                </a>
              </div>

              <h3 className="font-medium text-sm leading-[136%] text-[#1f2026] font-second-family mb-4">
                Uzum в соцсетях
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={LinkSVG}
                    alt=""
                    className="transition-transform duration-200 hover:scale-105"
                  />
                </a>
                <a
                  href="https://t.me/Tolko_Nenado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={LinkSVG1}
                    alt=""
                    className="transition-transform duration-200 hover:scale-105"
                  />
                </a>
                <a
                  href="https://www.facebook.com/?locale=ru_RU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={LinkSVG2}
                    alt=""
                    className="transition-transform duration-200 hover:scale-105"
                  />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={LinkSVG3}
                    alt=""
                    className="transition-transform duration-200 hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t-[rgba(54,55,64,0.2)] gap-4 border-t border-solid max-w-[1240px] m-auto pt-6 flex justify-between items-center">
            <div className="flex space-x-6">
              <a
                href="#"
                className="font-medium text-sm leading-[129%] text-[#1f2026] font-second-family hover:text-gray-900"
              >
                Соглашение о конфиденциальности
              </a>
              <a
                href="#"
                className="font-medium text-sm leading-[129%] text-[#1f2026] font-second-family hover:text-gray-900"
              >
                Пользовательское соглашение
              </a>
            </div>

            <div className="font-normal text-[11px] leading-[127%] text-[#7e818c] font-second-family">
              ©2025© ООО «UZUM MARKET». ИНН 309376127. Все права защищены
            </div>
            <a
              href="#top"
              className="w-[70px] h-[70px] fixed bottom-8 right-8  rounded-full flex cursor-pointer items-center justify-center transition-colors"
            >
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53 27C53 41.359 41.359 53 27 53C12.641 53 1 41.359 1 27C1 12.641 12.641 1 27 1C41.359 1 53 12.641 53 27Z"
                  fill="#7F4DFF"
                />
                <path
                  d="M27 54C12.112 54 0 41.888 0 27C0 12.112 12.112 0 27 0C41.888 0 54 12.112 54 27C54 41.888 41.888 54 27 54ZM27 2C13.215 2 2 13.215 2 27C2 40.785 13.215 52 27 52C40.785 52 52 40.785 52 27C52 13.215 40.785 2 27 2Z"
                  fill="white"
                />
                <path
                  d="M39 32.706C38.744 32.706 38.488 32.608 38.293 32.413L27 21.12L15.707 32.413C15.316 32.804 14.684 32.804 14.293 32.413C13.902 32.022 13.902 31.39 14.293 30.999L25.791 19.501C26.457 18.835 27.543 18.835 28.209 19.501L39.707 30.999C40.098 31.39 40.098 32.022 39.707 32.413C39.512 32.608 39.256 32.706 39 32.706Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
