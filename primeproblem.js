function checkprime(num){
    count=0;
    for(i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }if(count==2){
        return true
    }return false
}
ans=checkprime(5)
console.log(ans)