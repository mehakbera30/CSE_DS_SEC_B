function test1(cb){
   setTimeout(() => {
    console.log(("test1"))
    cb();
   },4000);
}
function test2(cb){
    setTimeout(()=>{
        console.log("test2")
        cb();
    },2000);
}

function test3(cb){
    setTimeout(()=>{
        console.log(("task3"));
        cb();
    },200);
}
function test4(cb){
    setTimeout(()=>{
        console.log(("task4"));
        cb();
    },200);
}
// call back normal funciton tarike se call nhi hoga

test1(()=>{
    test2(()=>{
        test3(()=>{
            test4();
        });
    });
});
// test2();

