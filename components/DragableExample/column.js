import React, { Component } from "react";
import styled from "styled-components";
import Task from "./task";
import { Droppable } from "react-beautiful-dnd";
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
`;
class Dragable extends Component {
  render() {
    const { index, tasks } = this.props;
    console.log("Your coulmn id is #####.......", this.props.key);
    return (
      <Container>
        <Title>{"New Dropable"}</Title>
        <Droppable droppableId={tasks[0].id}>
          {(provided, snapshot) => {
            return (
              <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                {tasks.map((column, index) => {
                  return <Task key={column.id} task={column} index={index} />;
                })}
                {provided.placeholder}
              </TaskList>
            );
          }}
        </Droppable>
      </Container>
    );

    // return this.props.column.title;
  }
}
export default Dragable;
