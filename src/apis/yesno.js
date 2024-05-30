const fetchYesNo = async (commandType, choice = "") => {
  const url = "https://yesno.wtf/api";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    data.answer = data.answer.replace("yes", "oui").replace("no", "non");

    if (commandType === "ask") {
      return `
      <p>${data.answer}</p>
      <img src="${data.image}" alt="YesNo" height="100">
      `;
    }

    if (commandType === "random") {
      return `
      <img src="${data.image}" alt="YesNo" height="100">
      `;
    }

    if (commandType === "guess") {
      if (choice === data.answer) {
        return `
        <p>Bonne réponse !</p>
        <img src="${data.image}" alt="YesNo" height="100">
        `;
      }
      return `
      <p>Raté !</p>
      `;
    }

    return "Veuillez saisir une commande valide (ask, random, guess).";
  } catch (error) {
    return "Erreur lors de la récupération des données.";
  }
};

export { fetchYesNo };
