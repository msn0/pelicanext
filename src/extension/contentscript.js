/**
 * pelicanext
 * @author Michal Jezierski ambinanitelo at gmail . com
 */
PelicanExt = {

  URL:              "http://172.18.8.249:3000/add",
  BUTTON_CLASSNAME: "yt-uix-tooltip-reverse yt-uix-button yt-uix-button-default yt-uix-tooltip pelican-button", 
  BUTTON_ICON:      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9wJBQkzKSruImQAAAHuSURBVDjLlZO9a1NhGMV/597bNClqKBak4FCQQgPi0FtcWpyEDk4d/QvUxUGXgtxKjYirg4sdXFQ6iaCDOjuJsYOFRHERFAVtpQRrmtzc45CP0tpWfOCdnnPOe54vcUCUK6Vp4IrNA8lPk7iW7sZoL+KNSukY9gtJJ22HErb1WWIuiauVfQXKlYkR0FXb80hgrMDKWnI4aDkDMh4hFpO49mGHQLlSumz7DqjDNQ5Ca+NTyMrSEFHBji9ukh/OZAuJJduXBFB+U5q1/FzItlGA6l9CPj7L8301Ioi2XY6ebjJ+ruHcYQRcDwAMQ10rkqQggveP86zVIsKcKYxkRAWjwHx9neNHbUBggCPBfhNQADbkhzNmkjozSZ38sDtFy31cwD/CbUh/i9amcPZ3PjqILEFjI+TVzUM4FemWcPs/BHrRrHeM5osZx2eajE6mdCdxsIANQ0czimMpg0VzYnaLYMD9HKgv0OpxdiyXIcxlTF7YJG2Idqu/OlZn5q2gW+tLzLK3++vuA6DdFFnaIbr3NVQk3Q4AkrjaTKZq52VOyX4CKGvtXPMeUdKK7bNJXJ1K4urGnsd0693EmbVatLz6sDAa5TOmr/0i3dI6ML8wVV365zUC3K2PD357G801fgaLxbH2vayt+wtxdX037g+N+NpU2SJOrgAAAABJRU5ErkJggg==",
  BUTTON_ICON_DONE: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9wJBQsHFb0veXoAAAItSURBVDjLfZO9axRRFMV/582QnYmgkGKzJo1xSSpBGwv/AoNNSm2sbS1WUHRTZIRgxFJFwZQKgk0KG0FSxCJlIBIL3WJDPhYkWXVlN5uddy2cUbNJPM27vHvPuYf73hXHYHp6OjCz80BF0ksze5ckyV5/nfovqtVqaGYXJFUkXfXeIwlgEXgAvE+SpHukQLVaPWNm1yXdAWIzAyCOY7z37O3tATx1zj3p7Lc/zc0+7CkjngBuANeAiwBpmloURZRKJY2MjFiv12NjY0ONRgPvfQ306uupxcdh1vwc8CiLLU1TisWixsfHGR4eJooiee8plUq2vb3N2tra2daPn3dT7TdcRjqZk81MaZqqXC7b6OgoQRBQr9fZ2tqyKIo0MTGhoaEh6+17wE7nAj5jS5IBBEEggFarxdLSEisrK9rZ2SHLZ7OTd/2vYGbKTjIhCoUCYRgShuGffI6Q/yBNU+I4ZnJyEjOjUCgc+gCHBA5aBO89Yfi7rN1us7q6yubmJmHgDggoJ/9j0Zxz6nQ6rK+v45yzWq2m3d1dgiDImphygfZfA7Ls50kS3W6X5eVli+NYgGVutJ+mgL7lQ/wIzAH1zI0AA0wSzjnlcZZrDgwEL5wFbxxAkiRN59w9SVOS5vP2yhhALiLgLTDl8Tef3frwRUdsYaHdbl8eGxu7XS6XLw0ODrKwsEAURZ8lzZrZ6yRJWsduY45KpRIVi8UrwP1ms/k8DMP5mZmZ7/11vwARJurUpMPfvQAAAABJRU5ErkJggg==",
  pelicanButton:    "",

  init: function(){
    var watchActionsDiv = $("#watch-actions");
    var pelicanButton = document.createElement("button");
    pelicanButton.className = PelicanExt.BUTTON_CLASSNAME;
    pelicanButton.innerHTML = "<img src='"+PelicanExt.BUTTON_ICON+"' /><span class='yt-uix-button-content'>Add to Pelican</span>";
    $(pelicanButton).click(function(){
      return PelicanExt.feedPelican();
    });
    watchActionsDiv.append(pelicanButton);
    PelicanExt.pelicanButton = $("#watch-actions .pelican-button");
    return this;
  },
  feedPelican: function(){
    var url;
    if(!$(PelicanExt.pelicanButton).hasClass('pelican-button-done')){
      url = window.location.href;
      $.ajax({
          url: PelicanExt.URL,
          type: 'POST',
          data: {
              url: url
          },
          success: function() {
            $(PelicanExt.pelicanButton).addClass('pelican-button-done');
            $(PelicanExt.pelicanButton).find('img').attr("src", PelicanExt.BUTTON_ICON_DONE);
          }
      });
    }
    return this;
  }
};
var pelicanExt = Object.create(PelicanExt).init();