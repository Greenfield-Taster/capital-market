import React from "react";
import HeroSection from "../components/about/HeroSection";
import ProcessSection from "../components/about/ProcessSection";
import MainContentSection from "../components/about/MainContentSection";
import FeaturedProjectSection from "../components/about/FeaturedProjectSection";
import ValuesSection from "../components/about/ValuesSection";
import CTASection from "../components/about/CTASection";
import FooterSection from "../components/about/FooterSection";
import ParallaxBackground from "../components/about/ParallaxBackground";
import FloatingActionButton from "../components/about/FloatingActionButton";
import "../styles/components/about/_about.scss";

const About = () => {
  const data = {
    title: "ТД Столиця Маркет",
    mainQuote: "Ми будуємо не просто споруди — ми створюємо надійне майбутнє",
    paragraph1:
      "«ТД Столиця Маркет» — команда професіоналів, яка спеціалізується на будівництві житлових та нежитлових об'єктів, реконструкції інфраструктури, спорудженні укриттів та підземних комплексів. З 2016 року ми успішно реалізуємо проекти будь-якої складності, використовуючи сучасні технології, якісні матеріали та інноваційні підходи.",
    paragraph2:
      "Одним із наших ключових напрямків є виробництво металоконструкцій та бетонних рішень, які забезпечують безпеку та довговічність. Ми працюємо з відповідальністю та дотримуємося міжнародних стандартів, що підтверджується нашою сертифікованою системою управління: ISO 9001(2015), ISO 45001(2019), 14001(2015).",
    featuredProject: {
      title: "Наш знаковий проект",
      description:
        "Комплекс захисних споруд та укриттів, реалізований у 2023 році на замовлення оборонного сектору. Проект включав реконструкцію історичної будівлі на вулиці Соборній, 151. Реставрація фасаду та внутрішніх приміщень із збереженням історичної цінності об'єкта..",
    },
    cta: {
      title: "Готові втілити ваш проект?",
      text: "Довірте нам реалізацію ваших будівельних задумів. Наша команда забезпечить якісне виконання робіт з дотриманням усіх стандартів та термінів.",
      button: "Зв'язатися з нами",
    },
  };

  return (
    <div className="about-page">
      <ParallaxBackground />

      <HeroSection data={data} />
      <ProcessSection />
      <MainContentSection data={data} />
      <FeaturedProjectSection data={data} />
      <ValuesSection />
      <CTASection data={data} />
      <FooterSection data={data} />
    </div>
  );
};

export default About;
