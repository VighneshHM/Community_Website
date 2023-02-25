document.getElementById("submit").addEventListener('click', function () {
    console.log('Button clicked');
    // window.btoa(document.getElementById("photo").value);

    var data = new FormData();
    jQuery.each(jQuery('#file')[0].files, function(i, file) {
        data.append('file-'+i, file);
    });
    jQuery.ajax({
        url: 'https://script.google.com/macros/s/AKfycbwMtgyVZwt10T_DPWC8XcKXxI3ZQGTSJQYPwTEpmAGvoAcoHeR9YdeBC9Ri3vUBN7du/exec',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        success: function(){
            window.location = '../loads/regSuccess.html';
        },
        error: function(textStatus){
            alert( "Regestration failed: " + textStatus );
        }
    }).done(function() {
        $(this).addClass('done');
        window.location = '../loads/regSuccess.html';
    })
});