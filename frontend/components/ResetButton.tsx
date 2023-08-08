import { HeaderButtonWrapper } from "./BeatCircle.styles";

const ResetButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <HeaderButtonWrapper>
      <button
        onClick={onClick}
        style={{
          border: "none",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "#F5C150",
        }}
      />
    </HeaderButtonWrapper>
  );
};
export default ResetButton;
