$(document).ready(function () {
  const apiKey = "f9ad2256413a41afa9dc99e837599c1b";
  var queryUrl = "https://api.rawg.io/api/games?key=" + apiKey;
  // var queryUrl1 = "https://api.rawg.io/api/games/3498/movies?key=" + apiKey;
  $.ajax({
    url: queryUrl,
    method: "GET",
  })
    .then(function (response) {
      function displayPopular() {
        for (let i = 0; i < 5; i++) {
          var img = response.results[i].background_image;
          const dispImg = $(".game-cover");
          dispImg[i].setAttribute("src", img);
          var title = response.results[i].name;
          //console.log(title);
          const dispTitle = $(".game-title");
          dispTitle[i].setAttribute("h5", title);
          dispTitle[i].append(title);
          var year = response.results[i].released;
          //console.log(year);
          const dispYear = $(".game-year");
          dispYear[i].setAttribute("p", year);
          dispYear[i].append(year);
        }
      }
      function dispVideo() {
        const vidId = "3498";
        const queryUrl1 = "https://api.rawg.io/api/games/" + vidId + "/movies?key=" + apiKey;
        $.ajax({
          url: queryUrl1,
          method: "GET",
        }).then(function (response) {
          //console.log(response);
          var videoGameId = response.results[0].data[480];
          //console.log('video link is:', videoGameId);
          const gameVideo = $(".game-video");
          var gvid = gameVideo.attr("src", videoGameId);
          //console.log('Video', gvid);
          // gameVideo.append(videoGameId);
        });
      }
      //This function displays the upcoming games column
      function dispUpc() {
        const apiKey= "f9ad2256413a41afa9dc99e837599c1b"
        const queryUrl1 = "https://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&ordering=-added&key=" + apiKey;
        $.ajax({
          url: queryUrl1,
          method: "GET",
        }).then(function (response) {
          console.log(response);
          for (let i = 0; i < 5; i++) {
            var upcomingPic = response.results[i].background_image;
            console.log(upcomingPic);
            const dispUpcoming = $(".game-upcoming");
            dispUpcoming[i].setAttribute("src", upcomingPic);
            dispUpcoming[i].append(upcomingPic);
            var Upctitle = response.results[i].name;
          //console.log(title);
            const dispUpcTitle = $(".game-title-upcoming");
            dispUpcTitle[i].setAttribute("h5", Upctitle);
            dispUpcTitle[i].append(Upctitle);
          // gameVideo.append(videoGameId);
            var Upcyear = response.results[i].released;
            console.log(Upcyear);
            const dispUpcYear = $(".game-year-upcoming");
            dispUpcYear[i].setAttribute("p", Upcyear);
            dispUpcYear[i].append(Upcyear);
          }
        });
      }
      function dispReleased() {
        const apiKey= "f9ad2256413a41afa9dc99e837599c1b"
        const queryUrl1 = "https://api.rawg.io/api/games?dates=2023-02-07,2023-02-14&ordering=-released&page_size=10&key=" + apiKey;
        $.ajax({
          url: queryUrl1,
          method: "GET",
        }).then(function (response) {
          console.log(response);
          for (let i = 0; i < 5; i++) {
            var releasedPic = response.results[i].background_image;
            //console.log(releasedPic);
            const dispReleasedPic = $(".game-cover-released");
            dispReleasedPic[i].setAttribute("src", releasedPic);
            dispReleasedPic[i].append(releasedPic);
            var Releasedtitle = response.results[i].name;
          //console.log(title);
            const dispReleasedTitle = $(".game-title-released");
            dispReleasedTitle[i].setAttribute("h5", Releasedtitle);
            dispReleasedTitle[i].append(Releasedtitle);
          // gameVideo.append(videoGameId);
            var Releasedyear = response.results[i].released;
          //console.log(title);
            const dispReleasedYear = $(".game-year-released");
            dispReleasedYear[i].setAttribute("p", Releasedyear);
            dispReleasedYear[i].append(Releasedyear);
          }
        });  
      }
      displayPopular();
      dispVideo();
      dispUpc();
      dispReleased();
    });
});
