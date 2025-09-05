// English Translations (dummy, for demo)
(function() {
  // Mark this script so it can be removed on language switch
  if (!document.currentScript) return;
  document.currentScript.setAttribute('data-lang','');

  const texts = {
    heroTitle: "Welcome to Shega International",
    heroSubtitle: "Empowering Innovation & Excellence Across Borders",
    heroLearnMore: "Learn More",
    missionTitle: "Our Mission",
    missionText: "At Shega International, our mission is to foster sustainable growth, nurture talent, and drive impactful change through innovative solutions and global partnerships.",
    aboutTitle: "About Shega International",
    aboutSubtitle: "Who We Are",
    aboutText: "Shega International is a leading organization dedicated to empowering individuals and organizations through innovative solutions, strategic partnerships, and a commitment to excellence. Our multidisciplinary team brings together years of expertise across various industries, working collaboratively to deliver transformative results.",
    valuesTitle: "Our Core Values",
    servicesTitle: "Our Services",
    newsTitle: "News & Insights",
    eventsTitle: "Upcoming Events",
    contactTitle: "Contact Us",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    submitBtn: "Send Message"
  };

  for (const id in texts) {
    const el = document.getElementById(id);
    if (el) el.textContent = texts[id];
  }
})();