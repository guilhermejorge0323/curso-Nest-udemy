import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AddHeaderInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext, // Informacoes sobre o contexto da requissicao, tipo, controller, metodo invocado
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('AddHeaderInterceptor  executado');
    const response = context.switchToHttp().getResponse();

    response.setHeader('Olha-so', 'nigga');
    return next.handle();
  }
}
