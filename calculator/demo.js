input = document.getElementById("output")
 

function display(num)
{
    input.value += num
}


function clears()
{
    input.value=" "
}


function dels()
{
    a=input.value
    x=a.replace(a[a.length-1]," ") 
    y=x.trimEnd();
    input.value=y
}


function solution()
{
a=input.value
x=eval(a)
input.value=x
}
