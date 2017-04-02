(function () {
    'use strict';

    let posts;
    const addCommentGUI = $(`<div>
                                <textarea id="commentContent"></textarea>
                                <button id="addComment">add</button>
                                <button id="cancelComment">cancel</button>
                           </div>`),
        commentContent = addCommentGUI.find('#commentContent');

    $(document).on('click', '.showComments', e => {
        const theTarget = $(e.target);
        if (theTarget.text() == 'Show Comments') {
            theTarget.text('Hide Comments');
            $.post('/showComments', {
                id: theTarget.closest('.post').attr('id')
            });
            theTarget.next().show();
        } else {
            theTarget.text('Show Comments');
            theTarget.next().hide();
        }
    });

    $(document).on('click', '.addComment', e => {
        const theTarget = $(e.target);
        theTarget.after(addCommentGUI);
        addCommentGUI.show();
        theTarget.hide();
    });

    function hideAddCommentGUI() {
        addCommentGUI.hide();
        $('#commentContent').val('');
    }

    $(document).on('click', '#addComment', e => {
        $.post('/addComment', {
            id: $(e.target).closest('.post').attr('id'),
            content: $('#commentContent').val()
        });
        hideAddCommentGUI();
        $(e.target).closest('.post').find('.addComment').show();
    });

    $(document).on('click', '#cancelComment', e => {
        hideAddCommentGUI();
        $(e.target).closest('.post').find('.addComment').show();
    });

    io().on('comment', data => {
        if ($('#' + data.post).find('.showComments').text() == 'Hide Comments')
            $('#' + data.post).find('.comments').append(data.comment);
    });
    io().on('comments', data => {
        if ($('#' + data.post).find('.showComments').text() == 'Hide Comments' && $('#' + data.post).find('.comment').empty()) {
            $('#' + data.post).find('.comments').append(data.comments);
        }
    });
} ());