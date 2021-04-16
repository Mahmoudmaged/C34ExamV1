$( document ).ready(function() {
    $(".parent-spinner").fadeOut(1000)
 });

 function deleteByID(id){
    document.getElementById("DeleteInp").value = id;
 }
 function editByID(id){
    document.getElementById("EditInp").value = id;
 }
$("#edit").click(function(){
    const title= $(this).parent(".media").siblings(".title").text();
    const desc= $(this).parent(".media").siblings(".desc").text();
    document.getElementById("titleInp").value = title;
    document.getElementById("descInp").value = desc;
})