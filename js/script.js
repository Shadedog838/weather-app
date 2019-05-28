function weather(){
    var city=$('input').val();
 $('#photo').html('<iframe width="718" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + city + '&key=AIzaSyDCrbXRzJM0aDwVoWrIpONMHPimj_29EUM" allowfullscreen></iframe>');

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query="+ city,
        method: "GET",
        success: function(response) {
            console.log(response);
     console.log(response[0].woeid);
     var cityid= response[0].woeid;
       $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"+ cityid +"/",
        method: "GET",
        success: function(response) {
            console.log(response.title);
          var icon=response.consolidated_weather[0].weather_state_name;
          console.log(icon);
            $('h1').html(response.title);
            $('#temp').html(convert(Math.round(response.consolidated_weather[0].the_temp))+ "&#8457");
            $('#description').append(response.consolidated_weather[0].weather_state_name);
            $('#Info').append("<li> Min-temp:" + " " + convert(Math.round(response.consolidated_weather[0].min_temp)) +"&#8457</li>") ;
            $('#Info').append("<li> Max-temp:" + " " + convert(Math.round(response.consolidated_weather[0].max_temp)) +"&#8457</li>") ;
            $('#Info').append("<li> Wind-speed:" + " " + Math.round(response.consolidated_weather[0].wind_speed) +"mph</li>") ;
            $('#Info').append("<li> Humidity:" + " " + Math.round(response.consolidated_weather[0].humidity) +"%</li>") ;

     if(icon ==="Showers")
    {
       $("#temp").append("<img src='icons/s.svg'>");
       $("body").css("background-image","url(https://media1.tenor.com/images/4720d56c05623dd138009580c627cf3e/tenor.gif?itemid=4979408)");
       $("#clothing").html("Bring an Umbrella, depending on the temperature you can dress however you would like. You should wear cotton based clothing though.")

    }else if(icon === "Snow")
    {
        $("#temp").append("<img src='icons/sn.svg'>");
        $("body").css("background-image","url(htps://media2.giphy.com/media/rqr2oHGeUBSiQ/giphy.gif)");
        $("#clothing").html("Bring an Umbrella and Coat. It's freezing outside, bundle up. Wear layers.")

    }else if(icon === "Sleet")
    {
        $("#temp").append("<img src='icons/sl.svg'>");
        $("body").css("background-image","url(https://media1.tenor.com/images/d72de1e7028094bfd2fca98e58ea811a/tenor.gif?itemid=10460806)");
        $("#clothing").html("Bring an Umbrella. There is a chance there will be slush on the floor so wear Rain Boots and a Rain Coat or Windbreaker")

    }else if(icon === "Hail")
    {
        $("#temp").append("<img src='icons/h.svg'>");
        $("body").css("background-image", "url(https://media3.giphy.com/media/BLEU91pIW54tNwho1R/giphy.gif)");
        $("#clothing").html("You might want to bring an Umbrella, and avoid walking to places, take a different method of transportation. Hail can be very dangerous. Wear a jacket it can be really cold and windy!!!")

    }else if(icon === "Thunderstorm")
    {
        $("#temp").append("<img src='icons/t.svg'>");
        $("body").css("background-image", "url(https://media.giphy.com/media/rvdUftzA8567u/giphy.gif)");
        $("#clothing").html("Bring an Umbrella, you'll need it. Be careful, thunderstorms are a front for lightning. You should wear rainboots and a raincoat or windbreaker.")

    }else if(icon === "Light Rain")
    {
        $("#temp").append("<img src='icons/lr.svg'>");
        $("body").css("background-image", "url(http://img.jetbitts.com/screensavers/down/new/places/streetligh_32Fx8W8e.gif)");
        $("#clothing").html("Bring an Umbrella, the weather can pick up or slow down. You should wear a poncho or windbreaker.")
    }else if(icon ==="Heavy Rain")
    {
       $("#temp").append("<img src='icons/hr.svg'>");
       $("body").css("background-image", "url(https://i.imgur.com/XsSKp.gif)");
       $("#clothing").html("Bring an Umbrella, Put on some rain boots and a raincoat, you'll need it.")

    }else if(icon === "Heavy Cloud")
    {
        $("#temp").append("<img src='icons/hc.svg'>");
        $("body").css("background-image","url(https://media3.giphy.com/media/Cn46Wi1Fvh11S/giphy.gif)");
        $("#clothing").html("Bring an umbrella just in case it rains, it's likely to occur. Wear a windbreaker becasue it's light and effective.")

    }else if(icon === "Light Cloud")
    {
        $("#temp").append("<img src='icons/lc.svg'>");
        $("body").css("background-image", "url(https://thumbs.gfycat.com/BrownIllegalChafer-max-1mb.gif)");
        $("#clothing").html("Bring an umbrella in case it rains, depending on the temperature you can dress however you would like.")

    }else if(icon === "Clear")
    {
        $("#temp").append("<img src='icons/c.svg'>");
        $("body").css("background-image","url(https://i.gifer.com/9z5I.gif)");
        $("#clothing").html("Depending on the temperature you can dress however you would like. Enjoy the cloudless skies.")

    }


}

       });
        }
    });
}

$("button").click(function(){
activate();

});
document.querySelector('body').addEventListener('keypress', function (e) {
    console.log(e);
    var key = e.which || e.keyCode;
    if (key === 13) {
activate();
    }
});
function convert(x){
    return(x*9)/5 +32
}
function activate(){
     weather();
    console.log("done")
    $("#description").empty();
    $("#Info").empty();
}