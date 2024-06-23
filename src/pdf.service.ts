import { Injectable } from '@nestjs/common';
import * as carbone from 'carbone';
import * as util from 'util';
import { join } from 'path';

@Injectable()
export class PdfService {
  async renderPDF<T>(data: T, nameTemplate: string): Promise<Buffer> {
    const option = {
      convertTo: 'pdf',
    };
    const renderCarbone = util.promisify(carbone.render) as (
      template: string,
      data: T,
      option: object,
    ) => Promise<Buffer>;
    const template = `src/templates/${nameTemplate}`;

    const result = await renderCarbone(
      join(process.cwd(), template),
      data,
      option,
    );

    return result;
  }
}
