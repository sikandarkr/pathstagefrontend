import React, { Component } from "react";
import initialData from "./initial-data";
import { DragDropContext } from "react-beautiful-dnd";
// import "@atlaskit/css-reset";
import Column from "./column";

const array_move = (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};

class Dragable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialData.tasks
    };
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.draggableId === source.draggableId && destination.index === source.index) {
      return;
    }
    const tasks = [...this.state.tasks];

    const newArr = array_move(tasks, source["index"], destination["index"]);
    console.log("your task Item is after....", newArr);

    this.setState({ tasks: newArr });
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate}>
        <Column key={"column.id"} tasks={this.state.tasks} />
      </DragDropContext>
    );
  }
}
export default Dragable;

// state = initialData;
// onDragStart = () => {
//   document.body.style.color = "orange";
// };
// onDragUpdate = update => {
//   const { destination } = update;
//   const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0;
// };

//   console.log("result ", result);
// document.body.style.color = "inherit";
// const { destination, source, draggableId } = result;
// if (!destination) {
//   return;
// }
// if (destination.draggableId === source.draggableId && destination.index === source.index) {
//   return;
// }
// const column = this.state.columns[source.droppableId];
// const newTaskIds = Array.from(column.taskIds);
// newTaskIds.splice(source.index, 1);
// newTaskIds.splice(destination.index, 0, draggableId);
// const newColumn = {
//   ...column,
//   taskIds: newTaskIds
// };
// const newState = {
//   ...this.state,
//   columns: {
//     ...this.state.columns,
//     [newColumn.id]: newColumn
//   }
// };

// this.setState(newState);
// };

// render() {
//   return (
//     <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate}>
//       {this.state.columnOrder.map(columnId => {
//         const column = this.state.columns[columnId];
//         console.log("columnId ::: ", column);
//         const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
//         console.log("task jdkfj ", tasks);
//         return <Column key={column.id} column={column} tasks={tasks} />;
//       })}
//     </DragDropContext>
//   );
// }
