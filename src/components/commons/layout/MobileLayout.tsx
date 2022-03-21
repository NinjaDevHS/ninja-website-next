import React, { ReactElement } from "react";

interface IProps {
  children: ReactElement;
}

const MobileLayout = ({ children }: IProps): ReactElement => {
  return <>{children}</>;
};

export default MobileLayout;
