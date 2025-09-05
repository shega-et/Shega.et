// French Translations (demo placeholders)
(function() {
  if (!document.currentScript) return;
  document.currentScript.setAttribute('data-lang','');

  const texts = {
    heroTitle: "Bienvenue chez Shega International",
    heroSubtitle: "Favoriser l'innovation et l'excellence à l'échelle mondiale",
    heroLearnMore: "En savoir plus",
    missionTitle: "Notre Mission",
    missionText: "Chez Shega International, notre mission est de promouvoir une croissance durable et de favoriser le changement positif grâce à des solutions innovantes.",
    aboutTitle: "À propos de Shega International",
    aboutSubtitle: "Qui sommes-nous",
    aboutText: "Shega International est une organisation de premier plan dédiée à l'autonomisation des individus et des organisations par des solutions innovantes.",
    valuesTitle: "Nos Valeurs Fondamentales",
    servicesTitle: "Nos Services",
    newsTitle: "Actualités & Perspectives",
    eventsTitle: "Événements à Venir",
    contactTitle: "Contactez-nous",
    labelName: "Nom",
    labelEmail: "Email",
    labelMessage: "Message",
    submitBtn: "Envoyer"
  };

  for (const id in texts) {
    const el = document.getElementById(id);
    if (el) el.textContent = texts[id];
  }
})();