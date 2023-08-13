const dividiv = document.getElementById('eldiv')

function saludar(){
    event.stopPropagation();
    alert('Hola!');
}

dividiv.addEventListener('click', function(e){
alert('Hola! Soy el div');

})