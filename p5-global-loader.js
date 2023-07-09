const global2instance = require('p5-global2instance');
const p5func = require('p5-global2instance/list-p5func');

/**
 * Converts a p5 script in global mode to instance mode.
 * 
 * @param {string|Buffer} content Content of the resource file containing p5 data.
 * @param {object} [map] Unused.
 * @param {any} [meta] Unused.
 */
function p5Global2InstanceLoader(content, map, meta) {
  return global2instance(content);
}

/**
 * Converts a p5 script in global mode to instance mode crudely.
 *
 * Since this function replaces words matching p5 globals, the input should be
 * carefully checked beforehand.
 *
 * @param {string|Buffer} content Content of the resource file containing p5
 *                                data.
 * @param {object} [map] Unused.
 * @param {any} [meta] Unused.
 */
function crudeLoader(content, map, meta) {
  for (let expr of p5func['p5scopeFuncs']) {
    content = content.replaceAll("function " + expr + "() {",
                                 "$_p." + expr + " = function() {");
  }

  for (let expr of p5func['p5exprs']) {
    content = content.replaceAll(new RegExp("(?<!\\$_p\\.|[a-zA-Z])" + expr + "(?![a-zA-Z]+)", "g"),
                                 "$_p." + expr);
  }

  content = `__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=';
  import p5 from 'p5';

  let sketch = function($_p) {
    ${content}
  }

  let myp5 = new p5(sketch);
  `

  return content;
}

module.exports = crudeLoader;
