const fridge = [
    { food: "Carrots", daysInFridge: 32 },
    { food: "Carrots", daysInFridge: 2 },
    { food: "Onions", daysInFridge: 23 },
    { food: "Bell Peppers", daysInFridge: 16 },
    { food: "Soda", daysInFridge: 7 },
    { food: "Pizza", daysInFridge: 4 },
    { food: "Cake", daysInFridge: 3 },
  ];
  
  const sumOfDays = fridge.reduce(function (acc, el) {
    return (acc = acc + el.daysInFridge);
  }, 0);
  
  console.log(sumOfDays / fridge.length);
  
  const namesArr = fridge.map((item) => {
    return item.food;
  });
  
  console.log(namesArr);
  
  /* 
  // Filter predicate chaining
  const carrotArr = fridge.filter(byCarrots).filter(byOlderThanWeek);
  
  function byCarrots(thing) {
    return thing.food === "Carrots";
  }
  
  function byOlderThanWeek(item) {
    return item.daysInFridge <= 7;
  }
  
  console.log(carrotArr);
   */
  /* 
  // chaining filters
  const carrotArr = fridge
    .filter((thing) => {
      return thing.food === "Carrots";
    })
    .filter((item) => {
      return item.daysInFridge <= 7;
    });
  
  console.log(carrotArr);
   */
  /* 
  const isSpoiled = fridge.filter((item) => {
    return item.daysInFridge > 7;
  });
  
  console.log(isSpoiled);
   */
  /* 
  const bases = [3, 5, 7, 9, 11];
  // we want to have this as a result [9, 25, 49, 81, 121];
  
  const inputs = ["MArcO", "fEdE"]; // I want this ["Marco", "Fede"];
  
  const titleCaseNames = inputs.map((el) => {
    return el[0].toUpperCase() + el.substr(1).toLowerCase();
  });
  
  console.log(titleCaseNames); */
  
  /* 
  const myPlusOnes = bases
    .map((element) => {
      return element + 1;
    })
    .sort((a, b) => {
      return a - b;
    }); // map returns a CHAINABLE NEW array
  
  console.log(myPlusOnes);
  console.log(bases);
  */
  
  /* 
  const myPlusOnes = bases
    .map(function (element) {
      console.log(`I am + 1 ${element} to get ${element + 1}`);
      return element + 1;
    })
    .sort(); // map returns a CHAINABLE NEW array
  
  console.log(myPlusOnes);
  console.log(bases);
   */
  