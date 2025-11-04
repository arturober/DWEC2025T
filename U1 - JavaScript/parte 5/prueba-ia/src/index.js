const texto = document.getElementById("texto");
const traduccion = document.getElementById("traduccion");
const resumen = document.getElementById("resumen");

const translateBtn = document.getElementById("translate-btn");
const summaryBtn = document.getElementById("summary-btn");

async function detectLanguage(text) {
  const detector = await LanguageDetector.create({
    expectedInputLanguages: ["en", "es"],
  });
  const results = await detector?.detect(text);
  return results[0]?.detectedLanguage ?? "en";
}

async function translate(text, input, output) {
  const translator = await Translator.create({
    sourceLanguage: input,
    targetLanguage: output,
  });
  return await translator.translate(text);
}

async function summarize(text) {
  const summarizer = await Summarizer.create({
    sharedContext:
      "Titular impactante para un artículo de noticias.",
    type: "tldr",
    length: "short",
    format: "plain-text",
    expectedInputLanguages: ["en", "es"],
    outputLanguage: "es",
  });
  return await summarizer.summarize(text);
}

translateBtn.addEventListener("click", async () => {
  const text = texto.value;
  const lang = await detectLanguage(text);
  const translatedText = await translate(
    text,
    lang,
    lang === "en" ? "es" : "en"
  );
  traduccion.value = translatedText;
});

summaryBtn.addEventListener("click", async () => {
  const text = traduccion.value;
  const summary = await summarize(text);
  resumen.value = summary;
});
