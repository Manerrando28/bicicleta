document.addEventListener("DOMContentLoaded", function() {
    
    $('#carouselExampleSlidesOnly').carousel();

    var prices = document.querySelectorAll('.price');
    prices.forEach(function(price) {
        price.addEventListener('click', function() {
            var product = this.parentNode.querySelector('img').alt;
            var priceValue = this.innerText;
            var message = "Produto: " + product + "\nPreço: " + priceValue;
            alert(message);
        });
    });
});




