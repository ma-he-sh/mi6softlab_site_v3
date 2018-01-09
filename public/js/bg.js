var currtime = new Date();
var hours = currtime.getHours();

console.log("time_of_hour:" + hours);

if(hours > 17 || hours < 4){
    document.write("<body style='background-color: #262D47;'>");
}else{
    document.write("<body style='background-color: #eff3f6;'>");
}