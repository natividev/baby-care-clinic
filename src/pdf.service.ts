import { Injectable } from '@nestjs/common';
import * as Carbone from 'carbone';

@Injectable()
export class PdfService {
  async renderPdf<T>(templatePath: string, data: T, convertTo: string = 'pdf'): Promise<Buffer> {
    if (!templatePath) {
      throw new Error('templatePath must be a non-empty string');
    }

    if (!data) {
      throw new Error('data must not be null or undefined');
    }

    const validFormats = ['pdf', 'otherSupportedFormat']; // replace with actual supported formats
    if (!validFormats.includes(convertTo)) {
      throw new Error(`convertTo must be one of ${validFormats.join(', ')}`);
    }

    return new Promise<Buffer>((resolve, reject) => {
      const options: Carbone.RenderOptions = {
        convertTo,
      };

      Carbone.render(templatePath, data, options, (err: Error | null, result?: Buffer) => {
        if (err) {
          reject(new Error(`Error rendering PDF from template ${templatePath}: ${err.message}`));
        } else if (result) {
          resolve(result);
        } else {
          reject(new Error(`Empty result returned by Carbone when rendering template ${templatePath}`));
        }
      });
    });
  }
}