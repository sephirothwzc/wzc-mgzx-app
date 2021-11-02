import { Column, BelongsTo, HasMany, ForeignKey, DataType } from 'sequelize-typescript';
import { EntityBase, ENTITY_BASE } from '../base/entity.base';
import { BaseTable } from '@midwayjs/sequelize';
import { AppOrderEntity } from './app-order.entity';
import { RoleEntity } from './role.entity';

@BaseTable({ tableName: 'app_user' })
export class AppUserEntity extends EntityBase {
  /**
   * 是否账号
   */
  @Column({
    comment: '是否账号',
  })
  account?: string;
  /**
   * 是否账号启用
   */
  @Column({
    comment: '是否账号启用',
  })
  accountStatus?: string;
  /**
   * 生日
   */
  @Column({
    comment: '生日',
  })
  birthday?: Date;

  /**
   * 状态 1启用 0停用默认1
   */
  @Column({
    comment: '状态 1启用 0停用默认1',
  })
  enableFlag?: number;
  /**
   * 性别
   */
  @Column({
    comment: '性别',
  })
  gender?: string;
  /**
   * 头像
   */
  @Column({
    comment: '头像',
  })
  hdaderImg?: string;
  /**
   * 最后登录时间
   */
  @Column({
    comment: '最后登录时间',
  })
  lastLoginTime?: Date;
  /**
   * token
   */
  @Column({
    comment: 'token',
  })
  lastLoginToken?: string;
  /**
   * 最后操作
   */
  @Column({
    comment: '最后操作',
    type: DataType.JSON,
  })
  lastOptions?: Record<string, any>;
  /**
   * 最后操作时间
   */
  @Column({
    comment: '最后操作时间',
  })
  lastOptionsTime?: Date;
  /**
   * 昵称唯一[unique]
   */
  @Column({
    comment: '昵称唯一[unique]',
  })
  nickname?: string;
  /**
   * 微信openid
   */
  @Column({
    comment: '微信openid',
  })
  openid?: string;
  /**
   * 密码
   */
  @Column({
    comment: '密码',
  })
  password?: string;
  /**
   * 手机号唯一[unique]
   */
  @Column({
    comment: '手机号唯一[unique]',
  })
  phone?: string;
  /**
   * 真实姓名
   */
  @Column({
    comment: '真实姓名',
  })
  realName?: string;
  /**
   * 备注
   */
  @Column({
    comment: '备注',
  })
  remark?: string;
  /**
   * 角色id
   */
  @ForeignKey(() => RoleEntity)
  @Column({
    comment: '角色id',
  })
  roleId?: string;
  /**
   * 状态normal正常black拉黑
   */
  @Column({
    comment: '状态normal正常black拉黑',
  })
  status?: string;
  /**
   * 微信unionid
   */
  @Column({
    comment: '微信unionid',
  })
  unionid?: string;

  @HasMany(() => AppOrderEntity, 'app_user_id')
  appOrderAppUserId: Array<AppOrderEntity>;

  @BelongsTo(() => RoleEntity, 'role_id')
  roleIdObj: RoleEntity;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class APP_USER extends ENTITY_BASE {
  /**
   * 是否账号
   */
  public static readonly ACCOUNT = 'account';

  /**
   * 是否账号启用
   */
  public static readonly ACCOUNT_STATUS = 'accountStatus';

  /**
   * 生日
   */
  public static readonly BIRTHDAY = 'birthday';

  /**
   * 业务编码权限用
   */
  public static readonly BUSINESS_CODE = 'businessCode';

  /**
   * 状态 1启用 0停用默认1
   */
  public static readonly ENABLE_FLAG = 'enableFlag';

  /**
   * 性别
   */
  public static readonly GENDER = 'gender';

  /**
   * 头像
   */
  public static readonly HDADER_IMG = 'hdaderImg';

  /**
   * 最后登录时间
   */
  public static readonly LAST_LOGIN_TIME = 'lastLoginTime';

  /**
   * token
   */
  public static readonly LAST_LOGIN_TOKEN = 'lastLoginToken';

  /**
   * 最后操作
   */
  public static readonly LAST_OPTIONS = 'lastOptions';

  /**
   * 最后操作时间
   */
  public static readonly LAST_OPTIONS_TIME = 'lastOptionsTime';

  /**
   * 昵称唯一[unique]
   */
  public static readonly NICKNAME = 'nickname';

  /**
   * 微信openid
   */
  public static readonly OPENID = 'openid';

  /**
   * 密码
   */
  public static readonly PASSWORD = 'password';

  /**
   * 手机号唯一[unique]
   */
  public static readonly PHONE = 'phone';

  /**
   * 真实姓名
   */
  public static readonly REAL_NAME = 'realName';

  /**
   * 备注
   */
  public static readonly REMARK = 'remark';

  /**
   * 角色id
   */
  public static readonly ROLE_ID = 'roleId';

  /**
   * 状态normal正常black拉黑
   */
  public static readonly STATUS = 'status';

  /**
   * 微信unionid
   */
  public static readonly UNIONID = 'unionid';

  /**
   * BaseTable.version
   */
  public static readonly VERSION = 'version';
}
