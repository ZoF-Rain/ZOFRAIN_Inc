let mediaFooter = document.querySelector('.mediafooter');

mediaFooter.addEventListener('click', function(event){
    let button = event.target;
    if(button.tagName.toLowerCase() === 'button') {
        let ul = button.nextElementSibling;
        let arrow = button.querySelector('.butar');
        if(ul && ul.tagName.toLowerCase() === 'ul') {
            if(ul.style.display != 'block') {
                ul.style.display = 'block';
                arrow.src = "images/arrowdown.png";
            }
            else{
                ul.style.display = 'none';
                arrow.src = "images/arrow.png";
            }
        }
    }
})
