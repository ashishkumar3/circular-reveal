(function(){
    const element = document.querySelector('.circular-reveal');
    const inner = document.querySelector('.circular-reveal__content');

    const easing = 0.2;
    const outScale = 0.6;
    const inScale = 1;
    let targetScale = outScale;
    let elementScale = targetScale;
    let innerScale = 1 / elementScale;

    element.addEventListener('pointerover', ()=>{
        console.log('in');
        targetScale = inScale;
        
    })

    element.addEventListener('pointerout', ()=>{
        console.log('out');
        targetScale = outScale;
    })

    const update = () => {
        elementScale += (targetScale - elementScale) * easing;
        innerScale = 1 / elementScale;

        element.style.transform = `scale(${elementScale})`;
        inner.style.transform = `scale(${innerScale})`;

        requestAnimationFrame(update);
    }
    
    requestAnimationFrame(update);

})();