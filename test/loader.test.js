/**
 * @jest-environment node
 */
import compiler from './compiler.js';

import path from 'path';
import webpack from 'webpack';
import { createFsFromVolume, Volume } from 'memfs';


test('converts a simple global-mode p5.js sketch', async () => {
  const stats = await compiler('./example.p5.js');
  const output = stats.toJson({ source: true }).modules[0].source;

  expect(output).toMatchSnapshot("module");
});
