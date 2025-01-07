// var s="Kavin";
// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==3)
//     {
//         console.log("Three");
//     }
//     else{
//         console.log(arr[i]);
//     }
// }

// var detail={name:"Kavin",age:20};
// detail.name = "Kavin.S";
// console.log(detail);


  //Yesterday Task//

  const arr=[details={name:"Kav",age:21,dept:"IT"}];
   details.name="Kavin";
   details.dept="CSE";
   for(let i=0;i<arr.length;i++)
   {
    console.log(arr[i]);
   }
    //Output:{name:Kavin,age:21,dept:CSE}



    //Day 1 Task //

// 1.
   let a=10;
   if(a%2==0)
  {
      console.log("even");
  }
  else{
    console.log("odd");
}// 

// 2.
    let n2=10;
    for(let i=0;i<=n2;i++)
     {
      console.log(i);
    }

    // 3.
    let n1=3;
    for(let i=1;i<=10;i++)
    {
        console.log(i*n1);
    }

// 4.
let num=11;
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
        console.log("not a prime");
        break;
    }
    else{
        console.log("prime");
        break;
    }
}


// 5.
      let sum=0;
      for(i=1;i<=100;i++)
      {
        sum+=i;
      }
      console.log(sum);
    
    // 6.
    let arr1=[21,11,2003,12];
    let max=arr1[0];
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]>max)
        {
            max=arr1[i];
        }
    }
    console.log(max);

    // 7.
      
    let str="kavin";
    let cnt=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
        {
            cnt++;
        }
    }
    console.log(cnt);

    //8.
    let m=5;
    let out="";
    for(let i=1;i<=m;i++)
    {
        for(let j=i;j<=i;j++)
        {
            out+="*";
        }
        console.log(out);
    }
   
    // 9.
    let n=30;
    for(let i=1;i<=n;i++)
        {
            if(i%3==0 && i%5==0)
            {
                console.log("FizzBuzz");
            }
            else if(i%3==0)
            {
                console.log("Fizz");
            }
            else if(i%5==0)
            {
                console.log("Buzz");
            }
            else
            {
                console.log(i);
            }
        }



    //10.
    let str1="Kavin";
    let rev="";
for(let i=str1.length-1;i>=0;i--)
{
    rev+=str[i];
}
console.log(rev);
    
