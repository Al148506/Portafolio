function getBrowserLanguage() {
  const lang = navigator.language || navigator.userLanguage;
  return lang.startsWith("es") ? "es" : "en";
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";

  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n").split(".");
    let text = translations[lang];

    key.forEach(k => text = text?.[k]);

    if (text) el.innerHTML = text;
  });
}

// Idioma inicial (prioridad)
const savedLanguage = localStorage.getItem("language");
const initialLanguage = savedLanguage || getBrowserLanguage();
setLanguage(initialLanguage);
