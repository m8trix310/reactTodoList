import React from 'react';
import TodoApp from './TodoApp';
import Header from './Header';
function Layout() {
  return (
    <div className="layout">

      <Header />
      

       <div className="content">
        {/* <h1>Content</h1> */}
        <TodoApp />
    </div>

     <div className="footer">
        <h1>Footer</h1>
    </div>


    </div>
  );
}

export default Layout;
