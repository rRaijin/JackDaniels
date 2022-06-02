import { Optional } from 'sequelize/types';


export type CreateClayDTO = {
    name: string;
    slug?: string;
    description?: string;
    pictureFolder?: string;
    pictureName?: string;
};

export type UpdateClayDTO = Optional<CreateClayDTO, 'name'>;

export type FilterClaysDTO = {
    isDeleted?: boolean;
    includeDeleted?: boolean;
};
