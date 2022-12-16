var frstName = prompt("ismingiz >>  ");
var frstfamilya = prompt(frstName + " " + "familyangiz >>");
var frstHobby = prompt(frstName+ " " + "hobbiyingiz kiriting>>");
//var frstlove = prompt(frstName + " " + "yoqyirgan qiziz bomi");
//var frstyoqtirgan = +prompt("yoqtirgan qiziz nechanchi yil")
var frsYili = +prompt("tugilgan yiliz nechi");
var umumiy = +prompt("hozir nechanchi yil");
var umumi = prompt(umumiy - frsYili + " " + "YOSHDAMISIZ")
var frstUqish = prompt("qatta uqisiz >");
var frstUyini = prompt("yoqtirgan mobeli uyiningiz");
var frstKItob = prompt("qanaqa telfon ishlatasiz");
var frstQiziq = prompt("karakkarani bilasizmi");
var frstYodam = prompt("yomon kurgan insoningiz ismi kim >>")
//var hisobjam = console.log(umumiy - frstyoqtirgan);
//var yoshfarqi = console.log(umumi - hisobjam)
//var jami = prompt("sizdamn yoqtirgan qizingiz" + " " + yoshfarqi + " " + "kichkina ekan")

var fullName =` 
ismiz : ${frstName}
familyangiz : ${frstfamilya}
hobbiyingiz : ${frstHobby}
tugilgan yiliz :  ${frsYili}
hozirki yil : ${umumiy}
ha yoki yuq: ${umumi}
uqishiz ${frstUqish}
yoqtirgan uyingiz ${frstUyini}
telfoningiz ${frstKItob}
ha yoki yuq ${frstQiziq}
yoqtirmiydigan insonigiz ${frstYodam}
`;

console.log(fullName);
alert(fullName)

console.log(hisobjam);