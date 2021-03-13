import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext';

const dispatch = useGlobalDispatchContext();
const { cursorStyles } = useGlobalStateContext();

const handleOnCursor = (cursorType) => {
  // eslint-disable-next-line no-param-reassign
  cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
  dispatch({ type: 'CURSOR_TYPE', cursorType });
};

export default handleOnCursor;
