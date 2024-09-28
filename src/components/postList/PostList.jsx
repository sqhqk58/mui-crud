import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Typography } from "@mui/material";

const data = [
  {
    _id: 1,
    title: "Sample Post 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, ipsum sed commodo viverra, velit lectus sagittis velit, ac malesuada ipsum felis vel velit.",
    views: 1000,
    author: "John Doe",
  },
];
export default function BasicTable() {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" component="h1">
          List of Posts
        </Typography>
        <Button>+ Add new post</Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Desc</TableCell>
              <TableCell>Views</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item._id}>
                <TableCell component="th" scope="row">
                  {item.title}
                </TableCell>
                <TableCell sx={{ maxWidth: 300 }}>{item.desc}</TableCell>
                <TableCell>{item.views}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>
                  <Stack direction="row">
                    <IconButton aria-label="Edit" color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
