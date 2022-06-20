import { searchUser } from "../repositories/usersRepository.js";

export async function search(req, res) {
    const { user } = req.params;

    if (!user) {
        res.status(400).send({ message: "User is required" });
        return;
    }

    try {
        const result = await searchUser(user);

        if (result.rows.length === 0) {
            res.status(404).send({ message: "User not found" });
            return;
        }
        res.status(200).send(result.rows);

    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}