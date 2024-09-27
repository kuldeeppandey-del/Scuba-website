window.onscroll=function(){
  styleChange()
}

function styleChange(){
nav=document.getElementById("nav");

cards=document.getElementById("cards");
a=document.getElementsByClassName("a")


if(document.documentElement.scrollTop>100){
 
  nav.style.backgroundColor="white"
  

  nav.style.position="fixed"
  nav.style.top="0"
  nav.style.left="0"
 

 
  
  for(i=0;i<a.length;i++){
    a[i].style.color="black"
    
    
  }
   
}
else{
  nav.style.backgroundColor="transparent"
   nav.style.position="absolute"
    nav.style.top="7.2rem"
    nav.style.left="0"

      
  for(i=0;i<a.length;i++){
    a[i].style.color="white"
  }
    
}


if(document.documentElement.scrollTop>300){
  cards.style.transform="translateY(-60px)"
}
}


function pageloaded(){
  let load=document.getElementById("load");
  
  load.style.display="none"


}

slide_index=0

change_index()

function change_index(){
  slideshow(slide_index);
  slide_index=slide_index+1
  setTimeout(change_index,2000)
  
}


function slideshow(slide_index1){
  slider=document.getElementsByClassName("slider");
  
  for(i=0;i<slider.length;i++){
    slider[i].style.display="none";
  }
  
  
 

  if(slide_index1==slider.length){
    slide_index1=0
    slide_index=0
  } 
  slider[slide_index1].style.display="block";

}
v1=0;
inc()
function inc(){
 
  part1=document.getElementById("part1");
  if(v1<245){
    setTimeout(inc,);
    v1=v1+1;
    part1.innerHTML=v1
  }
 }

 v2=0;
 secondinc()
function secondinc(){
 
  part2=document.getElementById("part2");
  if(v2<182){
    setTimeout(secondinc,);
    v2=v2+1;
    part2.innerHTML=v2
  }
 }
 
 v3=0;
 thirdinc()
 function thirdinc(){
  
   part3=document.getElementById("part3");
   if(v3<1267){
     setTimeout(thirdinc,);
     v3=v3+8;
     part3.innerHTML=v3
   }
  }

  v4=0;
  fourthinc()
 function fourthinc(){
  
   part4=document.getElementById("part4");
   if(v4<47){
     setTimeout(fourthinc,);
     v4=v4+1/2;
     part4.innerHTML=v4
   }
  }