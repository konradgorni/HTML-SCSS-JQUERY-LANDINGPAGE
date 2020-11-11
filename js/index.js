import {
    List
} from './imagesList.js';
import {
    postsList
} from './postsList.js'


$("document").ready(() => {

    //mobile menu


    $(".menu-toggle").click(() => {
        $("nav").toggleClass("hide")
        $(".menu-toggle i").toggleClass("fa-times")
    });
    $("header nav ul li a").click((e) => {
        $("nav").toggleClass("hide");
        $(".menu-toggle i").toggleClass("fa-times");
       
       const currentID=`${$(e.currentTarget).attr("id")}`
        $(`.${currentID}`).get(0).scrollIntoView();


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

        const categoryArrayLength = categoryArray.length - 1;
        carusel(direction, categoryArray, categoryArrayLength);




    })

    let currentCard = 0;
    const changeDot = (direction) => {
        const dots = $(".study_wrapper_post_dotWrapper_dot");
        dots[currentCard].classList.remove("active_dot")




        if (direction === "right") {
            if (currentCard === 2) {
                dots[0].classList.add("active_dot")
                currentCard = 0;
            } else {
                currentCard++;
                dots[currentCard].classList.add("active_dot")
            }

        }
        if (direction === "left") {
            if (currentCard === 0) {
                dots[2].classList.add("active_dot")
                currentCard = 2;
            } else {
                currentCard--;
                dots[currentCard].classList.add("active_dot")

            }

        }


    };
    const changePosts = () => {
        let postIcon = $(".study_wrapper_post_square i")[0];
        let postTitle = $(".study_wrapper_post_title")[0];
        let postText = $(".study_wrapper_post_text")[0];


        postIcon.classList = postsList[currentCard].iconClass;



        postTitle.textContent = postsList[currentCard].title;
        postText.textContent = postsList[currentCard].description;

    };

    ///cash post
    changePosts()

    $(".study_wrapper_post").on("swipeleft", function () {

        changeDot("right");
        changePosts();
    });
        $(".study_wrapper_post_btn_right").on("click", function () {

        changeDot("right");
        changePosts();
    });
    $(".study_wrapper_post").on("swiperight", function () {
        changeDot("left");
        changePosts();
    });
            $(".study_wrapper_post_btn_left").on("click", function () {

        changeDot("left");
        changePosts();
    });
    // 

    //scroll up
    $(".footer_scroll").click(() => {
        window.scrollTo(0, 0);
    })


    // validation
    $('.contact_wrapper_form_form').submit((e) => {
        e.preventDefault();
        let name = $('#form_name').val();
        let email = $('#form_email').val();
        let subject = $('#form_subject').val();
        let message = $('#form_message').val();
        let validForm = true;

        $(".error").remove();

        if (name.length < 1) {
            $('#form_name').after('<p class="error">This field is required</p>');

            validForm = false;
        } else if (name.length < 3) {
            $('#form_name').after('<p class="error">Its unavaliable have 2 letters name</p>');
            validForm = false;
        }
        if (email.length < 1) {
            $('#form_email').after('<p class="error">This field is required</p>');
            validForm = false;
        } else {
            var regEx = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#form_email').after('<p class="error">Enter a valid email</p>');
                validForm = false;
            }
        }
        if (subject.length < 1) {
            $('#form_subject').after('<p class="error">This field is required</p>');
            validForm = false;
        } else if (subject.length < 5) {
            $('#form_subject').after('<p class="error">Min 5 letters</p>');
            validForm = false;
        }
        if (message.length < 1) {
            ;
            $('#form_message').after('<p class="error">This field is required</p>')
            validForm = false;
        } else if (message.length < 10) {
            $('#form_message').after('<p class="error">Min letters 10</p>')
            validForm = false;
        }


        if (validForm === true) {

            $('#form_contact')[0].reset();

            $('#form_button').after('<p class="correct">Message sent</p>')


        }
    });
});