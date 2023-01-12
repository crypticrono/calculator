//1 display num in text box
function displayNum(num){
    result.value += num;
  //  console.log(num);

}

//2 clear text box
function clearBox(){
    result.value="";

}

//3 evaluate expression
function evaluateExpression(){
    result.value=eval(result.value);
}





//4 remove last item from text box
function  removeLast(){
currentExpression=result.value;
result.value=currentExpression.slice(0,-1); //remove last item

}