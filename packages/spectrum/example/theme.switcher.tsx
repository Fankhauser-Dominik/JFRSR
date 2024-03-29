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
import ReactDOM from 'react-dom';
import {
  Picker,
  Item,
  defaultTheme,
  Provider as SpectrumThemeProvider,
  View,
} from '@adobe/react-spectrum';

export type Theme = 'light' | 'dark';

export function createThemeSelection(onChange: (newTheme: Theme) => void) {
  ReactDOM.render(
    <ThemeSelection onChange={onChange} />,
    document.getElementById('theme')
  );
}

function ThemeSelection({ onChange }: { onChange: (newTheme: Theme) => void }) {
  const [theme, setTheme] = React.useState(getPreferredTheme());

  return (
    <SpectrumThemeProvider colorScheme={theme} theme={defaultTheme}>
      <View position='absolute' bottom='size-200' left='size-200'>
        <Picker
          label='Theme'
          defaultSelectedKey={theme}
          onSelectionChange={(newTheme: 'light' | 'dark') => {
            document.cookie = `preferTheme=${newTheme}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            onChange(newTheme);
            setTheme(newTheme);
          }}
        >
          <Item key='light'>Light</Item>
          <Item key='dark'>Dark</Item>
        </Picker>
      </View>
    </SpectrumThemeProvider>
  );
}

export function getPreferredTheme(): Theme {
  return document.cookie.includes('preferTheme=dark')
    ? 'dark'
    : document.cookie.includes('preferTheme=light')
    ? 'light'
    : window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}
