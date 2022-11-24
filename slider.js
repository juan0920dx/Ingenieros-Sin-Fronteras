(function(){
    const sliders = [...document.querySelectorAll('.integrante_testimonio')];
    const buttonNext = document.querySelector('#next')
    const buttonbefore = document.querySelector('#before')
    let value;
    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonbefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentIntegrante = document.querySelector('.integrante_testimonio--show').dataset.id;
        value = Number(currentIntegrante);
        value+= add;

        sliders[Number(currentIntegrante)-1].classList.remove('integrante_testimonio--show')
        if(value === sliders.length+1 || value === 0 ){
            value = value === 0? sliders.length : 1;
        }
        sliders[value-1].classList.add('integrante_testimonio--show')
    } 

})();