import { Column, BelongsTo, HasMany, ForeignKey } from 'sequelize-typescript';
import { EntityBase, ENTITY_BASE } from '../base/entity.base';
import { BaseTable } from '@midwayjs/sequelize';
import { AppUserEntity } from './app-user.entity';

@BaseTable({ tableName: 'role' })
export class RoleEntity extends EntityBase {
  /**
   * 角色编号[unique]
   */
  @Column({
    comment: '角色编号[unique]',
  })
  code?: string;
  /**
   * 状态 1启用 0停用默认1
   */
  @Column({
    comment: '状态 1启用 0停用默认1',
  })
  enableFlag?: number;
  /**
   * 角色名称[unique]
   */
  @Column({
    comment: '角色名称[unique]',
  })
  name?: string;
  /**
   * 上级角色
   */
  @ForeignKey(() => RoleEntity)
  @Column({
    comment: '上级角色',
  })
  parentId?: string;
  /**
   * 备注
   */
  @Column({
    comment: '备注',
  })
  remark?: string;

  @HasMany(() => AppUserEntity, 'role_id')
  appUserRoleId: Array<AppUserEntity>;

  @BelongsTo(() => RoleEntity, 'parent_id')
  parentIdObj: RoleEntity;

  @HasMany(() => RoleEntity, 'parent_id')
  roleParentId: Array<RoleEntity>;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class ROLE extends ENTITY_BASE {
  /**
   * 业务编码权限用
   */
  public static readonly BUSINESS_CODE = 'businessCode';

  /**
   * 角色编号[unique]
   */
  public static readonly CODE = 'code';

  /**
   * 状态 1启用 0停用默认1
   */
  public static readonly ENABLE_FLAG = 'enableFlag';

  /**
   * 角色名称[unique]
   */
  public static readonly NAME = 'name';

  /**
   * 上级角色
   */
  public static readonly PARENT_ID = 'parentId';

  /**
   * 备注
   */
  public static readonly REMARK = 'remark';

  /**
   * BaseTable.version
   */
  public static readonly VERSION = 'version';
}
