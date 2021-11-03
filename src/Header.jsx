/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HomeIcon from "@mui/icons-material/Home";

function Header() {
  return (
    <div
      css={css`
        height: 120px;
        width: 100%;
        background-color: rgb(53, 118, 203);
        padding: 0 40px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 30px;
        p {
          font-size: 40px;
          font-weight: 700;
          color: white;
        }
        .MuiSvgIcon-root {
          color: white;
          height: 70px;
          width: 70px;
        }
      `}
    >
      <HomeIcon />
      <p>Estimated Home value</p>
    </div>
  );
}

export default Header;
