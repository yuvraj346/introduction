let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');
    
    slide.appendChild(items[0]);
    resetItems();
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');
    
    slide.prepend(items[items.length - 1]);
    resetItems();
});

function resetItems() {
    let items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        item.style.opacity = '1'; // Ensure opacity is reset to 1
        item.style.left = ''; // Reset any inline styles
        item.style.transform = 'translate(0, -50%)';
        
        if(index === 0) {
            item.style.transform = 'translate(0, -50%)';
        } else if(index === 1) {
            item.style.transform = 'translate(0, -50%)';
            item.style.left = '0';
            item.style.width = '100%';
            item.style.height = '100%';
        } else if(index === 2) {
            item.style.left = '50%';
        } else if(index === 3) {
            item.style.left = 'calc(50% + 200px)';
        } else if(index === 4) {
            item.style.left = 'calc(50% + 400px)';
        } else {
            item.style.left = 'calc(50% + 660px)';
            item.style.opacity = '0'; // Ensure the other items are hidden
        }
    });
}
