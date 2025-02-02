import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66fcf1",
    },
    secondary: {
      main: "#c5c6c7",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Default border and text color before focus
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c5c6c7",
          },
          "& .MuiInputBase-input": {
            color: "#c5c6c7",
          },
          // Border color when hovering over the input
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#142735",
          },
        },
        // Focused state styles
        focused: {
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#66fcf1", // Border color after focus
            },
            "& .MuiInputBase-input": {
              color: "#66fcf1", // Text color after focus
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#c5c6c7", // Label color before focus
          "&.Mui-focused": {
            color: "#66fcf1", // Label color after focus
          },
        },
      },
    },
  },
  
});

export default theme;
