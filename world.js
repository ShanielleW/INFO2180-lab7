/* global $*/
$(document).ready(function(){
    
    $("#lookup").on('click', function(){
        if($("#check").is(":checked")){
            searchAll();
        }
        else if ($("#country").val() != ""){
            search($("#country").val());
        }
    });
});

function search(query){
    var link = 'https://info2180-lab7-shaniellew.c9users.io/world.php?country='+query;
    $.ajax(link,{
        method: 'GET',
    }).done(function(res){
        alert($(res).text());
        $("#result").html(res);
    }).fail(function(fail){
        $("#result").html('<b>ERROR Detected! Request Failed</b>');
    });
}

function searchAll(){
    var link = 'https://info2180-lab7-shaniellew.c9users.io/world.php?all=true';
    
    $.ajax(link,{
        method: 'GET',
    }).done(function(res){
        $("#result").html(res);
    }).fail(function(fail){
        $("#result").html('<b>ERROR Detected! Request Failed</b>');
    });
}