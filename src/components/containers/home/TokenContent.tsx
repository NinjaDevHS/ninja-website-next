import React, { ReactElement } from "react";
import { sourceCodeList, tokenUtilitiesList } from "costants/staticContent";

import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const TokenContent = (): ReactElement => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6} p={8}>
        <Typography variant="h6">Token Utility! 🏆</Typography>
        <List>
          {tokenUtilitiesList.map((keyword, ind) => (
            <ListItem key={`token-${ind}`}>
              <ListItemText
                primary={
                  <Typography textAlign="justify">
                    {ind + 1}. {keyword}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Stack alignItems="center">
          <Typography variant="h5">🙌🏻 🙌🏽 🙌🏿</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} p={8}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            💻 Source code you&#39;ll get:
          </Typography>
          <List>
            {sourceCodeList.map((source, ind) => (
              <ListItem key={`source-${ind}`}>
                <ListItemText
                  primary={
                    <Typography textAlign="justify">
                      {ind + 1}. {source}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="caption">
            NOTE: the Solidity Smart Contract will be visible in Ehterscan by
            anyone of course.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TokenContent;
