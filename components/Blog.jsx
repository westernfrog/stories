import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog(params) {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/redditApi");
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!apiData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="col-md-3">
            <ul class="navbar-nav">
              {[
                { heading: "View all", href: "/" },
                { heading: "India", href: "/" },
                { heading: "Politics", href: "/" },
                { heading: "Science & Technology", href: "/" },
                { heading: "Facts", href: "/" },
                { heading: "Memes", href: "/" },
              ].map((item, index) => (
                <li class="nav-item mx-0 py-1" key={index}>
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href={item.href}
                  >
                    <div className="row">
                      <div className="col-2">
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
                            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                          />
                        </svg>
                      </div>
                      <div className="col">{item.heading}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-9">
            <div className="row">
              {apiData.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div class="card bg-transparent rounded-0 border border-dark mb-4 p-4">
                    {item.data.is_video ? (
                      <video
                        src={item.data.media?.reddit_video?.fallback_url}
                        class="card-img-top rounded-0"
                        alt={item.data.title}
                        allowFullScreen
                        autoPlay
                        controls
                      />
                    ) : item.data.thumbnail != "self" ? (
                      <img
                        src={`${item.data.thumbnail}`}
                        alt={item.data.title}
                      />
                    ) : item.data.preview != undefined ? (
                      <img
                        src={`${item.data.preview?.images[0]?.source?.url?.replaceAll(
                          "&amp;",
                          "&"
                        )}`}
                        alt={item.data.title}
                      />
                    ) : (
                      <></>
                    )}
                    <div class="card-body px-0 pb-0">
                      <div className="row">
                        <div className="col">
                          <h5 class="card-title">{item.data.title}</h5>
                        </div>
                        <div className="col-2 text-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            style={{ width: "20px" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                      </div>
                      <p class="card-text">{item.data.selftext}</p>
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
