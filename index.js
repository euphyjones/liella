// Toggle mode
if (localStorage.getItem('sideBarOn') === 'true') {
    $('#js-toggle-sidebar').addClass('togged');
    $('.liella-mid').addClass('mid-togged');
    $('.elysian-right').addClass('right-togged');
}

$(function() {
    // toggle sidebar
    (function sideBar() {
        var $toggleButton = $('#js-toggle-sidebar');
        var $sidebar = $('.liella-mid');
        var $wrapper = $('.elysian-right');

        function sideBar() {
            if (!$sidebar.hasClass('mid-togged')) {
                $sidebar.addClass('mid-togged');
                $toggleButton.addClass('togged');
                $wrapper.addClass('right-togged');
                localStorage.setItem('sideBarOn', 'true');
            } else {
                $sidebar.removeClass('mid-togged');
                $toggleButton.removeClass('togged');
                $wrapper.removeClass('right-togged');
                localStorage.removeItem('sideBarOn');
            }
        }

        $toggleButton.on('click', sideBar);
    })();
});




var randomNumber1 = Math.floor(Math.random() * 5) + 1; 
var randomLiellaImg = "liella" + randomNumber1 + ".png"; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomLiellaImg);



//if (randomNumber1 > randomNumber2) {
//  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
//}
//else if (randomNumber2 > randomNumber1) {
//  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//}
//else {
//  document.querySelector("h1").innerHTML = "Draw!";
//}

