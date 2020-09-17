import React from "react";
import Player from "./Player";
import { Droppable } from "react-beautiful-dnd";

const getDroppableClassNames = (snapshot) => {
  const classNames = ["app-team-droppable"];

  if (snapshot.isDraggingOver) {
    classNames.push("app-dnd-dragover");
  }

  return classNames.join(" ");
};

const getClassNames = (props) => {
  const classNames = ["app-team", `app-team-id-${props.team.id}`];

  if (props.highlight) {
    classNames.push("app-team-highlight");
  }

  return classNames.join(" ");
};

class Team extends React.Component {
  render() {
    const isPlayerPool = this.props.team.id === "playerPool";
    const direction = isPlayerPool ? "horizontal" : "vertical";

    return (
      <div className={getClassNames(this.props)}>
        <div className="app-team-title">{this.props.team.name}</div>

        <Droppable droppableId={this.props.team.id} direction={direction}>
          {(provided, snapshot) => (
            <div
              className={getDroppableClassNames(snapshot)}
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
