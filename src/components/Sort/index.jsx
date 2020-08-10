import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { ReactSortable } from 'react-sortablejs';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { THEME } from '../../common/constant/theme';

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 1rem 0;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 4px 15px ${rgba('black', 0.5)};
  margin: 0 auto;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 1rem;
`;

const ItemImage = styled.img`
  width: 44px;
  height: 44px;
  padding: 2px;
  margin-right: 0.75rem;
  border-radius: 50%;
  border: 1px solid ${rgba('black', 0.05)};
`;

const ItemTitle = styled.div`
  font-family: ${THEME.font.fontFamily};
  font-size: 0.875rem;
  font-weight: 700;
  color: ${rgba('black', 0.85)};
`;

const ItemSubtitle = styled.div`
  color: ${rgba('black', 0.38)};
  font-family: ${THEME.font.fontFamily};
  font-size: 0.65rem;
`;

const ItemLikes = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${rgba('black', 0.38)};

  & > i {
    margin-right: 0.25rem;
    font-size: 1rem;
    color: #fe0f7c;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(0.5),
    },
  },
}));

export const SortableCard = () => {
  const [state, setState] = useState([
    {
      id: '1',
      userImg: 'static/user.jpg',
      title: 'Roshan',
      subtitle: 'Frontend Developer',
      likes: 13,
    },
    {
      id: '2',
      userImg: 'static/owner.jpg',
      title: 'Sukuna',
      subtitle: 'Backend Developer',
      likes: 54,
    },
    {
      id: '3',
      userImg: 'static/user.jpg',
      title: 'Alis',
      subtitle: 'Frontend Developer',
      likes: 30,
    },
    {
      id: '4',
      userImg: 'static/owner.jpg',
      title: 'Abinash',
      subtitle: 'Backend Developer',
      likes: 37,
    },
    {
      id: '5',
      userImg: 'static/user.jpg',
      title: 'Geshan',
      subtitle: 'Frontend Developer',
      likes: 65,
    },
    {
      id: '6',
      userImg: 'static/owner.jpg',
      title: 'Abhishek',
      subtitle: 'Frontend Developer',
      likes: 26,
    },
  ]);
  const classes = useStyles();

  return (
    <Card>
      <ReactSortable list={state} setList={setState}>
        {state.map((item) => (
          <Item key={item.id}>
            <ItemImage src={state.userImg} />
            <div style={{ flex: 1 }}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubtitle> {item.subtitle} </ItemSubtitle>
            </div>
            <ItemLikes className={classes.root}>
              <FavoriteIcon color='secondary' style={{ fontSize: 12 }} />
              <span> {item.likes}</span>
            </ItemLikes>
          </Item>
        ))}
      </ReactSortable>
    </Card>
  );
};
