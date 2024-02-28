export type Props = {
   href: string;
   children: string | React.ReactElement;
   className?: string;
   haveAnimation?: boolean;
   RotationRange?: number;
   scrollAfterClick?: boolean;
   target?: "_blank" | "_parent" | "_self" | "_top";
};
