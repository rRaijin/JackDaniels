import { Model, DataTypes, Optional } from 'sequelize';

import sequelizeConnection from '../config';


interface IClayAttributes {
    id: number;
    name: string;
    slug: string;
    description?: string;
    pictureFolder?: string;
    pictureName?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ClayInput extends Optional<IClayAttributes, 'id' | 'slug'> {}
export interface ClayOutput extends Required<IClayAttributes> {}

class Clay extends Model<IClayAttributes, ClayInput> implements IClayAttributes {
    public id!: number
    public name!: string
    public slug!: string
    public description!: string
    public pictureFolder!: string
    public pictureName!: string

  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
  
Clay.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT
    },
    pictureFolder: {
        type: DataTypes.STRING
    },
    pictureName: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.STRING
    },
    updatedAt: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    paranoid: true
});
  
export default Clay;
