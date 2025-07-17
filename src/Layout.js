import React from 'react';
import TodoApp from './TodoApp';

function Layout() {
  return (
    <div className="layout">

    <div className="header">
      <h1 className='head1'>My First react Application</h1>
      
    </div>

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
