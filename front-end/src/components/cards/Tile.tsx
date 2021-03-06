import React, { FC } from 'react';

import { TileType } from '../../constants/enums';


interface ITileProps {
    className: string;
    tileType: TileType;
}


const Tile: FC<ITileProps> = ({ tileType, className }) => {
    let block;
    switch (tileType) {
        case TileType.PICT:
            
            break;
        case TileType.WORD:
        
            break;
    }

    return (
        <div className={className}>

        </div>
    );
};

export default Tile;
