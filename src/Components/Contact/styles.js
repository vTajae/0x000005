import styled from "styled-components";
import {
  Grid,
  Stack,
  Box,
  Container,
  TextField,
  Button,
  Paper,
  Card,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ContactWrapper = styled(Paper)``;

export const StyledBox = styled(Box)({
  background:
    "linear-gradient(to bottom, #adceff, #a0d7ff, #99dffe, #97e6f9, #9decf1, #a8eef4, #b2f0f7, #bcf2fa, #cff1ff, #e1f1ff, #eff2fa, #f5f5f5)",
  margin: "auto",
  display: "flex",
  height: "100vh",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
});

export const Form = styled(FormControl)({
  alignItems: "center",
  margin: "auto",
});
