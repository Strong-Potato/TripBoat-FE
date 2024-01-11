import { extendTheme } from "@chakra-ui/react";

import { avatarTheme } from "./avatarCustom";
import { tabsTheme } from "./tabsCustom";

export const customTheme = extendTheme({
  styles: {
    global: {
      ".swiper": {
        _hover: {
          ".swiper-button-next": {
            opacity: "1",
          },
          ".swiper-button-prev": {
            opacity: "1",
          },
        },
      },
      ".swiper-button-next": {
        height: "5.2rem",
        width: "5.2rem",
        backgroundSize: "50% auto",
        backgroundPosition: "center",
        background: "url(src/assets/voteIcons/swiper-next-btn.svg) no-repeat",
        opacity: "0",
        transition: "opacity 0.3s ease",
        _after: {
          display: "none",
        },
      },
      ".swiper-button-prev": {
        height: "5.2rem",
        width: "5.2rem",
        backgroundSize: "50% auto",
        backgroundPosition: "center",
        background: "url(src/assets/voteIcons/swiper-prev-btn.svg) no-repeat",
        opacity: "0",
        transition: "opacity 0.3s ease",
        _after: {
          display: "none",
        },
      },
      ".swiper-button-disabled": {
        display: "none",
      },

      // Calendar Modal
      ".react-datepicker": {
        border: "none",
        padding: "8px 20px",

        "&__navigation": {
          display: "none",
        },

        "&__header": {
          backgroundColor: "transparent",
          border: "none",
        },

        "&__current-month": {
          display: "flex",
          paddingLeft: "5.5rem",
          fontSize: "1.6rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "2.4rem",
          letterSpacing: "-0.16px",
          color: "neutral.900",
        },

        "&__day-names": {
          display: "flex",
          justifyContent: "center",
          margin: "1.6rem 0",
          "& > div:nth-child(1)": {
            color: "danger.300",
          },
        },

        "&__day-name": {
          width: "4.8rem",
          fontSize: "1.2rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "2rem",
          letterSpacing: "-0.12px",
          color: "neutral.900",
          margin: "0",
        },

        "&__month-container": {
          width: "100%",
          marginBottom: "3.2rem",
        },

        "&__week": {
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          "& > div:nth-child(1)": {
            color: "danger.300",
          },
        },

        "&__day": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "4.8rem",
          height: "3.5rem",
          fontSize: "1.6rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "2.4rem",
          letterSpacing: "-0.16px",
          color: "neutral.900",
          margin: "0",

          _hover: {
            width: "3.5rem",
            margin: "0 0.65rem",
            borderRadius: "100px",
            backgroundColor: "primary.300 !important",
            color: "neutral.0",
          },

          "&--keyboard-selected": {
            backgroundColor: "transparent",
          },

          "&--disabled": {
            color: "neutral.200 !important",
          },

          "&--in-selecting-range, &--in-range": {
            backgroundColor: "primary.100 !important",
            borderRadius: 0,
            position: "relative",
          },

          "&--selecting-range-start, &--range-start, &--selecting-range-end, &--range-end":
            {
              _hover: {
                width: "4.8rem",
                margin: 0,
              },
            },

          "&--selecting-range-start::before, &--range-start::before, &--selecting-range-end::before, &--range-end::before":
            {
              width: "3.5rem",
              height: "3.5rem",
              marginLeft: "0.65rem",
              borderRadius: "100px",
              content: "''",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "primary.300 !important",
              color: "neutral.0 !important",
              zIndex: "1 !important",
            },

          "&--selecting-range-start::after, &--range-start::after": {
            width: "2.4rem",
            height: "3.5rem",
            borderRadius: "0",
            content: "''",
            position: "absolute",
            top: 0,
            left: "50%",
            backgroundColor: "primary.100 !important",
            color: "neutral.0 !important",
            zIndex: "0 !important",
          },

          "&--selecting-range-end::after, &--range-end::after": {
            width: "2.4rem",
            height: "3.5rem",
            borderRadius: "0",
            content: "''",
            position: "absolute",
            top: 0,
            right: "50%",
            backgroundColor: "primary.100 !important",
            color: "neutral.0 !important",
            zIndex: "0 !important",
          },

          "&--selecting-range-start span, &--range-start span, &--selecting-range-end span, &--range-end span":
            {
              position: "absolute",
              zIndex: "5 !important",
              color: "neutral.0",
            },
        },
        ".react-datepicker__day--range-start.react-datepicker__day--in-range,\
         .react-datepicker__day--range-end.react-datepicker__day--in-range,\
         .react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start,\
         .react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-end":
          {
            backgroundColor: "transparent !important",
          },
        ".react-datepicker__day--range-start.react-datepicker__day--range-end.react-datepicker__day--in-range::after":
          {
            backgroundColor: "transparent !important",
          },
      },
    },
  },
  components: {
    Avatar: avatarTheme,
    Tabs: tabsTheme,

    Button: {
      baseStyle: {
        _disabled: {
          backgroundColor: "neutral.200",
          color: "neutral.400",
          PointerEvent: "none",
        },
      },
      //ex) Button 컴포넌트 내부에 variant="CTAButton"
      variants: {
        blueButton: {
          backgroundColor: "primary.300",
          borderRadius: "16px",
          boxShadow: "shadow.200",

          color: "neutral.0",
          fontSize: "button",
          fontWeight: "button",
          lineHeight: "button",

          _hover: {
            backgroundColor: "primary.400",
          },
        },
        CTAButton: {
          position: "fixed",
          bottom: "2.4rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "32.7rem",
          height: "4.6rem",

          backgroundColor: "primary.300",
          borderRadius: "16px",

          color: "neutral.0",
          fontSize: "button",
          fontWeight: "button",
          lineHeight: "button",

          zIndex: "2",

          _hover: {
            backgroundColor: "primary.400",
          },
        },
        voteButton: {
          w: "18.4rem",
          h: "5.4rem",
          backgroundColor: "primary.300",
          borderRadius: "48px",
          boxShadow: "shadow.200",

          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "8rem",

          color: "neutral.0",
          fontSize: "button",
          fontWeight: "button",
          lineHeight: "button",

          _hover: {
            backgroundColor: "primary.400",
          },
        },
      },
    },
  },

  fonts: {
    heading: `'suit', sans-serif`,
    body: `'suit', sans-serif`,
  },
  colors: {
    primary: {
      100: "#d4e8ff",
      200: "#62aaff",
      300: "#2388ff",
      400: "#0172d8",
    },
    secondary: {
      100: "#ffe2ed",
      300: "#ff85b1",
      400: "#e23774",
    },
    success: {
      100: "#71d07b",
      300: "#19c43e",
      400: "#04724d",
    },
    danger: {
      100: "#fef1f2",
      300: "#e02d3c",
      400: "#ba2532",
    },
    neutral: {
      0: "#fff",
      100: "#f2f4f5",
      200: "#e3e5e5",
      300: "#cdcfd0",
      400: "#979c9e",
      700: "#3f444d",
      800: "#23272f",
      900: "#1d2433",
      1000: "#0a0d1",
    },
    etc: {
      0: "#fed600",
    },
  },

  shadows: {
    shadow: {
      100: "0px 0px 8px 0px rgba(20, 20, 20, 0.08), 0px 0px 1px 0px rgba(20, 20, 20, 0.04)",
      200: "0px 1px 8px 2px rgba(20, 20, 20, 0.1), 0px 0px 1px 0px rgba(20, 20, 20, 0.04)",
      300: "0px 1px 24px 8px rgba(20, 20, 20, 0.08)",
    },
  },

  //$typography-font-size-map
  fontSizes: {
    headline: "2.2rem",
    // 22px
    titleLarge: "2rem",
    // 20px"
    titleMedium: "1.8rem",
    // 18px
    titleSmall: "1.6rem",
    // 16px
    subTitle: "1.6rem",
    // 16px
    bodyLarge: "1.6rem",
    // 16px
    bodySmall: "1.4rem",
    // 14px
    button: "1.4rem",
    // 14px
    tabLabel: "1.4rem",
    // 14px
    captionLarge: "1.3rem",
    // 13px
    captionMedium: "1.2rem",
    // 12px
    captionSmall: "1.2rem",
    // 12px
  },

  //$typography-font-weight-map
  fontWeights: {
    headline: "700",
    titleLarge: "700",
    titleMedium: "700",
    titleSmall: "700",
    subTitle: "500",
    bodyLarge: "400",
    bodySmall: "400",
    button: "700",
    tabLabel: "500",
    captionLarge: "500",
    captionMedium: "700",
    captionSmall: "500",
  },

  //$typography-line-height-map
  lineHeights: {
    headline: "3rem",
    // 30px
    titleLarge: "2.8rem",
    // 28px
    titleMedium: "2.6rem",
    // 26px
    titleSmall: "2.4rem",
    // 24px
    subTitle: "2.4rem",
    // 24px
    bodyLarge: "2.4rem",
    // 24px
    bodySmall: "2.2rem",
    // 22px
    button: "2.2rem",
    // 22px
    tabLabel: "2.2rem",
    // 22px
    captionLarge: "2.2rem",
    // 22px
    captionMedium: "2rem",
    // 20px
    captionSmall: "2rem",
    // 20px
  },
});
