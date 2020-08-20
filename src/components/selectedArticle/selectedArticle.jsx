import React from 'react'

export default function SelectedArticle(props) {
    const { selectedArticleStatus, selectedArticleData } = props;
    if(selectedArticleStatus === "LOADING"){
        return <div>Loading...</div>
    }
    if(selectedArticleStatus === "INIT"){
        return <div></div>
    }
    return (
        <div>
            <div>{selectedArticleData.content}</div>
        </div>
    )
}
