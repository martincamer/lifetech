import { Link } from "react-router-dom";

export const LinkButton = ({ children, href }) => {
  return (
    <Link
      to={`/${href}`}
      className="hover:text-[#322F81] transition-all text-lg font-medium"
    >
      {children}
    </Link>
  );
};
