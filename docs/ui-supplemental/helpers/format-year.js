'use strict';
module.exports = function formatYear(value) {
  const d = value instanceof Date ? value : new Date(value || Date.now());
  return Number.isNaN(d.getTime()) ? '' : String(d.getFullYear());
};
