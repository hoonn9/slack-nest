import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    /**
     * Nest는 http, ws, rpc 서버를 동시에 운영할 수 있어서
     * 한 context안에 들어있는 데 그 중에 필요한 객체만 가져오기 위해 switchTo 를 사용
     */
    const response = ctx.switchToHttp().getResponse();
    return response.locals.jwt;
  },
);
