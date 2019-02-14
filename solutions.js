//Q2. Console "Hello Word" in document.ready function.

$("document").ready(function () {

    $(".q1").click(function () {
        console.log("hello World!");
    });

});

//Q2. Select a ID name "#test" and add class "load" when DOM is loaded.

$(document).ready(function () {

    $(".q2").click(function () {
        $("#addLoadClassButton").click(() => {
            $("#test").addClass("load");
            console.log($("test"));
        });
    });
});

//Q3. Change the color of element which class name end with "-new".

$(".q3").click(() => {
    $("#changeColorButton").click(() => {
        $("[class$='new']").css("color", "red");
    });
});

//Q4. Disable submit button using jquery attr method

$("#disableButton").click(
    function () {

        $("button[type=submit]").attr("disabled", "disabled")

    }
);

//Q5. Change the font size of ".target" which has parent element with id name "#main"

$("#changeFontSize").click(function () {

    $("#main > .target").css("font-size", "24px");


});

//Q6. After page load change the HTML of div element with "p" element

$("#changeHTML").click(
    function () {
        $("#change").html("<p> Hello! </p>");
    }
);

//Q7. Bind a click function to an "click" element and append next "click" next to it.

$(".addClick").click(
    function () {
        var btn = $('<button> Click</button>');
        $(this).append(btn);
        // $(this).append('Click');

    });


//Q8. Click event not working on element which added dynamicly or via script, 
//make it work using .on method


$("#addDyn").click(
    function () {

        $(".s8").prepend("<button id=dynamicButton>Click me to get an alert.</button>");
    }

);

$("#makeClickWork").on('click',
    function () {
        $("#dynamicButton").on('click', function () {
            alert("it worked");
        });
    }
);


// Q.9 Get dropdown selected value on onchanage event and append in div container.


$("#dropdown").change(

    function () {

        var value = this.value;
        $(".container").text(value);
    }
);

// Q.10 Create a dropdown menu using hover method in jquery 

$("#hoverHereButton").hover(
    function () {
        $(".dropdown-content").css("display", "block");

    },
    function () {
        $(".dropdown-content").css("display", "none");


    }
);

//Q.11 On clicking on "google" tag. It is taking us to google home page. Stop it from happening.

$('#stop').click(
    function () {
        $("#googleLink").removeAttr("href", "target");

    }
);


// Q.12 We have bind a click funtion to parent div but we want stop it from performing when user clicks on its child li

$("#parent").hover(
    function () {
        $(this).css("color", "red");
    },
    function () {
        $(this).css("color", "black");
    }
);

$('#stopPropagation').on("click",

    function () {
        $("#parent>li").hover(function (e) {
            e.stopPropagation();
        });

    }

);

// Q.13 Get the max height of elements using jquery each method

$("#maxButton").click(
    function () {
        var maxHeight = 0;

        $("#maxheight > li").each(function () {

            let height = $(this).height();
            if (height > maxHeight) {
                maxHeight = height;
            }

        });
        $("#printMax").text(maxHeight + " px");
    });


// Q.14 Chagne color of every cell which has numberl larger than 10.


$("#setColor").click(function () {


    $("td").each(function () {
        var data = $(this).text();
        if (parseInt(data) > 10) {
            $(this).css("background-color", "black");
            $(this).css("color", "white");

        }

    });


});


//Q15. Retrive the data from server using ajax get call


$(document).ready(function () {

    $('#submitFlick').click(function () {

        var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var search = $('#flick').val();
        var flickerOptions = {
            tags: search,
            format: "json"

        };

        function displayPhotos(data) {
            for (var i = 0; i < 5; i++) {
                var photoHTML = '<ul class="photoul">';
                $.each(data.items, function (i, photo) {
                    photoHTML += '<li class="photoli">';

                    photoHTML += '<img src="' + photo.media.m + '"></li>';
                });
                photoHTML += '</ul>';
                $("#filckersearch").html(photoHTML);
            }
        }
        $.getJSON(flickerAPI, flickerOptions, displayPhotos);

    });
});



//Q.16 Add cross button on row and bind click function which make a delete request to server, after success event remove the row from dom
$(".delete").click(
    function () {
        let deleteThis = $(this).parent().parent();
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos/" + $(this).parent().prev().prev().text(),
            method: "DELETE",
            success: function () {
                console.log(this);

                $(deleteThis).remove();

            },
            error: function (error) {
                alert(error.message);


            }
        });


    });

// Q17. Create a image array and in div create a slide show to animate images of
//  delay of 500ms.

$(".q17").click(
    function () {
        var imageArr = [];
        var i = 0;
        imageArr.push("images/one.png");
        imageArr.push("images/two.png");
        imageArr.push("images/three.png");

        setInterval(function () {
            i++;
            if (i == imageArr.length) {
                i = 0;
            }
            $(".s17").fadeOut("slow", function () {
                $(this).css("background-image", "url(" + imageArr[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 1000);


    }

)