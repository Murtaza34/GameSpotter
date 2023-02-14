$(document).ready(function(){
    const apiKey = 'f9ad2256413a41afa9dc99e837599c1b'
    var queryUrl = 'https://api.rawg.io/api/games?key='+apiKey;
    $.ajax({
        url:queryUrl,
        method:"GET"
    }).then(function (response) {
        function displayImage() {
            for (let i = 0; i < 15; i++) {
                var img = response.results[i].background_image;
                const dispImg = $('.game-cover');
                dispImg[i].setAttribute('src',img);
            };
            
        };
        function displayTitle(){
            for (let i = 0; i < 15; i++) {
                var title = response.results[i].name;
                const dispTitle = $('.game-title');
                dispTitle[i].setAttribute('h5',title);
                dispTitle[i].append(title);
            };
        }
        function displayYear(){
            for (let i = 0; i < 15; i++) {
                var year = response.results[i].released;
                const dispYear = $('.game-year');
                dispYear[i].setAttribute('p',year);
                dispYear[i].append(year);
            };
        };
        function getId() {
            for (let i=0; i<15; i++){
                var vidId = response.results[i].id;
                console.log(vidId);
                const queryUrl1 = 'https://api.rawg.io/api/games/'+vidId+'/movies?key='+apiKey;
                $.ajax({
                    url:queryUrl1,
                    method:'GET'
                }).then(function (response) {
                    for (let i=0; i<vidId; i++){
                        console.log(response.results[i]);
                    };
                });
        };
    
            
        };
        displayImage();
        displayTitle();
        displayYear();
        console.log(response);
        getId();
        dispVid();
    })
    .catch(error)
    console.log(error);;
    
});
