var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternative = 5;

var synth = window.speechSynthesis;

function startRecognition(){
  recognition.start();
  document.getElementById("listen").style.backgroundColor="orange";
  console.log('start speaking, I an listening..');
}

function reRead(utterText){
  text = document.getElementById("word").innerHTML;
  utterText = new SpeechSynthesisUtterance(text);
  document.getElementById("again").style.backgroundColor="orange";
  console.log(text);
  synth.speak(utterText);
  document.getElementById("again").style.backgroundColor="green";
}

recognition.onresult = function(event){
  var speechGot = event.results[0][0].transcript.toLowerCase();
  console.log(speechGot);
  var utterText = new SpeechSynthesisUtterance(speechGot);
  synth.speak(utterText);
  console.log('I am speaking your text now.')
  document.getElementById('word').innerHTML = speechGot;
  document.getElementById("listen").style.backgroundColor="green";
  return utterText;
}