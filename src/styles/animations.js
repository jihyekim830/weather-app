import { keyframes } from 'styled-components';

export const loading = keyframes`
    0% {
        filter: invert(0%);
    }

    50% {
        filter: invert(50%);
    }

    100% {
        filter: invert(0%);
    }
`;
