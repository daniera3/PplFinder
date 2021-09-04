import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch,useFavoritesFetch} from "hooks";
import * as S from "./style";




const Home = () => {
  const { users, isLoading, fetchUsersAdd } = usePeopleFetch();
  const {favorites,setFavorits} = useFavoritesFetch()
  const handleScroll= e =>{
      if (e.target.scrollHeight-e.target.scrollTop === e.target.clientHeight)
      {
        fetchUsersAdd();
      }
      
  }

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} favorites={favorites} setFavorits={setFavorits} handleScroll={handleScroll} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
