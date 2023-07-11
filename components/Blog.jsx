import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Blog() {
  const router = useRouter();
  const { query } = router;
  const [apiData, setApiData] = useState(null);
  const defaultCategory = "all";
  const category = query.category || defaultCategory;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/redditApi?category=${category}`);
        const data = await response.json();
        console.log(data);
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
          <div className="col-md-3">
            <ul class="navbar-nav">
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
            <div className="row" data-masonry='{"percentPosition": true }'>
              {apiData.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div class="card bg-transparent rounded-0 border border-dark mb-4 p-4">
                    {item.data.is_video ? (
                      <video
                        src={`${item.data.media?.reddit_video?.fallback_url?.replaceAll(
                          "&amp;",
                          "&"
                        )}`}
                        class="card-img-top rounded-0"
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
                    <div class="card-body px-0 pb-0">
                      <p class="card-text">{item.data.title}</p>
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
