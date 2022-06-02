import { Clay } from '../../interfaces';
import { ClayOutput } from '../../../db/models/clayModel';


export const toClay = (clay: ClayOutput): Clay => {
    return {
        id: clay.id,
        name: clay.name,
        slug: clay.slug,
        description: clay.description,
        pictureFolder: clay.pictureFolder,
        pictureName: clay.pictureName,
        createdAt: clay.createdAt,
        updatedAt: clay.updatedAt,
    }
};
