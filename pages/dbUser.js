import { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');

export const createTableAluno = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS aluno (id NULL AUTO_INCREMENT, nomeAluno TEXT, dataNascAluno TEXT, cpfAluno TEXT, diagnosticoAluno TEXT NULL, nomeEscolaAluno TEXT NULL, salaAluno TEXT, turmaAluno TEXT, tipoUser TEXT);',
      [],
      () => {
        onSuccess('Tabela criada com sucesso');
      },
      error => {
        console.log('Error occurred while creating the table:', error);
      }
    );
  });
};


