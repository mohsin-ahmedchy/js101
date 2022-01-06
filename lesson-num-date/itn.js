//internationalizing number:

const num = 1234567.78;

const option = {
    style:'currency',//unit/currency/percent
    unit:'celsius',
    currency:'EUR'
}

const displayNum = new Intl.NumberFormat('el-GR',option).format(num);
const displayNum_1 = new Intl.NumberFormat('en-GB',option).format(num);
console.log(displayNum);
console.log(displayNum_1);