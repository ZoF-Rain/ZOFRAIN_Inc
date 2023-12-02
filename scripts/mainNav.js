let div = document.querySelector('.mainNav');
let bg = document.querySelector('.navbg');
let canclick = true;
let lastClicked = "none";
div.addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase() === 'li' && canclick)
    {
        canclick = false;
        setTimeout(() => {
            canclick = true;
        }, 1200);
        let p = document.querySelector('.mainNav > p');
        let h2 = document.querySelector('.mainNav > h2');
        let currentLi = event.target.closest('.middle');
        let otherLi = document.querySelectorAll('.mainNav > ul > li')
        currentLi.style.color = '#fff';
        currentLi.style.borderTop = '2px solid #fff';
        currentLi.style.backgroundColor = 'rgba(255,255,255,0)';
        if(currentLi.id === 'maya' && lastClicked !== "maya"){
            bg.style.animation = "bgout 0.6s forwards"
            p.style.animation = "textout 0.6s forwards";
            h2.style.animation = "textout 0.8s forwards";
            setTimeout(() => {
                bg.style.backgroundImage = 'url(images/mayaFootageFade.png)';
                bg.style.animation = "bgin 0.6s forwards"
                p.style.animation = "textin 0.6s forwards";
                h2.style.animation = "textin 0.8s forwards";
                h2.textContent = "Моделирование в MAYA";
                p.textContent = "Компания ZOFRAIN (Да, компания, я так сказал) работает в Autodesk MAYA на любительском уровне. Компания работает с такими этапами создания моделей как: Само моделирование, UV развертка, Текстурирование, Обработка сцены, Создание простых анимаций, Создание FX."; 
                lastClicked = "maya";
            }, 600);
        }
        if(currentLi.id === 'photoshop' && lastClicked !== "photoshop"){
            bg.style.animation = "bgout 0.6s forwards"
            p.style.animation = "textout 0.6s forwards";
            h2.style.animation = "textout 0.8s forwards";
            setTimeout(() => {
                bg.style.animation = "bgin 0.6s forwards"
                p.style.animation = "textin 0.6s forwards";
                h2.style.animation = "textin 0.8s forwards";
                bg.style.backgroundImage = 'url(images/photoshopFootageFade.png)';
                h2.textContent = "Обработка в PHOTOSHOP";
                p.textContent = "ZOFRAIN работает в Adobe Photoshop на довольно продвинутом уровне. Каждое изображение на этом сайте было вторично обработанно в PHOTOSHOP, некоторые изображения были созданны с помощю моделирования в MAYA, а затем обработанны в PHOTOSHOP. Компания знакома со всеми функциями программы и готова поделиться знаниями с вами.";
                lastClicked = "photoshop";
        }, 600);
        }
        if(currentLi.id === 'vegas' && lastClicked !== "vegas"){
            bg.style.animation = "bgout 0.6s forwards"
            p.style.animation = "textout 0.6s forwards";
            h2.style.animation = "textout 0.8s forwards";
            setTimeout(() => {
                bg.style.animation = "bgin 0.6s forwards"
                p.style.animation = "textin 0.6s forwards";
                h2.style.animation = "textin 0.8s forwards";
                bg.style.backgroundImage = 'url(images/vegasFootageFade.png)';
                h2.textContent = "Видео в VEGAS";
                p.textContent = "ZOFRAIN работает в Sony VEGAS. VEGAS в свою очередь не самый популярный видеоредактор. Он уступает по функционалу таким редакторам как Adobe Premiere Pro, After Effect's. Но у VEGAS есть главное приемущество - это его простота. Это довольно простой редактор который может освоить практически каждый.";
                lastClicked = "vegas";
            }, 600);
        }
        if(currentLi.id === 'cryengine' && lastClicked !== "cryengine"){
            bg.style.animation = "bgout 0.6s forwards"
            p.style.animation = "textout 0.6s forwards";
            h2.style.animation = "textout 0.8s forwards";
            setTimeout(() => {
                bg.style.animation = "bgin 0.6s forwards"
                p.style.animation = "textin 0.6s forwards";
                h2.style.animation = "textin 0.8s forwards";
                bg.style.backgroundImage = 'url(images/cryengineFootageFade.png)';
                h2.textContent = "Игры на CRYENGINE";
                p.textContent = "ZOFRAIN так же знакома с таким игровым движком, как Cryengine. Cryengine - это игровой движок выпущенный компанией Crytek специально для своих проектов таких как: Crysis, Hunt:Showdown. Этот движок так же используеться инди разработчиками.";
                lastClicked = "cryengine";
        }, 600);
        }

        otherLi.forEach(function(li) {
            if (li !== currentLi) {
                li.style.color = '#bbb';
                li.style.borderTop = '2px solid transparent';
                li.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }
        });
    }
})
