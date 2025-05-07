import React from 'react';
import '../css/TodoList.css';


interface TodoListProps {
  tasks: string[];
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onDelete }) => {
    const handleMouseOver = (index: number) => {
        console.log(`Task position: ${index}`);
      };
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="todo-item"
          onClick={() => onDelete(index)}
          onMouseOver={() => console.log(`Task position: ${index}`)}
          onMouseOut={() => console.log('null')}
         
        >
          📌 {task}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
