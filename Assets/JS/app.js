$(document).ready(function(){
    const apiKey = 'f9ad2256413a41afa9dc99e837599c1b'
    var queryUrl = 'https://api.rawg.io/api/games?key='+apiKey;
    var queryUrl1 = 'https://api.rawg.io/api/games/3498/movies?key='+apiKey;
    $.ajax({
        url:queryUrl,
        method:"GET"
    }).then(function (response) {
        //console.log(response);
        // var newDiv = $('#game-image');
        // newDiv.attr('src',response.results[0].background_image);
        // newDiv.append(newDiv);
        // // var newDiv1 = $('#game-image1');
        // newDiv1.attr('src',response.results[1].background_image);
        // newDiv1.append(newDiv1);
        // var newDiv2 = $('#game-image2');
        // newDiv2.attr('src',response.results[2].background_image);
        // newDiv2.append(newDiv2);
        // var newDiv3 = $('#game-image3');
        // newDiv3.attr('src',response.results[3].background_image);
        // newDiv3.append(newDiv3);
        // var newDiv4= $('#game-image4');
        // newDiv4.attr('src',response.results[4].background_image);
        // newDiv4.append(newDiv4);
        // var newDiv5= $('#game-image5');
        // newDiv5.attr('src',response.results[5].background_image);
        // newDiv5.append(newDiv4);
        // var newDiv6= $('#game-image6');
        // newDiv6.attr('src',response.results[6].background_image);
        // newDiv6.append(newDiv6);
        // var newDiv7= $('#game-image7');
        // newDiv7.attr('src',response.results[7].background_image);
        // newDiv7.append(newDiv7);
        // var newDiv8= $('#game-image8');
        // newDiv8.attr('src',response.results[8].background_image);
        // newDiv8.append(newDiv8)
        // var newDiv9= $('#game-image9');
        // newDiv9.attr('src',response.results[9].background_image);
        // newDiv9.append(newDiv9);
        // var newDiv10= $('#game-image10');
        // newDiv10.attr('src',response.results[10].background_image);
        // newDiv10.append(newDiv10);
        function displayImage() {
            for (let i = 0; i < 15; i++) {
                var img = response.results[i].background_image;
                const dispImg = $('.game-cover');
                dispImg[i].attr('src',img);
                console.log(img);
                
                // dispImg.append(dispImg);
            };
            console.log();
        };
        function displayTitle(){

        }
        function displayYear(){

        }

        // var newDiv11= $('#game-image11');
        // newDiv11.attr('src',response.results[11].background_image);
        // newDiv11.append(newDiv11);
        // var newDiv12= $('#game-image12');
        // newDiv12.attr('src',response.results[12].background_image);
        // newDiv12.append(newDiv12)
        // var newDiv13= $('#game-image13');
        // newDiv13.attr('src',response.results[13].background_image);
        // newDiv13.append(newDiv13)
        // var newDiv14= $('#game-image14');
        // newDiv14.attr('src',response.results[14].background_image);
        // newDiv14.append(newDiv14)
    
        displayImage();
    });
});
