const email = document.querySelector(".email");
const btn = document.querySelector(".btn");
console.log(btn);

btn.addEventListener("click", function (e) {
  e.preventDefault();
  checkInputs();
});

const checkInputs = function () {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Please provide a valid email address");
    console.log("right");
  } else {
    console.log("wrong");
  }
};

const setErrorFor = function (input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
};
