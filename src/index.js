import { useLayoutEffect, useState, useCallback } from 'react';

const useMediaQueries = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex(({ matches }) => matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [defaultValue, mediaQueryLists, values]);

  const [value, setValue] = useState(getValue);

  useLayoutEffect(
    () => {
      const handler = () => setValue(getValue);
      mediaQueryLists.forEach((mediaQuery) => mediaQuery.addListener(handler));
      return () => mediaQueryLists.forEach((mediaQuery) => mediaQuery.removeListener(handler));
    },
    [getValue, mediaQueryLists],
  );

  return value;
};

export default useMediaQueries;
