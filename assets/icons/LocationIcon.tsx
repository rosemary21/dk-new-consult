import React from "react";

const LocationIcon: React.FC<IconProps> = ({
  width = 28,
  height = 29,
  color = "var(--black)",
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 28 29" fill="none" {...props}>
    {/* <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
    <path
      d="M14.0363 2.10742C11.5023 2.11041 9.073 3.11835 7.28123 4.91012C5.48945 6.7019 4.48152 9.13121 4.47853 11.6652C4.47549 13.7359 5.1519 15.7505 6.40398 17.3998C6.40398 17.3998 6.66464 17.743 6.70722 17.7926L14.0363 26.4362L21.3688 17.7882C21.407 17.7422 21.6686 17.3998 21.6686 17.3998L21.6694 17.3972C22.9209 15.7486 23.597 13.735 23.594 11.6652C23.591 9.13121 22.5831 6.7019 20.7913 4.91012C18.9995 3.11835 16.5702 2.11041 14.0363 2.10742ZM14.0363 15.1407C13.3489 15.1407 12.6769 14.9369 12.1054 14.555C11.5338 14.1731 11.0883 13.6303 10.8253 12.9952C10.5622 12.3601 10.4934 11.6613 10.6275 10.9871C10.7616 10.3129 11.0926 9.69365 11.5787 9.20759C12.0648 8.72152 12.684 8.39051 13.3582 8.25641C14.0324 8.1223 14.7312 8.19113 15.3663 8.45418C16.0014 8.71724 16.5442 9.16271 16.9261 9.73426C17.308 10.3058 17.5118 10.9778 17.5118 11.6652C17.5107 12.5866 17.1441 13.4699 16.4926 14.1215C15.841 14.773 14.9577 15.1396 14.0363 15.1407Z"
      fill={color}
    />
  </svg>
);

export default LocationIcon;