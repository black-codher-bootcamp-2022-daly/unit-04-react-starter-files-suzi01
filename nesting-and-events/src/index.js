import React, { Fragment,  } from 'react';
import ReactDOM from 'react-dom/client';
import TaskContainer from './components/TaskContainer';
import Task from './components/Task.js';


const taskList = [
  {id:"task1",title :"Buy Milk",isComplete:true},
  {id:"task2",title :"Read a book",isComplete:false},
  {id:"task3",title :"Early morning run",isComplete:false},
  {id:"task4",title :"Drink water",isComplete:false},
  {id:"task5",title :"Visit the puppy shelter",isComplete:true},
  {id:"task6",title :"Watch Bad Sisters",isComplete:false}
];

// function create(creteAtt){
//   return <Task id={creteAtt.id} title={creteAtt.title} isComplete={creteAtt.isComplete}/>
// }

function App() {
  const [data, setData] = React.useState(taskList)

  function handleClick(id){
    // console.log(trackList[e])
    const newData = data.map(task => {if (task.id === id)
    {
      task.isComplete = !task.isComplete
    }
    return task
  })
  setData(newData)

  }
 
   return (
    
      <Fragment>
        <h1 key="heading">Task List</h1>
        <TaskContainer>
          {data.map(task => 
              <Task handleClick={handleClick} key={task.id} id={task.id} title={task.title} isComplete={task.isComplete}/>
          )}
        </TaskContainer>
      </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

