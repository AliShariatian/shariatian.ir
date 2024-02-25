"use client";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

interface Props {
   window?: () => Window;
   children: React.ReactElement;
}

function HideOnScroll(props: Props) {
   const { children, window } = props;

   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
   });

   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children}
      </Slide>
   );
}

const NavbarHideOnScroll = (props: Props): JSX.Element => {
   return <HideOnScroll {...props}>{props.children}</HideOnScroll>;
};

export default NavbarHideOnScroll;
