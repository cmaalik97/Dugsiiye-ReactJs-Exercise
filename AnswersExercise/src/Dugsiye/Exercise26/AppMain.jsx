import React, { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AuthContext } from '../Exercise26/Context/AuthoContext';
import "./index.css"
const AppMain = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="app">
      <header>
        <h1>React Blog</h1>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to="/create">Create Post</NavLink>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppMain;