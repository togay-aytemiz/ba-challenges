function LabeledInput({ id, label, ...delegated }) {
  return (
    <label htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      {...delegated}
    />
  );
}





export default LabeledInput;