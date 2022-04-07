import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constant/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import * as C from "./styledComments";
import { nextFeed } from "../../routers/coordinator";
import Button from "@material-ui/core/Button";
import CreateComments from "./CreateComments";
//import CreateVote from "./createVote";

const Comments = () => {
  useProtectedPage();

  const navigate = useNavigate();

  const params = useParams();

  const postComments = useRequestData(
    {},
    `${BASE_URL}/posts/${params.id}/comments`
  );
  //console.log(postComments);
  let cardComments;

  if (postComments !== {} && postComments.length) {
    cardComments = postComments.map((item) => {
      return (
        <C.ConteinerComments key={item.id}>
          <C.ItemCard>
            <p>
              <strong>Usuário:</strong> {item.username}
            </p>
            <p>{item.body}</p>
          </C.ItemCard>
        </C.ConteinerComments>
      );
    });
  }

   return (
    <C.ScreenContainer>
      <CreateComments/>
     {/* <CreateVote/> */}
      <C.BotaoContainer>
        <Button
          onClick={() => nextFeed(navigate)}
          type={"submit"}
          fullWidth
          variant={"contained"}
          color="primary"
        >
          Voltar!
        </Button>
      </C.BotaoContainer>
      {cardComments}
    </C.ScreenContainer>
  );
};
export default Comments;
