$(".ls").hide();


function aparecer() {
  var chklista = $('input[name="checkbox"]:checked').toArray().map(function(check) {
        return $(check).val();
    });
    var lista = $('input[name="checkbox"]').toArray().map(function(check) {
          return $(check).val();
      });
    //console.log(chklista);

  chklista.forEach((item, i) => {
        $("#"+item+"").show();




  });
  lista.forEach((item, i) => {
    if(chklista.indexOf(item)>=0){

    }else{
      $("#"+item+"").hide();

    }
  });



}
