var nav = document.getElementById("MainNav");
var scrollio;
let scrollCondition = false;

$(document).ready(function () {
    $(".dropdown").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});
new WOW().init();
// $(".owlcarouselBanner").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1,
//         },
//         600: {
//             items: 1,
//         },
//         1000: {
//             items: 1,
//         },
//     },
// });



const _iOSDevice = !!navigator.platform.match(/iPhone|iPod|iPad/);
window.scroll(0, 0);
// smooth scroll
var Scrollbar = window.Scrollbar;
const options = {
    damping: 0.5,
    thumbMinSize: 20,
    renderByPixels: !("ontouchstart" in document),
    alwaysShowTracks: false,
    continuousScrolling: true,
};
if (
    screen.width >= 1024 &&
    !navigator.userAgent.includes("Firefox") &&
    !navigator.userAgent.includes("iPad") && scrollCondition
) {
    $("body").css({ height: "6000px" });
    Scrollbar.init(document.querySelector(".my-scrollbar"));
}

var scrollCount = 0;
$(document).ready(() => {
    $("body").addClass("iosDevice");

    if (!navigator.userAgent.includes("Firefox") && scrollCondition) {
        setTimeout(() => {
            document
                .getElementsByClassName("my-scrollbar")[0]
                .addEventListener("wheel", (e) => {
                     scrollContent(e.deltaY);
                });

            if (
                window.innerWidth >= 1024 &&
                !navigator.userAgent.includes("iPad")
            ) {
                $(".my-scrollbar").css({
                    position: "fixed",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                });
            }
        });
    }
});
function scrollContent(e){
    var isElementInView = Utils.isElementInView($('.copyright'), false);
    if(scrollCount >= 0 ){
        if(e < 100 && scrollCount != 0){
            scrollCount+=e;
        }else if(e === 100){
            if(isElementInView){
                scrollCount = scrollCount
            }
            else{
                scrollCount+=100
            }
            scrollCount+=100;
        }
    }else{
        scrollCount = 0
    }
    if (screen.width >= 1024 && !_iOSDevice){
        window.scroll(0, scrollCount);
    }
    // console.log(scrollCount)
}
document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            console.log('left')
            break;
        case 38:
            console.log('up');
            scrollContent(-100)
            break;
        case 39:
            console.log('right');
            break;
        case 40:
            console.log('down');
            scrollContent(100)
            break;
    }
});

// chk element visible on
function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};
var Utils = new Utils();

// burger
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
        if(this.classList.contains('open')){
            $('.sider').css('display','block')
            setTimeout(()=>{
                $('.sider').css('opacity','1');
                $('.sideNave').css('left','0')
            })
        }else{
            
            $('.sideNave').css('left','-300px')
            setTimeout(()=>{
                $('.sider').css('opacity','0');
            },300)
            setTimeout(()=>{
                $('.sider').css('display','none')
            },600)
        }
	});
});

// height
var secDiv = document.getElementsByClassName('sec'),
    secCount = 0;
$(document).ready(()=>{
    $('.main').css('height',window.innerHeight+'px')

    setTimeout(()=>{
        $('.conDiv .right .circle').addClass('active')
    },1500)
    setTimeout(()=>{
        $('.sec.frst').addClass('active')
    },2000)
    oneScroll()

})

function oneScroll(){
    var i = 0;
    $(window).bind('mousewheel', function (e) {
        if (i == 0) {
            setTimeout(function () {
                i++;
            }, 250)
        }
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {
            // do something
            letScroll(e)
            console.log("Haven't scrolled in 250ms!");
            i = 0;
        }, 500));

    })
}

function letScroll(e){
    if(e.originalEvent.wheelDelta >= 0){
        if(secCount > 0){
            secCount--
        }
    }else{
        if(secCount < secDiv.length-1){
            secCount++
        }
    }

    for(var i = 0;i<secDiv.length;i++){
        secDiv[i].classList.remove('active1')
    }
    secDiv[secCount].classList.add('active1')

    if(e.originalEvent.wheelDelta >= 0){
        secDiv[secCount].classList.remove('active2')
    }else{
        if(secCount <= secDiv.length-1){
            secDiv[secCount-1].classList.add('active2')
        }
    }
    
    console.log(secCount)
}
