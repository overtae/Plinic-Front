import PaginationLib from 'react-js-pagination';
import styled from 'styled-components';

function Pagination({ activePage, totalItemsCount, handlePageChange }) {
  return (
    <PaginationBox>
      <PaginationLib
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        prevPageText="〈"
        nextPageText="〉 "
        hideFirstLastPages={true}
      />
    </PaginationBox>
  );
}

export default Pagination;

const theme = {
  NAVY: ({ theme }) => theme.color.navy,
  WHITE: ({ theme }) => theme.color.white,
  GRAY: ({ theme }) => theme.color.gray,
  FONT: [({ theme }) => theme.font.size['14'], ({ theme }) => theme.font.weight['normal']],
  BOLD: ({ theme }) => theme.font.weight['bold'],
  CENTER: ({ theme }) => theme.align.flexCenter,
  CENTER_COLUMN: ({ theme }) => theme.align.flexCenterColumn,
};

const PaginationBox = styled.div`
  ${Theme.centerCol}

  ul {
    list-style: none;
    user-select: none;
    padding: 0;
    ${Theme.center}
    gap: 5px;

    li {
      display: inline-block;
      width: 25px;
      height: 25px;
      ${Theme.center}
      border-radius: 50%;
      cursor: pointer;
      transition: ease 0.3s;

      a {
        color: ${Theme.navy};
        ${Theme.font};
        text-decoration: none;
      }

      :last-child > a,
      :first-child > a {
        font-weight: 900;
      }

      :hover:not(.disabled, .active) > a {
        ${Theme.boldfont};
      }

      + .active {
        background: ${Theme.navy};

        a {
          color: ${Theme.white};
        }
      }

      &.disabled {
        cursor: default;

        a {
          color: ${Theme.gray};
          cursor: default;
        }
      }
    }
  }
`;
