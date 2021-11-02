import { Column, BelongsTo, HasMany, ForeignKey } from 'sequelize-typescript';
import { EntityBase, ENTITY_BASE } from '../base/entity.base';
import { BaseTable } from '@midwayjs/sequelize';

@BaseTable({ tableName: 'data_dictionary' })
export class DataDictionaryEntity extends EntityBase {
  /**
   * 状态 1启用 0停用默认1
   */
  @Column({
    comment: '状态 1启用 0停用默认1',
  })
  enableFlag?: number;
  /**
   * 字典显示
   */
  @Column({
    comment: '字典显示',
  })
  itemDisplay?: string;
  /**
   * 排序
   */
  @Column({
    comment: '排序',
  })
  itemOrder?: number;
  /**
   * 字典值
   */
  @Column({
    comment: '字典值',
  })
  itemValue?: string;
  /**
   * 字典key[unique]
   */
  @Column({
    comment: '字典key[unique]',
  })
  key?: string;
  /**
   * 字典显示
   */
  @Column({
    comment: '字典显示',
  })
  keyDisplay?: string;
  /**
   * 层级
   */
  @Column({
    comment: '层级',
  })
  level?: number;
  /**
   * 上级key
   */
  @ForeignKey(() => DataDictionaryEntity)
  @Column({
    comment: '上级key',
  })
  parentId?: string;
  /**
   * 备注
   */
  @Column({
    comment: '备注',
  })
  remark?: string;

  @BelongsTo(() => DataDictionaryEntity, 'parent_id')
  parentIdObj: DataDictionaryEntity;

  @HasMany(() => DataDictionaryEntity, 'parent_id')
  dataDictionaryParentId: Array<DataDictionaryEntity>;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class DATA_DICTIONARY extends ENTITY_BASE {
  /**
   * 业务编码权限用
   */
  public static readonly BUSINESS_CODE = 'businessCode';

  /**
   * 状态 1启用 0停用默认1
   */
  public static readonly ENABLE_FLAG = 'enableFlag';

  /**
   * 字典显示
   */
  public static readonly ITEM_DISPLAY = 'itemDisplay';

  /**
   * 排序
   */
  public static readonly ITEM_ORDER = 'itemOrder';

  /**
   * 字典值
   */
  public static readonly ITEM_VALUE = 'itemValue';

  /**
   * 字典key[unique]
   */
  public static readonly KEY = 'key';

  /**
   * 字典显示
   */
  public static readonly KEY_DISPLAY = 'keyDisplay';

  /**
   * 层级
   */
  public static readonly LEVEL = 'level';

  /**
   * 上级key
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
