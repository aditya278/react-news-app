import React from 'react'

import Loading from './Loading';

export default function HeadlinePosts({articles, loading}) {

    const convertDate = (dateStr) => {
        let finalDate = new Date(dateStr);
        return finalDate.toLocaleDateString() + " " + finalDate.toLocaleTimeString();
    }

    if(loading) {
        return <Loading />
    }

    return (
        <div className="row">
            <div className="col-8 card mb-3 w-75">
                <img className="card-img-top w-100" src={articles[0].urlToImage} alt={articles[0].source.name} />
                <div className="card-body">
                    <h5 className="card-title">{articles[0].title}</h5>
                    <br />
                    <p className="card-text">{articles[0].description}</p>
                    <p className="card-text"><small className="text-muted">{convertDate(articles[0].publishedAt)} <b>Source:</b> {articles[0].source.name}</small></p>
                </div>
            </div>
            <div className="col-4 w-25">
                <div className="row-6 card mb-3">
                    <img className="card-img-top w-100" src={articles[1].urlToImage} alt={articles[1].source.name} />
                    <div className="card-body">
                        <h5 className="card-title">{articles[1].title}</h5>
                        <p className="card-text"><small className="text-muted">{convertDate(articles[1].publishedAt)} <b>Source:</b> {articles[1].source.name}</small></p>
                    </div>
                </div>
                <div className="row-6 card mb-3">
                    <img className="card-img-top w-100" src={articles[2].urlToImage} alt={articles[2].source.name} />
                    <div className="card-body">
                        <h5 className="card-title">{articles[2].title}</h5>
                        <p className="card-text"><small className="text-muted">{convertDate(articles[2].publishedAt)} <b>Source:</b>{articles[2].source.name}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
