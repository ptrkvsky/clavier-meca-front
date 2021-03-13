import styled from '@emotion/styled';
import fonts from '../../global/fonts';
import mediaQueries from '../../global/mediaQueries';

const Section = styled('section')` 
    .table-desc{
        ${mediaQueries.mobile}{
            padding: 0 8px;
        }
    }
`;

const TableWrapper = styled('div')` 
    ${mediaQueries.mobile}{
        max-width: 375px;
        overflow-x: auto;
        margin: 48px 0;
    }
    ${mediaQueries.miniMobile}{
        max-width: 360px;
    }
`;

const Table = styled('table')`
    border-collapse: collapse;
    width: 100%;
    margin: 114px 0;
    ${mediaQueries.mobile}{
        margin: 0;
    }
    thead {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.revert};
        font-size: 24px;
        font-family: ${fonts.title};
        text-transform: uppercase;
        th {
            height: 52px;
        }
        .pos {
            padding: 0 35px;
        }
    }
    tbody {
    tr {
        &:nth-of-type(odd) {
            background-color: ${(props) => props.theme.colors.border};
        }
        &:nth-of-type(1) {
            .pos {
                font-size: 36px;
                color: ${(props) => props.theme.colors.primary};
            }
        }
        &:nth-of-type(2) {
            .pos {
                font-size: 34px;
            }
        }
    }
    .pos {
        font-size: 32px;
        font-family: ${fonts.title};
        .marker {
        font-size: 24px;
        }
    }
    .cell {
        text-align: center;
    }
    .pos {
    }
    .name {
        font-size: 24px;
        font-family: ${fonts.title};
    }
    .photo {
        font-size: 0;
    }
    .price {
        font-size: 24px;
        font-family: ${fonts.light};
        .currency {
        font-size: 18px;
        }
    }
    }
`;

export { TableWrapper, Table, Section };
