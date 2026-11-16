export const create = (_req, res) => res.json({ message: "create handler" });
export const findAll = (_req, res) => res.json({ message: "findAll handler" });
export const findOne = (_req, res) => res.json({ message: "findOne handler" });
export const update = (_req, res) => res.json({ message: "update handler" });
export const remove = (_req, res) => res.json({ message: "delete handler" });
export const deleteAll = (_req, res) =>
  res.json({ message: "deleteAll handler" });
export const findAllFavorite = (_req, res) =>
  res.json({ message: "findAllFavorite handler" });
