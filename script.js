const btn = document.getElementById("toggle-button");
const psw = document.getElementById("password");

btn.addEventListener("click", function () {
  if (btn.value === "Show Password") {
    btn.setAttribute("value", "Hide Password");
    psw.setAttribute("type", "text");
  } else {
    btn.setAttribute("value", "Show Password");
    psw.setAttribute("type", "password");
  }
});
