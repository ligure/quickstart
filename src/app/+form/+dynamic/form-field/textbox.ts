import { FieldBase } from './field-base';

export class Textbox extends FieldBase<string> {
  controlType = 'textbox';
  placeholder: string;
  type: string;
  constructor(options: {} = {}) {
    super(options);
    // this.placeholder = options.placeholder || '';
    this.type = options['type'] || '';
  }
}
