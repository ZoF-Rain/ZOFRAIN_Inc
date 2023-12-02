let mediaFooter = document.querySelector('.mediafooter');

mediaFooter.addEventListener('click', function(event){
    let button = event.target;
    if(button.tagName.toLowerCase() === 'button') {
        let ul = button.nextElementSibling;
        if(ul && ul.tagName.toLowerCase() === 'ul' && ul.style.display != 'block') {
                ul.style.display = 'block';
            }
            else{
                ul.style.display = 'none';
            }
        }
    }
)