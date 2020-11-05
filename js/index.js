import {
    List
} from './imagesList.js';


$("document").ready(() => {

    //mobile menu


    $(".menu-toggle").click(() => {
        $("nav").toggleClass("hide")
        $(".menu-toggle i").toggleClass("fa-times")
    });
    $("header nav ul li a").click(() => {
        $("nav").toggleClass("hide")
        $(".menu-toggle i").toggleClass("fa-times")
    })
    //carusel
    let category = "ALL";
    let currentImage = 0;
    let categoryArray

    const carusel = (direction, categoryArray, categoryArrayLength) => {
        const img = $(".works_wrapper_img")[0];

        if (direction === "right") {
            if (currentImage === categoryArrayLength) {
                currentImage = 0;
                img.setAttribute("src", `${categoryArray[currentImage].path}`)

            } else {
                currentImage++;
                img.setAttribute("src", `${categoryArray[currentImage].path}`)
            }

        }
        if (direction === "left") {
            if (currentImage === 0) {
                currentImage = categoryArrayLength;
                img.setAttribute("src", `${categoryArray[categoryArrayLength].path}`)

            } else {
                currentImage--;
                img.setAttribute("src", `${categoryArray[currentImage].path}`)
            }
        }

    };
    //change active category
    $(".works_category_element").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
        category = this.textContent
        currentImage = 0;

    })





    $(".works_wrapper_button").click((event) => {
        const direction = event.target.getAttribute('data-target');
        if (category === "ALL") {
            categoryArray = List;
        } else {
            categoryArray = List.filter(photo => photo.category === category)
        }

        const categoryArrayLength = categoryArray.length -1;
        carusel(direction, categoryArray, categoryArrayLength);
        console.log(categoryArrayLength,categoryArray)



    })
})