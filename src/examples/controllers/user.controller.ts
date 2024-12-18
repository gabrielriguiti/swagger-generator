import {Request, Response} from 'express';
import {UserType} from '../types/user.type';

// Simulando uma base de dados em memória
let users: UserType[] = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
];

// Função para listar todos os usuários
export const getUsers = (req: Request, res: Response): void => {
    res.status(200).json(users);
};

// Função para criar um novo usuário
export const createUser = (req: Request, res: Response): void => {
    const {name} = req.body;
    if (!name) {
        res.status(400).json({error: 'Name is required'});
        return;
    }

    const newUser: UserType = {
        id: users.length + 1,
        name,
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

// Função para buscar um usuário por ID
export const getUserById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    const user = users.find((u) => u.id === id);

    if (!user) {
        res.status(404).json({error: 'User not found'});
        return;
    }

    res.status(200).json(user);
};

// Função para atualizar um usuário
export const updateUser = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    const {name} = req.body;

    const user = users.find((u) => u.id === id);

    if (!user) {
        res.status(404).json({error: 'User not found'});
        return;
    }

    user.name = name || user.name;
    res.status(200).json(user);
};

// Função para deletar um usuário
export const deleteUser = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id, 10);
    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
        res.status(404).json({error: 'User not found'});
        return;
    }

    users.splice(index, 1);
    res.status(204).send(); // No Content
};
