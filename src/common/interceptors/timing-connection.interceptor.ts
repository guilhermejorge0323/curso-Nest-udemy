
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

export class TimeConnectionInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext, // Informacoes sobre o contexto da requissicao, tipo, controller, metodo invocado
    next: CallHandler<any>,
  ){
    console.log('TimeConnectionInterceptor antes');
    await new Promise(resolve => setTimeout(resolve, 10000));

    return next.handle().pipe(
        tap(() => {
            console.log('anndnd');
        })
    );
  }
}
