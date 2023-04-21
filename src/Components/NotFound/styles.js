import styled from "styled-components";
import {Box} from "@mui/material";

export const MessageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;

  & h4 {
    font-size: 4rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 16px;
    text-align: center;
  }

  & p {
    font-size: 1.5rem;
    color: #333;
    text-align: center;
  }
`;