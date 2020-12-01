import React from "react";

export default function Header() {
    return (
        <header class="blog-header py-3">
            <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 pt-1">
                    <a class="text-muted" href="subs">
                        Subscribe
                    </a>
                </div>
                <div class="col-4 text-center">
                    <a class="blog-header-logo text-dark" href="/">
                        The News App
                    </a>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">
                    <a class="text-muted" href="search" aria-label="Search">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="mx-3"
                            role="img"
                            viewBox="0 0 24 24"
                            focusable="false"
                        >
                            <title>Search</title>
                            <circle cx="10.5" cy="10.5" r="7.5" />
                            <path d="M21 21l-5.2-5.2" />
                        </svg>
                    </a>
                    <a class="btn btn-sm btn-outline-secondary" href="signup">
                        Sign up
                    </a>
                </div>
            </div>
        </header>
    );
}
