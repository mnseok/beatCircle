import { HeaderButton, HeaderButtonWrapper } from "./BeatCircle.styles";

const RemoveButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <HeaderButtonWrapper>
      <HeaderButton onClick={onClick} style={{ backgroundColor: "#fc5c54" }} />
    </HeaderButtonWrapper>
  );
};
export default RemoveButton;
