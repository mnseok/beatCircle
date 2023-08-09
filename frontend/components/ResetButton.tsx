import { HeaderButton, HeaderButtonWrapper } from "./BeatCircle.styles";

const ResetButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <HeaderButtonWrapper>
      <HeaderButton onClick={onClick} style={{ backgroundColor: "#F5C150" }} />
    </HeaderButtonWrapper>
  );
};
export default ResetButton;
