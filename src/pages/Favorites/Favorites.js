import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import {useFavoritesFetch } from "hooks";
import * as S from "./style";

const Favorites = () => {
  const {favorites,setFavorits} = useFavoritesFetch()

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <UserList users={favorites??[]} isLoading={false} favorites={favorites??[]} setFavorits={setFavorits}/>
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
