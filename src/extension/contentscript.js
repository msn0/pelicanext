/**
 * pelicanext
 * @author Michal Jezierski ambinanitelo at gmail . com
 */
PelicanExt = {

  // URL:              "http://127.0.0.1:3000/add",
  URL:              "http://172.18.8.249:3000/add",
  BUTTON_CLASSNAME: "yt-uix-tooltip-reverse yt-uix-button yt-uix-button-default yt-uix-tooltip pelican-button", 
  BUTTON_ICON:      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9wJBQkzKSruImQAAAHuSURBVDjLlZO9a1NhGMV/597bNClqKBak4FCQQgPi0FtcWpyEDk4d/QvUxUGXgtxKjYirg4sdXFQ6iaCDOjuJsYOFRHERFAVtpQRrmtzc45CP0tpWfOCdnnPOe54vcUCUK6Vp4IrNA8lPk7iW7sZoL+KNSukY9gtJJ22HErb1WWIuiauVfQXKlYkR0FXb80hgrMDKWnI4aDkDMh4hFpO49mGHQLlSumz7DqjDNQ5Ca+NTyMrSEFHBji9ukh/OZAuJJduXBFB+U5q1/FzItlGA6l9CPj7L8301Ioi2XY6ebjJ+ruHcYQRcDwAMQ10rkqQggveP86zVIsKcKYxkRAWjwHx9neNHbUBggCPBfhNQADbkhzNmkjozSZ38sDtFy31cwD/CbUh/i9amcPZ3PjqILEFjI+TVzUM4FemWcPs/BHrRrHeM5osZx2eajE6mdCdxsIANQ0czimMpg0VzYnaLYMD9HKgv0OpxdiyXIcxlTF7YJG2Idqu/OlZn5q2gW+tLzLK3++vuA6DdFFnaIbr3NVQk3Q4AkrjaTKZq52VOyX4CKGvtXPMeUdKK7bNJXJ1K4urGnsd0693EmbVatLz6sDAa5TOmr/0i3dI6ML8wVV365zUC3K2PD357G801fgaLxbH2vayt+wtxdX037g+N+NpU2SJOrgAAAABJRU5ErkJggg==",
  BUTTON_ICON_DONE: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9wJBQsHFb0veXoAAAItSURBVDjLfZO9axRRFMV/582QnYmgkGKzJo1xSSpBGwv/AoNNSm2sbS1WUHRTZIRgxFJFwZQKgk0KG0FSxCJlIBIL3WJDPhYkWXVlN5uddy2cUbNJPM27vHvPuYf73hXHYHp6OjCz80BF0ksze5ckyV5/nfovqtVqaGYXJFUkXfXeIwlgEXgAvE+SpHukQLVaPWNm1yXdAWIzAyCOY7z37O3tATx1zj3p7Lc/zc0+7CkjngBuANeAiwBpmloURZRKJY2MjFiv12NjY0ONRgPvfQ306uupxcdh1vwc8CiLLU1TisWixsfHGR4eJooiee8plUq2vb3N2tra2daPn3dT7TdcRjqZk81MaZqqXC7b6OgoQRBQr9fZ2tqyKIo0MTGhoaEh6+17wE7nAj5jS5IBBEEggFarxdLSEisrK9rZ2SHLZ7OTd/2vYGbKTjIhCoUCYRgShuGffI6Q/yBNU+I4ZnJyEjOjUCgc+gCHBA5aBO89Yfi7rN1us7q6yubmJmHgDggoJ/9j0Zxz6nQ6rK+v45yzWq2m3d1dgiDImphygfZfA7Ls50kS3W6X5eVli+NYgGVutJ+mgL7lQ/wIzAH1zI0AA0wSzjnlcZZrDgwEL5wFbxxAkiRN59w9SVOS5vP2yhhALiLgLTDl8Tef3frwRUdsYaHdbl8eGxu7XS6XLw0ODrKwsEAURZ8lzZrZ6yRJWsduY45KpRIVi8UrwP1ms/k8DMP5mZmZ7/11vwARJurUpMPfvQAAAABJRU5ErkJggg==",
  BUTTON_ICON_WAIT: "data:;base64,R0lGODlhEAAQAPIAAP///xUvVMbN1VFkgBUvVG5+lYyYq5qltSH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==",

  init: function(){
    PelicanExt.populateWatchActions();
    PelicanExt.populateResultItemVideo();
    return this;
  },
  populateWatchActions: function(){
    var pelicanButton;
    if($("#watch-actions")){
      pelicanButton = $(document.createElement("button")).attr({
        "data-tooltip-text": "Feed your pelican"
      }).addClass(PelicanExt.BUTTON_CLASSNAME).html("<img src='"+PelicanExt.BUTTON_ICON+"' /><span class='yt-uix-button-content'>Feed Pelican</span>");
      $(pelicanButton).click(function(){
        return PelicanExt.feedPelican({
          url: window.location.href,
          button: pelicanButton
        });
      });
      $("#watch-actions").append(pelicanButton);
      PelicanExt.pelicanButton = $("#watch-actions").find(".pelican-button");
    }
    return this;
  },
  populateResultItemVideo: function(){
    if($("li.result-item-video")){
      $("li.result-item-video").each(function(){
        PelicanExt.populateResultItemVideoUl.call(this);        
      });
    }
    return this;
  },
  populateResultItemVideoUl: function(){
    var that = this;
    var a = document.createElement('a');
    var li = document.createElement('li');
    if($(this).find(".yt-lockup-meta .single-line-lego-list").length > 0){
      $(a).addClass('yt-badge-std pelican-button').html('feed pelican').attr('href', 'javascript:void(0)');
      $(a).html('feed pelican');
      $(a).click((function(t,a){
        return function(){
          PelicanExt.feedPelican({
            url: "http://www.youtube.com"+$(t).find('.yt-lockup-thumbnail a.yt-uix-contextlink').attr('href'),
            button: a
          });
        }
      })(that,a));
      $(li).append(a);
      $(this).find(".yt-lockup-meta .single-line-lego-list").append(li);
    }
    else {
      $(this).find(".yt-lockup-meta").prepend("<ul class='single-line-lego-list'></ul>");
      PelicanExt.populateResultItemVideoUl.call(this);
    }
  },
  feedPelican: function(params){
    if(!$(params.button).hasClass('pelican-button-done')){
      if($(params.button).find('img').length > 0){
        $(params.button).find('img').attr("src", PelicanExt.BUTTON_ICON_WAIT);
      }
      else {
        $(params.button).addClass('pelican-button-wait');  
      }
      url = window.location.href;
      $.ajax({
          url: PelicanExt.URL,
          type: 'POST',
          data: {
              url: params.url
          },
          success: function() {
            $(params.button).addClass('pelican-button-done');
            if($(params.button).find('img').length > 0){
              $(params.button).find('img').attr("src", PelicanExt.BUTTON_ICON_DONE);
            }
            else {
              $(params.button).remove();
            }
          }
      });
    }
    return this;
  }
};
var pelicanExt = Object.create(PelicanExt).init();