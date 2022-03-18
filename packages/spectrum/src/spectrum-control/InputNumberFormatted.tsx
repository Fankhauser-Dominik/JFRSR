/*
  The MIT License

  Copyright (c) 2020 headwire.com, Inc
  https://github.com/headwirecom/jsonforms-react-spectrum-renderers

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import React from 'react';
import { CellProps, Formatted } from '@jsonforms/core';
import merge from 'lodash/merge';
import { TextField } from '@adobe/react-spectrum';
import { DimensionValue } from '@react-types/shared';
import { SpectrumInputProps } from './index';

export class InputNumberFormatted extends React.PureComponent<
  CellProps & SpectrumInputProps & Formatted<number>
> {
  render() {
    const {
      config,
      enabled,
      handleChange,
      id,
      isValid,
      label,
      path,
      required,
      schema,
      uischema,
    } = this.props;

    const formattedNumber: string = this.props.toFormatted(this.props.data);

    const onChange = (ev: any) => {
      const validStringNumber = this.props.fromFormatted(
        ev.currentTarget.value
      );
      handleChange(path, validStringNumber);
    };

    const appliedUiSchemaOptions = merge({}, config, uischema.options);

    const width: DimensionValue = appliedUiSchemaOptions.trim
      ? undefined
      : '100%';

    return (
      <TextField
        label={label}
        type='text'
        inputMode='numeric'
        value={formattedNumber}
        onChange={onChange}
        id={id}
        isDisabled={!enabled}
        maxLength={schema.maxLength}
        autoFocus={appliedUiSchemaOptions.focus}
        isRequired={required}
        validationState={isValid ? 'valid' : 'invalid'}
        width={width}
      />
    );
  }
}
