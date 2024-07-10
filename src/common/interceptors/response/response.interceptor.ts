import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (data.error) {
          return {
            status: 'error',
            data: data.error,
            message: data.message ?? 'Error en la solicitud',
          };
        } else {
          return {
            status: 'success',
            data: data.data ?? [],
            message: data.message,
          };
        }
      }),
      catchError((error) => {
        return throwError(() => ({
          status: 'error',
          message: 'Error en la solicitud',
          data: error.message,
        }));
      }),
    );
  }
}
