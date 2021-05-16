import React, { useState } from 'react';

function TodoForm(props) {
  const [item, setItem] = useState({})

  // class TodoForm extends React.Component {

  //   constructor(props) {
  //     super(props);
  //     this.state = { item: {} };
  //   }
  const handleInputChange = e => {
    setItem({ item: { ...item, [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const item = {};
    setItem({ item });
  };

  // render() {
  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </label>
        <button>Add Item</button>
      </form>
    </>
  );
  // }
  // }
}
export default TodoForm;
