import React, { useState, useEffect } from 'react';

import { ClayStaff, TileType } from '../constants/enums';
import MosaicList from '../components/lists/Mosaic';
import ItemsList from '../components/lists/ItemsList';
import Tabulation, { ITabulationProps } from '../components/Tabulation';
import ClayTabItem from '../components/ClayComponents/clayTabItem';
import { clayAPI } from '../services/ClayService';
import { IClay } from '../models/IClay';


const TEXT_COLOR = 'text-steel-darker bg-steel-lightest font-bold uppercase text-center border-2 border-b-0';
const IMG_SRC = 'https://via.placeholder.com/200x200';
const haha = (name: ClayStaff, desc: string) => ({
    name,
    content: <ClayTabItem
                imgSrc={IMG_SRC}
                description={desc}
                name={name}/>,
    options: {
        headerCss: TEXT_COLOR
    }
});

const tempTabulationListData: ITabulationProps = {
    className: 'flex flex-col',
    list: [
        haha(ClayStaff.GLASS, 'GLASS 123'),
        haha(ClayStaff.METAL, 'METAL 123'),
        haha(ClayStaff.PLASTICINE, 'PLASTICINE 123'),
        haha(ClayStaff.POTTERY, 'POTTERY 123')
    ]
}


const Clay = () => {
    const { data: clays, error, isLoading } = clayAPI.useFetchAllClaysQuery(100);
    console.log('dt:', clays);
    const [createClay, {error: createError, isLoading: createIsLoading}] = clayAPI.useCreateClayMutation();

    const handleCreate = async () => {
        await createClay({
            name: 'Test Clay 1',
            slug: 'test-clay-1',
            description: 'Test Clay Description',
            pictureFolder: 'clays',
            pictureName: ''
        } as IClay);
    }

    return (
        <div className='mt-3'>
            <div className='flex'>
                <div className='w-1/3 py-1'>
                    <img src="/pictures/clays/Moses_San_Pietro_in_Vincoli.jpg" alt="Moses_San_Pietro_in_Vincoli" />
                </div>
                <div className='w-2/3 pl-2'>
                    Sculpture is the branch of the visual arts that operates in three dimensions. It is one of the plastic arts. Durable sculptural processes originally used carving (the removal of material) and modelling (the addition of material, as clay), in stone, metal, ceramics, wood and other materials but, since Modernism, there has been an almost complete freedom of materials and process. A wide variety of materials may be worked by removal such as carving, assembled by welding or modelling, or moulded or cast. Sculpture in stone survives far better than works of art in perishable materials, and often represents the majority of the surviving works (other than pottery) from ancient cultures, though conversely traditions of sculpture in wood may have vanished almost entirely. However, most ancient sculpture was brightly painted, and this has been lost.
                    Sculpture has been central in religious devotion in many cultures, and until recent centuries large sculptures, too expensive for private individuals to create, were usually an expression of religion or politics. Those cultures whose sculptures have survived in quantities include the cultures of the ancient Mediterranean, India and China, as well as many in Central and South America and Africa.
                    The Western tradition of sculpture began in ancient Greece, and Greece is widely seen as producing great masterpieces in the classical period. During the Middle Ages, Gothic sculpture represented the agonies and passions of the Christian faith. The revival of classical models in the Renaissance produced famous sculptures such as Michelangelo's statue of David. Modernist sculpture moved away from traditional processes and the emphasis on the depiction of the human body, with the making of constructed sculpture, and the presentation of found objects as finished art works.
                </div>
            </div>
            <div className=''>
                <MosaicList
                    items={[]}
                    tileType={TileType.WORD}/>
            </div>
            <Tabulation
                list={tempTabulationListData.list}
                className={tempTabulationListData.className}/>

            <ItemsList list={clays} error={error} isLoading={isLoading}/>
            <button onClick={handleCreate}>
                ADD CLAY
            </button>
        </div>
    );
};

export default Clay;
