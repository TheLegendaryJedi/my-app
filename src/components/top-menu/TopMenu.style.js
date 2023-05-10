import styled from "styled-components";

const TopMenuContainer = styled.div`
  .topnav {
    overflow: hidden;
    background-color: #333;

    a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;

      &:hover {
        background-color: #ddd;
        color: black;
      }
      &.active {
        background-color: #ddd;
        color: black;
      }
    }
  }
`;

export { TopMenuContainer };
