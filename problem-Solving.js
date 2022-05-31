// Problem 01 [convert ana to vori]
function anaToVori(ana) {
  // SEND Error MASSAGE IF ANYTHING IS WRONG
  if (typeof ana !== "number" || ana < 1) {
    console.error("Parameter error");
    return null;
  }
  return ana * 0.0625; //result
}
// console.log(anaToVori(6));
// Problem 02 [ pandaCost || order cost]
function pandaCost(item1, item2, item3) {
  // SEND Error MASSAGE IF ANYTHING IS WRONG
  if (
    typeof item1 !== "number" ||
    typeof item2 !== "number" ||
    typeof item3 !== "number" ||
    item1 < 0 ||
    item2 < 0 ||
    item3 < 0
  ) {
    console.error("Parameter error");
    return null;
  }

  // items in CART TO ORDER
  const items = [
    {
      singra: 7,
      quantity: item1,
      singraCost: 7 * item1,
    },
    {
      somucha: 10,
      quantity: item2,
      somuchaCost: 10 * item2,
    },
    {
      jilapy: 15,
      quantity: item3,
      jilapyCost: 15 * item3,
    },
  ];

  // TOTAL COST OF ITEMS
  let totalCost =
    items[0].singraCost + items[1].somuchaCost + items[2].jilapyCost;

  // CHECK ORDER LIST, IF IT'S EMPTY
  if (totalCost === 0) {
    console.error("plz select an item to order");
    return null;
  }

  return totalCost; //TOTALCOST
}
// console.log(pandaCost(1, 3, 0));

// Problem 03 [ picnic Budget calculation ]
function picnicBudget(peoples) {
  let totalBudget, firstBudget, secondBudget, thirdBudget;

  //CHEK THE GIVEN PERAMETER IS TYPEOF NUMBER AND GRATER THEN 0
  if (typeof peoples !== "number" || peoples < 0) {
    console.error("INVALID perameter");
    return null;
  }
  //GET THE TOTALBUDGET FOR MULTIPLE CONDITIONS
  // condition 1
  if (peoples <= 100) {
    totalBudget = peoples * 5000;
  }
  // condition 2
  else if (peoples <= 200) {
    firstBudget = 100 * 5000;
    secondBudget = (peoples - 100) * 4000;
    totalBudget = firstBudget + secondBudget;
  } else {
    firstBudget = 100 * 5000;
    secondBudget = 100 * 4000;
    thirdBudget = (peoples - 200) * 3000;
    totalBudget = firstBudget + secondBudget + thirdBudget;
  }
  return totalBudget; //RESULT
}
// console.log(picnicBudget(101));

// Problem 04 [ oddFriend || find odd string]
function oddFriend(friends) {
  let oddFriendName;

  //CHECK given input perametr is an Array and the elements are TYPEOF string
  for (let k = 0; k < friends.length; k++) {
    if (!Array.isArray(friends) || typeof friends[k] !== "string") {
      console.error("Input an arry OR elements would be strings");
      return false;
    }
  }

  // FIND THE 1ST ODD FRIEND NAME
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length % 2 !== 0) {
      oddFriendName = friends[i];
      break;
    }
  }

  return oddFriendName; //RESULT
}

// console.log(oddFriend(["efti", "forhad", "habib", "rakib", "masud", "mondol"]));
