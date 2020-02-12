import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines'
import Nav from './Nav'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Work from './views/Work'

class App extends Component {
  render() {
    const { about, contact, projects, tags } = this.props.data

    return (
      <BrowserRouter>
        <div className="app">
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <>
                <Nav location={pathname}/>
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    onExit={(node, appears) => exit(node, appears)}
                    timeout={{enter: 550, exit: 350}}
                    >
                    <Switch location={location}>
                      <Route exact path="/" component={Home}/>
                      <Route path="/contact" render={() => <Contact data={contact} />} />
                      <Route path="/about" render={() => <About data={about} />} />
                      <Route path="/work" render={() => <Work data={projects} tags={tags} />} />
                    </Switch>
                  </Transition>
                </TransitionGroup>
              </>
            )
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}

  export default App;
