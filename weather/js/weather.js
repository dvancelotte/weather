 $(document).ready(function() {
     
     var location;
     var key = 'af66108a0804423591950fc20e1b9751';
     celsius = 0;
     fahrenheit = 0;
     
     function  getWeather(){
         
        $.getJSON("http://ip-api.com/json", function(json) {
            
            $("#location").html(json.city.toUpperCase() + ", " + json.countryCode);
            
             $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+json.lat+"&lon="+json.lon+"&units=metric&&appid=d4f079a0ea488a31e41a6a1b218e2986", function(json) {
                 
                 temp = parseFloat(json.main.temp);
                 celsius = parseInt(json.main.temp);
                 fahrenheit = parseInt((temp * 1.8) + 32);
                 $("#temp").html(parseInt(json.main.temp)+"º");
                 $("#ic").attr("src","http://openweathermap.org/img/w/"+json.weather[0].icon+".png");
                 $("#weather").html(json.weather[0].main);
                 
            }); 
            
            latitude = json.lat;
            longitude = json.lon; 
            });     
         
     }
     
    document.getElementById('unit').addEventListener('click', function(e){
        
        var unit = document.getElementById('unit').innerHTML;
        var temp = parseFloat(document.getElementById('temp').innerHTML);
        
        if(unit == "C"){
            $("#temp").html(fahrenheit+"º");
            $("#unit").html("F");
        }
        else{
            $("#temp").html(celsius+"º");
            $("#unit").html("C");
        }
    });
         
         getWeather();

  });