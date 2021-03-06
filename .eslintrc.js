module.exports = {
  // --------------------------------
  // 呼び出したいルール（パッケージ）
  // --------------------------------
  // ES5 & kintone の場合
  extends: "@cybozu/eslint-config/presets/kintone-customize-es5",

  // ES6以上 & kintone の場合
  // extends: ["@cybozu", "@cybozu/eslint-config/globals/kintone"],

  // node & kintone の場合
  // extends: ["@cybozu/eslint-config/presets/node", "@cybozu/eslint-config/globals/kintone"],

  // --------------------------------
  // グローバル変数の定義
  // --------------------------------
  globals: {
    garoon: "readonly"
  },

  // --------------------------------
  //  ルール
  // --------------------------------
  rules: {
  //   quotes: ["error", "single"]
  }
};
