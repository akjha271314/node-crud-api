import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUser = (req, res) => {

    res.send(users);

}

export const createUser = (req, res) => {

    const user = req.body;

    users.push({ ... user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);
}

export const getSpecificUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);
}

export const addUser = (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    const userToBeUpdated = users.find((user) => user.id === id);

    if(firstName) userToBeUpdated.firstName = firstName;

    if(lastName) userToBeUpdated.lastName = lastName;

    if(age) userToBeUpdated.age = age;

    res.send(`User with id ${id} updated successfully`);


}