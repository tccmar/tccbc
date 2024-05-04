import { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');

export const createTableUsuario = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS usuario (id NULL AUTO_INCREMENT, nome TEXT NULL, email TEXT NULL, telefone TEXT NULL, senha TEXT NULL);',
      [],
      () => {
        console.log('Tabela criada com sucesso!'); // Chamando o callback de sucesso
      },
      (error) => {
        console.log('Error occurred while creating the table:', error);
      }
    );
  });
};

export const insertUser = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO usuario (nome, telefone, email, senha) VALUES (?, ?, ?, ?, ?, ?);',
      [nome, cpf, dataNasc, telefone, email, senha],
      (_, result) => {
        setListaInfo([...listaInfo, { nome, telefone, email, senha }]);
        showSnackbar('Usuário inserido com sucesso');
      },
      (error) => {
        console.log('Error occurred while inserting a user:', error);
      }
    );
  });
};

export const getAllUsers = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM usuario;',
      [],
      (_, result) => {
        const data = [];
        for (let i = 0; i < result.rows.length; i++) {
          data.push(result.rows.item(i));
        }
        setListaInfo(data);
        showSnackbar('Todos os usuários foram recuperados');
      },
      (error) => {
        console.log('Error occurred while fetching users:', error);
      }
    );
  });
};

export const updateUser = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'UPDATE usuario SET senha = ?, email = ?, telefone = ? WHERE nome = ?;',
      [senha, email, telefone, nome],
      (_, result) => {
        getAllUsers();
        showSnackbar('Usuário atualizado com sucesso');
      },
      (error) => {
        console.log('Error occurred while updating a user:', error);
      }
    );
  });
};

export const deleteUser = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM usuario WHERE nome = ?;',
      [cpf],
      (_, result) => {
        getAllUsers();
        showSnackbar('Usuário excluído com sucesso');
      },
      (error) => {
        console.log('Error occurred while deleting a user:', error);
      }
    );
  });
};
