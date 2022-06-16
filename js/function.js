const sayGoodMorning =()=>{
    console.log('おはようございます！');
    console.log('よく眠れましたか？');
    console.log('今日も一日がんばりましょう！');
}

const sayGoodEvening =()=>{
    console.log('こんばんは！');
    console.log('今日も一日お疲れさまでした。');
}

sayGoodMorning();

sayGoodEvening();

//引数
const calculateTotal =(price)=> {
    console.log(price + 500 +'円');
}

calculateTotal(1200);

const addTwoArguments = (price, shippingFee) => {  
   console.log(price + shippingFee + '円');
 }
 
addTwoArguments(1200, 500);

 // 与えられた引数numを2倍にし、その値を戻り値として返す関数を定義する
 const double = (num) => {
   return num * 2;
 };
 
 // 関数の戻り値を出力する
 console.log(double(30));
 
 
 //定数を宣言する
 const userName = '侍太郎';
 
//関数の中で定数を使う
const userVariable = () => {
    console.log(userName);
};

//関数を呼び出す
userVariable();