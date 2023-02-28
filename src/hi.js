let changeBG = (color)=>{
    document.body.style.backgroundColor = color;

    let xe = document.getElementById("okk")
    let txt = document.getElementsByClassName("textt")
    if(color = "#000000"){
      for(let elm of txt){
        elm.style.color ="white";
        x.style.backgroundColor = "#d6d3d1"  
      }
    }


    if(color=="#ffe4e6"){
  
  x.style.backgroundColor = "#ffe4e6";

}

if(color =="#e0e7ff"){

  x.style.backgroundColor = "#e0e7ff"

}
if(color =="#d4d4d8"){

  x.style.backgroundColor = "#d4d4d8"

}
if(color =="#ffffff"){

  x.style.backgroundColor = "#ffffff"


}
// document.getElementById("okla")
// if(color =="#000000"){

//   okla.style.color = "#ffffff"

// }
// else{
//   okla.style.color="#000000"
// }
// if(color =="#000000"){

//   xe.style.color = "#white"

// }




  

   
  
    
    
  else {
    for(let e of txt){
        e.style.color ="Black";
        x.style.backgroundColor ="white"
      }
  }
}

    let x = document.getElementById("heyy")
      
 

  
  

    
  
  // }








  //   let colorh = document.getElementByclass("hell")

   
  //  colorh.addEventListener('click',changeBG)

 
  // let changeBG= (color)=>{
  //   document.body.style.backgroundColor = color;
    
    
  // }
  let navbar = document.getElementById("sticky")

  window.addEventListener('scroll',function(){
    if(window.pageYOffset>=80){
      // console.log("okkk")
 navbar.classList.add('stickyi') 

    }

    else{
      navbar.classList.remove('stickyi');
    }
  })
   
// form

  let user = document.getElementById("username")
  let pass = document.getElementById("password")

  function formvalidate(){


  let valid = 1;

       

       
       if(user.value == ""){
        document.getElementById("uerr").innerHTML="username is empty"
         valid = 0;


       }

    //    else{
    //     document.getElementById("uerr").innerHTML="username is empty"
    //     let valid = 0;


    //    }
       else if (user.value.length < 3){
        document.getElementById("uerr").innerHTML="username contain atleast 3 char"
   valid = 0;
       
    }


       else{
        document.getElementById("uerr").innerHTML=""
         valid = 1;
       }

       if(pass.value == ""){
      let x =  document.getElementById("perr") 
      x.innerHTML="password is empty";

        console.log(pass.valule)
        console.log(x)
   valid = 0;
        
       }
       else{
            document.getElementById("perr").innerHTML=""
            valid = 1;
       }



       return false;

    }


    //   

    //    }
    //    if(valid == 1){
    //     return true;

    //    }
    //    else{
    //     return false

    //    }


    // }
    

    // Imageslider

    let arr = 0;




// console.log("slides[num]")



let control = (a)=>{
    arr = arr + a;
    slideshow(arr)
    // console.log("vayo ta??")
}

let slideshow = (num)=>{
    let slides = document.getElementsByClassName("slide")
    console.log(slides)

    if(num == slides.length){
      arr = 0;
      num = 0;

    }
    if(num < 0){
      arr = slides.length - 1
      num = slides.length - 1
      console.log(slides.length)
    }

for(let yy of slides){
yy.style.display= "none"

}

slides[num].style.display ="block"

}

slideshow(arr)
console.log(arr)





// let dd = document.getElementById("previous");
// dd.addEventListener('onclick', control)
// let dd = document.getElementById("previous");
// dd.addEventListener('onclick', control)


// STOPWATCH




  