import {Button} from "@shared/components/button";
import {ThemeProvider} from "styled-components";
import {GlobalStyles, lightTheme} from "@shared/styles";


const App = () => {
    return (
        <div>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <Button>Кнопка</Button>
            </ThemeProvider>
        </div>
    );
};

export default App;