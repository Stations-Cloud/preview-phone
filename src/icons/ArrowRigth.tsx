import { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={12}
    fill="none"
  >
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 6h13m0 0-5-5m5 5-5 5"
    />
  </svg>
);
export default ArrowRight;
