import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Thumbnail from '../../components/thumbnail/Thumbnail';
import Pagination from '../../components/pagination/Pagination';
import { posts } from '../../components/pagination/posts';

function PostList() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    setData(posts);
  }, []);

  return (
    <Wrapper>
      <NoticeContainer>
        <div>[공지] 플리닉 업데이트 공지입니다.</div>
        <div>관리자</div>
        <div>2022.09.15</div>
      </NoticeContainer>
      <Posts>
        {data &&
          data.slice(8 * (activePage - 1), 8 * (activePage - 1) + 8).map(d => (
            <PostBox key={d.id}>
              <Thumbnail
                post
                img={'http://jolleyonmovies.files.wordpress.com/2014/01/frozen-elsa.jpg'}
                likes={d.likes}
                likeState={d.likeState}
                size={250}
              />
              <TextBox>
                <div>{d.title}</div>
                <div>{d.nickname}</div>
              </TextBox>
            </PostBox>
          ))}
      </Posts>
      <Pagination activePage={activePage} totalItemsCount={data.length - 1} handlePageChange={handlePageChange} />
    </Wrapper>
  );
}

export default PostList;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const DANGER = ({ theme }) => theme.color.warning;

const Wrapper = styled.div`
  width: 1200px;
  height: calc(100vh - 60px);
  margin-top: 32px;
  ${FLEX_CENTER_COLUMN}
  justify-content: flex-start;
  gap: 32px;
`;

const NoticeContainer = styled.div`
  width: 100%;
  height: 44px;
  padding: 0 32px;

  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  column-gap: 24px;
  align-items: stretch;

  background: #ffe2e2;
  border-radius: 10px;

  div {
    text-align: center;
    line-height: 44px;
    cursor: pointer;
    user-select: none;

    &:first-child {
      color: ${DANGER};
      text-align: left;
    }

    &:last-child {
      text-align: right;
    }
  }
`;

const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
`;

const PostBox = styled.div`
  flex-basis: 25%;
  ${FLEX_CENTER_COLUMN}
  width: 250px;
  gap: 12px;
  cursor: pointer;
  user-select: none;
`;

const TextBox = styled.div`
  ${FLEX_CENTER_COLUMN}

  div:first-child {
    font-size: 16px;
  }
  div:last-child {
    font-size: 14px;
  }
`;
