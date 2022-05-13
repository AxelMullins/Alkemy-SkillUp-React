import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const PrevAndNext = ({ handlePrev, handleNext, page }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "60px",
        alignItems: "center",
        padding: "10px",
        marginBottom: "60px",
      }}
    >
      <button
        onClick={handlePrev}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: page === 1 ? "grey" : "black",
        }}
      >
        <BsArrowLeftCircle size="30px" />
      </button>
      <p>Page {page}</p>
      <button
        onClick={handleNext}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: page === 33526 ? "grey" : "black",
        }}
      >
        <BsArrowRightCircle size="30px" />
      </button>
    </div>
  );
};

export default PrevAndNext;
