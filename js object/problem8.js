let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];

  const friendsInBanglore = users
  .filter((friend)=> friend.place==="Banglore")
  .map((friend) =>friend.firstName +" "+ friend.lastName);

  console.log(friendsInBanglore);