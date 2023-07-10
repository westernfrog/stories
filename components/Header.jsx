import Link from "next/link";

export default function Header(params) {
  return (
    <>
      <nav class="container navbar navbar-expand-lg sticky-top py-3 border-bottom bg-newspaper">
        <div class="container-fluid">
          <Link class="navbar-brand pb-2" href="#">
            Stories
          </Link>
          <button
            class="navbar-toggler p-0 border-0"
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto ms-5">
              {[
                { heading: "Overview", href: "/" },
                { heading: "Explore", href: "/about" },
                { heading: "About", href: "/#work" },
                { heading: "API Docs", href: "/product" },
                { heading: "Github", href: "/services" },
              ].map((item, index) => (
                <li class="nav-item" key={index}>
                  <Link class="nav-link active" href={item.href}>
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
        class="offcanvas offcanvas-end border-0"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn btn-sm ms-auto rounded-0 p-0 text-black"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Close
          </button>
        </div>
        <div class="offcanvas-body vh-100 d-grid">
          <ul class="navbar-nav">
            {[
              { heading: "Overview", href: "/" },
              { heading: "Explore", href: "/about" },
              { heading: "About", href: "/#work" },
              { heading: "API Docs", href: "/product" },
              { heading: "Github", href: "/services" },
            ].map((item, index) => (
              <li
                class="nav-item mx-0 py-1"
                key={index}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <Link
                  class="nav-link active border-bottom border-dark"
                  aria-current="page"
                  href={item.href}
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
          <div className="d-flex align-items-end mb-2">
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
