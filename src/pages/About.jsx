// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import useScrollAnimation from "../utils/useScrollAnimation";
// import "../styles/pages/_About.scss";

// import aboutImage from "../assets/main-bg - Copy.png";
// import historyImage2016 from "../assets/main-bg - Copy.png";
// import historyImage2019 from "../assets/main-bg - Copy.png";
// import historyImage2024 from "../assets/main-bg - Copy.png";
// import philosophyImage1 from "../assets/main-bg - Copy.png";
// import philosophyImage2 from "../assets/main-bg - Copy.png";
// import teamImage from "../assets/main-bg - Copy.png";
// import valueImage1 from "../assets/main-bg - Copy.png";
// import valueImage2 from "../assets/main-bg - Copy.png";
// import valueImage3 from "../assets/main-bg - Copy.png";
// import featuredProjectImage from "../assets/main-bg - Copy.png";
// import processImage from "../assets/main-bg - Copy.png";
// import { Link } from "react-router-dom";

// const About = () => {
//   const { t } = useTranslation();
//   const [statCounted, setStatCounted] = useState(false);

//   // Використовуємо хук для анімацій з вашими параметрами
//   useScrollAnimation({
//     selector: ".animate-on-scroll",
//     threshold: 0.8,
//     once: true,
//   });

//   // Ефект для анімації лічильників
//   useEffect(() => {
//     const animateCounters = () => {
//       if (statCounted) return;

//       const statNumbers = document.querySelectorAll(".stat-number");

//       statNumbers.forEach((element) => {
//         // Отримуємо цільове значення
//         const targetText = element.textContent;
//         const isTextOnly = isNaN(
//           parseInt(targetText.replace(/[^0-9]/g, ""), 10)
//         );

//         if (isTextOnly) return; // Пропускаємо нечислові значення (наприклад, "ISO")

//         // Отримуємо числове значення та суфікс
//         const numericPart = targetText.replace(/[^0-9]/g, "");
//         const target = parseInt(numericPart, 10);
//         const suffix = targetText.replace(numericPart, "");

//         // Початкове значення
//         let count = 0;

//         // Визначаємо тривалість і крок анімації
//         const duration = 2000; // 2 секунди
//         const steps = 50;
//         const stepValue = Math.ceil(target / steps);
//         const stepTime = duration / steps;

//         // Запускаємо інтервал для анімації
//         const counter = setInterval(() => {
//           count += stepValue;

//           // Перевіряємо, чи досягли цільового значення
//           if (count >= target) {
//             count = target;
//             clearInterval(counter);
//           }

//           // Оновлюємо текст
//           element.textContent = count + suffix;
//         }, stepTime);
//       });

//       setStatCounted(true);
//     };

//     // Обробник скролу для перевірки видимості контейнера статистики
//     const handleScroll = () => {
//       const statsContainer = document.querySelector(".stats-container");
//       if (!statsContainer) return;

//       const rect = statsContainer.getBoundingClientRect();
//       const isVisible = rect.top < window.innerHeight * 0.8;

//       if (isVisible && !statCounted) {
//         animateCounters();
//       }
//     };

//     // Додаємо слухача події скролу
//     window.addEventListener("scroll", handleScroll);

//     // Перевіряємо при першому завантаженні
//     setTimeout(handleScroll, 500);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [statCounted]);

//   // Паралакс-ефект для декоративних елементів
//   useEffect(() => {
//     const handleParallax = () => {
//       const parallaxElements = document.querySelectorAll(".parallax");
//       const scrollPosition = window.scrollY;

//       parallaxElements.forEach((element) => {
//         const speed = element.dataset.speed || 0.15;
//         element.style.transform = `translateY(${scrollPosition * speed}px)`;
//       });
//     };

//     window.addEventListener("scroll", handleParallax);

//     return () => {
//       window.removeEventListener("scroll", handleParallax);
//     };
//   }, []);

