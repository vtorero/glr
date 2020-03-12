$(document).ready(function () {
    var d = new Date().getTime();
    $.getJSON("js/data/larepublica.json?v="+d, function (data) {
        cargarDatos(data, 1);
    });

    $.getJSON("js/data/singuion.json?v="+d, function (data) {
        cargarDatosMed(data);
    });

    $('.medio').on("click", function (e) {
        var time = new Date().getTime();
        e.preventDefault();
        var actives = document.getElementsByClassName("listamenu");
        for (var i = 0; i < actives.length; i++) {
            actives[i].classList.remove("activado");
        }
        $(this).parents().addClass("activado");
        var ruta = $(this).data('fuente');
        $.getJSON("js/data/" + ruta+'?v='+time, function (data) {
            cargarDatos(data, 1);
        });
    });

    $('.medio2').on("click", function (e) {
        e.preventDefault();
        var time = new Date().getTime();
        var actives = document.getElementsByClassName("listamenu2");
        for (var i = 0; i < actives.length; i++) {
            actives[i].classList.remove("activado");
        }
        $(this).parents().addClass("activado");
        var ruta = $(this).data('fuente');
        $.getJSON("js/data/" + ruta+"?v="+time, function (data) {
            cargarDatosMed(data);
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
        $("#logomedio" + id).attr("src", datos[0].logo);
        $("#browsers" + id).html(datos[0].browsers);
        $("#paginas" + id).html(datos[0].paginas);
        $("#desktop" + id).html(datos[0].desktop);
        $("#mobile" + id).html(datos[0].mobile);
        $("#valorH" + id).html(datos[0].hombre);
        $("#valorM" + id).html(datos[0].mujer);
        $("#edad1data").html(datos[0].edad1);
        $("#edad2data").html(datos[0].edad2);
        $("#edad3data").html(datos[0].edad3);
        $("#edad4data").html(datos[0].edad4);
        $("#edad5data").html(datos[0].edad5);
    }

    function cargarDatosMed(datos) {
        $("#logomedio").attr("src", datos[0].logo);
        $("#dataVideo").html(datos[0].videos);
        $("#vod").html(datos[0].vod);
        $("#dataVistas").html(datos[0].vistas);
        $("#unidad").html(datos[0].unidad);
        $("#valorH2").html(datos[0].hombre);
        $("#valorM2").html(datos[0].mujer);
        $("#1edadb").html(datos[0].edad1);
        $("#2edadb").html(datos[0].edad2);
        $("#3edadb").html(datos[0].edad3);
        $("#4edadb").html(datos[0].edad4);
        $("#5edadb").html(datos[0].edad5);
        $("#6edadb").html(datos[0].edad6);
        $("#7edadb").html(datos[0].edad7);
    }


});