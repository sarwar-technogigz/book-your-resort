const CustomHotelIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="15"
      height="19"
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 17.5H14.3M11.9 7.1H9.5M12.7 10.3H9.5M12.7 13.5H9.5M3.1 17.5V2.46C3.1 1.8392 3.4768 1.5 4.06 1.5C5.3976 1.5 6.0664 1.5 6.6264 1.588C8.12821 1.82593 9.51614 2.53322 10.5913 3.60848C11.6664 4.68373 12.3735 6.07176 12.6112 7.5736C12.7 8.1336 12.7 8.8024 12.7 10.14V17.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CustomHotelIcon;