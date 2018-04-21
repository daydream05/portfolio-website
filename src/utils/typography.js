import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Europa",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Europa"],
  overrideStyles: ({ rhythm }) => ({
    h1: {
      color: 'hsla(0,0%,0%,0.75)',
    }
  })
});

export default typography;