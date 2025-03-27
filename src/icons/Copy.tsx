import { SVGProps } from "react";
const Copy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 23 22"
  >
    <path
      stroke="#616161"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.7 7V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.18 1 13.62 1 12.5 1H4.9c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C1.7 2.52 1.7 3.08 1.7 4.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.22 15 3.78 15 4.9 15h2.8m3.2 6h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.18 7 19.62 7 18.5 7h-7.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7.7 8.52 7.7 9.08 7.7 10.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C9.22 21 9.78 21 10.9 21Z"
    />
  </svg>
);
export default Copy;
