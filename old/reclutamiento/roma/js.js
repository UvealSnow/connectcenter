$("#form").submit(function(){
    var valores = $("#form").serialize();
    var url = "enviar.php";
    $.ajax({
        method:"post",
        url:url,
        data:valores,
        beforeSend:function(){
        },
        success:function(dta){
            if(dta === "Enviado"){
                alert("Gracias!")
                window.location = "";
            }
        }
    });
    return false;
});