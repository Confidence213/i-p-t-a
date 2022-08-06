import { useAppSelector } from "../../hooks/redux";

import { ErrorBlockStyled, ErrorMessage, ErrorBlockReloadButton } from "./error-block-styled";

const ErrorBlock = () => {
  const { error } = useAppSelector(state => state.ticketReducer);

  const reloadButtonClickHandler = () => {
    window.location.reload();
  };

  return (
    <ErrorBlockStyled>
      <ErrorMessage>{error}</ErrorMessage>
      <ErrorBlockReloadButton onClick={reloadButtonClickHandler}>Reload page</ErrorBlockReloadButton>
    </ErrorBlockStyled>
  );
};

export default ErrorBlock;
