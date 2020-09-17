import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const players = [
    { name: 'XantoM', country_code: 'se' },
    { name: 'bps', country_code: 'se' },
    { name: 'Milton', country_code: 'fi' },
    { name: 'henu', country_code: 'fi' },
    { name: 'mm', country_code: 'se' },
    { name: 'HangTime', country_code: 'uk' },
    { name: 'lordlame', country_code: 'ie' },
    { name: 'ok98', country_code: 'se' },
    { name: 'ParadokS', country_code: 'dk' },
    { name: 'Shaka', country_code: 'se' },
];

const columnsFromBackend = {
    ['teamRed']: {
        name: 'Red',
        items: [],
    },
    ['teamYellow']: {
        name: 'Yellow',
        items: [],
    },
    ['teamBlue']: {
        name: 'Blue',
        items: [],
    },
    ['teamOrange']: {
        name: 'Orange',
        items: [],
    },
    ['playerPool']: {
        name: 'Player Pool',
        items: players,
        style: {
            'width': '100%',
        },
    },
};

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems,
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems,
            },
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems,
            },
        });
    }
};

const renderItem = (item, index) => {
    return (
        <Draggable
            key={item.name}
            draggableId={item.name}
            index={index}
        >
            {(
                provided,
                snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            userSelect: 'none',
                            padding: 16,
                            margin: '8px',
                            minHeight: '18px',
                            borderRadius: '10px',
                            width: '120px',
                            backgroundColor: snapshot.isDragging
                                ? '#061B2A'
                                : '#456C86',
                            color: 'white',
                            ...provided.draggableProps.style,
                        }}
                    >
                        [{item.country_code}] {item.name}
                    </div>
                );
            }}
        </Draggable>
    );
};

function SampleBoard() {
    const [columns, setColumns] = useState(columnsFromBackend);
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
        }}>
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div
                            style={{
                                border: '4px solid red',
                                flexDirection: 'column',
                                alignItems: 'center',
                                flexGrow: '1',
                                ...column.style,
                            }}
                            key={columnId}
                        >

                            <div>
                                <h2>{column.name} ({column.items.length})</h2>
                                <Droppable droppableId={columnId}
                                           key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver
                                                        ? 'lightblue'
                                                        : 'lightgrey',
                                                    padding: "4px 4px 64px 4px",
                                                    minHeight: 66,
                                                }}
                                            >
                                                {column.items.map(renderItem)}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
}

export default SampleBoard;
