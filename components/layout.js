import Nav from "./nav";

const Layout = ({ children }) => (
  <>
    <Nav/>
    <svg
      className="bg-pattern"
      viewBox="0 0 1282 292"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      // {...props}
    >
      <path
        className="main-1"
        d="M1 151c100 0 198.423-100 300-100 123.788 0 431.987 200 670 200 173.69 0 206.67-26.667 310-60"
        fill="none"
        stroke="#f9802a"
        strokeWidth={1}
      />
      <path
        className="main-2"
        d="M1 191C101 191 199.423 1 301 1c123.788 0 431.987 280 670 280 173.69 0 206.67-96.667 310-130"
        fill="none"
        stroke="#f9802a"
        strokeWidth={1}
      />
      <path
        className="main-3"
        d="M1 121c100 0 220-115.464 320-90 173.333 44.137 326.667 240 500 240 153.333 0 306.67-150 460-150"
        fill="none"
        stroke="#f9802a"
        strokeWidth={1}
      />
      <g>
        <path
          className="sec-1"
          d="M1 161c100 0 198.423-100 300-100 123.788 0 431.987 200 670 200 173.69 0 206.67-26.667 310-60"
          fill="none"
          stroke="#f9802a"
          strokeWidth={0.3}
        />
        <path
          className="sec-2"
          d="M1 201c100 0 198.423-190 300-190 123.788 0 431.987 280 670 280 173.69 0 206.67-96.667 310-130"
          fill="none"
          stroke="#f9802a"
          strokeWidth={0.3}
        />
        <path
          className="sec-3"
          d="M1 131c100 0 220-115.464 320-90 173.333 44.137 326.667 240 500 240 153.333 0 306.67-150 460-150"
          fill="none"
          stroke="#f9802a"
          strokeWidth={0.3}
        />
      </g>
    </svg>
    {children}
  </>
);

export default Layout;