let btn=document.querySelector("button");
let hid=document.querySelector(".hide");
let btn1=document.querySelector(".btn1");

btn.addEventListener("click", ()=>{
   hid.style.display="block";
   btn1.style.display="block"
  

})


btn1.addEventListener("click", ()=>{
    hid.style.display="none";
    btn.style.display="block";
    btn1.style.display="none"
   
 
 })
