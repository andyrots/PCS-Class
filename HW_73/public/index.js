(function () {
    'use strict';

    $('.addComment').click(function(){
        console.log($(this).parent());
       let myId = $(this).parent().attr('id');
       let myForm = $(`<form action = "/addComment"  method="post">
    <input type = "hidden" name = "theId" value = "` + myId + `">
    <div>
        Author:
        <input type="text" name="author" placeholder="Enter your name"/>
    </div>
    <div>
        Content:
        <textarea name="content" placeholder="Enter blog content"></textarea>
    </div>
    <button>Submit</button>
    </form>`);
    console.log(myForm);
    $(this).parent().append(myForm);
   //    $('#addForm').show();
    });
}());