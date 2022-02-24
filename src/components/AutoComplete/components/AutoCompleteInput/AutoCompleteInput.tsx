import { ChangeEventHandler, memo } from "react";
import styles from "./AutoCompleteInput.module.css";

type AutoCompleteInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const AutoCompleteInput = memo(function AutoCompleteInput({
  value,
  onChange,
}: AutoCompleteInputProps) {
  return (
    <input
      className={styles.autoCompleteInput}
      onChange={onChange}
      value={value}
      placeholder="Let me auto complete you"
    />
  );
});

export default AutoCompleteInput;
