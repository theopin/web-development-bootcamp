import { dbank } from "../../declarations/dbank";


window.addEventListener("load", loadBalance())

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button  = e.target.querySelector("#submit-btn")
  const inputAmount = parseFloat(document.getElementById("input-amount").value)
  const withdrawalAmount = parseFloat(document.getElementById("withdrawal-amount").value)

  button.setAttribute("disabled", true)

  if(document.getElementById("input-amount").value.length !== 0)
    await dbank.topUp(inputAmount)
  else if (document.getElementById("withdrawal-amount").value !== 0)
    await dbank.withdraw(withdrawalAmount)

  await dbank.compound()

  await loadBalance()

  document.getElementById("input-amount").value = ""
  document.getElementById("withdrawal-amount").value = ""

  button.removeAttribute("disabled")
});
async function loadBalance() {
    const currentAmount = await dbank.checkValue();
    document.getElementById("value").textContent = currentAmount.toFixed(2);
  };


