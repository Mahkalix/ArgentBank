const connectToDatabase = require("./database");

exports.handler = async (event, context) => {
  try {
    // Établissez une connexion à la base de données
    await connectToDatabase();

    // Effectuez des opérations sur la base de données (par exemple, récupérez des données)
    const result = await SomeModel.find(); // Remplacez SomeModel par votre modèle MongoDB

    // Renvoyez la réponse avec les données de la base de données
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error(`Database Error: ${error}`);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erreur de base de données" }),
    };
  }
};
