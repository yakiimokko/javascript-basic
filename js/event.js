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

//const-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');

//HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener('click', () => {
    const text = document.forms.textForm.textBox.value;
    console.log(text.length + '文字');
});


const areaBtn = document.getElementById('area-btn');

areaBtn.addEventListener('click' , ()=> {
    const area = document.forms.areaForm.area.value;
    console.log(area);
});


const osBtn = document.getElementById('os-btn');

osBtn.addEventListener('click' , () =>{
    const items = document.forms.osForm.os;
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked){
        console.log(items[i].value);
        }
    };
});