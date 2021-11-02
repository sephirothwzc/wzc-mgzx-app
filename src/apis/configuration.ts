import { hooks, createConfiguration } from '@midwayjs/hooks';
import bodyParser from 'koa-bodyparser';
import { join } from 'path';
import * as sequlize from '@midwayjs/sequelize';

export default createConfiguration({
  imports: [
    hooks({
      middleware: [bodyParser()],
    }),
    sequlize,
  ],
  importConfigs: [join(__dirname, './config')],
});
