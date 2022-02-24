import { memo } from "react";
import styles from "./AutoCompleteOptions.module.css";

type AutoCompleteOptionsProps = {
  options: Array<string>;
  matchingText: string;
};

const AutoCompleteOptions = memo(
  function AutoCompleteOptions({
    options,
    matchingText,
  }: AutoCompleteOptionsProps) {
    const getOptions = () =>
      options.map((option) => (
        <li key={option} className={styles.autoCompleteOptions__options}>
          <span className={styles["autoCompleteOptions__options--matchText"]}>
            {matchingText}
          </span>
          {option.slice(matchingText.length)}
        </li>
      ));

    return matchingText && options.length ? (
      <ul className={styles.autoCompleteOptions}>{getOptions()}</ul>
    ) : null;
  },
  (prevProps, nextProps) => prevProps.options === nextProps.options
);

export default AutoCompleteOptions;
