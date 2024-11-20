document.getElementById('eyeSaver').addEventListener('click', function() {
    const body = document.body;
    if (body.style.backgroundColor === 'rgb(59, 59, 59)') { 
        body.style.backgroundColor = 'white'; 
    } else {
        body.style.backgroundColor = '#3b3b3b'; 
    }
});