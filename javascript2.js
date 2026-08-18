//Какво точно ще бъде отпечатано?
//undefinded, 20, 10, защото 20 се декларира в скопана функцията слд лога.
var x = 10;
function test() {
    console.log(x);
    var x = 20;
    console.log(x);
}
test();
console.log(x);



//Какво ще бъде отпечатано?
//0, 1, 2
const functions = [];
for (let i = 0; i < 3; i++) {
    functions.push(() => console.log(i));
}

functions[0]();
functions[1]();
functions[2]();



//Какъв е резултатът?
//Peter
//"JavaScript", "CSS"
const original = {
    name: "John",
    skills: ["JavaScript", "CSS"]
};

const copy = {
    ...original,
    skills: [...original.skills]
};

copy.name = "Peter";
copy.skills.push("React");

console.log(original.name);
console.log(original.skills);



//Имаш:

const orders = [
    { id: 1, total: 100, paid: true },
    { id: 2, total: 250, paid: false },
    { id: 3, total: 80, paid: true },
    { id: 4, total: 170, paid: true },
    { id: 5, total: 300, paid: false }
];

//Напиши функция:

function getPaidTotal(orders) {
    // your code
    let sum = 0;
    for (order of orders) {
        if (order.paid) {
            sum += order.total
        } else {
            continue;
        }
    }
    return sum;
}
//която връща общата стойност само на платените поръчки.
//За горния масив резултатът трябва да бъде:
//350
//Не променяй оригиналния масив.



//Kакво ще бъде отпечатано?
//Maria 25 Sofia
const user = {
    name: "Maria",
    address: {
        city: "Sofia"
    }
};
const {
    name,
    age = 25,
    address: { city }
} = user;


console.log(name, age, city);






//Question 2 — Async JavaScript
//2.1 — Event Loop

//Напиши точния ред:
//1, 5, 2, 3, 4
console.log("1");
Promise.resolve()
    .then(() => {
        console.log("2");


        return Promise.resolve();
    })
    .then(() => {
        console.log("3");
    });
setTimeout(() => {
    console.log("4");
}, 0);
console.log("5");



//Какво ще бъде отпечатано?
//true, 42
async function getNumber() {
    return 42;
}


async function test() {
    const value = await getNumber();
    console.log(value);
}


const result = test();


console.log(result instanceof Promise);



//Имаш API:
//GET /api/products
//Напиши:

async function getProducts() {
    // your code
    const address = '/api/products'
    const response = await fetch(address);
    if (!response.ok) {
        throw new Error('Unable to load products')
    }
    return response.json()
}
//Изисквания:
//Използвай fetch("/api/products").
//Провери response.ok.
//Ако HTTP response не е успешен, хвърли:
//new Error("Unable to load products")
//При успех върни parsed JSON.
//Network errors трябва да продължат към caller-а.



//Имаш:
//GET /api/profile
//GET /api/notifications

//Напиши:

async function loadDashboard() {
    // your code
    const [profileResponse, notificationResponse] = await Promise.all([
        fetch('/api/profile'),
        fetch('/api/notifications')
    ]);

    if (!profileResponse.ok || !notificationsResponse.ok) {
        throw new Error ('Dashboard request failed')
    }

    const [profile, notifications] = await Promise.all([
        profileResponse.json(),
        notificationsResponse.json()
    ]);

    return {
        profile,
        notifications
    };
};

//Двете заявки трябва да започнат конкурентно, а не едната след другата.
//След parsing функцията трябва да върне:

/* {
    profile,
    notifications
}
 */
//Ако някоя от заявките има response.ok === false, хвърли:
//new Error("Dashboard request failed")


//3.1 — Flexbox

//Имаш:

<div class="layout">
    <aside class="sidebar">
        Menu
    </aside>


    <main class="content">
        Content
    </main>
</div>

//Напиши CSS със следните изисквания.

//На desktop:

//.layout трябва да използва Flexbox;
//максимална ширина 1200px;
//центриран хоризонтално;
//24px gap;
//20px padding;
//.sidebar да бъде точно 250px;
//.content да заема цялото останало пространство.

//При ширина 768px или по-малко:

//sidebar трябва да бъде над content;
//и двата елемента да заемат цялата налична ширина.

/* .layout {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    gap: 24px;
    padding: 20px;
}

.sidebar {
    width: 250px;
    flex-shrink: 0;
}

.content {
    flex: 1;
}

@media (width <= 768px) {
    .layout {
        flex-direction: column;
        width: 100%;
    }
} */



//Какъв ще бъде цветът на текста?
//Green, id selector has upper hand specificity than the class selector
{/* <div id="app">
    <p class="message warning">
        Warning
    </p>
</div>
p {
    color: black;
}


.message {
    color: blue;
}


.message.warning {
    color: orange;
}


#app .message {
    color: green;
}
 */}
//Отговори с цвета и кратко обяснение защо.



Имаме:

/* .box {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
} */

//Каква е реалната външна ширина на .box?
//300px
/* A. 300px
B. 340px
C. 350px
D. 310px */

//Обясни накратко.