//   // Ефект для плавної появи зображень
//   useEffect(() => {
//     const imageElements = document.querySelectorAll(
//       ".about-image img, .history-image img, .philosophy-image img, .team-image, .value-image img, .featured-project-image img"
//     );

//     imageElements.forEach((img) => {
//       // Додаємо клас для анімації при завантаженні зображення
//       img.addEventListener("load", () => {
//         img.classList.add("loaded");
//       });

//       // Якщо зображення вже завантажено
//       if (img.complete) {
//         img.classList.add("loaded");
//       }
//     });
//   }, []);

//   return (
//     <div className="about-wrapper">
//       <div
//         className="decorative-circle circle-1 parallax"
//         data-speed="0.05"
//       ></div>
//       <div
//         className="decorative-circle circle-2 parallax"
//         data-speed="0.1"
//       ></div>
//       <div
//         className="decorative-circle circle-3 parallax"
//         data-speed="0.08"
//       ></div>
//       <div className="decorative-line line-1 parallax" data-speed="0.06"></div>
//       <div className="decorative-line line-2 parallax" data-speed="0.07"></div>
//       <div className="decorative-text parallax" data-speed="0.04">
//         ТД СТОЛИЦЯ МАРКЕТ
//       </div>

//       <div className="container">
//         {/* Головна секція */}
//         <section className="about-section main-section">
//           <h1 className="about-title animate-on-scroll fade-in">
//             {t("about.title")}
//           </h1>

//           <div className="about-content">
//             <div className="about-image-container animate-on-scroll slide-right">
//               <div className="about-image">
//                 <img src={aboutImage} alt="ТД Столиця Маркет" />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="about-image-caption">
//                 <span className="caption-year">2016</span>
//                 <span className="caption-separator">|</span>
//                 <span className="caption-text">ТД Столиця Маркет</span>
//               </div>
//             </div>

//             <div className="about-text-container">
//               <p className="about-text animate-on-scroll slide-left">
//                 {t("about.main.paragraph1")}
//               </p>
//               <p className="about-text animate-on-scroll slide-left">
//                 {t("about.main.paragraph2")}
//               </p>
//             </div>
//           </div>

//           {/* Статистика */}
//           <div className="stats-container animate-on-scroll slide-up">
//             <div className="stat-item">
//               <span className="stat-number">7+</span>
//               <span className="stat-title">{t("about.stats.years")}</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number">100+</span>
//               <span className="stat-title">{t("about.stats.specialists")}</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number">1</span>
//               <span className="stat-title">{t("about.stats.revenue")}</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number">ISO</span>
//               <span className="stat-title">
//                 {t("about.stats.certificates")}
//               </span>
//             </div>
//           </div>

//           {/* Додаткова інформація */}
//           <div className="additional-content">
//             <div className="left-column animate-on-scroll slide-right">
//               <p className="about-text">{t("about.main.paragraph3")}</p>
//             </div>
//             <div className="right-column animate-on-scroll slide-left">
//               <p className="about-text">{t("about.main.paragraph4")}</p>
//             </div>
//           </div>
//         </section>

