import React from "react";
import { Building2, Target, Lightbulb, Shield } from "lucide-react";
import "../../styles/components/about/ProcessSection.scss";

const ProcessSection = () => {
  const steps = [
    {
      title: "Аналіз та планування",
      description:
        "Детальне вивчення потреб клієнта, розробка концепції та складання кошторису робіт.",
      icon: Target,
    },
    {
      title: "Проектування",
      description:
        "Створення технічної документації, 3D-моделювання об'єктів та узгодження всіх деталей.",
      icon: Lightbulb,
    },
    {
      title: "Виробництво та будівництво",
      description:
        "Виготовлення металоконструкцій, підготовка матеріалів та будівництво об'єкта під контролем інженерів.",
      icon: Building2,
    },
    {
      title: "Контроль якості та здача",
      description:
        "Суворий контроль кожного етапу робіт та здача об'єкта з повною документацією та гарантією.",
      icon: Shield,
    },
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2 className="section-title centered">Як ми працюємо</h2>
        <div className="process-diamond-layout">
          {/* Верхний блок */}
          <div className="diamond-row top-row">
            <div
              className={`process-card process-card-1`}
              style={{ "--animation-delay": "0ms" }}
            >
              <div className="process-number">01</div>
              <div className="process-icon">
                <Target size={40} />
              </div>
              <h3 className="process-title">{steps[0].title}</h3>
              <p className="process-description">{steps[0].description}</p>
            </div>
          </div>

          {/* Средний ряд - два блока */}
          <div className="diamond-row middle-row">
            <div
              className={`process-card process-card-2`}
              style={{ "--animation-delay": "150ms" }}
            >
              <div className="process-number">02</div>
              <div className="process-icon">
                <Lightbulb size={40} />
              </div>
              <h3 className="process-title">{steps[1].title}</h3>
              <p className="process-description">{steps[1].description}</p>
            </div>

            <div
              className={`process-card process-card-3`}
              style={{ "--animation-delay": "300ms" }}
            >
              <div className="process-number">03</div>
              <div className="process-icon">
                <Building2 size={40} />
              </div>
              <h3 className="process-title">{steps[2].title}</h3>
              <p className="process-description">{steps[2].description}</p>
            </div>
          </div>

          {/* Нижний блок */}
          <div className="diamond-row bottom-row">
            <div
              className={`process-card process-card-4`}
              style={{ "--animation-delay": "450ms" }}
            >
              <div className="process-number">04</div>
              <div className="process-icon">
                <Shield size={40} />
              </div>
              <h3 className="process-title">{steps[3].title}</h3>
              <p className="process-description">{steps[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
