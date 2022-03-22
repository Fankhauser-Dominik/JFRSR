/*
  The MIT License

  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
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
import { isEmpty } from '../util/isEmpty';
import React, { FunctionComponent, useContext } from 'react';
import {
  GroupLayout,
  RankedTester,
  rankWith,
  RendererProps,
  uiTypeIs,
} from '@jsonforms/core';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import {
  Content,
  Divider,
  Heading,
  View,
  Provider,
  useProvider,
  defaultTheme,
} from '@adobe/react-spectrum';
import { renderChildren } from './util';
import { ColorSchemeContext } from '../util/ColorSchemeContext';

/**
 * Default tester for a group layout.
 *
 * @type {RankedTester}
 */
export const spectrumGroupLayoutTester: RankedTester = rankWith(
  1,
  uiTypeIs('Group')
);

export const SpectrumGroupLayoutRenderer: FunctionComponent<RendererProps> = ({
  schema,
  uischema,
  path,
  visible,
  enabled,
}: RendererProps) => {
  const group = uischema as GroupLayout;

  const colorSchemeContext = useContext(ColorSchemeContext);
  const parentProvider = useProvider();
  const colorScheme = parentProvider
    ? parentProvider.colorScheme
    : colorSchemeContext;
  const theme = parentProvider ? parentProvider.theme : defaultTheme;

  return (
    <View
      isHidden={visible === undefined || visible === null ? false : !visible}
      borderWidth='thin'
      borderColor='dark'
      borderRadius='medium'
      padding='size-250'
    >
      <Provider
        colorScheme={colorScheme}
        theme={theme}
        id='SpectrumInputControlProvider'
      >
        {!isEmpty(group.label) ? (
          <Heading level={4} margin={0}>
            {group.label}
          </Heading>
        ) : (
          ''
        )}
        {!isEmpty(group.label) ? (
          <Divider size='M' marginTop='size-150' marginBottom='size-200' />
        ) : (
          ''
        )}
        <Content>{renderChildren(group, schema, {}, path, enabled)}</Content>
      </Provider>
    </View>
  );
};

export default withJsonFormsLayoutProps(SpectrumGroupLayoutRenderer);
