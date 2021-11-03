/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Container({ children, title, title2, id, value }) {
  const principalTitle = value ? title + value : title;
  return (
    <div
      css={css`
        height: 100px;
        width: 100%;
        display: flex;
        gap: 50px;
        padding: 0 20px;
        align-items: center;
        p {
          font-size: 30px;
          font-weight: 600;
          margin: 0;
        }
        .index {
          font-size: 25px;
          color: rgb(117, 117, 117);
        }
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .MuiSvgIcon-root {
          color: rgb(117, 117, 117);
          height: 40px;
          width: 40px;
        }
      `}
    >
      {children}
      <div>
        <p>{principalTitle}</p>
        {title2 && <p className="index">{title2 + id}</p>}
      </div>
    </div>
  );
}

export default Container;
