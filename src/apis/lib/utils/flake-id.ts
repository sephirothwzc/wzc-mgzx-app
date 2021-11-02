import FlakeId from 'flake-idgen';
import { Provide, Init } from '@midwayjs/decorator';
import { toString } from 'lodash';
import intformat from 'biguint-format';

export class StaticSnowFlake {
  private static flakeIdgen: FlakeId;

  static next() {
    const pid = process.pid.toString();
    StaticSnowFlake.flakeIdgen ||
      (StaticSnowFlake.flakeIdgen = new FlakeId({
        id: 23 + Number(pid.substring(pid.length - 3)),
        epoch: 1300000000000,
      }));
    return toString(intformat(StaticSnowFlake.flakeIdgen.next(), 'dec'));
  }
}
