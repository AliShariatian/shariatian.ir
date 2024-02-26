import { FC } from "react";
import NextTopLoader from "nextjs-toploader";

const PageLoadingProgressBar: FC = (): JSX.Element => {
   return <NextTopLoader color="#93c5fd" shadow={false} initialPosition={0.08} crawlSpeed={200} height={3} crawl={true} showSpinner={false} easing="ease" speed={400} zIndex={160} />;
};

export default PageLoadingProgressBar;
