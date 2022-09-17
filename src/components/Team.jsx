import React from "react";
import { DraggablePlayer } from "./Player.jsx";
import { Droppable } from "react-beautiful-dnd";

const getDndClassNames = (snapshot) => {
  const classNames = ["app-team-droppable"];

  if (snapshot.isDraggingOver) {
    classNames.push("app-dnd-dragover");
  }

  return classNames.join(" ");
};

export const DroppablePlayerList = props => {
  const { id, players } = props;

  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {players.map((player, index) => (
            <DraggablePlayer key={index} index={index} player={player} />
          ))}
        </div>
      )}
    </Droppable>
  );
}

