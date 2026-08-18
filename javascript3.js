import { useEffect, useState } from "react";

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
//3 3 3 Защото var няма block scope. 
// Има една-единствена променлива i, която се споделя от трите callback функции.


const users = [
  { id: 1, name: "Anna", active: true },
  { id: 2, name: "Peter", active: false },
  { id: 3, name: "Maria", active: true },
  { id: 4, name: "John", active: false }
];
function getActiveUsers(users) {
    return users.filter((user) => user.active)
        .map(({id, name, active}) => name);
    
}


async function getUser() {
  const response = await fetch("/api/user");
  if (!response.ok) {
    throw new Error ('Failed to fetch')
  }
  const data = await response.json();

  return data;
}

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D"); //a, d, c, b a, d ,c, b. първо се изпълнява синхронния код, после микро task и после макро task

/* 1. 200 OK
2. 404 Not Found
3. 401 Unauthorized
4. 403 Forbidden
5. 500 Internal Server Error */

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function Users() {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }

                return response.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Something went wrong</p>;
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

function UserList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("/api/users");
                if (!response.ok) {
                    throw new Error("Failed to load users");
                }
                const result = await response.json();
                setUsers(result);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

    if (loading) {
        return <p>Loading ...</p>
    };

    if (error) {
        return <p>Something went wrong</p>
    };

    return (
        <>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Write the name"/>
            <ul>
                {filteredUsers.map(user => {
                    return <li key={user.id}>{user.name}, {user.age} old</li>
                })}
            </ul>
        </>
    )
}