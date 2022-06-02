import * as service from '../../../db/services/clayService';
import { CreateClayDTO, UpdateClayDTO, FilterClaysDTO } from '../../dto/clay';
import { Clay } from '../../interfaces';
import * as mapper from './mapper';


export const create = async(payload: CreateClayDTO): Promise<Clay> => {
    return mapper.toClay(await service.create(payload));
};

export const update = async (id: number, payload: UpdateClayDTO): Promise<Clay> => {
    return mapper.toClay(await service.update(id, payload));
};

export const getById = async (id: number): Promise<Clay> => {
    return mapper.toClay(await service.getById(id));
};

export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id);
    return isDeleted;
};

export const getAll = async(filters: FilterClaysDTO): Promise<Clay[]> => {
    return (await service.getAll(filters)).map(mapper.toClay);
};
