// console.count("Iam dipesh");
// console.count("Iam dipesh");
// console.count("Iam Nikesh");

// const function1 = ()=>console.trace()
    
// const function2 =()=>function1();
// function2();

// const sum=()=>console.log(`${2+3}`);
// const multiply=()=>console.log(`${2*3}`);
// const measureTime=()=>{
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");
//     console.time("multiply()");
//     multiply();
//     console.timeEnd("multiply()");
// };
// measureTime();



const progressBar=require("progress");

const bar=new progressBar("downloading [:bar] :rate/bps :percent :etas",{
    total: 20,
});
const timer=setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100)

const chalk  = require("chalk");
console.log(chalk.green("This is the node js"))