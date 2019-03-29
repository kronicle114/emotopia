import React from 'react';

export const Nav = (props) => {

  return (
    <section className="nav">
      <nav>
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/history">History</a>
          </li>
        </ul>
      </nav>
    </section>
  ); 
};

export default Nav;