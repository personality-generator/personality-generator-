$('input[type="checkbox"]').each(function(i, v) {
     var checkbox = $(this);
     checkbox.attr("id", ("checkbox_" + (i + 1)))
     checkbox.after($("<label>").attr("for", checkbox.attr("id")));
});


$(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                console.log("Checkbox is checked.");
            }
            else if($(this).prop("checked") == false){
                console.log("Checkbox is unchecked.");
            }
        });
    });