//         {/* Велика цитата */}
//         <section className="quote-section animate-on-scroll fade-in">
//           <div className="main-quote">
//             <svg
//               className="quote-icon"
//               viewBox="0 0 24 24"
//               width="48"
//               height="48"
//             >
//               <path d="M7.17 22C5.4 22 4 20.6 4 18.83V14c0-3.31 2.69-6 6-6h.17V6.83C10.17 5.4 8.77 4 7 4H6c-.55 0-1-.45-1-1s.45-1 1-1h1c2.76 0 5 2.24 5 5v2c0 2.21-1.79 4-4 4h-2v5.83c0 .28.22.5.5.5h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.83zm8 0c-1.76 0-3.17-1.4-3.17-3.17V14c0-3.31 2.69-6 6-6h.17V6.83C18.17 5.4 16.77 4 15 4h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c2.76 0 5 2.24 5 5v2c0 2.21-1.79 4-4 4h-2v5.83c0 .28.22.5.5.5h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.83z" />
//             </svg>
//             <blockquote>
//               <p>{t("about.mainQuote")}</p>
//             </blockquote>
//             <svg
//               className="quote-icon quote-close"
//               viewBox="0 0 24 24"
//               width="48"
//               height="48"
//             >
//               <path d="M16.83 2C18.6 2 20 3.4 20 5.17V10c0 3.31-2.69 6-6 6h-.17v1.17c0 1.43 1.4 2.83 3.17 2.83h1c.55 0 1 .45 1 1s-.45 1-1 1h-1c-2.76 0-5-2.24-5-5v-2c0-2.21 1.79-4 4-4h2V5.17c0-.28-.22-.5-.5-.5h-.5c-.55 0-1-.45-1-1s.45-1 1-1h.83zm-8 0C10.6 2 12 3.4 12 5.17V10c0 3.31-2.69 6-6 6h-.17v1.17c0 1.43 1.4 2.83 3.17 2.83h1c.55 0 1 .45 1 1s-.45 1-1 1h-1c-2.76 0-5-2.24-5-5v-2c0-2.21 1.79-4 4-4h2V5.17c0-.28-.22-.5-.5-.5h-.5c-.55 0-1-.45-1-1s.45-1 1-1h.83z" />
//             </svg>
//           </div>
//         </section>

//         {/* Секція з виділеним проектом */}
//         <section className="featured-project-section">
//           <div className="featured-project-container">
//             <div className="featured-content animate-on-scroll slide-right">
//               <h2 className="section-title">
//                 {t("about.featuredProject.title")}
//               </h2>
//               <p className="featured-description">
//                 {t("about.featuredProject.description")}
//               </p>
//             </div>
//             <div className="featured-project-image animate-on-scroll scale-in">
//               <img
//                 src={featuredProjectImage}
//                 alt={t("about.featuredProject.title")}
//               />
//             </div>
//           </div>
//         </section>

//         {/* Секція історії */}
//         <section className="about-section history-section">
//           <h2 className="section-title animate-on-scroll fade-in">
//             {t("about.history.title")}
//           </h2>

//           <div className="history-timeline">
//             <div className="history-item animate-on-scroll slide-up">
//               <div className="history-year">2016</div>
//               <div className="history-content">
//                 <p className="history-text">{t("about.history.paragraph1")}</p>
//                 <div className="history-image">
//                   <img
//                     src={historyImage2016}
//                     alt="2016 - Заснування компанії"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="history-item animate-on-scroll slide-up">
//               <div className="history-year">2019</div>
//               <div className="history-content">
//                 <p className="history-text">{t("about.history.paragraph2")}</p>
//                 <div className="history-image">
//                   <img
//                     src={historyImage2019}
//                     alt="2019 - Сертифікація та розвиток"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="history-item animate-on-scroll slide-up">
//               <div className="history-year">2024</div>
//               <div className="history-content">
//                 <p className="history-text">{t("about.history.paragraph3")}</p>
//                 <div className="history-image">
//                   <img src={historyImage2024} alt="2024 - Сучасний етап" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Процес роботи */}
//         <section className="process-section">
//           <div className="process-image-container">
//             <div className="process-image animate-on-scroll scale-in">
//               <img src={processImage} alt={t("about.process.title")} />
//             </div>
//           </div>
//           <div className="process-content">
//             <h2 className="section-title animate-on-scroll fade-in">
//               {t("about.process.title")}
//             </h2>
//             <div className="process-steps">
//               {[1, 2, 3, 4].map((step) => (
//                 <div
//                   key={step}
//                   className="process-step animate-on-scroll slide-up"
//                 >
//                   <div className="step-number">{step}</div>
//                   <div className="step-content">
//                     <h3 className="step-title">
//                       {t(`about.process.steps.step${step}.title`)}
//                     </h3>
//                     <p className="step-description">
//                       {t(`about.process.steps.step${step}.description`)}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Секція філософії */}
//         <section className="about-section philosophy-section animate-on-scroll fade-in">
//           <h2 className="section-title">{t("about.philosophy.title")}</h2>

