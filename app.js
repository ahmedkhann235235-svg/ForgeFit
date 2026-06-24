let streak = localStorage.getItem("streak") || 0;
let lastWorkout = localStorage.getItem("lastWorkout");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("streak").innerText =
    "Streak: " + streak + " days";
});

function startWorkout() {
  switchScreen("workout");
}

function finishWorkout() {
  let today = new Date().toDateString();

  if (lastWorkout !== today) {
    streak++;
    localStorage.setItem("streak", streak);
    localStorage.setItem("lastWorkout", today);

    alert("🔥 Streak Increased!");
  } else {
    alert("Workout already done today ✅");
  }

  document.getElementById("streak").innerText =
    "Streak: " + streak + " days";

  switchScreen("home");
}

function completeSet() {
  alert("Set Done ✅");
}

function switchScreen(screen) {
  document.querySelectorAll(".screen").forEach(s =>
    s.classList.remove("active")
  );

  document.getElementById(screen).classList.add("active");
}

function goHome() {
  switchScreen("home");
}

function goWorkout() {
  switchScreen("workout");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
    }
