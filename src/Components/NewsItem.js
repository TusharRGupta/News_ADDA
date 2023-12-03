import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: 0
          }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imageURL ? imageURL : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/europa_clipper_1-sixteen_nine.jpg?VersionId=35RNj6FzRaIsLT_9goVosI2zT2EuxlKr"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="card-footer">
              <small className="text-body-secondary"> Author: {author ? author : "Unknown"} , Date: {new Date(date).toGMTString()}</small>
            </div>
            <a href={newsURL} rel="noopener" target='_blank' className="btn btn-primary btn-sm">read more</a>
          </div>
        </div>
      </div >
    )
  }
}

export default NewsItem
