document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.navigation');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });


    const btn1 = document.getElementsByClassName('btnR')[0]; 
    const btn2 = document.getElementsByClassName('btnH')[0]; 
    const btn3 = document.getElementsByClassName('btnW')[0]; 


    const p1 = document.getElementById('book'); 
    const p2 = document.getElementById('hiking'); 
    const p3 = document.getElementById('movie'); 

 
    console.log('Button 1:', btn1);
    console.log('Button 2:', btn2);
    console.log('Button 3:', btn3);
    console.log('Paragraph 1:', p1);
    console.log('Paragraph 2:', p2);
    console.log('Paragraph 3:', p3);

    if (btn1) {
        btn1.addEventListener('click', function() {
            p1.classList.remove('hidden');
            p2.classList.add('hidden'); 
            p3.classList.add('hidden'); 
        });
    }

    if (btn2) {
        btn2.addEventListener('click', function() {
            p2.classList.remove('hidden');
            p1.classList.add('hidden'); 
            p3.classList.add('hidden'); 
        });
    }

    if (btn3) {
        btn3.addEventListener('click', function() {
            p3.classList.remove('hidden');
            p1.classList.add('hidden'); 
            p2.classList.add('hidden'); 
        });
    }
});