import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/getData/types.ts';
import { Link } from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div data-testid="users-page">
      {users.map(user => (
        <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
};
