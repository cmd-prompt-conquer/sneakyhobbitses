'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#ffe9f6',
  '#ffd1e6',
  '#faa1c9',
  '#f66eab',
  '#f24391',
  '#f02981',
  '#f01879',
  '#d60867',
  '#c0005c',
  '#a9004f',
];

export const theme = createTheme({
  colors: {
    myColor,
  },
});
