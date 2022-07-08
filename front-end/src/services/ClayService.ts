import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IClay } from '../models/IClay';


export const clayAPI = createApi({
    reducerPath: 'clayAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api/v1'}),
    tagTypes: ['Clay'],
    endpoints: (build) => ({
        fetchAllClays: build.query<IClay[], number>({
            query: (limit: number = 100) => ({
                url: '/clays',
                params: {
                    _limit: limit
                }
            }),
            providesTags: ['Clay']
        }),
        createClay: build.mutation<IClay, IClay>({
            query: (clay) => ({
                url: '/clays',
                method: 'POST',
                body: clay
            }),
            invalidatesTags: ['Clay']
        }),
        updateClay: build.mutation<IClay, IClay>({
            query: (clay) => ({
                url: `/clays/${clay.id}`,
                method: 'PUT',
                body: clay
            }),
            invalidatesTags: ['Clay']
        }),
        deleteClay: build.mutation<IClay, IClay>({
            query: (clay) => ({
                url: `/clays/${clay.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Clay']
        }),
    })
});
