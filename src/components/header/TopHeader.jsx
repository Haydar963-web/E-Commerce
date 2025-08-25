import { Link } from "react-router-dom";
const TopHeader = ({ setToggle }) => {
  return (
    <div className="top-header">
      <div onClick={() => setToggle(true)} className="top-header-menu">
        <i className="bi bi-list"></i>
      </div>
      <Link to="/" className="top-header-logo">
        <i className="bi bi-basket2"></i>
        متجر العاصمة
      </Link>
      <div className="top-header-text">
        <span>صُمِّمَ بواسطة </span>
        <b>حيدر ملحم ^_~</b>
      </div>
      <div className="top-header-phone">
        123-456-789
        <i className="bi bi-telephone"></i>
      </div>
    </div>
  );
};

export default TopHeader;
