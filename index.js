// console.log('Hi Node json');
// require("dotenv").config();
// process.exit(1);


const _ =require("loadash");
const arr=[1,2,3,4,5];
console.log(_.chunk(arr));

const cowsay=require("cowsay");
console.log(cowsay.say({
    text: "Iam learning Nnpm",
    e:"00",
    t:"U"
})
);