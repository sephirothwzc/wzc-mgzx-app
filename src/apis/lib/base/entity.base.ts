import { Column, Model, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { StaticSnowFlake } from '../utils/flake-id';
import { BaseTable } from '@midwayjs/sequelize';

@BaseTable
export class EntityBase extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: false,
    defaultValue: () => StaticSnowFlake.next(),
  })
  declare id: string;
  /**
   * 业务编码权限用
   */
  @Column({
    comment: '业务编码权限用',
  })
  businessCode?: string;

  @CreatedAt
  @Column
  declare createdAt: Date;

  @UpdatedAt
  @Column
  declare updatedAt: Date;

  @DeletedAt
  @Column
  declare deletedAt: Date;

  @Column
  createdId: string;

  @Column
  updatedId: string;

  @Column
  deletedId: string;
}

export class ENTITY_BASE {
  public static readonly ID = 'id';
  public static readonly BUSINESSCODE = 'businessCode';
  public static readonly CREATEDAT = 'createdAt';
  public static readonly UPDATEDAT = 'updatedAt';
  public static readonly DELETEDAT = 'deletedAt';
  public static readonly CREATEDID = 'createdId';
  public static readonly UPDATEDID = 'updatedId';
  public static readonly DELETEDID = 'deletedId';
}
