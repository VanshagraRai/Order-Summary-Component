let Buttons = document.querySelectorAll(".btn");
let mainPart = document.querySelector(".main");

//Payment and Cancel Button Fuctionality
Buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //Payment Button
    if (e.currentTarget.classList.contains("payment")) {
      mainPart.innerHTML = ` <h1>Thank You !<br> You are now being taken to Your Bank Page.</h1>`;
      mainPart.classList.add("paymentPage");
    }
    //Cancel Button
    if (e.currentTarget.classList.contains("cancel")) {
      mainPart.innerHTML = ` <h1>OOPS !<br> We are very sorry to see you go.</h1>`;
      mainPart.classList.add("cancelPage");
    }
  });
});
