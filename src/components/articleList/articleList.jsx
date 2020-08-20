import React from 'react'

export default function ArticleList(props) {
    const { articleStatus, articleData, handleArtcleFetch } = props;
    if(articleStatus === "LOADING"){
        return <div>Loading...</div>
    }
    if(articleStatus === "INIT"){
        return <div></div>
    }
    if(articleStatus === "COMPLETED" && articleData.length === 0){
        return <div>No Data Found</div>
    }
    return (
        <div>
            {articleData.map((articleRow, articleInd) => (
                <div className="article-row-container">
                    <div onClick={() => handleArtcleFetch(articleRow.articleId)}>{articleRow.title}</div>
                    <div>{articleRow.upvotes}</div>
                    <div>{articleRow.date}</div>
                </div>
            ))}
        </div>
    )
}
