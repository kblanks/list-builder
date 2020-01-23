var arr=[];

$(document).ready(function(){
    $('.ingredient').click(function(){
        var val = $(this).text();

        $(this).toggleClass('selected');

        if($(this).hasClass('selected')){
            AddListItem(val);
        }
        else{
            RemoveListItem(val);
        }

        RefreshOutput();

        FindCombos();
    });

});

function AddListItem(val){
    arr.push(val);
    //console.log(arr);
}

function RemoveListItem(val){
    arr.splice($.inArray(val, arr),1);
    //console.log(arr);
}

function RefreshOutput(){
    $('#output-list').empty();
    $.each(arr.sort(),function(i){
        var li = $('<li/>')
            .appendTo($('#output-list'));
        var a = $('<a/>')
            .text(arr[i])
            .appendTo(li);
    });
}