import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div
  const div = document.createElement("div");
  div.classname = "list-row";
  //li
  const li = document.createElement("li");
  li.innerText = inputText;

  //divにli
  div.appendChild(li);

  document.getElementById("incomplete-list").appendChild(div);
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
