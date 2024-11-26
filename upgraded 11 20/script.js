document.getElementById('darkMode').addEventListener('click', function() {
    const body = document.body;
    const p = document.getElementsByClassName('white');
    const tittle = document.getElementById('tittle');
    const buttons = document.getElementById('buttons')
    const currentBgColor = getComputedStyle(body).backgroundColor;
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');

    if (currentBgColor === 'rgb(59, 59, 59)') {
        body.style.backgroundColor = 'white';
        tittle.style.backgroundColor = 'white'; 
        buttons.style.backgroundColor = 'white';
        main.style.backgroundColor = 'white';
        footer.style.backgroundColor = '#7289da';
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = 'black';
        }
    } else {
        body.style.backgroundColor = '#3b3b3b';
        tittle.style.backgroundColor = '#1e2124';
        buttons.style.backgroundColor = '#282b30';
        footer.style.backgroundColor = '#282b30';
        main.style.backgroundColor = '#36393e';
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = 'white';
        }
    }
});