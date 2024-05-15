import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("uplift.db");

// export const init = () => {
//   database.transaction((tx) => {
//     const promise = new Promise((resolve, reject) => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS programs (
//             id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//             name TEXT NOT NULL)`,
//         [],
//         () => {
//           resolve();
//         },
//         (_, error) => {
//           reject(error);
//         }
//       );
//     });
//   });
//   return promise;
// };

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS programs (
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                    name TEXT NOT NULL
                )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

//*PROGRAMS vvv
export const insertProgram = (name) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO programs (name) SELECT (?) WHERE NOT EXISTS (SELECT 1 FROM programs WHERE name = ?)`,
        [name, name],
        (_, result) => {
          console.log(result);
          const insertedId = result;
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const getPrograms = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM programs`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const deleteProgram = (id) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(`DELETE * FROM programs WHERE id = ?`, [id]),
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        };
    });
  });
  return promise;
};
//*PROGRAMS ^^^
