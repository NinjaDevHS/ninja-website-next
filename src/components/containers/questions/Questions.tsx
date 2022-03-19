import React, { ReactElement } from "react";

import { questionAndAnswer, QuestionAnswersType } from "costants/staticContent";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Questions = (): ReactElement => {
  return (
    <Stack>
      <Stack alignItems="center">
        <Typography variant="h5">Got Question ?</Typography>
        <Typography variant="caption">
          If what you&#39;re looking for is not here, try Stack Overflow.
        </Typography>
      </Stack>
      <Stack>
        {questionAndAnswer.map(
          (questionAnswer: QuestionAnswersType, ind: number) => (
            <Stack key={`question-${ind}`} p={6}>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                {questionAnswer.question}
              </Typography>
              <Typography variant="body1">{questionAnswer.subText}</Typography>
              <List>
                {questionAnswer?.answers &&
                  questionAnswer.answers.map((answer: string, kInd: number) => (
                    <ListItem key={`q-answer-${kInd}`} alignItems="center">
                      <ListItemText
                        primary={
                          <Stack direction="row">
                            <FiberManualRecordIcon sx={{ height: 10 }} />
                            <Typography key={`q-answer-${kInd}`}>
                              {answer}
                            </Typography>
                          </Stack>
                        }
                      />
                    </ListItem>
                  ))}
              </List>
            </Stack>
          )
        )}
      </Stack>
      <Stack p={4}>
        <Typography variant="caption">(*) = or maybe not</Typography>
        <Typography variant="caption">
          NOTE: a real ninja understands that this website&#39;s tone is ironic,
          especially when describing what it is that defines a ninja
          developer...
        </Typography>
        <Typography variant="caption">
          NOTE2: This is also just a sample site (but with fully working
          functionalities) developed for educational purposes. Everything is
          open source and available on GitHub!
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Questions;
