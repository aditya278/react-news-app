import React, {useState} from "react";

export default function Header( { onTopicSelection } ) {
    const [searchText, setSearchText] = useState('');

    const onChange = (event) => {
        event.preventDefault();
        setSearchText(event.target.value);
    }

    const onClick = () => {
        onTopicSelection(searchText);
    }

    return (
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <a className="text-muted" href="subs">
                        Subscribe
                    </a>
                </div>
                <div className="col-4 text-center">
                    <a className="blog-header-logo text-dark" href="/">
                        The News App
                    </a>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                <input class="form-control mr-sm-2 mr-md-3 w-50" type="search" value={searchText} placeholder="Search" aria-label="Search" onChange={onChange} />
                <button className="btn btn-white w-25" type="submit" aria-label="Search" onClick={onClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="mx-3"
                        role="img"
                        viewBox="0 0 24 24"
                        focusable="false"
                    >
                        <title>Search</title>
                        <circle cx="10.5" cy="10.5" r="7.5" />
                        <path d="M21 21l-5.2-5.2" />
                    </svg>
                </button>
                </div>
            </div>
        </header>
    );
}
