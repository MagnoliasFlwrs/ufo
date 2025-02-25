import { Button } from "@mui/material";

export const BaseSelectButton = ({ onClick, children }) => {
  return (
    <Button variant='contained' fullWidth onClick={onClick} className='base-select-button'>
      {children}
    </Button>
  );
};
