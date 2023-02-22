document.getElementById("submit").addEventListener('click', function () {
    console.log('Button clicked');
    window.btoa(document.getElementById("photo").value);
    // window.location = '../loads/regSuccess.html';
});