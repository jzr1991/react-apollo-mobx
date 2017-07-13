import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import createTypography from 'material-ui/styles/typography';
import { blue, pink, red } from 'material-ui/colors';
import Shell from './shell';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { Provider } from 'mobx-react';
import ContestStore from './core/components/contest/contest-store';

let styleManager;

class App extends React.Component<{}, {}> {

    render() {
        const palette = createPalette({
            primary: blue,
            accent: pink,
            error: red,
            type: 'light'
        });

        const typography = createTypography(palette, {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        });

        const theme = createMuiTheme({ palette, typography });

        if (!styleManager) {
            const themeContext = MuiThemeProvider.createDefaultContext({ theme });
            styleManager = themeContext.styleManager;
        }
        else {
            styleManager.updateTheme(theme);
        }

        const networkInterface = createNetworkInterface({
            uri: 'http://localhost:4000/graphql'
        });

        const client = new ApolloClient({
            networkInterface: networkInterface
        });

        const store = new ContestStore();

        return (
            <MuiThemeProvider theme={theme} styleManager={styleManager}>
                <ApolloProvider client={client}>
                    <Provider {...{store}}>
                        <Router>
                            <Shell />
                        </Router>
                    </Provider>
                </ApolloProvider>
            </MuiThemeProvider>
        );
    }
}

export default App;
