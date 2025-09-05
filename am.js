// Amharic Translations (demo placeholders)
(function() {
  if (!document.currentScript) return;
  document.currentScript.setAttribute('data-lang','');

  const texts = {
    heroTitle: "ወደ ሸጋ ኢንተርናሽናል እንኳን ደህና መጡ",
    heroSubtitle: "ኢኖቬሽንን እና ብልጽግናን በዓለም አቀፍ ደረጃ ማሟሟል",
    heroLearnMore: "ተጨማሪ ያንብቡ",
    missionTitle: "ተልዕኮች",
    missionText: "በሸጋ ኢንተርናሽናል የእኛ ተልዕኮ በቅርብ እና በዓለም አቀፍ ቅድሚያ የተመሰረተ እና የሚያስተዳድሩ መፍትሄዎችን ማቅረብ ነው።",
    aboutTitle: "ስለ ሸጋ ኢንተርናሽናል",
    aboutSubtitle: "እኛ ማን ነን",
    aboutText: "ሸጋ ኢንተርናሽናል አዲስ ሀሳቦችን የሚያቀርቡ ድርጅት ነው።",
    valuesTitle: "ዋና እሴቶቻችን",
    servicesTitle: "አገልግሎቶቻችን",
    newsTitle: "ዜና እና ሃሳቦች",
    eventsTitle: "መጪዎቹ ክስተቶች",
    contactTitle: "ያግኙን",
    labelName: "ስም",
    labelEmail: "ኢሜይል",
    labelMessage: "መልእክት",
    submitBtn: "ላክ"
  };

  for (const id in texts) {
    const el = document.getElementById(id);
    if (el) el.textContent = texts[id];
  }
})();