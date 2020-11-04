/// mobile menu

$("document").ready(() => {
    $(".menu-toggle").click(() => {
        $("nav").toggleClass("hide")
        $(".menu-toggle i").toggleClass("fa-times")
    });
 $("header nav ul li a").click(()=>{
     $("nav").toggleClass("hide")
     $(".menu-toggle i").toggleClass("fa-times")
 })
})