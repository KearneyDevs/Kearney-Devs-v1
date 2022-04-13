import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        secondary: 'rgba(84, 255, 234, 0.84)',
        primary: 'rgba(27, 223, 176, 1)',
        defaultText: 'rgba(255, 255, 255, 1)'
    }
}

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;