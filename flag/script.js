let isMuted = false; // mute ka flag

function toggleMute() {
  isMuted = !isMuted;
  const btn = document.getElementById("muteBtn");
  btn.textContent = isMuted ? "Unmute" : "Mute";
}
function search() {
  const state = document.getElementById("State").value.trim().toLowerCase();

  if (!state) {
    alert("State Empty");
    return;
  }

  const flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "text-danger", "fs-3", "state-flag");
  flag.style.position = "absolute";

  let exactName = ""; 
  if (state === "delhi") { flag.style.top = "190px"; flag.style.left = "520px"; exactName="Delhi"; }
  else if (state === "madhya pradesh" || state === "mp") { flag.style.top="315px"; flag.style.left="420px"; exactName="Madhya Pradesh"; }
  else if (state === "ladakh") { flag.style.top="40px"; flag.style.left="450px"; exactName="Ladakh"; }
  else if (state === "jammu & kashmir" || state === "jammu and kashmir" || state === "jk") { flag.style.top="80px"; flag.style.left="420px"; exactName="Jammu and Kashmir"; }
  else if (state === "himachal pradesh" || state === "hp") { flag.style.top="110px"; flag.style.left="470px"; exactName="Himachal Pradesh"; }
  else if (state === "punjab") { flag.style.top="140px"; flag.style.left="420px"; exactName="Punjab"; }
  else if (state === "uttarakhand" || state === "uk") { flag.style.top="150px"; flag.style.left="510px"; exactName="Uttarakhand"; }
  else if (state === "haryana") { flag.style.top="230px"; flag.style.left="330px"; exactName="Haryana"; }
  else if (state === "uttar pradesh" || state === "up") { flag.style.top="230px"; flag.style.left="550px"; exactName="Uttar Pradesh"; }
  else if (state === "rajasthan") { flag.style.top="220px"; flag.style.left="320px"; exactName="Rajasthan"; }
  else if (state === "bihar") { flag.style.top="250px"; flag.style.left="700px"; exactName="Bihar"; }
  else if (state === "jharkhand") { flag.style.top="300px"; flag.style.left="700px"; exactName="Jharkhand"; }
  else if (state === "west bengal" || state === "wb") { flag.style.top="320px"; flag.style.left="770px"; exactName="West Bengal"; }
  else if (state === "chhattisgarh") { flag.style.top="350px"; flag.style.left="600px"; exactName="Chhattisgarh"; }
  else if (state === "maharashtra" || state === "mh") { flag.style.top="380px"; flag.style.left="390px"; exactName="Maharashtra"; }
  else if (state === "gujarat") { flag.style.top="310px"; flag.style.left="320px"; exactName="Gujarat"; }
  else if (state === "goa") { flag.style.top="490px"; flag.style.left="355px"; exactName="Goa"; }
  else if (state === "karnataka") { flag.style.top="520px"; flag.style.left="390px"; exactName="Karnataka"; }
  else if (state === "kerala") { flag.style.top="560px"; flag.style.left="390px"; exactName="Kerala"; }
  else if (state === "tamil nadu" || state === "tn") { flag.style.top="600px"; flag.style.left="470px"; exactName="Tamil Nadu"; }
  else if (state === "andhra pradesh" || state === "ap") { flag.style.top="500px"; flag.style.left="480px"; exactName="Andhra Pradesh"; }
  else if (state === "telangana" || state === "ts") { flag.style.top="450px"; flag.style.left="480px"; exactName="Telangana"; }
  else if (state === "odisha" || state === "orissa") { flag.style.top="360px"; flag.style.left="670px"; exactName="Odisha"; }
  else if (state === "sikkim") { flag.style.top="215px"; flag.style.left="790px"; exactName="Sikkim"; }
  else if (state === "assam") { flag.style.top="240px"; flag.style.left="850px"; exactName="Assam"; }
  else if (state === "arunachal pradesh") { flag.style.top="200px"; flag.style.left="930px"; exactName="Arunachal Pradesh"; }
  else if (state === "nagaland") { flag.style.top="240px"; flag.style.left="960px"; exactName="Nagaland"; }
  else if (state === "manipur") { flag.style.top="265px"; flag.style.left="960px"; exactName="Manipur"; }
  else if (state === "mizoram") { flag.style.top="310px"; flag.style.left="930px"; exactName="Mizoram"; }
  else if (state === "tripura") { flag.style.top="300px"; flag.style.left="890px"; exactName="Tripura"; }
  else if (state === "meghalaya") { flag.style.top="255px"; flag.style.left="860px"; exactName="Meghalaya"; }
  else { alert("Invalid State Name!"); return; }

  document.getElementById("Map").appendChild(flag);

  document.getElementById("State").value = "";

  
  playSound();
  speakState(exactName);
}


function speakState(stateName) {
  if (isMuted) return; // mute check
  const speech = new SpeechSynthesisUtterance();
  speech.text = stateName + " selected";
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;
  speech.lang = "en-IN";

  const voices = speechSynthesis.getVoices();
  speech.voice = voices.find(v => v.name.includes("Google")) || voices[0];

  speechSynthesis.speak(speech);
}
function playSound() {
  if (isMuted) return;
  const sound = document.getElementById("notifySound");
  sound.currentTime = 0;
  sound.play();
}
