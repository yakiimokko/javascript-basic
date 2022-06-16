//クラスを定義する
class Product {
    //インスタンス化すると同時に処理を実行（初期化）する
    constructor(name,price,category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    
    //メソッドを定義する
    describe(){
    console.log('この商品は名は' + this.name + 'です');
    }
}




//インスタンス化する
const shampoo = new Product('シャンプー',500,'生活雑貨');
const coffee = new Product('コーヒー',500,'飲料');

//インスタンス（オブジェクト）の値を出力する
console.log(shampoo);
console.log(coffee);

shampoo.describe();