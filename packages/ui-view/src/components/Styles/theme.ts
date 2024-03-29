const brandPrimary = '#3c9cff';
const brandPrimaryTap = '#398ade';

export const Theme = {
  // 文字色
  colorTextBase: '#000000',
  colorTextBaseInverse: '#ffffff',
  colorTextSecondary: '#a4a9b0',
  colorTextPlaceholder: '#bbbbbb',
  colorTextDisabled: '#bbbbbb',
  colorTextCaption: '#888888',
  colorTextGray: '#666',
  colorTextParagraph: '#333333',
  colorLink: brandPrimary,
  // 背景色
  fillBase: '#ffffff',
  fillBody: '#f5f5f9',
  fillTap: '#dddddd',
  fillDisabled: '#dddddd',
  fillMask: 'rgba(0, 0, 0, .4)',
  fillGrey: '#f7f7f7',
  fillRed: '#fa3534',
  colorIconBase: '#cccccc',
  // 透明度
  opacityDisabled: '0.3',
  // 全局/品牌色
  brandPrimary: brandPrimary,
  brandPrimaryTap: brandPrimaryTap,
  brandSuccess: '#5ac725',
  brandSuccessTap: '#53c21d',
  brandWarning: '#f9ae3d',
  brandWarningTap: '#f1a532',
  brandError: '#f56c6c',
  brandErrorTap: '#e45656',
  brandInfo: '#909399',
  brandInfoTap: '#767a82',

  // 边框色
  borderColorBase: '#dddddd',
  borderLightColor: '#f1f1f1',
  borderColor: '#eaeaea',
  // 字体尺寸
  // ---
  fontSizeIconText: 10,
  fontSizeCaptionSm: 12,
  fontSizeBase: 14,
  fontSizeSubHead: 15,
  fontSizeCaption: 16,
  fontSizeHeading: 17,
  // 圆角
  // ---
  radiusXs: 2,
  radiusSm: 3,
  radiusMd: 5,
  radiusLg: 7,
  // 边框尺寸
  // ---
  borderWidthSm: 0.5,
  borderWidthMd: 1,
  borderWidthLg: 2,
  // 间距
  // ---
  // 水平间距
  hSpacingSm: 5,
  hSpacingMd: 8,
  hSpacingLg: 15,
  // 垂直间距
  vSpacingXs: 3,
  vSpacingSm: 6,
  vSpacingMd: 9,
  vSpacingLg: 15,
  vSpacingXl: 21,
  // 高度
  // ---
  lineHeightBase: 1,
  lineHeightParagraph: 1.5,
  // 图标尺寸
  // ---
  iconSizeXxs: 15,
  iconSizeXs: 18,
  iconSizeSm: 21,
  iconSizeMd: 22,
  iconSizeLg: 36,
  // 动画缓动
  // ---
  easeInOutQuint: 'cubicBezier(0.86, 0, 0.07, 1)',
  // 组件变量
  // ---
  actionSheetItemHeight: 50,
  actionSheetItemFontSize: 18,
  // button
  buttonHeight: 47,
  buttonFontSize: 18,
  buttonHeightSm: 23,
  buttonFontSizeSm: 12,
  primaryButtonFill: brandPrimary,
  primaryButtonFillTap: '#0e80d2',
  ghostButtonColor: brandPrimary,
  ghostButtonFillTap: brandPrimary + '99',
  warningButtonFill: '#e94f4f',
  warningButtonFillTap: '#d24747',
  linkButtonFillTap: '#dddddd',
  linkButtonFontSize: 16,
  // modal
  modalFontSizeHeading: 18,
  modalButtonFontSize: 17,
  modalButtonHeight: 46,
  // list
  listTitleHeight: 30,
  listItemHeightSm: 35,
  listItemHeight: 44,
  // input
  inputLabelWidth: 17,
  inputFontSize: 17,
  inputColorIcon: '#cccccc',
  inputColorIconTap: brandPrimary,
  // tabs
  tabsColor: brandPrimary,
  tabsHeight: 42,
  tabsFontSizeHeading: 15,
  // segmentedControl
  segmentedControlColor: brandPrimary,
  segmentedControlHeight: 27,
  segmentedControlFillTap: brandPrimary + '10',
  // tabBar
  tabBarFill: '#ebeeef',
  tabBarHeight: 50,
  // toast
  toastFill: 'rgba(0, 0, 0, .7)',
  // searchBar
  searchBarFill: '#efeff4',
  searchBarHeight: 44,
  searchBarInputHeight: 28,
  searchBarFontSize: 15,
  searchColorIcon: '#bbbbbb',
  // noticeBar
  noticeBarFill: '#fffada',
  noticeBarHeight: 36,
  // switch
  switchFill: '#4dd865',
  // tag
  tagHeight: 25,
  tagSmallHeight: 15,
  // picker
  optionHeight: 42,
  toastZIndex: 1999,
  actionSheetZIndex: 1000,
  popupZIndex: 999,
  modalZIndex: 999,
};

export enum FONT_WEIGHT {
  LIGHTER = '100',
  NORMAL = '400',
  MEDIUM = '500',
  BOLD = '700',
}
