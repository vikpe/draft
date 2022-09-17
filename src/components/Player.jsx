import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

// const getDraggableClassName = (snapshot) => {
//   const classNames = ["app-player-draggable"];
//
//   if (snapshot.isDragging) {
//     classNames.push("app-dnd-drag");
//   }
//
//   return classNames.join(" ");
// };

export const PlayerDetails = (props) => {
  const { player } = props;

  return (
    <div className="flex items-center space-x-2 p-1.5 bg-gradient-to-b from-white to-gray-300 rounded text-xl shadow">
      <img src={`/assets/img/flags/32/${player.country_code}.png`} width={32} />
      <span>{player.name}</span>
    </div>
  )
}

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
          <div className="pb-6 space-y-2.5">
            {players.map((player, index) => (
              <DraggablePlayer key={player.name} index={index} player={player} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}

export const DraggablePlayer = (props) => {
  const { player, index } = props;

  return (
    <div className="app-player dnd-draggable">
      <Draggable
        draggableId={player.name}
        index={index}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <PlayerDetails player={player} />
          </div>
        )}
      </Draggable>
    </div>
  );
}
