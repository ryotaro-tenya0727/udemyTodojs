import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div
  const div = document.createElement("div");
  div.className = "list-row";
  //li
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncomplete(deleteButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に書く要素設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncomplete(deleteButton.parentNode);
  });

  //divにli
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

const deleteFromIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
