import React from "react";
import { Shield, Lightbulb, Heart } from "lucide-react";
import "../../styles/components/about/ValuesSection.scss";

const ValuesSection = () => {
  const values = [
    {
      title: "Надійність",
      description: "Ми виконуємо обіцянки та гарантуємо якість",
      icon: Shield,
    },
    {
      title: "Інновації",
      description: "Постійно вдосконалюємо процеси та технології",
      icon: Lightbulb,
    },
    {
      title: "Відповідальність",
      description:
        "Працюємо з урахуванням інтересів клієнтів, суспільства та навколишнього середовища",
      icon: Heart,
    },
  ];

  return (
    <section id="values" className="values-section">
      <div className="container">
        <h2 className="section-title centered">Наші цінності</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={index}
              className={`value-card value-card-${index + 1}`}
              style={{ "--animation-delay": `${index * 100}ms` }}
            >
              <div className="value-icon">
                <value.icon size={40} />
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <div className="value-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
