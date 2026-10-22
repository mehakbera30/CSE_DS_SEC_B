function sum(a,b){
   return a+b ;
}

function sum_with_msg(msg,clbk){
     const result = clbk(20,30);
     const fresult = "hi" + msg + "your add is="+ result;
     console.log(fresult);
}

sum_with_msg("mr deepak",sum);