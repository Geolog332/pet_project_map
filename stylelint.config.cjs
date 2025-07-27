/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': null,
    'color-hex-length': 'short',
    'custom-property-empty-line-before': 'never',
    'declaration-empty-line-before': 'never',
    'rule-empty-line-before': 'always-multi-line',
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-descending-specificity': true
  }
};