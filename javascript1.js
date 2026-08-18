//Question 1 — JavaScript / ES6
//Recommended time: 15 minutes

const { useEffect, useState } = require("react");

const users = [
    { id: 1, name: "Anna", active: true, score: 80 },
    { id: 2, name: "John", active: false, score: 95 },
    { id: 3, name: "Peter", active: true, score: 70 },
    { id: 4, name: "Maria", active: true, score: 90 }
];

const result = users
    .filter(({ active }) => active)
    .map(({ name, score }) => ({ name, score }))
    .sort((a, b) => b.score - a.score)
    .map(({ name }, index) => `${index + 1}. ${name}`);

console.log(result);
//What is printed to the console?
//["1. Maria", "2. Anna", "3. Peter"]
//филтър и сорт да ги разясня



//What does the following code print?
//10- грешно! Защото се използва let, което има block scope. В конзолата ще се изведе грешка, че value is not defined.
let value = 10;

function test() {
    console.log(value);

    let value = 20;
}

test();



//What is the result?
//Plovdiv
const user = {
    name: "Alex",
    address: {
        city: "Sofia"
    }
};

const copy = { ...user };

copy.address.city = "Plovdiv";

console.log(user.address.city);



//What will the following code print, and why?
//trow an error no such variable
console.log(a);

var a = 5;// undefined, because of hoisting. The variable a is hoisted to the top of the scope, but its value is not assigned until the line where it is declared. Therefore, when console.log(a) is executed, a is undefined.

console.log(b);// ReferenceError: b is not defined, because let and const declarations are not hoisted in the same way as var. They are hoisted to the top of the block scope, but they are not initialized until the line where they are declared. Therefore, when console.log(b) is executed, b is not defined yet.

let b = 10;



//Implement:
function groupByCategory(products) {
    // your code
    let categories = {};
    for (const x of products) {
        if (x.category in categories) {
            categories[x.category].push(x.name)
        } else {
            categories[x.category] = [x.name]
        };
    }

    return categories;
}

const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Phone", category: "electronics" },
    { name: "Chair", category: "furniture" },
    { name: "Desk", category: "furniture" },
    { name: "Mouse", category: "electronics" }
];
//Expected result:
{
    electronics: ["Laptop", "Phone", "Mouse"],
        furniture: ["Chair", "Desk"]
}






//Question 2 — Promises, async/await and Web APIs
//Recommended time: 15 minutes

//What is the exact console output order?
//A, B, E, C, D
console.log("A");

setTimeout(() => { //праща callback-а в macrotask queue.
    console.log("B");
}, 0);

Promise.resolve()//праща .then() callback-а в microtask queue.
    .then(() => {
        console.log("C");
    })
    .then(() => {
        console.log("D");
    });

console.log("E");
//Synchronous → Microtasks → Macrotasks



//Consider:
async function getUser() {// async function always returns a promise
    return { id: 1, name: "John" };
}

const result = getUser();

console.log(result);
//What is the result?
//Promise
//За да получа обекта, трябва result = await getUser() или result.then(user => console.log(user)).



//You have the following API:
//GET https://api.example.com/users/42

//A successful response is:

{
    "id": 42,
    "name": "Maria",
    "email": "maria@example.com"
}

//Implement:

