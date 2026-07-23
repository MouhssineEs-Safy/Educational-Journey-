const users = [
  { name: "Liam", age: 2, yearBirth: "12/03/2024", gmail: "liam@gmail.com" },
  { name: "Emma", age: 7, yearBirth: "08/07/2019", gmail: "emma@gmail.com" },
  { name: "Noah", age: 15, yearBirth: "15/11/2010", gmail: "noah@gmail.com" },
  { name: "Mike", age: 22, yearBirth: "14/02/2004", gmail: "mike@gmail.com" },
];

const ticketPrices = {
  Baby: 15,
  Child: 40,
  Teenager: 70,
  Adult: 100,
};

// ============================
// Determine Category
// ============================

const determineCategory = (age) => {
  if (age <= 3) {
    return "Baby";
  } else if (age <= 12) {
    return "Child";
  } else if (age <= 18) {
    return "Teenager";
  } else {
    return "Adult";
  }
};

// ============================
// Determine Ticket Price
// ============================

const determineTicketPrice = (category) => {
  if (category === "Baby") {
    return ticketPrices.Baby;
  } else if (category === "Child") {
    return ticketPrices.Child;
  } else if (category === "Teenager") {
    return ticketPrices.Teenager;
  } else {
    return ticketPrices.Adult;
  }
};

// ============================
// Generate User ID
// ============================

const generateID = (user, index) => {
  const firstThreeLetters = user.name.slice(0, 3).toUpperCase();

  return `${firstThreeLetters}-${100 + index}`;
};

// ============================
// Build User Card
// ============================

const createTicketCard = (user, index) => {
  const category = determineCategory(user.age);

  const price = determineTicketPrice(category);

  const id = generateID(user, index);

  return `
==================================
         TICKET CARD
==================================
ID       : ${id}
Name     : ${user.name}
Age      : ${user.age}
Category : ${category}
Ticket   : ${price}$
Email    : ${user.gmail}
==================================
`;
};

// ============================
// Program
// ============================

console.log(createTicketCard(users[0], 0));
console.log(createTicketCard(users[1], 1));
console.log(createTicketCard(users[2], 2));
console.log(createTicketCard(users[3], 3));
