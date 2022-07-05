import React from 'react';


interface IClayEditorProps {
    item?: any;
}


const ClayEditor = (props: IClayEditorProps) => {

    const [textAreaVal, setTextAreaVal] = React.useState('asdasdasdasdasd');
    const [textAreaVal2, setTextAreaVal2] = React.useState('123');

    React.useEffect(() => {
        console.log('rendreed')
    }, []);


    const handleChange = (e: any) => {
        setTextAreaVal(e.target.value);
    };

    const handleChange2 = (e: any) => {
        setTextAreaVal2(e.target.value);
    };

    const handleSubmit = (e: any) => {
        let data = {
            1: textAreaVal,
            2: textAreaVal2
        }
        console.log('data111: ', data);
        e.preventDefault();
    };

    console.log('sx', textAreaVal)
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Сочинение:
                <textarea defaultValue={textAreaVal} onChange={handleChange}/>
            </label>
            <label>
                Сочинение:
                <textarea defaultValue={textAreaVal2} onChange={handleChange2}/>
            </label>
            <input type="submit" value="Отправить" />
        </form>
    );
};

export default ClayEditor;

