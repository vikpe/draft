import React from "react";
import { Draggable } from "react-beautiful-dnd";

class Player extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.player.name} index={this.props.index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div style={{ border: "1px solid red", padding: "10px", backgroundColor: "#fff" }}>
              <img src={`/flags/48/${this.props.player.country_code.toUpperCase()}.png`} /> {this.props.player.name}
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Player;
