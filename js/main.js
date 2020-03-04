$(document).ready(function(){
    $('.medio').on("click",function(e){
        e.preventDefault();
         var ruta =$(this).data('fuente');
        $.getJSON("js/data/"+ruta,function(data) {
         cargarDatos(data);
        });
    });


    function cargarDatos(datos){
        console.log(datos[0].logo);
        $("#logomedio").attr("src",datos[0].logo);  
        $("#browsers").html(datos[0].browsers);    
        $("#paginas").html(datos[0].paginas);    
        $("#mobile").html(datos[0].mobile);    
        $("#audiencia").html(datos[0].audiencia);    
          
        
   }

});