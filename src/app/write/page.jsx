"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <Box
      component="form"
      sx={{
        width: "100%",
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="column" spacing={2}>
        <TextField
          label="Title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <TextField
          label="Description"
          value={desc}
          multiline
          rows={4}
          onChange={(event) => {
            setDesc(event.target.value);
          }}
        />
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography>Cover Images</Typography>
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ width: "fit-content" }}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Stack>
        <Button variant="contained" sx={{ width: "fit-content" }}>
          + Add New Post
        </Button>
      </Stack>
    </Box>
  );
};

export default AddNewPost;
