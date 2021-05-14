export const COLORS = {
  CHIP_BACKGROUND: `rgb(231,243,250)`,
  WHITE: `#FFFFFF`,
  LIGHT_GREY: `rgb(248,249,249)`,
  GREY: `rgb(188, 194, 197)`,
  DARK_GREY: `#717779`,
  INPUT_FOCUS_BLUE: `#80bdff`,
  LINK_BLUE: 'rgb(27, 149, 224)',
  CHIP_CONTENT: `rgb(55,122,181)`,
  HEADER_COLOR: `rgb(91, 112, 131)`,
  FONT_BLACK: 'rgb(15, 20, 25)',
  GREY_ALPHA: (alpha: number) => `rgba(188,194,197,${alpha})`
};

export const LAYOUT_SIZES = {
  CONTENT_MAX_WIDTH: '550px',
  CONTENT_MIN_WIDTH: '650px',
  CONTENT_CONTAINER_SIZE: '1024px'
};

const VARIABLES = {
  Margin: '0.75em',
  ThemeColors: {
    main: {
      background: COLORS.LIGHT_GREY
    },
    input: {
      border: COLORS.GREY,
      icon: COLORS.GREY,
      color: COLORS.DARK_GREY,
      focusBorderColor: COLORS.INPUT_FOCUS_BLUE,
      backgroundColor: COLORS.WHITE
    },
    chip: {
      backgroundDefault: COLORS.CHIP_BACKGROUND,
      textDefault: COLORS.CHIP_CONTENT
    },
    header: {
      color: COLORS.HEADER_COLOR
    },
    tweetListItem: {
      fontColor: COLORS.FONT_BLACK,
      evenBackgroundColor: COLORS.WHITE,
      oddBackgroundColor: COLORS.LIGHT_GREY
    },
    funcs: {
      GREY_ALPHA: COLORS.GREY_ALPHA
    }
  }
};

export default VARIABLES;
