function avg(numbers)
{
    let s=numbers.reduce((prev,curr)=>prev+curr,0);
    return s/numbers.length;
}

function prime(num)
{
    let pon=true;
    let s=2;
    if(num>2)
    {
        for(;s<num;s++)
        {
            if(num%s==0)
            {
                pon=false;
            }
        }
    }
    else if(num<2)
    {
        console.log("Prime numbers are Natural Number that larger than 1.\n Your input : "+num);
        process.exit(1);
    }
    else if(num==2)
    {
        pon=true;
    }
    return pon;
}

function fact(num)
{
    if(num>15)
    {
        console.log("Invaild Input. \nPlease input lower than equal to 15. \nYour Input : "+num);
        process.exit(1);
    }
    else{
        let result=1;
        for(;num>1;num--)
        {
            result*=num;
        }
        return result;
    }
}

module.exports = 
{
    avg,
    prime,
    fact
}