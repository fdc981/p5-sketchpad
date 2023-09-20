function getModuleSource(stats) {
  return stats.toJson({ source: true }).modules[0].source;
}

function getWarnings(stats) {
  return stats.compilation.warnings.sort();
}

function getErrors(stats) {
  return stats.compilation.errors.sort();
}

export {
  getModuleSource,
  getWarnings,
  getErrors
}
