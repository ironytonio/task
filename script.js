window.cdaaas = window.cdaaas || {};
window.cdaaas.SETTINGS = window.cdaaas.SETTINGS || {};
window.cdaaas.PAGE_ANALYTICS_DATA = {
  adsCount: 5,
  channel: "desktop",
  contentId: "c9a45272-b880-4908-9304-76f364238b6a",
  contentType: "noticia",
  elementCount: 18,
  featuredElement: "",
  imageCount: 1,
  metadata:
    "wordCount=479\u0026wordCountRange=371 a 490\u0026multicontent-podcast=1\u0026comments=true\u0026summary=false",
  pageType: "multi-content",
  paragraphCount: 13,
  serviceWorker: true,
  videoCount: 3,
};
window.cdaaas.helpers = window.cdaaas.helpers || {};
window.cdaaas.internals = {};
window.HorizonClient = new Promise((resolve, reject) => {
  window.cdaaas.internals.resolveHorizonPromise = resolve;
  window.cdaaas.internals.rejectHorizonPromise = reject;
});
window.HorizonHelpers = { unloadCallbacks: [] };
window.cdaaas.featureFlags = [];
window.cdaaas.hasFF = (ff) => window.cdaaas.featureFlags.includes(ff);
window.glbDebug = window.cdaaas.debugger = {
  firstTick: Date.now(),
  logs: [],
  tick: () => Date.now() - window.cdaaas.debugger.firstTick,
  logTick: (label) =>
    window.cdaaas.debugger.logs.push({
      [label]: window.cdaaas.debugger.tick(),
    }),
};

window.glb = window.glb || {};
window.glb.barra = {
  exibeAssineJa: true,
  exibeCentral: false,
  incluirSawpf: true,
  itemCustomizado: { cor: "", imagem: "", texto: "", url: "" },
};
window.glb.getCurrentEnv = () => "prod";
window.cdaaas = window.cdaaas || {};
window.cdaaas.SETTINGS = {
  MOBILE_GROUP: "desktop",
  ENV: "prod",
  CHANNEL: "desktop",
  CANONICAL_URL:
    "https://g1.globo.com/sp/sao-paulo/noticia/2023/07/04/ze-celso-e-internado-apos-incendio-atingir-apartamento-onde-mora-em-sp.ghtml",
  TEMPLATE_TYPE: "multicontent",
  TITLE: "Digital Real: Como Investir",
  SITE_ID: "g1",
  SITE_NAME: "G1",
  COR: "#c4170c",
  WEBMEDIA_ENV: "prod",
  CATEGORIAS: ["materia", "multi-content", "sp/sao-paulo"],
  PRODUCT_UA: "UA-296593-3",
  TAG_MANAGER_STRUCTURE_TREE: '["G1", "SP", "São Paulo"]',
  TAG_MANAGER_PAGE_NAME: "materia",
  TAG_MANAGER_SITE_PAGE: "g1/saopaulo/materias",
  RESOURCE_ID: "c9a45272-b880-4908-9304-76f364238b6a",
};

// JS
function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  if (!firstName || !lastName || !email || !phone) {
    alert("Усі поля обов’язкові для заповнення!");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Невірний формат електронної пошти!");
    return false;
  }
  window.location.href = "thank-you.html";
  return false;
}

const phoneInput = document.querySelector("#phone");
const iti = window.intlTelInput(phoneInput, {
  initialCountry: "ua",
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

function scrollToForm() {
  document
    .getElementById("form-section")
    .scrollIntoView({ behavior: "smooth" });
}

let lastScroll = 0;
let timeoutId = null;
let hasTriggered = false;

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const currentScroll = window.scrollY;

  if (!hasTriggered && currentScroll > lastScroll && currentScroll > 0) {
    header.classList.add("hidden");
    header.classList.remove("sticky");

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      if (currentScroll > 0) {
        header.classList.remove("hidden");
        header.classList.add("sticky");
        hasTriggered = true;
      }
    }, 500);
  } else if (hasTriggered && currentScroll > 0) {
    header.classList.remove("hidden");
    header.classList.add("sticky");
  } else if (currentScroll === 0) {
    header.classList.remove("hidden");
    header.classList.remove("sticky");
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});
