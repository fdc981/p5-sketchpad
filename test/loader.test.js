/**
 * @jest-environment node
 */
import compiler from './compiler.js';

import path from 'path';
import webpack from 'webpack';
import { createFsFromVolume, Volume } from 'memfs';
import { getModuleSource, getWarnings, getErrors } from './helpers';


test('converts a simple global-mode p5.js sketch', async () => {
  const stats = await compiler('./fixtures/example.p5.js');

  expect(getModuleSource(stats)).toMatchSnapshot("result");
  expect(getWarnings(stats)).toHaveLength(0);
  expect(getErrors(stats)).toHaveLength(0);
});

test('converts a global-mode sketch containing a function definition', async () => {
  const stats = await compiler('./fixtures/example-function.p5.js');

  expect(getModuleSource(stats)).toMatchSnapshot("result");
  expect(getWarnings(stats)).toHaveLength(0);
  expect(getErrors(stats)).toHaveLength(0);
});

test('converts a global-mode sketch containing a class', async () => {
  const stats = await compiler('./fixtures/example-class.p5.js');

  expect(getModuleSource(stats)).toMatchSnapshot("result");
  expect(getWarnings(stats)).toHaveLength(0);
  expect(getErrors(stats)).toHaveLength(0);
});
