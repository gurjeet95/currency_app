const ls = localStorage
const btn = document.getElementById('button')
btn.addEventListener('click', currency)


function currency() {
  const url = 'http://api.fixer.io/latest?base='
  const amount = document.getElementById('amount').value
  const base = document.getElementById('base_currency').value
  const target = document.getElementById('target_currency').value
  fetch(`${url}${base}`)
    .then((res) => res.json())
    .then((data) => {

      const rate = `data.rates.${target}`
      const storedefaultrate = data.rates.INR
      const mainrate = eval(rate)
      ls.setItem("rupee", JSON.stringify(storedefaultrate))
      show(mainrate, amount)
    })
    .catch((e) => console.log(e, "something wents wrong"))
}

function show(rate, amount) {
  const label1 = document.createElement("label")
  label1.textContent = "Rate is"
  const textbox = document.createElement("INPUT")
  textbox.setAttribute("type", "text")
  textbox.value = rate.toFixed(2)
  const label2 = document.createElement("label")
  label2.textContent = "your total amount is"
  const textbox1 = document.createElement("INPUT")
  textbox1.setAttribute("type", "text")
  textbox1.value = (rate * amount).toFixed(2)
  
  const div = document.getElementById("main")
  div.appendChild(label1)
  div.appendChild(textbox)
  div.appendChild(label2)
  div.appendChild(textbox1)

}