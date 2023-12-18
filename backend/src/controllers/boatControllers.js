const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  req.body.id = id;

  try {
    // Update the boat in the database
    const result = await tables.boat.update(
      id,
      req.body.coord_x,
      req.body.coord_y
    );

    if (result) {
      // Respond with a 204 "No Content" status code
      res.sendStatus(204);
    } else {
      // Respond with a 404 "Not Found" status code
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
