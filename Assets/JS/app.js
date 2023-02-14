$(document).ready(function(){
    const apiKey = 'e6a4064187524f7c860f613d656f508f'
    var queryUrl = 'https://api.rawg.io/api/games?key='+apiKey;
    $.ajax({
        url:queryUrl,
        method:"GET"
    }).then(function (response) {
        // console.log(response);
        console.log(response);
        
    });
});