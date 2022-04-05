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
import { DimensionValue } from '@react-types/shared';
import { CellProps, computeLabel } from '@jsonforms/core';
import { SpectrumInputProps } from './index';
import { Provider } from '@adobe/react-spectrum';
import { DatePicker } from '@react-spectrum/datepicker';
import merge from 'lodash/merge';
import { parseAbsoluteToLocal } from '@internationalized/date';
import SpectrumProvider from '../additional/SpectrumProvider';

import moment from 'moment';

export const InputDateTime = ({
  config,
  data,
  enabled,
  handleChange,
  id,
  label,
  path,
  required,
  uischema,
}: CellProps & SpectrumInputProps) => {
  const appliedUiSchemaOptions = merge({}, config, uischema.options);

  const width: DimensionValue = appliedUiSchemaOptions.trim
    ? undefined
    : '100%';

  const toISOString = (inputDateTime: string) => {
    if (!inputDateTime) {
      return null;
    } else if (inputDateTime.length >= 25) {
      return inputDateTime.substring(0, 25);
    } else {
      return inputDateTime.substring(0, 19) + 'Z';
    }
  };
  return (
    <SpectrumProvider width={width}>
      <Provider locale={appliedUiSchemaOptions.locale ?? 'gregory'}>
        <DatePicker
          label={computeLabel(
            label,
            required,
            appliedUiSchemaOptions.hideRequiredAsterisk
          )}
          width={width}
          value={parseAbsoluteToLocal(moment().format(data))}
          onChange={(datetime: any) =>
            handleChange(
              path,
              datetime ? toISOString(datetime?.toString()) : ''
            )
          }
          granularity={appliedUiSchemaOptions.granularity ?? null}
          necessityIndicator={appliedUiSchemaOptions.necessityIndicator ?? null}
          id={id}
          isDisabled={enabled === undefined ? false : !enabled}
          autoFocus={uischema.options && uischema.options.focus}
          hideTimeZone
        />
      </Provider>
    </SpectrumProvider>
  );
};
