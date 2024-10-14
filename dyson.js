$(document).ready(function(){

    $(".nav .gnb>li").mouseenter(function(){
        $("#header>.menu").addClass("on");
        $(".sub>li").addClass("down");
    });

    $(".nav .gnb>li").mouseleave(function(){
        $("#header>.menu").removeClass("on");
        $(".sub>li").removeClass("down"); 
    });

    let currentIndex = 0;
    const tabCount = $('.tab_menu>.mini_bn').length;
    const intervalTime = 5000;

    function changeTab(index) {
        $(".tab_conts>li").stop().fadeOut();          
        $(".tab_conts>li").eq(index).stop().fadeIn(); 

        $(".tab_menu>.mini_bn").stop().removeClass("move"); 
        $(".tab_menu>.mini_bn").eq(index).addClass("move"); 
    }

    $('.tab_menu>.mini_bn').click(function() {
        currentIndex = $(this).index();
        changeTab(currentIndex);
    });

    setInterval(function() {
        currentIndex = (currentIndex + 1) % tabCount;
        changeTab(currentIndex);
    }, intervalTime);

    $(".btn").click(function(){
        $("#modal").stop().fadeIn(400);
    });

    $("#modal").click(function(){
        $("#modal").stop().fadeOut(400);
    });

    var titles = document.querySelectorAll(".aco_title");

    titles.forEach(function(title){
        title.addEventListener("click", function() {
            var isActive = title.classList.contains("active");

            titles.forEach(function (t) {
                t.classList.remove("active");
                t.nextElementSibling.classList.remove("show");
            });

            if(!isActive){
                title.classList.add("active");
                title.nextElementSibling.classList.add("show");
            }
        });
    });

    $(".color>li").click(function(){
        let list = $(this).index();
        $(".ear_cushions>li").stop().fadeOut();
        $(".ear_cushions>li").eq(list).stop().fadeIn();
        
        $(".color>li").stop().removeClass("live"); 
        $(".color>li").eq(list).addClass("live");
    });
    $(".cap_list>li").click(function(){
        let list = $(this).index();
        $(".cap>li").stop().fadeOut();
        $(".cap>li").eq(list).stop().fadeIn();
        
        $(".cap_list>li").stop().removeClass("appear"); 
        $(".cap_list>li").eq(list).addClass("appear");
    });

    $(".hamburger_icon").click(function(){
        $(".column_box").stop().fadeIn(400);
    });

    $(".close").click(function(){
        $(".column_box").stop().fadeOut(400);
    });
    
    var hmaburgs = document.querySelectorAll(".link_menu");
    hmaburgs.forEach(function(ham_title){
        ham_title.addEventListener("click", function(){
            var isActive = ham_title.classList.contains("view");

            hmaburgs.forEach(function(ham){
                ham.classList.remove("view");
                ham.nextElementSibling.classList.remove("action");
            });
            
            if(!isActive){
                ham_title.classList.add("view");
                ham_title.nextElementSibling.classList.add("action");
            }
        });
    });
});