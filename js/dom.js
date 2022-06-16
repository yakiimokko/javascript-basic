//head要素を取得し、中身を出力する
console.log(document.head);

 // body要素を取得し、中身を出力する
 console.log(document.body);

//windouwオブジェクトの中身を出力する
console.log(window);

//HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('second-heading'));

 // HTML要素をclassで取得し、中身を出力する
 console.log(document.getElementsByClassName('heading'));
 
 //複数のHTML要素を取得し、定数に代入する
 const headings = document.getElementsByClassName('heading');
 
 //複数のHTML要素を１つずつ取得し、中身を出力する
 for (let i = 0; i < headings.length; i ++){
     console.log(headings[i]);
 }
 
 //HTML要素をCSSセレクタで取得し、中身を出力する(最初の1つ)
 console.log(document.querySelector('h1'));
 console.log(document.querySelector('#second-heading'));
 console.log(document.querySelector('.list'));
 
  // HTML要素をCSSセレクタで取得し、中身を出力する（すべて）
 console.log(document.querySelectorAll('.heading'));
 console.log(document.querySelectorAll('li'));
 
 //複数のHTML要素を取得し、定数に代入する
 const cssHeadings = document.querySelectorAll('.heading');
 const cssLists = document.querySelectorAll('li');
 
 //複数のHTML要素を１つずつ　取得し、中身を出力する
 
 for (let i = 0; i < cssHeadings.length; i++){
     console.log(cssHeadings[i]);
 }
 
 for (let i = 0; i < cssLists.length; i++) {
  console.log(cssLists[i]);
}
