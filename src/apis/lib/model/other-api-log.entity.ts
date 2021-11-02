import { Column, DataType } from 'sequelize-typescript';
import { EntityBase, ENTITY_BASE } from '../base/entity.base';
import { BaseTable } from '@midwayjs/sequelize';

@BaseTable({ tableName: 'other_api_log' })
export class OtherApiLogEntity extends EntityBase {
  /**
   * 三方方法
   */
  @Column({
    comment: '三方方法',
  })
  apiMethod?: string;
  /**
   * 入参
   */
  @Column({
    comment: '入参',
    type: DataType.JSON,
  })
  apiParams?: Record<string, any>;
  /**
   * 返回结果
   */
  @Column({
    comment: '返回结果',
    type: DataType.JSON,
  })
  apiResult?: Record<string, any>;
  /**
   * 三方url
   */
  @Column({
    comment: '三方url',
  })
  apiUrl?: string;

  /**
   * 三方成功与否
   */
  @Column({
    comment: '三方成功与否',
  })
  codeStatus?: string;
  /**
   * 状态 1启用 0停用默认1
   */
  @Column({
    comment: '状态 1启用 0停用默认1',
  })
  enableFlag?: number;
  /**
   * 备注
   */
  @Column({
    comment: '备注',
  })
  remark?: string;
  /**
   * 三方类型
   */
  @Column({
    comment: '三方类型',
  })
  type?: string;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class OTHER_API_LOG extends ENTITY_BASE {
  /**
   * 三方方法
   */
  public static readonly API_METHOD = 'apiMethod';

  /**
   * 入参
   */
  public static readonly API_PARAMS = 'apiParams';

  /**
   * 返回结果
   */
  public static readonly API_RESULT = 'apiResult';

  /**
   * 三方url
   */
  public static readonly API_URL = 'apiUrl';

  /**
   * 业务编码权限用
   */
  public static readonly BUSINESS_CODE = 'businessCode';

  /**
   * 三方成功与否
   */
  public static readonly CODE_STATUS = 'codeStatus';

  /**
   * 状态 1启用 0停用默认1
   */
  public static readonly ENABLE_FLAG = 'enableFlag';

  /**
   * 备注
   */
  public static readonly REMARK = 'remark';

  /**
   * 三方类型
   */
  public static readonly TYPE = 'type';

  /**
   * BaseTable.version
   */
  public static readonly VERSION = 'version';
}
