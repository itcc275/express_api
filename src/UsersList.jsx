import React, { useEffect, useState } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch users from API
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch users");
                }
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []); // Runs only once on component mount

    if (loading) return <p>Loading users...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> <br />
                        <small>{user.email}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersList;
