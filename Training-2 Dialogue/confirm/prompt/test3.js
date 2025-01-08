function promptbox()
{
    let num=prompt("Please enter your age");
    var txt;
    if(num>18)
    {
        txt="eligible";
    }
    else
    {
        txt="Not eligible";
    }
    document.getElementById("demo").innerHTML=txt;
}