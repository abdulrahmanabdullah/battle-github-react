import React from 'react';
import './App.css';
import { TProvider, lightTheme, nightTheme } from './context/theme';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';

// dynamic imports
const Popular = React.lazy(() => import('./components/Popular'));
const Battle = React.lazy(() => import('./components/Battle'));
const Results = React.lazy(() => import('./components/Results'));

class App extends React.Component {
  state = {
    theme: true,
    toggleDarkTheme: () => {
      this.setState(({ theme }) => ({
        theme: !theme
      }));
    }
  };

  render() {
    const { theme } = this.state;
    return (
      <Router>
        <TProvider value={this.state}>
          <ThemeProvider theme={theme ? lightTheme : nightTheme}>
            <div>
              <Container maxWidth='lg'>
                <CssBaseline />
                <Nav />
                <React.Suspense fallback={<h1>Loading</h1>}>
                  <Switch>
                    <Route exact path='/' component={Popular} />
                    <Route exact path='/battle' component={Battle} />
                    <Route path='/battle/result' component={Results} />
                    <Route render={() => <h1> 404 </h1>} />
                  </Switch>
                </React.Suspense>
              </Container>
            </div>
          </ThemeProvider>
        </TProvider>
      </Router>
    );
  }
}

export default App;
