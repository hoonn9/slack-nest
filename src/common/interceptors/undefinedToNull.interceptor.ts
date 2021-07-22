/**
 * 컨트롤러 실행 전 후를 관리
 * middleware는 실행 전이거나 후때만 가능하지만
 * 인터셉터는 둘을 동시에 관리 가능
 */

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(map(data => (data === undefined ? null : data)));
  }
}
