$(document).ready(function (){
    $("#texto").mouseenter(function(){
        $(this).css("background-color","red");
    });
    $("#texto").mouseleave(function(){
        $(this).css("background-color","burlywood")
    });

    var escondido =false;
    $("#boton-1").click(function (){
        if (escondido == false){
            escondido=true;
            $(".parrafo").hide();
        }
        else{
            escondido=false;
            $(".parrafo").show();
        }
    });
    var newtext=false;
    $("#boton-2").click(function (){
        if (newtext==false){
            newtext=true
            $("#titulo").text("Perritos");
        }
        else{
            newtext=false
            $("#titulo").text("Perros");
        }
    });


});