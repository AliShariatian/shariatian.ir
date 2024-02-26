import { FC } from "react";
import NextTopLoader from "nextjs-toploader";

const PageLoadingProgressBar: FC = (): JSX.Element => {
   return <NextTopLoader color="#e2e8f0" shadow={false} height={2} showSpinner={false} />;
};

export default PageLoadingProgressBar;
