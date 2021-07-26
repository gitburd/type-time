import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
  }

  h2{
    color: ${({ theme }) => theme.colors.h2};
  }

  .right{
    background: ${({ theme }) => theme.colors.right};
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  .test-area{
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  .left{
    background: ${({ theme }) => theme.colors.left};
  }

  nav{
    border-bottom:0.5px solid ${({ theme }) => theme.colors.text};
  }

  .settings{
    border-bottom:0.5px solid ${({ theme }) => theme.colors.text};
    transition: all 1s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  .wpm, .help-container {
    border:1px solid ${({ theme }) => theme.colors.h2};
    padding:0;
  }

  .test-area ul{
    border:1px solid ${({ theme }) => theme.colors.h2};
  }

  .active-letter{
    background-color: ${({ theme }) => theme.colors.secondaryText};
    color: ${({ theme }) => theme.colors.right};
  }
  
  .dd-list .dd-active{
    background-color: ${({ theme }) => theme.colors.highlight};
  }

  .active-key{
    background-color: ${({ theme }) => theme.colors.highlight};
    border: 2px solid #a1922e;
    color:black;   
  }

  .correct {
    color: ${({ theme }) => theme.colors.correct};
  }

  .incorrect {
    color: ${({ theme }) => theme.colors.incorrect};
    text-decoration: underline;
  }

`;
