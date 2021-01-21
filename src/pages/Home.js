import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Articles } from "../components/Articles/index";
import { CONTAINER_WIDTH } from "../common/constant/theme";
import { SideBar } from "../components/Sidebar";
import { Spinner } from "../common/ui";

const OuterContainer = styled.div`
  display: flex;
  max-width: ${CONTAINER_WIDTH.xlg};
  width: 100%;
  box-sizing: border-box;
  justify-content: space-around;
  margin: 0 auto;

  @media (max-width: 600px) {
    display: block;
    width: 100%;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  padding: 40px;

  @media (max-width: 600px) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin: 0 auto;
  }
`;

const SideBarWrapper = styled.div`
  display: flex;
  box-sizing: border-box;

  @media (max-width: 600px) {
    display: block;
    box-sizing: border-box;
  }
`;

export const Home = () => {
  const [articles, setArticle] = useState([]);
  const [users, setUser] = useState({});

  const fetchData = async () => {
    const article = await fetch(
      "https://5ef321ba25da2f00162289f6.mockapi.io/articles?page=1&limit=5"
    ).then((response) => response.json());
    const user = await fetch(
      "https://5ef321ba25da2f00162289f6.mockapi.io/user/1"
    ).then((response) => response.json());

    setArticle(article);
    setUser(user);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <OuterContainer>
      <Container>
        {!articles.length ? (
          <Spinner />
        ) : (
          articles.map((article) => (
            <Articles key={article.id} articles={article} />
          ))
        )}
      </Container>
      <SideBarWrapper> {users && <SideBar user={users} />}</SideBarWrapper>

    </OuterContainer>
  );
};
