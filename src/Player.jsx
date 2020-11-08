import React from "react";
import { Draggable } from "react-beautiful-dnd";

const getDraggableClassName = (snapshot) => {
  const classNames = ["app-player-draggable"];

  if (snapshot.isDragging) {
    classNames.push("app-dnd-drag");
  }

  return classNames.join(" ");
};

class Player extends React.Component {
  render() {
    return (
      <div className="app-player">
        <Draggable
          draggableId={this.props.player.name}
          index={this.props.index}
        >
          {(provided, snapshot) => (
            <div
              className={getDraggableClassName(snapshot)}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="app-player-content">
                <img
                  src={`static/flags/32/${this.props.player.country_code.toUpperCase()}.png`}
                  width={32}
                  className="app-player-flag"
                />{" "}
                {this.props.player.name}
              </div>
            </div>
          )}
        </Draggable>
      </div>
    );
  }
}

export default Player;
