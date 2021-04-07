import '../CSS/SubmitButton.css'

const SubmitButton = ({ handleSubmit }) => {
  return (
    <button type="submit" onClick={handleSubmit} className="SubmitButton">
      Submit
    </button>
  );
};

export default SubmitButton;
