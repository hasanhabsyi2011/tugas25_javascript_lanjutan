function panggilSort(){
  var angka =[2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];


  console.log("Sebelumnya : ",angka.toString());
  console.log("Ascending : ",angka.sort().toString());
  console.log("Descending : ",angka.reverse().toString());

  let ftr = angka.filter(angka =>{
    return angka > 10;
  });
  console.log("Filter > 10 :",ftr.toString());
}
panggilSort();
