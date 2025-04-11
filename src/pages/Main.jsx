import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../src/styles/pages/_Main.scss";
import ActivityDirections from "../components/main/ActivityDirections/ActivityDirections";
import Benefits from "../components/main/Benefits/Benefits";

const Main = () => {
  const { t } = useTranslation();

  return (
    <main className="main">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-blur-panel">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  {t(
                    "main.hero.title",
                    "Будівництво - це мистецтво створювати за допомогою матеріалів майбутнє. "
                  )}
                </h1>
                <p>
                  {t(
                    "main.hero.description",
                    "Ми компанія ТД Столиця Маркет - спеціалізуємося на будівництві житлових та нежитлових об'єктів, реконструкції інфраструктури, спорудженні укриттів та підземних комплексів. Використовуємо металоконструкції та бетонні рішення для забезпечення безпеки та довговічності. Наші проекти — це поєднання сучасних технологій, якісних матеріалів та відповідального підходу."
                  )}
                </p>
                <Link to="/about" className="hero-button">
                  {t("main.hero.learnMore", "ДІЗНАТИСЬ ДЕТАЛЬНІШЕ")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ActivityDirections />

      <Benefits />
    </main>
  );
};

export default Main;
