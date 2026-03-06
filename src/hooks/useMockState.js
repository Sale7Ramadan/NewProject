import { useMemo } from 'react';

function useMockState(seed = 'ready') {
  return useMemo(() => ({
    isLoading: seed === 'loading',
    isError: seed === 'error',
  }), [seed]);
}

export default useMockState;
