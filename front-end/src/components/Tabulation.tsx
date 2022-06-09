import React, { useState, useCallback } from 'react';


interface ITabulationItemOptions {
    headerCss: string;

}

interface ITabulationItem {
    name: string;
    content: JSX.Element;
    options: ITabulationItemOptions;
}


export interface ITabulationProps {
    list: ITabulationItem[];
    className?: string;
}


const Tabulation = (props: ITabulationProps) => {
    const { className, list } = props;
    const [tabName, setTabName] = useState(list[0].name);
    const clickHandler = useCallback((tabName: string) => {
        console.log('data: ', tabName);
        setTabName(tabName);
    }, [tabName]);

    return (
        <div className={className}>
            <div className='flex'>
                {
                    list.map((item: ITabulationItem, i: number) => {
                        return (
                            <div
                                className='w-1/4'
                                key={`tabulation-item-${(item && item.name) ? item.name : 'default'}-${i}`}>
                                {
                                    item ?
                                        <h4
                                            className={item.options.headerCss + (item.name === tabName ? ' bg-olive' : ' ')}
                                            onClick={() => clickHandler(item.name)}>
                                            {item.name}
                                        </h4> :
                                    <div>
                                        ERROR
                                    </div>
                                }
                            </div>
                        );
                    })
                }
            </div>
            {list.find((k: ITabulationItem) => k.name === tabName).content}
        </div>
    );
};

export default Tabulation;
