import React from 'react';

import { TileType } from '../../constants/enums';
import Tile from '../cards/Tile';


interface IMosaicProps {
    className?: string;
    items: any[];
    tileType: TileType;
}


const MosaicList = (props: IMosaicProps) => {
    const { className, items, tileType } = props;

    return (
        <div className={className}>
            {
                items.map((k, i) =>
                    <Tile
                        key={`tile-item-${i}`}
                        tileType={TileType.PICT}
                        className='w-1/5'/>
                )
            }
        </div>
    );
}

export default MosaicList;
