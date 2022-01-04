import "./styles.css";

const onClickAdd = () => {
  //<input id="add-text" placeholder="TODOを入力" />
  //に入力されたテキスト
  const inputText = document.getElementById("add-text").value;

  //ボタン押されたらinputの中を空文字にする。
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから削除
const deleteFromIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div
  //<div class="list-row"></div>を作成
  const div = document.createElement("div");
  div.className = "list-row";

  //li
  //<li>inputText</li>を作成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // <div class="list-row">
    //   <li>TODOです</li>
    //   <button>完了</button>
    //   <button>削除</button>
    // </div>

    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncomplete(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODOですを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //<li>TODOです</li>を作成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に書く要素設定

    // <div class="list-row">
    //   <li>TODOです</li>
    //   <button>戻す</button>
    // </div>

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncomplete(deleteButton.parentNode);
  });

  //divにli,completeButton,deleteButtonを作成
  // <div class="list-row">
  //   <li>TODOです</li>
  //   <button>完了</button>
  //   <button>削除</button>
  // </div>
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
