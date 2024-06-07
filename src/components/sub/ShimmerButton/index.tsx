import { FC } from "react";
import "./index.css";

const ShimmerBtn: FC<{ text: string }> = ({ text }): JSX.Element => {
   return (
      <main className="shimmer-main">
         <button className="shimmer-btn">
            <span className="text">{text}</span>
            <span className="shimmer"></span>
         </button>
      </main>
   );
};

export default ShimmerBtn;
