import { Injectable } from '@nestjs/common';
import * as Carbone from 'carbone';

@Injectable()
export class PdfService {
  async renderPdf<T>(templatePath: string, data: T, convertTo: string = 'pdf'): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
      const options: Carbone.RenderOptions = {
        convertTo,
      };

      Carbone.render(templatePath, data, options, (err: Error | null, result?: Buffer) => {
        if (err) {
          reject(err);
        } else if (result) {
          resolve(result);
        } else {
          reject(new Error('Empty result returned by Carbone'));
        }
      });
    });
  }
}
