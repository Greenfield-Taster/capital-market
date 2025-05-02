import { useEffect } from "react";

const useScrollAnimation = (options = {}) => {
  const {
    selector = ".animate-on-scroll",
    threshold = 0.8,
    once = true,
  } = options;

  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll(selector);

      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        // Елемент вважається видимим, якщо він в межах вікна або трохи нижче
        const isVisible = rect.top <= windowHeight * threshold;

        if (isVisible) {
          el.classList.add("visible");
        } else if (!once) {
          // Якщо once = false, видаляємо клас, коли елемент виходить з зони видимості
          el.classList.remove("visible");
        }
      });
    };

    // Запускаємо обробник скролу на завантаженні сторінки
    handleScroll();

    // Додаємо слухач події скролу
    window.addEventListener("scroll", handleScroll);

    // Очищення слухача при розмонтуванні компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selector, threshold, once]);
};

export default useScrollAnimation;
