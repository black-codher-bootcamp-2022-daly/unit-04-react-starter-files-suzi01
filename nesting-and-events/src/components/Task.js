import React from 'react';

function Task(props) { 
  
  // function toggleComplete(id){
  //   props.handleClick()
  //   console.log(`Task with the id '${id}' was clicked`);
  // }

  return (
      <div className={"task"+(props.isComplete?" checked":"")} >
        <span>{props.title}</span>
        <span className="status" onClick={() => props.handleClick(props.id)}>{props.isComplete ? "✔️":"🔘"}</span>
      </div>
  );
}
export default Task