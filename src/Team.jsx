import React from "react";
import Player from "./Player";
import { Droppable } from "react-beautiful-dnd";

const getDroppableClassName = (snapshot) => {
  const classNames = ["app-team-droppable"];

  if (snapshot.isDraggingOver) {
    classNames.push("app-dnd-drag");
  }

  return classNames.join(" ");
};

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightgreen" : "lightgrey",
});

class Team extends React.Component {
  render() {
    return (
      <div className={`app-team app-team-id-${this.props.team.id}`}>
        <div className="app-team-title">{this.props.team.name}</div>

        <Droppable droppableId={this.props.team.id}>
          {(provided, snapshot) => (
            <div
              className={getDroppableClassName(snapshot)}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.players.map((player, index) => (
                <Player key={player.name} player={player} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default Team;
