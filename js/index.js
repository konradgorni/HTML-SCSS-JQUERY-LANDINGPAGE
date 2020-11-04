/// mobile menu

$("document").ready(() => {
    $(".menu-toggle").click(() => {
        $("nav").toggleClass("hide")
    });
 $("header nav ul li a").click(()=>{
     $("nav").toggleClass("hide")
 })
})