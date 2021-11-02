import { Column, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { EntityBase, ENTITY_BASE } from '../base/entity.base';
import { BaseTable } from '@midwayjs/sequelize';
import { AppUserEntity } from './app-user.entity';

@BaseTable({ tableName: 'app_order' })
export class AppOrderEntity extends EntityBase {
  /**
   * 用户id
   */
  @ForeignKey(() => AppUserEntity)
  @Column({
    comment: '用户id',
  })
  appUserId?: string;

  /**
   * 状态 1启用 0停用默认1
   */
  @Column({
    comment: '状态 1启用 0停用默认1',
  })
  enableFlag?: number;
  /**
   * 消息队列id
   */
  @Column({
    comment: '消息队列id',
  })
  msgId?: string;
  /**
   * 订单金额分
   */
  @Column({
    comment: '订单金额分',
  })
  orderAmount?: number;
  /**
   * 三方支付订单id
   */
  @Column({
    comment: '三方支付订单id',
  })
  otherId?: string;
  /**
   * 备注
   */
  @Column({
    comment: '备注',
  })
  remark?: string;
  /**
   * 订单状态
   */
  @Column({
    comment: '订单状态',
  })
  status?: string;

  @BelongsTo(() => AppUserEntity, 'app_user_id')
  appUserIdObj: AppUserEntity;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class APP_ORDER extends ENTITY_BASE {
  /**
   * 用户id
   */
  public static readonly APP_USER_ID = 'appUserId';

  /**
   * 业务编码权限用
   */
  public static readonly BUSINESS_CODE = 'businessCode';

  /**
   * 状态 1启用 0停用默认1
   */
  public static readonly ENABLE_FLAG = 'enableFlag';

  /**
   * 消息队列id
   */
  public static readonly MSG_ID = 'msgId';

  /**
   * 订单金额分
   */
  public static readonly ORDER_AMOUNT = 'orderAmount';

  /**
   * 三方支付订单id
   */
  public static readonly OTHER_ID = 'otherId';

  /**
   * 备注
   */
  public static readonly REMARK = 'remark';

  /**
   * 订单状态
   */
  public static readonly STATUS = 'status';

  /**
   * BaseTable.version
   */
  public static readonly VERSION = 'version';
}
