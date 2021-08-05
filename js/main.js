(function () {
    var menu = document.getElementById('menu')
    var nav = document.getElementById('nav')
    var mark = document.getElementById('mark')
    menu.addEventListener('click', function () {
        if (nav.className === 'nav') {
            nav.className = 'nav active'
            mark.className = 'mark active'
        } else {
            nav.className = 'nav'
            mark.className = 'mark'
        }
    })
    mark.addEventListener('click', function () {
        nav.className = 'nav'
        mark.className = 'mark'
    })
    mark.addEventListener("touchstart",function(e){
                            e.stopPropagation();
                            e.preventDefault();
                        },false);
})()