import React, { Component, Suspense, lazy } from 'react'
import Masonry from 'react-masonry-css'

const Project = lazy(() => import('./Project'))

class Work extends Component {
  render() {
    const projects = this.props.data

    return (
      <div className="view">
        <div className="content">
          <div className="content--inner is-narrow">
            <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              { projects.map((project, idx) => {
                  return (
                    <Suspense fallback={<div>Loading...</div>} key={`project-${idx}`}>
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
