import React, {useEffect, useState} from 'react';
import PaintingItem from '../components/PaintingComponents/PaintingItem';

interface IPaintingProps {
    
}


        

const Painting = (props: IPaintingProps) => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const result = response ? await response.json() : [];
            setTodos(result.slice(0, 10));
            console.log(result.slice(0, 10));
        };
        getTodos();
    }, []);
    

    
    return (
            <div>
                {
                    todos.map((todo: any) => <PaintingItem todo={todo}/>)
                }
            </div>
        )
    }  

export default Painting;
