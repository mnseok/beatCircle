import { HeaderButtonWrapper } from "./BeatCircle.styles";

const RemoveButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <HeaderButtonWrapper>
      <button
        onClick={onClick}
        style={{
          border: "none",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "#fc5c54",
        }}
      />
    </HeaderButtonWrapper>
  );
};
export default RemoveButton;
