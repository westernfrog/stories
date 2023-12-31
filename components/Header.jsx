import Link from "next/link";

export default function Header(params) {
  return (
    <>
      <nav className="container navbar navbar-expand-lg sticky-top py-3 bg-newspaper">
        <div className="container-fluid">
          <Link className="navbar-brand pb-2" href="/">
            Stories
          </Link>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            style={{ boxShadow: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0b0b0c"
              style={{ width: "30px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-5">
              {[
                { heading: "Overview", href: "/" },
                { heading: "About", href: "/about" },
                {
                  heading: "API Docs",
                  href: "https://www.reddit.com/dev/api/",
                },
                {
                  heading: "Github",
                  href: "https://github.com/westernfrog/stories",
                },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link active"
                    href={item.href}
                    target="_blank"
                  >
                    <span>{item.heading}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <button className="btn rounded-0 p-0">
                Let&apos;s Talk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f4f4f4"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="ms-2"
                  style={{ width: "16px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end border-0"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
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
        <div className="offcanvas-body vh-100 d-grid">
          <ul className="navbar-nav">
            {[
              { heading: "Overview", href: "/" },
              { heading: "About", href: "/about" },
              {
                heading: "API Docs",
                href: "https://www.reddit.com/dev/api/",
              },
              {
                heading: "Github",
                href: "https://github.com/westernfrog/stories",
              },
            ].map((item, index) => (
              <li
                className="nav-item mx-0 py-1"
                key={index}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <Link
                  className="nav-link active border-bottom border-dark"
                  aria-current="page"
                  href={item.href}
                  target="_blank"
                >
                  <div className="row">
                    <div className="col">{item.heading}</div>
                    <div className="col-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#f4f4f4"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="ms-2"
                        style={{ width: "16px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-end">
            <button className="btn border border-dark w-100 rounded-0 py-1">
              Let&apos;s Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#f4f4f4"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="ms-2"
                style={{ width: "16px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
