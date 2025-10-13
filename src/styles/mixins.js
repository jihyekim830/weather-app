import { css } from 'styled-components';

export function flexMixin({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap = 0,
}) {
  return css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `;
}

export function fontMixin({ size = '1rem', weight = 'normal' }) {
  return css`
    font-size: ${size};
    font-weight: ${weight};
  `;
}
