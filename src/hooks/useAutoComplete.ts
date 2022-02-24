import { useState, useEffect, useCallback, useRef } from "react";
import getWordsList from "../api/getWordsList";

export default function useAutoComplete(initText = "") {
  const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [suggestions, setSuggestions] = useState<Array<string>>([]);
  const [words, setWords] = useState<Array<string>>([]);

  const filterWords = useCallback((filter: string, words: Array<string>) => {
    return words.filter((word) => word.startsWith(filter));
  }, []);

  const autoComplete = useCallback(
    async (text: string) => {
      if (text) {
        debounceTimeoutRef.current && clearTimeout(debounceTimeoutRef.current);

        debounceTimeoutRef.current = setTimeout(() => {
          const possibleWords = filterWords(text, words);
          setSuggestions(possibleWords);
        }, 200);
      } else {
        setSuggestions([]);
      }
    },
    [filterWords, words]
  );

  useEffect(() => {
    const initWordsList = async () => {
      const wordsList = await getWordsList();
      setWords(wordsList);
    };

    initWordsList();
  }, []);

  useEffect(() => {
    autoComplete(initText);
  }, [autoComplete, initText]);

  return [suggestions, autoComplete] as const;
}
