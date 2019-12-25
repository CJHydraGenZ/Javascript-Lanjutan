// const talk = document.querySelector('.talk');

const content = document.querySelector(".content");

const greetings = ["i sick bitcess", "i fine thankyou", "blal bla bla bla bla"];

const belanja = [
  "ini berapa harganya",
  "aku mau cari barang ini",
  "barang ini ada gak"
];

const SpeechRecognation =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognation();

recognition.onstart = function() {
  console.log("suara aktip,kau bisa bicara");
};

recognition.onresult = function(e) {
  console.log(e);

  const current = e.resultIndex;

  const transcript = e.results[current][0].transcript;

  content.textContent = transcript;
  readOutLoad(transcript);
};

// const tombol = false
window.addEventListener("keydown", e => {
  if (e.which == 32 || e.keyCode == 32) {
    recognition.start();
  }
});

function readOutLoad(msg) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = msg;
  if (msg.includes("apa kabar bro")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];

    speech.text = finalText;
  }
  if (msg.includes("something good")) {
    const finalText = belanja[Math.floor(Math.random() * belanja.length)];

    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speech.lang = "ja";

  window.speechSynthesis.speak(speech);
}

// lang
// Afrikaans af
// + Basque eu
// + Bulgarian bg
// + Catalan ca
// + Arabic (Egypt) ar-EG
// +? Arabic (Jordan) ar-JO
// + Arabic (Kuwait) ar-KW
// +? Arabic (Lebanon) ar-LB
// + Arabic (Qatar) ar-QA
// + Arabic (UAE) ar-AE
// .+ Arabic (Morocco) ar-MA
// .+ Arabic (Iraq) ar-IQ
// .+ Arabic (Algeria) ar-DZ
// .+ Arabic (Bahrain) ar-BH
// .+ Arabic (Lybia) ar-LY
// .+ Arabic (Oman) ar-OM
// .+ Arabic (Saudi Arabia) ar-SA
// .+ Arabic (Tunisia) ar-TN
// .+ Arabic (Yemen) ar-YE
// + Czech cs
// + Dutch nl-NL
// + English (Australia) en-AU
// +? English (Canada) en-CA
// + English (India) en-IN
// + English (New Zealand) en-NZ
// + English (South Africa) en-ZA
// + English(UK) en-GB
// + English(US) en-US
// + Finnish fi
// + French fr-FR
// + Galician gl
// + German de-DE
// + Hebrew he
// + Hungarian hu
// + Icelandic is
// + Italian it-IT
// + Indonesian id
// + Japanese ja
// + Korean ko
// + Latin la
// + Mandarin Chinese zh-CN
// + Traditional Taiwan zh-TW
// +? Simplified China zh-CN ?
// + Simplified Hong Kong zh-HK
// + Yue Chinese (Traditional Hong Kong) zh-yue
// + Malaysian ms-MY
// + Norwegian no-NO
// + Polish pl
// +? Pig Latin xx-piglatin
// + Portuguese pt-PT
// .+ Portuguese (brasil) pt-BR
// + Romanian ro-RO
// + Russian ru
// + Serbian sr-SP
// + Slovak sk
// + Spanish (Argentina) es-AR
// + Spanish(Bolivia) es-BO
// +? Spanish( Chile) es-CL
// +? Spanish (Colombia) es-CO
// +? Spanish(Costa Rica) es-CR
// + Spanish(Dominican Republic) es-DO
// + Spanish(Ecuador) es-EC
// + Spanish(El Salvador) es-SV
// + Spanish(Guatemala) es-GT
// + Spanish(Honduras) es-HN
// + Spanish(Mexico) es-MX
// + Spanish(Nicaragua) es-NI
// + Spanish(Panama) es-PA
// + Spanish(Paraguay) es-PY
// + Spanish(Peru) es-PE
// + Spanish(Puerto Rico) es-PR
// + Spanish(Spain) es-ES
// + Spanish(US) es-US
// + Spanish(Uruguay) es-UY
// + Spanish(Venezuela) es-VE
// + Swedish sv-SE
// + Turkish tr
// + Zulu zu
