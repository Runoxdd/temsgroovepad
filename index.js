var randombutton = document.querySelectorAll(".key").length;

for(var i=0; i<randombutton; i++){
 document.querySelectorAll(".key")[i].addEventListener("click", function(){
buttoninnerhtml = this.innerHTML;
makesound(buttoninnerhtml);
buttonAnimation(buttoninnerhtml);

 });




//end of for loop
}




document.addEventListener("keydown", function(event){
makesound(event.key);
buttonAnimation(event.key);



});



function makesound(cheese){

    switch (cheese) {
        case "a":
            var asound = new Audio('sounds/HI1.MP3');
            asound.play();
            break;





            case "s":
            var ssound = new Audio('sounds/HI2.MP3');
            ssound.play();
            break;


           






            case "u":
            var usound = new Audio('sounds/U.MP3');
            usound.play();
            break;







            case "i":
            var isound = new Audio('sounds/I.MP3');
            isound .play();
            break;



            case "o":
            var osound = new Audio('sounds/O.MP3');
            osound.play();
            break;






            case "p":
            var psound = new Audio('sounds/P.MP3');
            psound.play();
            break;
            


            case "j":
                var jsound = new Audio('sounds/LI1.MP3');
                jsound.play();
                break;




                case "k":
                    var ksound = new Audio('sounds/LI2.MP3');
                    ksound.play();
                    break;

                    case "w":
                        var wsound = new Audio('sounds/LO1.MP3');
                        wsound.play();
                        break;
                        

                        case "e":
                    var esound = new Audio('sounds/LO2.MP3');
                    esound.play();
                    break;




                    case "r":
                    var rsound = new Audio('sounds/LO3.MP3');
                    rsound.play();
                    break;




                    case "t":
                    var tsound = new Audio('sounds/LO4.MP3');
                    tsound.play();
                    break;




                    case "y":
                    var ysound = new Audio('sounds/LO5.MP3');
                    ysound.play();
                    break;



    
        default: console.log();
            
    }
}




function buttonAnimation(currentkey){
    var activeButton =  document.querySelector("." + currentkey);
    activeButton.classList.add("beans");
    setTimeout(function(){
     activeButton.classList.remove("beans");
    }, 100);
   
   
   }