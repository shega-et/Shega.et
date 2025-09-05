// Arabic Translations (demo placeholders)
(function() {
  if (!document.currentScript) return;
  document.currentScript.setAttribute('data-lang','');

  const texts = {
    heroTitle: "مرحبًا بكم في شيغا إنترناشيونال",
    heroSubtitle: "تمكين الابتكار والتميز عبر الحدود",
    heroLearnMore: "اعرف المزيد",
    missionTitle: "مهمتنا",
    missionText: "في شيغا إنترناشيونال، مهمتنا هي تعزيز النمو المستدام ودفع التغيير من خلال حلول مبتكرة وشراكات عالمية.",
    aboutTitle: "حول شيغا إنترناشيونال",
    aboutSubtitle: "من نحن",
    aboutText: "شيغا إنترناشيونال هي منظمة رائدة مكرسة لتمكين الأفراد والمنظمات من خلال الحلول المبتكرة.",
    valuesTitle: "قيمنا الأساسية",
    servicesTitle: "خدماتنا",
    newsTitle: "الأخبار والرؤى",
    eventsTitle: "الأحداث القادمة",
    contactTitle: "اتصل بنا",
    labelName: "الاسم",
    labelEmail: "البريد الإلكتروني",
    labelMessage: "الرسالة",
    submitBtn: "إرسال"
  };

  for (const id in texts) {
    const el = document.getElementById(id);
    if (el) el.textContent = texts[id];
  }
})();