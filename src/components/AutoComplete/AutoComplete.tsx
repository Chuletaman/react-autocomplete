import { useState, useEffect, ChangeEventHandler } from "react";
import useAutoComplete from "../../hooks/useAutoComplete";
import AutoCompleteInput from "./components/AutoCompleteInput";
import AutoCompleteOptions from "./components/AutoCompleteOptions";
import styles from "./AutoComplete.module.css";

export default function AutoComplete() {
  const [inputText, setInputText] = useState("");
  const [suggestions, autoComplete] = useAutoComplete("");

  useEffect(() => {
    autoComplete(inputText);
  }, [autoComplete, inputText]);

  const normalizeText = (text: string) => text.toLowerCase();

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value;
    setInputText(normalizeText(inputValue));
  };

  return (
    <section className={styles.autoComplete}>
      <h2>Auto complete component!</h2>
      <AutoCompleteInput value={inputText} onChange={inputChangeHandler} />
      <AutoCompleteOptions matchingText={inputText} options={suggestions} />
    </section>
  );
}
