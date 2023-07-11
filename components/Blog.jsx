import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

function isActive(href, category) {
  const currentCategory = category || "world";
  return href.includes(currentCategory);
}

export default function Blog() {
  const router = useRouter();
  const { query } = router;
  const [apiData, setApiData] = useState(null);
  const defaultCategory = "world";
  const category = query.category || defaultCategory;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/redditApi?category=${category}`);
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]);

  useEffect(() => {
    router.push({ pathname: router.pathname, query: { category } }, undefined, {
      shallow: true,
    });
  }, [category]);

  if (!apiData) {
    return (
      <div className="container d-flex align-items-center justify-content-center">
        Loading...
      </div>
    );
  }
  return (
    <>
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="col-md-3 mb-4">
            <button
              className="btn border border-dark w-100 rounded-0 py-1 d-lg-none d-flex align-items-center justify-content-center gap-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#filter"
              aria-controls="filter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "20px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
              Filters
            </button>
            <div
              className="offcanvas offcanvas-end border-0 d-lg-none"
              tabIndex="-1"
              id="filter"
              aria-labelledby="filterLabel"
              style={{ width: "70%" }}
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn btn-sm ms-auto rounded-0 p-0 text-black"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  {[
                    { heading: "View all", href: "/?category=world" },
                    { heading: "India", href: "/?category=IndiaSpeaks" },
                    { heading: "Politics", href: "/?category=politics" },
                    { heading: "Biology", href: "/?category=Awwducational" },
                    { heading: "Facts", href: "/?category=MysteriousFacts" },
                    { heading: "Space", href: "/?category=space" },
                    { heading: "Science", href: "/?category=science" },
                    { heading: "Technology", href: "/?category=technology" },
                    { heading: "Memes", href: "/?category=memes" },
                  ].map((item, index) => (
                    <li
                      className="nav-item mx-0 py-1"
                      key={index}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        href={item.href}
                      >
                        <div className="row">
                          <div className="col-3">
                            {isActive(item.href, category) ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                style={{ width: "20px" }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            ) : (
                              <>0{index + 1}</>
                            )}
                          </div>
                          <div className="col">{item.heading}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="navbar-nav d-lg-block d-none">
              {[
                { heading: "View all", href: "/?category=world" },
                { heading: "India", href: "/?category=IndiaSpeaks" },
                { heading: "Politics", href: "/?category=politics" },
                { heading: "Biology", href: "/?category=Awwducational" },
                { heading: "Facts", href: "/?category=MysteriousFacts" },
                { heading: "Space", href: "/?category=space" },
                { heading: "Science", href: "/?category=science" },
                { heading: "Technology", href: "/?category=technology" },
                { heading: "Memes", href: "/?category=memes" },
              ].map((item, index) => (
                <li className="nav-item mx-0 py-1" key={index}>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href={item.href}
                  >
                    <div className="row">
                      <div className="col-3">
                        {isActive(item.href, category) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            style={{ width: "20px" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        ) : (
                          <>0{index + 1}</>
                        )}
                      </div>
                      <div className="col">{item.heading}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-9">
            <div className="row" data-masonry='{"percentPosition": true }'>
              {apiData.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card bg-transparent rounded-0 border border-dark mb-4 p-4">
                    {item.data.is_video ? (
                      <video
                        src={`${item.data.media?.reddit_video?.fallback_url?.replaceAll(
                          "&amp;",
                          "&"
                        )}`}
                        className="card-img-top rounded-0"
                        alt={item.data.domain}
                        allowFullScreen
                        autoPlay
                        controls
                      />
                    ) : item.data.media_metadata != undefined ? (
                      <img
                        src={`${
                          Object.values(
                            item.data.media_metadata
                          )[0].s.u.replaceAll("&amp;", "&") || " "
                        }`}
                        alt={item.data.domain}
                      />
                    ) : item.data.preview != undefined ? (
                      <img
                        src={`${item.data.preview?.images[0]?.source?.url?.replaceAll(
                          "&amp;",
                          "&"
                        )}`}
                        alt={item.data.domain}
                      />
                    ) : item.data.thumbnail != "self" ? (
                      <img
                        src={`${item.data.thumbnail}`}
                        alt={item.data.domain}
                      />
                    ) : (
                      <></>
                    )}
                    <div className="card-body px-0 pb-0">
                      <p className="card-text">{item.data.title}</p>
                      <p className="card-text">{item.data.selftext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
