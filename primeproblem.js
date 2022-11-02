function prime(num){
    counts=0;
    for(i=1;i<=num;i++){
        if(num%i==0){
           counts++
        }
    }if(counts==2){
        return true
    }return false
}
let answer=checkprime(5)
if(answer==true){
   console.log("Prime Number")
}else{
console.log("Not  a Prime Number")
}