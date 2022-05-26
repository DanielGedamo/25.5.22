// var admin = {
//   first: "daniel",
//   lest: "gedamo",
//   age: 27,
//   wage: 10000,
// };
// var  employee ={
//     fullname : 'daniel gedamo',
//     year_of_birth :'1995',
//     email :'danielgadamo@gmail.com',
//     adress : 'rehovot'
// }
// var frots ={
//     frot_name : 'banana',
//     color :'red',
//     tyep : 'hader'

// }

// document.write (frots.frot_name)
// document.write (frots.color)
// // var course ={
// //     courseNumber:'50',
// //     numberofstudents: 5,

// // }
// var kindergarten = {
//   kindergarten_teacher: "dana",
//   Children_names: ["daniel,'yael','mazal,lior,or,dan,'shy','ran','ram','eli"],
// };
// for(var i =0; i< kindergarten.Children_names.length; i++){
// document.write (kindergarten.Children_names[i]+ "<br>")
// }
// var course = {};
//   course.course_number = prompt("cource number");
//  course.number_of_student = prompt("enter number of student");
//  course.student_age = prompt("enter age");
//  console.log(course);
// var teacher ={}
// var mykey = prompt("enter key")
// var myvalue =prompt("enter value")
// teacher[mykey] = myvalue;
// var user = {}
// for ( var i =0; i<4; i++){
// var userkey = prompt("enter key ")
// var uservalue =prompt("enter value")
// user[userkey]= uservalue
// document.write(user[userkey])
// }
// var carArray = [];
// for (var i = 0; i < 4; i++) {
//   var car = {};
//   car.tayp = prompt("car tayp");
//   car.color = prompt("enter car color");
//   car.cc = prompt("enter car cc");
//   car.year = +prompt("enter car year");
//   carArray.push(car);
//   document.write(
//     "<div" +
//       car.tayp +
//       " " +
//       car.color +
//       " " +
//       car.cc +
//       " " +
//       car.year +
//       "<div>"

//   );
// document.write(car.cc)

// }
// function cats (){
// for(var i =0; i<3; i++){
// var myCat ={}
// myCat.name =prompt("cat name")
// // myCat.yearOfBirth =prompt("cat birth day")
// // myCat.type = prompt("cat type")
// // myCat.waite =prompt("cat waite")
// // document.write ("<h1>"+myCat.name+" "+myCat.yearOfBirth+" "+myCat.type+" "+myCat.waite+"</h1>")
// // }
// // // }
// // // // cats ()
// // // function getdogsnumber() {
// // //     var userNum =+ prompt("enter num");
// // //   for (var i = 0; i < userNum; i++) {

// // //     var dogs = {};
// // //     dogs.name = prompt("name");
// // //     dogs.age = +prompt("age");
// // //     dogs.type = prompt("type");
// // //     dogs.owner = prompt("owner");
// // //     document.write(
// // //       "<p>" +
// // //         dogs.name +
// // //         " " +
// // //         dogs.age +
// // //         " " +
// // //         dogs.type +
// // //         " " +
// // //         dogs.owner +
// // //         "</p>"
// // //     );
// // //   }
// // // }
// // // getdogsnumber();
// // function getBagsNumber(){
// //     var userNum = prompt("enter number ")
// //     for (var i =0; i<userNum; i++){
// //         var bags ={};
// //         bags.name =prompt('name')
// //         bags.sopername =prompt("sopername")
// // //         bags.footnumber = prompt("foot number")
// //         bags.wings=confirm("did hi get Wings?")
// //     }
// //     if(bags.wings = true){
// //         document.write("<H3>"+bags.name+" "+bags.sopername+" "+bags.footnumber+" "+bags.wings+" "+"</H3>")
// //     }
// //     else{

// //     }
// // }getBagsNumber()
// // function getChildren (){
// //     var userNum =+prompt("enter num")
// //     for(var i =0; i<userNum; i++){
// //         var child ={};
// //         child.name = prompt("enter name");
// //         child.age =+prompt("enter age");
// //         child.heInTheGan =prompt("heIn The Gan?")
// //     }
// //     if(child.age > 4){
// //         document.write("<p>"+child.name+" "+child.age+"  "+child.heInTheGan+"</p>")
// //     }
// //     else{}
// // }getChildren()
// function computer(num1) {
//   for (var i = 0; i < num1; i++) {
//     var computers = {};
//     computers.company = prompt("company");
//     computers.type = prompt("type");
//     computers.Weight = prompt("weight");
//     computers.Isitinstock = confirm("Is it in stock?");

//     if (computers.Weight > 2 && computers.Isitinstock ) {
//       document.write(
//         "<p>" +
//           computers.company +
//           " " +
//           computers.type +
//           " " +
//           computers.Weight +
//           " " +
//           computers.Isitinstock
//       );
//     }
   
//   }
// }
// computer(3);
// function teacher(num) {
  
//   for (var i = 0; i < num; i++) {
//     var teachers = {};
//     teachers.name = prompt("enter name");
//     teachers.Hourlywage = +prompt("enter Hourly wage");
//     teachers.mail = prompt("enter email");
//     teachers.yearOfBirth = +prompt("year");

//     if (teacher.Hourlywage > 100 || teacher.yearOfBirth < 1990) {
//       document.write(
//         "<span>" +
//           teachers.name +
//           " " +
//           teachers.Hourlywage +
//           " " +
//           teachers.mail +
//           "</span>"
//       );
//     };
//   };
// }
// teacher(2);
// function getFurniture (num){
//     var StoresArray =[]
//     for(var i=0; i<num;i++){
//   var furniture ={};
//   furniture.name = prompt("שם רהיט");
//   furniture.firma =prompt("מותג");
//   furniture.price =+prompt("מחיר");
//   furniture.stors =prompt("חנויות");
//   StoresArray.push(furniture.stors)
// //   document.write(furniture.name+"<br>"+StoresArray+"<br>")
  
// // };
// // }getFurniture(2)
// function getApartment (num){
//     ApartmentArray =[]
//     for(var i=0; i<num;i++){
//     var Apartment={}
//     Apartment.adress= prompt("adress?")
//     Apartment.price=+prompt("price?")
//     Apartment.buyprice= +prompt("buy price?")
//     Apartment.Buyer= prompt("Buyer?")
//     Apartment.IsThereaTranslation =confirm("Is there a translation?")
//     ApartmentArray.push(Apartment.Buyer)
//     if(Apartment.IsThereaTranslation == false){
//     document.write(Apartment.adress+"<br>"+Apartment.Buyer)
//     }
// }
// }getApartment(3)
function getCountries (){
    var CountriesArray =[]
    var userNum =+prompt("enter num");
    for (var i =0;i<userNum;i++ ){
        var Countries ={}
        Countries.name =prompt("enter youer countri name");
        Countries.numberOfResidents =+prompt("enter number fo residents ");
        Countries.ChabadHouse = confirm("ther is ?");
        Countries.city =prompt("enter youer ciry")
        if(Countries.ChabadHouse){
            document.write(Countries.name+"<br>"+CountriesArray)
        }
    }
}getCountries()


