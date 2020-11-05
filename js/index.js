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

    const carusel = (direction, category, categoryArray) => {
        const img = $(".works_wrapper_img")[0];
        console.log(`direction ${direction} category ${category} length ${length} 
        category length${categoryArray.length}`)

        if (direction === "right") {
            if (category === "ALL") {
                ++currentImage;

                if (currentImage === List.length - 1) {
                    currentImage = 0;
                    img.setAttribute("src", `${List[currentImage].path}`)
                } else {
                    //  currentImage++;
                    img.setAttribute("src", `${List[currentImage].path}`)
                }

            } else {
                if (currentImage === categoryArray.length - 1) {
                    currentImage = 0;
                    img.setAttribute("src", `${categoryArray[currentImage].path}`)
                } else {
                    //  currentImage++;
                    img.setAttribute("src", `${categoryArray[currentImage].path}`)
                }



            }

        }
        if (direction === "left") {
            if (category === "ALL") {

                if (currentImage === -1) {
                    currentImage = List.length - 1;
                    img.setAttribute("src", `${List[currentImage].path}`)
                } else {

                    img.setAttribute("src", `${List[currentImage].path}`)

                }

            } else {
                if (currentImage === -1) {
                    currentImage = categoryArray.length - 1
                    img.setAttribute("src", `${categoryArray[currentImage].path}`)
                } else {

                    img.setAttribute("src", `${categoryArray[currentImage].path}`)
                }


            }

            --currentImage;
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
        categoryArray = List.filter(photo => photo.category === category)
        const categoryArrayLength = categoryArray.length;
        carusel(direction, category, categoryArray);
        


    })
})