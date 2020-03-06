import React from 'react';

export default function usePersistedState(key, defaultValue) {
  const [state, setState] = React.useState(() => {
    const persistedState =
      typeof window !== `undefined` ? localStorage.getItem(key) : null;
    return persistedState ? JSON.parse(persistedState) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    console.log('localstorage');
  }, [state, key]);
  return [state, setState];
}