//           <div className="philosophy-content">
//             <div className="philosophy-item">
//               <p className="about-text">{t("about.philosophy.paragraph1")}</p>
//               <p className="about-text">{t("about.philosophy.paragraph2")}</p>

//               <div className="philosophy-image animate-on-scroll scale-in">
//                 <img src={philosophyImage1} alt="Наша філософія" />
//               </div>
//             </div>

//             <div className="philosophy-item">
//               <p className="about-text">{t("about.philosophy.paragraph3")}</p>
//               <p className="about-text">{t("about.philosophy.paragraph4")}</p>

//               <div className="philosophy-image animate-on-scroll scale-in">
//                 <img src={philosophyImage2} alt="Наша філософія" />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Секція з командою */}
//         <section className="about-section team-section">
//           <h2 className="section-title animate-on-scroll fade-in">
//             {t("about.team.title")}
//           </h2>

//           <div className="team-image-container animate-on-scroll slide-up">
//             <img src={teamImage} alt="Наша команда" className="team-image" />
//             <div className="team-image-overlay">
//               <div className="team-quote">
//                 <p>{t("about.team.quote")}</p>
//               </div>
//             </div>
//           </div>

//           <div className="team-text animate-on-scroll fade-in">
//             <p className="about-text">{t("about.team.paragraph1")}</p>
//             <p className="about-text">{t("about.team.paragraph2")}</p>
//           </div>
//         </section>

//         {/* Секція стратегії */}
//         <section className="about-section strategy-section">
//           <h2 className="section-title animate-on-scroll fade-in">
//             {t("about.strategy.title")}
//           </h2>

//           <div className="about-content">
//             <p className="about-text animate-on-scroll fade-in">
//               {t("about.strategy.intro")}
//             </p>

//             <h3 className="strategy-subtitle animate-on-scroll fade-in">
//               {t("about.strategy.goalsTitle")}
//             </h3>

//             <div className="strategy-goals">
//               {[1, 2, 3, 4, 5].map((goalNum) => (
//                 <div
//                   key={goalNum}
//                   className="strategy-goal animate-on-scroll slide-up"
//                   style={{ "--item-index": goalNum - 1 }}
//                 >
//                   <h4 className="goal-title">
//                     {t(`about.strategy.goals.goal${goalNum}.title`)}
//                   </h4>
//                   <ul className="goal-list">
//                     {t(`about.strategy.goals.goal${goalNum}.items`, {
//                       returnObjects: true,
//                     }).map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             <h3 className="values-subtitle animate-on-scroll fade-in">
//               {t("about.strategy.valuesTitle")}
//             </h3>

//             <div className="values-container">
//               {[1, 2, 3].map((valueNum) => (
//                 <div
//                   key={valueNum}
//                   className="value-item animate-on-scroll slide-up"
//                   style={{ "--item-index": valueNum - 1 }}
//                 >
//                   <div className="value-image">
//                     <img
//                       src={
//                         valueNum === 1
//                           ? valueImage1
//                           : valueNum === 2
//                           ? valueImage2
//                           : valueImage3
//                       }
//                       alt={t(`about.strategy.values.value${valueNum}.title`)}
//                     />
//                   </div>
//                   <h4 className="value-title">
//                     {t(`about.strategy.values.value${valueNum}.title`)}
//                   </h4>
//                   <p className="value-description">
//                     {t(`about.strategy.values.value${valueNum}.description`)}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Фінальна секція з закликом до дії */}
//         <section className="about-section cta-section animate-on-scroll fade-in">
//           <div className="cta-container">
//             <h2 className="cta-title">{t("about.cta.title")}</h2>
//             <p className="cta-text">{t("about.cta.text")}</p>
//             <Link to="/contact" className="cta-button">
//               {t("about.cta.button")}
//             </Link>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default About;
