import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "6",
    category: "general"
  }

  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  CapitalFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    // console.log("Contructor from News.js");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `News_ADDA - ${this.CapitalFirst(this.props.category)}`;
  }

  async UpdateNews() {
    this.props.setProgress(20);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      this.props.setProgress(50);
      let parseData = await data.json();
      this.props.setProgress(80);
      this.setState({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        loading: false,
      })
      this.props.setProgress(100);
    } 

  async componentDidMount() {
    this.UpdateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.UpdateNews();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.UpdateNews();
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page:this.state.page +1})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults
    })
  };



  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop:"90px"}}>News_ADDA -Top  {this.CapitalFirst(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          // hasMore={articles && articles.length < totalResults}
          loader={<Spinner />}
          
        >
          <div className='container'>
          <div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage}
                  newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
       

      </>

    )
  }
}

export default News


//let url ="https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e1ebfe10765e450aa007d58e87df5da1&pagesize=5"
// let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e1ebfe10765e450aa007d58e87df5da1&page=1&pageSize=${this.props.pageSize}`;
// {this.setState({loading:true})}
// let data = await fetch(url);
// let parseData =await data.json();
// // console.log(parseData);
// this.setState({
//   articles: parseData.articles,
//   totalResults :parseData.totalResults,
//   loading:false
// })



 /* <div className='container'>
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>

        </div> */