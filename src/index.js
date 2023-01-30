const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);

  const colorName = document.getElementById("color-name");
  colorName.innerHTML = randomCode;
  document.body.style.backgroundColor = randomCode;
};

const x = document.getElementById("btn-click");
x.addEventListener("click", getColor);

getColor();
