import { useContext } from '@midwayjs/hooks';
import { Context } from '@midwayjs/koa';
import { AppUserEntity } from '../lib/model/app-user.entity';

function useKoaContext() {
  return useContext<Context>();
}

export default async () => {
  return {
    message: 'Hello World',
    method: useKoaContext().method,
  };
};

export const post = async (name: string) => {
  return { method: 'POST', name };
};

export const appUserAll = async (id) => {
  return AppUserEntity.findAll({
    where: {
      id,
    },
  });
};
