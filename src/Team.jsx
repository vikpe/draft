import React from "react";
import Player from "./Player";
import { Droppable } from "react-beautiful-dnd";

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightgreen" : "lightgrey",
});

const defaultStlye = {
  padding: "10px",
  minHeight: "120px",
  transition: "background-color 250ms ease-in",
};

class Team extends React.Component {
  render() {
    console.log("render..");
    return (
      <div>
        <h2>{this.props.team.name}</h2>

        <Droppable droppableId={this.props.team.name}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div
                style={{
                  ...defaultStlye,
                  ...getListStyle(snapshot.isDraggingOver),
                }}
              >
                {this.props.players.map((player, index) => (
                  <Player key={player.name} player={player} index={index} />
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default Team;
