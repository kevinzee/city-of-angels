console.log("script running");
// Select the input elements!
const goSearch = document.querySelector("#go-search");
const eatSearch = document.querySelector("#eat-search");
const doSearch = document.querySelector("#do-search");

// Select the go cards
const griffithObservatory = document.querySelector("#go-1");
const losangelesZoo = document.querySelector("#go-2");
const rodeoDrive = document.querySelector("#go-3");

// Select the eat cards
const bajaSubs = document.querySelector("#eat-1");
const urthCaffe = document.querySelector("#eat-2");
const capo = document.querySelector("#eat-3");

// Select the do cards
const uniStu = document.querySelector("#do-1");
const six = document.querySelector("#do-2");
const getty = document.querySelector("#do-3");
const pier = document.querySelector("#do-4");


goSearch.addEventListener('input', e => {
  let choice = e.target.value;
  let result = handleChoice(choice);
  if (result === "found!") {
    e.target.value = "";
  }
})

eatSearch.addEventListener('input', e => {
  let choice = e.target.value;
  let result = handleChoice(choice);
  if (result === "found!") {
    e.target.value = "";
  }
})

doSearch.addEventListener('input', e => {
  let choice = e.target.value;
  let result = handleChoice(choice);
  if (result === "found!") {
    e.target.value = "";
  }
})

function handleChoice(choice) {
  if (choice.toLowerCase().includes("sightseeing")) {
    griffithObservatory.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("animals")) {
    losangelesZoo.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("shopping")) {
    rodeoDrive.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("cheap")) {
    bajaSubs.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("average")) {
    urthCaffe.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("expensive")) {
    capo.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("theme park")) {
    uniStu.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("amusement park")) {
    six.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("museum")) {
    getty.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("pier")) {
    pier.classList.remove("hidden")
    return "found!";
  }
}