import { styled } from "styled-components";

export const elLabelText = styled.label`
  &[data-size='small'] {
    font-size: var(--font-size-xs);
  }
  &[data-size='medium'] {
    font-size: var(--font-size-sm);
  }
  &[data-variant='soft'] {
    color: var(--neutral-500);
  }
  &[data-variant='strong'] {
    color: var(--text-primary);
  }
`;