$(".add-answer").livequery('click', function(){
    $("#append-answers").append('<div><input type="text" name="answers[]"></div>');
});