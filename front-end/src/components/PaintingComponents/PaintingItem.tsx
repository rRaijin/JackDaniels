import React from "react";

interface IPaintingItem {
    todo: any;
    src?: string;
}


let PaintingItem = (props: IPaintingItem) => {

    const {todo} = props;

    return (
        <div key={todo.id}>
            {todo.title}
        </div>
    )
};

export default PaintingItem;