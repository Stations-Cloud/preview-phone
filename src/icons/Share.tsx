import { SVGProps } from "react";
const Share = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
  >
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 5V1m0 0h-4m4 0-7 7M6 1H4.8c-1.26 0-2.04 0-2.51.25a2 2 0 0 0-.92.92C1 2.76 1 3.48 1 4.8v6.4c0 1.26 0 2.04.25 2.51a2 2 0 0 0 .92.92C2.76 15 3.48 15 4.8 15h6.4c1.26 0 2.04 0 2.51-.25a2 2 0 0 0 .92-.92C15 13.24 15 12.52 15 11.2V9"
    />
  </svg>
);
export default Share;
