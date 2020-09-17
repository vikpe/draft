import React from "react";
import Player from "./Player";
import { Droppable } from "react-beautiful-dnd";

class Team extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.team.name}</h2>

        <Droppable droppableId={this.props.team.name}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "#eee",
                  minHeight: "120px",
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
