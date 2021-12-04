const checkBtn = document.querySelector("#check-btn");
const DobInput = document.querySelector("#dateofbirth");
const luckyNumber = document.querySelector("#lucky-num");
const output = document.querySelector(".output");
const Birthday = DobInput.value;
let splitDate = [];

checkBtn.addEventListener("click", function () {
  let sumOfDate = 0;
  if (DobInput.value) {
    if (luckyNumber.value) {
      splitDate = DobInput.value.split("");
      NumDate(splitDate);
      for (let i = 0; i < splitDate.length; i++) {
        sumOfDate += Number(splitDate[i]);
      }
      let lucky = sumOfDate % luckyNumber.value === 0;
      updateMsg(lucky);
    } else {
      showerror("Enter your Lucky Number");
    }
  } else {
    showerror("Enter your Birthday");
  }
});

function NumDate(date) {
  while (date.includes("-")) {
    date.splice(date.indexOf("-"), 1);
  }
}

function updateMsg(lucky) {
  if (lucky) {
    output.innerText = `${luckyNumber.value} is a Lucky Number 🥳`;
  } else {
    output.innerText = `${luckyNumber.value} is Not Lucky Number 😪`;
  }
}

function showerror(msg) {
  output.innerText = msg;
}
