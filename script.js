var arr=[];
$(document).ready(function(){
    $('.ingredient').click(function(){
        var val = $(this).text();
        $(this).toggleClass('selected');
        if($(this).hasClass('selected')){
            arr.push(val);
            console.log(arr);
        }
        else{
            arr.splice($.inArray(val, arr),1);
            console.log(arr);
        }
        $('#output-list').empty();
        $.each(arr,function(i){
            var li = $('<li/>')
                .appendTo($('#output-list'));
            var a = $('<a/>')
                .text(arr[i])
                .appendTo(li);
        });
    });

});