import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1のページです</h1>
      <Link to="/page1/detaila">DetailAへ</Link>
      <br />
      <Link to="/page1/detailb">DetailBへ</Link>
    </div>
  );
};
