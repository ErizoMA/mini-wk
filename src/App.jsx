/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Container from "./Container";
import Header from "./Header";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { getProperties } from "./services";

function App() {
  const [id, setId] = useState(1);
  const [value, setValue] = useState("0");

  function handleClick(e) {
    setId(id + 1);
  }

  async function handleSearch(e) {
    if (id > 6) return;
    const data = await getProperties("", id);
    if (data !== "Not Found") return setValue(data.value);
    const dato = await getProperties("_alternative", id);
    if (dato !== "Not Found") return setValue(dato.value);
  }

  return (
    <div
      css={css`
        padding: 0;
        box-sizing: border-box;
        margin: 0 auto;
        width: 780px;
        border-radius: 8px;
        box-shadow: 6px 4px 20px 0px;
        margin-top: 100px;
        overflow: hidden;
      `}
    >
      <Header />
      <IconButton onClick={handleClick}>
        <Container
          title="Increment property id"
          title2="Current property id: "
          id={id}
        >
          <AddIcon />
        </Container>
      </IconButton>
      <IconButton onClick={handleSearch}>
        <Container title="Update estimated value through API">
          <UpdateIcon />
        </Container>
      </IconButton>
      <IconButton>
        <Container title="Estimated value $ " value={value}>
          <AttachMoneyIcon />
        </Container>
      </IconButton>
    </div>
  );
}

export default App;
