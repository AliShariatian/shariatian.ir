export type Props = {
   href: string;
   children: React.ReactNode | string;
   className?: string;
   haveAnimation?: boolean;
   RotationRange?: number;
   title?: string;
   scrollAfterClick?: boolean;
   target?: "_blank" | "_parent" | "_self" | "_top";
};
