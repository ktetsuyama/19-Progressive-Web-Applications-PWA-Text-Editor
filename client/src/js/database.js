import { openDB } from "idb";

const initdb = async () =>
	openDB("jate", 1, {
		upgrade(db) {
			if (db.objectStoreNames.contains("jate")) {
				console.log("jate database already exists");
				return;
			}
			db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
			console.log("jate database created");
		},
	});

// A method that accepts some content and adds it to the database
export const putDb = async (content) => {
	console.log("PUT to the database");
	const todosDb = await openDB("todos", 1);
	const tx = todosDb.transaction("todo", "readwrite");
	const store = tx.objectStore("todos");
	const request = store.put({ id: id, todo: content });
	const result = await request;
	console.log("Data saved to the database", result);
};

// A method that gets all the content from the database
export const getDb = async () => {
	console.log("GET all from the database");
	const todosDb = await openDB("todos", 1);
	const tx = todosDb.transaction("todos", "readonly");
	const store = tx.objectStore("todos");
	const request = store.getAll();
	const result = await request;
	console.log("result.value", result);
	return result;
};

initdb();
