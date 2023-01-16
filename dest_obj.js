let book = { title: 'Javaポケットリファレンス', publish: '技術評論者', price: 2680 };
let { price, title, memo = 'なし' } = book;

console.log(title);
console.log(price);
console.log(memo);