function fetchUser(id) {//няма нужда от async, защото използваме .then() и .catch()
    // your code
    return fetch(`https://api.example.com/users/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch user");
            };

            return response.json();
        });
}
//Requirements

//The function must:

//Request /users/{id} using fetch.
//Return the parsed JSON object when the response is successful.
//Throw: new Error("Failed to fetch user") when the HTTP response is not successful.
//Also propagate network errors.




//You need to request three independent resources:
//fetch("/api/users");
//fetch("/api/products");
//fetch("/api/orders");

// Write an async function that starts the three requests concurrently,
// waits until all three have completed successfully, 
// parses their JSON bodies, and returns:
/* {
  users,
  products,
  orders
} */

//Do not execute the three requests sequentially.

async function concurrentlyExecuted() {//параметърите на fetch са hardcoded, но могат да се променят, ако се добавят като параметри на функцията.
    let result;
    try {
        result = await Promise.all([
            fetch("/api/users").then(result => {
                if (!result.ok) {
                    throw new Error(`Failed to fetch ${users}`);
                }
                return result.json();
            }),
            fetch("/api/products").then(result => {
                if (!result.ok) {
                    throw new Error(`Failed to fetch ${products}`);
                }
                return result.json();
            }),
            fetch("/api/orders").then(result => {
                if (!result.ok) {
                    throw new Error(`Failed to fetch ${orders}`);
                }
                return result.json();
            })
        ])
    } catch (err) {
        console.log(err.message);
        throw err;

    }

    const [users, products, orders] = result;
    return {
        users,
        products,
        orders
    }
}






//Question 3 — HTML / CSS
//Recommended time: 15 minutes

//<div class="card">
//  <img
//    class="card__image"
//    src="product.jpg"
//    alt="Wireless headphones"
//  />

//  <div class="card__content">
//    <h2 class="card__title">Wireless Headphones</h2>
//    <p class="card__description">
//      Comfortable wireless headphones with noise cancellation.
//    </p>
//    <button class="card__button">Add to cart</button>
//  </div>
//</div>

/* Implement the CSS for the following requirements.

Desktop

The card should:

have a maximum width of 600px;
display the image and content next to each other;
give the image 40% of the card width;
give the content the remaining available width;
have a 16px gap;
have 20px padding;
use box-sizing: border-box.
Mobile

At viewport widths of 600px or less:

the image must appear above the content;
both elements should occupy the full card width.
Button

The button should:

have 12px 20px padding;
have no border;
have a pointer cursor;
become 10% darker when hovered.

Write the complete CSS. */

/* .card {
    box-sizing: border-box;
    display: flex;
    max-width: 600px;
    gap: 16px;
    padding: 20px;
}

.card__image {
    width: 40%;
}

.card__content {
    flex: 1;
}

.card__button {
    padding: 12px 20px;
    border: none;
    cursor: pointer;
}

.card__button:hover {
    filter: brightness(90%);
}

@media (max-width: 600px) {
    .card {
        flex-direction: column;
    }

    .card__image,
    .card__content {
        width: 100%;
    }
} */



//<div class="container">
//  <div class="item">1</div>
//  <div class="item special">2</div>
//  <div class="item">3</div>
//</div>

/* .item {
  color: blue;
}

.container .item {
  color: green;
}

.item.special { елемент с 2 класа в него
  color: red;
}

.special {
  color: orange !important;
} */

/* What color will the text 2 have?

Explain briefly why. */

//Orange, because the special class is markt as priority -!important






//Question 4 — React Coding Challenge
//Recommended time: 40 minutes

//Build the following React component:

import React, { useEffect, useState } from "react";

export default function UserDirectory() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCity, setSelectedCity] = useState("All cities");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function loadUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        loadUsers();
    }, []);

    const cities = [
        ...new Set(users.map((user) => user.address.city))
    ];

    const filteredUsers = users.filter((user) => {
        const matchesSearch = user.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCity =
            selectedCity === "All cities" ||
            user.address.city === selectedCity;

        return matchesSearch && matchesCity;
    });

    function handleReset() {
        setSearch("");
        setSelectedCity("All cities");
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Unable to load users.</p>;
    }

    return (
        <div className="user-directory">
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <select
                value={selectedCity}
                onChange={(event) => setSelectedCity(event.target.value)}
            >
                <option value="All cities">All cities</option>

                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            <button onClick={handleReset}>
                Reset
            </button>

            {filteredUsers.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul>
                    {filteredUsers.map((user) => (
                        <li key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.address.city}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

//API

//Assume:

//GET https://jsonplaceholder.typicode.com/users

//returns an array with objects containing fields such as:

/* {
  id: 1,
  name: "Leanne Graham",
  email: "sincere@april.biz",
  address: {
    city: "Gwenborough"
  }
} */