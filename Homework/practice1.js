


let teams = [
    {
      name: "Braves",
      city: "Atlanta", // Not really in Atlanta
      state: "GA",
      avgAttendance: 39401,
    },
    {
      name: "Reds",
      city: "Cincinatti",
      state: "OH",
      avgAttendance: 25164,
    },
    {
        name: "Red Sox",
      city: "Boston",
      state: "MA",
      avgAttendance: 32989,
      
    },
    {
        name: "Yankees",
        city: "New York City",
        state: "NY",
        avgAttendance: 40862,
    },
  ];
  for (let i = 0; i < teams.length - 1; i++) {
    console.log("Current team: ", teams[i].name);
    console.log("Next team: ", teams[i + 1].name);
    if (teams[i].name < teams[i + 1].name) {
      console.log("Current teams name comes before the next team name");
    }
  }
// utilized if (arr[j] > arr[j + 1]) to check if the previous itteration is greater than the next itteration
// and i used for (var j = 0; j < (arr.length - i - 1); j++)  from a example i think it was to confirm if the last i element was in place.
//  function bblSort(arr) { 
//   for (let i = 0; i < teams.length - 1; i++) {
//      for (var j = 0; j < (teams.length - j - 1); j++) {
//          if (teams[i].name > teams[i + 1].name) {
//              var temp = teams[i].name
//          teams[i].name = teams[i + 1].name
//          teams[i + 1].name = temp
//        }
//       }
     
//     }
//     return teams
//  }
// // // use this to print results
//     console.log(bblSort(teams).map(teams[i].name > teams[i].name - 1))

 

  
  

  

  
teams.sort(function (a, b) {
  if (a.name < b.name) {
   return -1;
  }
   if (a.name > b.name) {
    return 1;
   }
  return 0;
 });

console.log(teams);
//failed

// let bubbleSort = (teams) => {
//     let len = teams.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (teams[j].name > teams[j + 1].name) {
//                 let tmp = inputArr[j];
//                 teams[j].name =  teams[j + 1].name;
//                 teams[j + 1].name = tmp;
//             }
//         }
//     }
//     return name;
// };
