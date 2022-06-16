//output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

//HTML用をがクリックされたときにイベント処理を実行する
btn.addEventListener('click', ()=>{
    console.log('クリックされました！');
});

//
const addBtn = document.getElementById('add-btn');
const parentList = document.getElementById('parent-list');

addBtn.addEventListener('click', () => {
    const childList = document.createElement('li');
    childList.textContent ='リストが追加されました';
    parentList.appendChild(childList);
});