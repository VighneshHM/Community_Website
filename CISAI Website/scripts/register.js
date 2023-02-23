document.getElementById("submit").addEventListener('click', function () {
    console.log('Button clicked');
    window.btoa(document.getElementById("photo").value);
    // window.location = '../loads/regSuccess.html';
});
// document.getElementById("photo").addEventListener('change', function () {
//     console.log('Photo changed');
//     window.btoa(document.getElementById("photo").value);
// });
// document.getElementById("photo").addEventListener('input', function () {
//     console.log('Photo input');
//     window.btoa(document.getElementById("photo").value);
// });
// document.getElementById("photo").addEventListener('focus', function () {
//     console.log('Photo focused');
//     window.btoa(document.getElementById("photo").value);
// });
// document.getElementById("photo").addEventListener('blur', function () {
//     console.log('Photo blurred');
//     window.btoa(document.getElementById("photo").value);
// });
// document.getElementById("photo").addEventListener('select', function () {
//     console.log('Photo selected');
//     window.btoa(document.getElementById("photo").value);
// });
