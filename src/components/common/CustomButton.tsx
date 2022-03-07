import { Button } from '@chakra-ui/react';

type Props = Custom & Options;

type Custom = {
  children?: string | any;
};

type Options = {
  [key: string]: string | any;
};

const CustomButton = ({ children, disabled, ...rest }: Props) => {
  return (
    <Button
        colorScheme='teal'
        variant='solid'
    >
      {children}
    </Button>
  );
};

export default CustomButton;