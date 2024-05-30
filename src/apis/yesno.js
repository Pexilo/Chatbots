const fetchYesNo = async () => {
  const url = "https://yesno.wtf/api";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    data.answer = data.answer.replace("yes", "oui").replace("no", "non");

    return `
      <p>${data.answer}</p>
      <img src="${data.image}" alt="YesNo" height="100">
      `;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return "Erreur lors de la récupération des données.";
  }
};

export { fetchYesNo };
