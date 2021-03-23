document.addEventListener('DOMContentLoaded', function() {
const title = document.querySelector('#title');
    const titleStr = title.textContent;
    const titleSplit = titleStr.split("");
    title.textContent = ''

    titleSplit.forEach(letter => {
        title.innerHTML += '<span>' + letter + '</span>';
    });

    let letter = 0;
    let timer = setInterval(onTick, 50);

    function onTick(){
        const spans = title.querySelectorAll('span')[letter];
        
        // spans.forEach(span => {
        //     span.classList.add('fade')
        // });
        spans.classList.add('fade');
        letter++;
        if(letter === titleSplit.length){
            clearInterval(timer);
            timer = null;
            return;
        }
    }
});
    