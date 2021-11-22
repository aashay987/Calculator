var op = "";
var x;

document.querySelector(".CC").addEventListener("click",ccl);
document.querySelector(".clr").addEventListener("click",clearb);

function ccl(){
  var tmp = "";
  document.querySelector("h3").innerHTML = tmp;
  document.querySelector("h5").innerHTML = "_";
  op="";

}



function ad()
{

  if(op != "")
  {
    document.querySelector("h3").innerHTML = "invalid";
    window.setTimeout(function(){document.querySelector("h3").innerHTML = "";}, 1000);
    x="";
    document.querySelector("h5").innerHTML = "";
  }
  else
  {
    var p=document.querySelector("h3").innerHTML;
    document.querySelector("h3").innerHTML = "";
    document.querySelector("h5").innerHTML = p;
    op = "+";

  }
}


function sub()
{

  if(op != "")
  {
    document.querySelector("h3").innerHTML = "invalid";
    window.setTimeout(function(){document.querySelector("h3").innerHTML = "";}, 1000);
    x="";
    document.querySelector("h5").innerHTML = "";
  }
  else
  {
    var p=document.querySelector("h3").innerHTML;
    document.querySelector("h3").innerHTML = "";
    document.querySelector("h5").innerHTML = p;
    op = "-";

  }
}


function mul()
{

  if(op != "")
  {
    document.querySelector("h3").innerHTML = "invalid";
    window.setTimeout(function(){document.querySelector("h3").innerHTML = "";}, 1000);
    x="";
    document.querySelector("h5").innerHTML = "";
  }
  else
  {
    var p=document.querySelector("h3").innerHTML;
    document.querySelector("h3").innerHTML = "";
    document.querySelector("h5").innerHTML = p;
    op = "*";

  }
}


function div()
{

  if(op != "")
  {
    document.querySelector("h3").innerHTML = "invalid";
    window.setTimeout(function(){document.querySelector("h3").innerHTML = "";}, 1000);
    x="";
    document.querySelector("h5").innerHTML = "";
  }
  else
  {
    var p=document.querySelector("h3").innerHTML;
    document.querySelector("h3").innerHTML = "";
    document.querySelector("h5").innerHTML = p;
    op = "/";

  }
}



function equa()
{
  if(op=="")
  {

    document.querySelector("h3").innerHTML = "invalid";
    window.setTimeout(function(){document.querySelector("h3").innerHTML = "";}, 1000);
    document.querySelector("h5").innerHTML = "";
  }
  else
  {

    if(op === "+")
    {
       var t2 = document.querySelector("h3").innerHTML;
       var t1 = document.querySelector("h5").innerHTML;
       var t = parseInt(document.querySelector("h3").innerHTML) + parseInt(document.querySelector("h5").innerHTML);
       document.querySelector("h3").innerHTML  = t.toString();
       op = "";
    }

    else if(op === "-")
    {
       var t2 = document.querySelector("h3").innerHTML;
       var t1 = document.querySelector("h5").innerHTML;
       var t = parseInt(document.querySelector("h5").innerHTML) - parseInt(document.querySelector("h3").innerHTML);
       document.querySelector("h3").innerHTML  = t.toString();
       op = "";
    }
    else if(op === "*")
    {
       var t2 = document.querySelector("h3").innerHTML;
       var t1 = document.querySelector("h5").innerHTML;
       var t = parseInt(document.querySelector("h3").innerHTML) * parseInt(document.querySelector("h5").innerHTML);
       document.querySelector("h3").innerHTML  = t.toString();
       op = "";
    }
    else if(op === "/")
    {
       var t2 = document.querySelector("h3").innerHTML;
       var t1 = document.querySelector("h5").innerHTML;
       var t = parseInt(document.querySelector("h5").innerHTML) / parseInt(document.querySelector("h3").innerHTML);
       document.querySelector("h3").innerHTML  = t.toString();
       op = "";
    }
  }
}

function clearb()
{
  var res = document.querySelector("h3").innerHTML;
  document.querySelector("h3").innerHTML = res.substr(0,res.length - 1);
}

setInterval(function(){
  if(document.querySelector("h3").innerHTML.length>12)
  {
    document.querySelector("h3").innerHTML = "invalid";
    window.setTimeout(function(){document.querySelector("h3").innerHTML = "";}, 1000);
  }
}, 500);

attach();

function detach()
{
  var list = document.querySelectorAll(".num");
  {
    for(let i = 0;i<list.length;i++)
    {
      list[i].removeEventListener('keypress', logKey);
      list[i].removeEventListener("click",number);
    }
  }
}
function attach()
{
  var list = document.querySelectorAll(".num");
  for(let i = 0;i<list.length;i++)
  {
    list[i].addEventListener("click",number);
  }

  document.addEventListener('keypress', logKey);
  document.querySelector(".ad").addEventListener('click',ad);
  document.querySelector(".su").addEventListener('click',sub);
  document.querySelector(".mu").addEventListener('click',mul);
  document.querySelector(".di").addEventListener('click',div);
  document.querySelector(".equ").addEventListener('click',equa);
}
function logKey(e) {
  if(e.code.includes("Digit"))
  {
    //alert(e.code);
    document.querySelector("h3").innerHTML = document.querySelector("h3").innerHTML + e.code[e.code.length-1];
  }
  else if (e.key === "+" )
  {
    ad();
  }
  else if (e.key === "-" )
  {
    sub();
  }
  else if (e.key === "*" )
  {
    mul();
  }
  else if (e.key === "/" )
  {
    div();
  }
//   else if (e.key ==='Enter')
//   {
//     equa();
//   }
}

function number(ev)
{
  document.querySelector("h3").innerHTML = document.querySelector("h3").innerHTML + ev.target.innerHTML;
}
