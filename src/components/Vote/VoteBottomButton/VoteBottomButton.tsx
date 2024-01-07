import { Button } from "@chakra-ui/react";

import { VoteBottomButtonProps } from "@/types/vote";

const VoteBottomButton = ({ onClick, title }: VoteBottomButtonProps) => {
  return (
    <div>
      <Button variant="CTAButton" onClick={onClick}>
        {title}
      </Button>
    </div>
  );
};

export default VoteBottomButton;
