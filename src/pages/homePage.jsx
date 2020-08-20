import React, { useState } from 'react'
import Searchbar from '../components/searchbar';
import ArticleList from '../components/articleList/articleList';
import SelectedArticle from '../components/selectedArticle/selectedArticle';
import { articleResponse, selectedArticleResponse } from '../data';
import PasswordQues from '../components/passwordQues';

export default function HomePage() {
  const [selectedArticleId, setSelectedArticleId] = useState(-1);
  const [searchText, setSearchText] = useState('');
  const [articleStatus, setArticleStatus] = useState('INIT');
  const [selectedArticleStatus, setSelectedArticleStatus] = useState('INIT');
  const [articleData, setArticleData] = useState([])
  const [selectedArticleData, setSelectedArticleData] = useState({})

  const handleFetch = () => {
    setArticleStatus('LOADING');
    setTimeout(() => {
      setArticleData(articleResponse);
      setArticleStatus('COMPLETED');
    }, 2000);
  }

  const handleArtcleFetch = (id) => {
    setSelectedArticleId(id);
    setSelectedArticleStatus('LOADING');
    setTimeout(() => {
      setSelectedArticleData(selectedArticleResponse);
      setSelectedArticleStatus('COMPLETED');
    }, 2000);
  }

  return (
    <div>
      {selectedArticleId === -1 ?
        <Searchbar
          searchText={searchText}
          handleSearch={val => setSearchText(val)}
          handleFetch={() => handleFetch()}
          articleStatus={articleStatus}
        />
      :
        <button onClick={()=>setSelectedArticleId(-1)}>Back</button>
      }
      {selectedArticleId === -1 ?
        <ArticleList 
          articleStatus={articleStatus}
          articleData={articleData}
          handleArtcleFetch={id => handleArtcleFetch(id)}
        />
        :
        <SelectedArticle 
          selectedArticleStatus={selectedArticleStatus}
          selectedArticleData={selectedArticleData}
        />
      }

      <br/>
      <br/>
      <br/>
      <br/>
      <PasswordQues />
    </div>
  )
}
