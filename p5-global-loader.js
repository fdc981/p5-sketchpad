const global2instance = require('p5-global2instance');

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

module.exports = p5Global2InstanceLoader;
