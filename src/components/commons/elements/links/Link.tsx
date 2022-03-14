import React, { FC } from "react";
import { makeStyles } from "@mui/styles";
import NextLink from "next/link";

import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
export const linkStyle = makeStyles(() => ({
  link: {
    cursor: "pointer"
  }
}));

// Types
interface LinkProps {
  linkTo?: string;
}

const Link: FC<MuiLinkProps & LinkProps> = (props) => {
  const { linkTo, ...muiProps } = props;
  const classes = linkStyle();

  const renderMuiLink = () => {
    return (
      <MuiLink
        className={classes.link}
        color="links.primary"
        underline="none"
        {...muiProps}
      />
    );
  };

  return (
    <>
      {linkTo ? (
        <NextLink href={`${linkTo}`}>{renderMuiLink()}</NextLink>
      ) : (
        renderMuiLink()
      )}
    </>
  );
};

export default Link;
