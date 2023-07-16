import { Link } from "react-router-dom";
const SubTitle = ({ title, btnTitle, path }) => {
  return (
    <div className="flex justify-between px-3 my-4 ">
      <div className="text-2xl font-bold">{title}</div>
      {btnTitle ? (
        <Link
          to={`${path}`}
          className="text-violet-700 hover:text-violet-500 font-bold"
        >
          {btnTitle}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubTitle;
