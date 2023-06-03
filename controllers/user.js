import User from "../models/User.js";

export const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ user });

  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({ users });

  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

export const getUser = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ msg: `No user with id: ${userId}` });
    }

    res.status(201).json({ user });

  } catch (error) {
    res.status(500).json({ msg: error });
  }
}
