const LIST_SIZE = "500";
const LIST_LANG = "EN";

const getWordsList = async () => {
  try {
    const response = await fetch(
      `/api/v1/resources/words?lang=${LIST_LANG}&amount=${LIST_SIZE}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);

    return [];
  }
};

export default getWordsList;
