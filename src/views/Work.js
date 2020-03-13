import React, { Component, Suspense, lazy } from 'react'
import Masonry from 'react-masonry-css'
import * as css from 'classnames'

const Project = lazy(() => import('./Project'))

class Work extends Component {
  state = {
    filteredCases: [],
    filter: 'All'
  }

  filterCases = ev => {
    const filter = ev.target.innerHTML
    const result = this.props.data.filter(item => item.tags.includes(filter))

    this.setState(prev => {
      if (filter === 'All') {
        return {
          filter: '',
          filteredCases: this.props.data
        }
      } else {
        return {
          filter,
          filteredCases: result
        }
      }
    })
  }

  componentDidMount() {
    this.setState({
      filteredCases: this.props.data
    })
  }

  render() {
    const { tags } = this.props

    return (
      <div className="view">
        <div className="content">
          <div className="content--inner is-narrow">
            <div className='work--tags'>
              <div className={css("work--tags-single", {'is-active': this.state.filter === 'All'})} onClick={this.filterCases}>All</div>
              { tags.map((tag, idx) => {
                  return (
                    <div className={css("work--tags-single", {'is-active': this.state.filter === tag})} key={`tag-${idx}`} onClick={this.filterCases}>{tag}</div>
                  )
                })
              }
            </div>
            <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              { this.state.filteredCases.map((project, idx) => {
                  return (
                    <Suspense fallback={<div className='project-loader'></div>} key={`project-${idx}`}>
                      <Project data={project}/>
                    </Suspense>
                  )
                })
              }
            </Masonry>
          </div>
        </div>
      </div>
    );
  }
}

export default Work
