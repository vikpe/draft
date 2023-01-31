import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const dndDroppableClasses = (snapshot) => {
  const classNames = ["dnd-droppable"];

  if (snapshot.isDraggingOver) {
    classNames.push("dnd-isDraggingOver");
  }

  return classNames.join(" ");
};

export const DroppablePlayerList = props => {
  const { id, players, highlight } = props;

  const classNames = highlight ? "app-highlight" : "";

  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${classNames} ${dndDroppableClasses(snapshot)}`}
        >
          {players.map((player, index) => (
            <DraggablePlayer key={player.name} index={index} player={player} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

const dndDraggableClasses = (snapshot) => {
  const classNames = ["dnd-draggable"];

  if (snapshot.isDragging) {
    classNames.push("dnd-isDragging");
  }

  return classNames.join(" ");
};

export const DraggablePlayer = (props) => {
  const { player, index } = props;

  return (
    <Draggable
      draggableId={player.name}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={dndDraggableClasses(snapshot)}
        >
          <div className="app-player flex items-center space-x-2 px-2 py-1 text-xl">
            <img src={`assets/img/flags/32/${player.country_code}.png`} width={32} />
            <span>{player.name}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
}
