//check off spceif Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

//click on x to delete Todo

$("ul").on("click", "span", function(event){
   $(this).parent().fadeOut(1000, function(){
       $(this).remove();
   })
   event.stopPropagation();
})

$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$(".fa-plus").on("click", function(){

    $("input").fadeToggle();
})