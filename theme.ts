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
    myTheme: [
      "#ffeaf3",
      "#fcd4e1",
      "#f4a7bf",
      "#ec779c",
      "#e64f7e",
      "#e3366c",
      "#e22862",
      "#c91a52",
      "#b41148",
      "#9f003e"
    ]
  },
  primaryColor: "myTheme",
});
