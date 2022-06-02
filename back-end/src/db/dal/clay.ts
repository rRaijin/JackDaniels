import { Op } from 'sequelize';
import { isEmpty } from 'lodash';

import { Clay } from '../models';
import { GetAllClayFilters } from './types';
import { ClayInput, ClayOutput } from '../models/clayModel';


export const create = async (payload: ClayInput): Promise<ClayOutput> => {
    const clayItem = await Clay.create(payload);

    return clayItem;
};

export const findOrCreate = async (payload: ClayInput): Promise<ClayOutput> => {
    const [clayItem] = await Clay.findOrCreate({
        where: {
            name: payload.name
        },
        defaults: payload
    });

    return clayItem;
};

export const update = async (id: number, payload: Partial<ClayInput>): Promise<ClayOutput> => {
    const clayItem = await Clay.findByPk(id);
    if (!clayItem) {
        throw new Error('not found');
    }
    const updatedclay = await clayItem.update(payload);

    return updatedclay;
};

export const getById = async (id: number): Promise<ClayOutput> => {
    const clayItem = await Clay.findByPk(id);
    if (!clayItem) {
        throw new Error('not found');
    }

    return clayItem;
};

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedclayCount = await Clay.destroy({
        where: {id}
    });

    return !!deletedclayCount;
};

export const getAll = async (filters?: GetAllClayFilters): Promise<ClayOutput[]> => {
    return Clay.findAll({
        where: {
            // ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    });
};

export const checkSlugExists = async (slug: string): Promise<boolean> => {
    const clayWithSlug = await Clay.findOne({
        where: {
            slug
        }
    });

    return !isEmpty(clayWithSlug);
};
