import { kebabCase } from 'lodash';

import * as clayDal from '../dal/clay';
import { GetAllClayFilters } from '../dal/types';
import { ClayInput, ClayOutput } from '../models/clayModel';


export const create = async (payload: ClayInput): Promise<ClayOutput> => {
    let slug = kebabCase(payload.name);
    const slugExists = await clayDal.checkSlugExists(slug);
    payload.slug = slugExists ? `${slug}-${Math.floor(Math.random() * 1000)}` : slug;
    
    return clayDal.create(payload);
}

export const update = async (id: number, payload: Partial<ClayInput>): Promise<ClayOutput> => {
    if (payload.name) {
        let slug = kebabCase(payload.name);
        const slugExists = await clayDal.checkSlugExists(slug);
        payload.slug = slugExists ? `${slug}-${Math.floor(Math.random() * 1000)}` : slug;
    }
    
    return clayDal.update(id, payload);
};

export const getById = (id: number): Promise<ClayOutput> => {
    return clayDal.getById(id);
};

export const deleteById = (id: number): Promise<boolean> => {
    return clayDal.deleteById(id);
};

export const getAll = (filters: GetAllClayFilters): Promise<ClayOutput[]> => {
    return clayDal.getAll(filters);
};
