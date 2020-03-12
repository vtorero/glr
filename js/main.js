$(document).ready(function () {

    $('.medio').on("click", function (e) {
        e.preventDefault();
        var actives = document.getElementsByClassName("listamenu");
        for (var i = 0; i < actives.length; i++) {
            actives[i].classList.remove("activado");
        }
        $(this).parents().addClass("activado");
        var ruta = $(this).data('fuente');
        $.getJSON("js/data/" + ruta+'?v=2', function (data) {
            cargarDatos(data, 1);
        });
    });

    $('.medio2').on("click", function (e) {
        e.preventDefault();
        var actives = document.getElementsByClassName("listamenu2");
        for (var i = 0; i < actives.length; i++) {
            actives[i].classList.remove("activado");
        }
        $(this).parents().addClass("activado");
        var ruta = $(this).data('fuente');
        $.getJSON("js/data/" + ruta, function (data) {
            cargarDatos(data, 2);
        });
    });

    $('.formato').on("click", function (e) {
        e.preventDefault();
        var actives = document.getElementsByClassName("menuleft");
        for (var i = 0; i < actives.length; i++) {
            actives[i].classList.remove("activado");
        }
        $(this).parent().addClass("activado");
        var formato = $(this).data('formato');
        $.getJSON("js/formatos/estandar.json", function (data) {
            cargaFormato(data,formato);
        });
    });


    function cargaFormato(data,formato){
        var i=0;
        var dim="";
        $.each(data,function(i,item){
            if(formato==data[i].nombre){
            $("#imagenformato").attr("src", data[i].imagen);
            $("#titulo").html(data[i].titulo);
            $.each(data[i].dimensiones,function(u,item){
                dim += item+"<br>";
            });    
            $("#dimensiones").html(dim);
        }
        i++;
		});
    }



    function cargarDatos(datos, id) {
        console.log(datos[0].logo);
        $("#logomedio" + id).attr("src", datos[0].logo);
        $("#browsers" + id).html(datos[0].browsers);
        $("#paginas" + id).html(datos[0].paginas);
        $("#desktop" + id).html(datos[0].desktop);
        $("#mobile" + id).html(datos[0].mobile);
        $("#valorH" + id).html(datos[0].hombre);
        $("#valorM" + id).html(datos[0].mujer);



    }

});