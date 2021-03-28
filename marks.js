Btn=document.getElementById('Btn');
sub=document.getElementById('sub1');


Btn.addEventListener('click',(e)=>{
    document.getElementById('popup').style.display="block";
    def()
    textCont()
    
  
    
})

function textCont()
{
    if(document.getElementById('cs').textContent==00 ){
        sub.textContent="CS";
          } else if(document.getElementById('Maths').textContent==00){
              sub.textContent="Maths";
                   } else if(document.getElementById('os').textContent==00){
                    sub.textContent="OS";
                                
                                   }                           
}



document.getElementById('close').addEventListener('click',(e)=>{
    document.getElementById('popup').style.display="none";
})

document.getElementById('submit').addEventListener('click',(e)=>{
    let a=document.getElementById("indi").value;
    if(document.getElementById("sub1").textContent=="CS"){
        document.getElementById("cs").textContent=   a;
        textCont()
    }
  else if(document.getElementById("sub1").textContent=="Maths"){
document.getElementById("Maths").textContent=a;
    textCont()
  }else if(document.getElementById("sub1").textContent=="OS"){
document.getElementById("os").textContent=a;
    }
})

document.querySelector('.percent').addEventListener('click',(e)=>{
   if(document.getElementById('cs').textContent==00 || document.getElementById('Maths').textContent==00 || document.getElementById('os').textContent==00){
       alert("Enter marks for all subjects");
   }else{
let total=0;
let a=parseInt(document.getElementById('cs').textContent);
let b=parseInt(document.getElementById('Maths').textContent);
let c=parseInt(document.getElementById('os').textContent);
total=a+b+c;
document.getElementById('finalmarks').textContent=total;
let perc=((total)/3);
   
document.getElementById('finalpercentage').textContent=Math.round(perc);
let grade="A";
if(perc>85){
grade="A";
}else if(perc>60){
    grade="B";
    }else{
        grade="C";
    }
    document.getElementById('grade').textContent=grade;
    if(perc<35){
        document.getElementById('result').textContent="Fail"
     } else{
            document.getElementById('result').textContent="Pass"
     }
    
}})



document.getElementById('clear').addEventListener('click',(e)=>{
    location.reload();
})