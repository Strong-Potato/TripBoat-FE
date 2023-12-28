exports = {
  arrowParens: "always",

  /**
   *  tabWidth: <int>
   *  들여쓰기 너비 수(탭을 사용할 경우 몇칸을 띄워줄지)
   */
  tabWidth: 2,

  /**
   *  useTabs: <bool>
   *  탭 사용 여부 (미사용 시 스페이스바로 간격조정을 해야함.)
   */
  useTabs: false,

  /**
   *  semi: <bool>
   *  명령문의 끝에 세미콜론(;)을 인쇄합니다.
   * true: (;)를 추가함
   * false: (;)를 지움
   */
  semi: true,

  /**
   *  singleQuote: <bool>
   *  큰따옴표("") 대신 작은따옴표('')를 사용여부
   * true: 홀따옴표로 사용
   * false: 큰따옴표로 사용
   */
  singleQuote: true,

  /**
   * jsxSingleQuote: <bool>
   *  JSX내에서 큰따옴표("") 대신 작은따옴표('')를 사용여부
   * true: 홀따옴표로 사용
   * false: 큰따옴표로 사용
   */
  jsxSingleQuote: true,

  /**
   * trailingComma: "<es5|none|all>"
   *  객체나 배열을 작성하여 데이터를 넣을때, 마지막에 후행쉼표를 넣을지 여부
   * es5: 후행쉼표 제외
   * none: 후행쉼표 없음
   * all: 후행쉼표 포함
   */
  trailingComma: "all",

  /**
   *  bracketSpacing: <bool>
   *  개체 리터럴에서 대괄호 사이의 공백을 넣을지 여부
   * true: 공백을 넣음 { foo: bar }
   * false: 공백을 제외 {foo: bar}
   */
  bracketSpacing: false,
};
