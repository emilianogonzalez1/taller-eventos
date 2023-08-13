const dividiv = document.getElementById('eldiv')

function saludar(){
    alert('Hola!');
    event.stopPropagation();
}

dividiv.addEventListener('click', function(e){
alert('Hola! Soy el div');
})