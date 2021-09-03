const Url = `http://localhost:3000/`;
const log = console.log;

// GET FUNCTION //

const getData = async () => {
    try {
        const response = await fetch(`${Url}`, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response.json();

    } catch (error) {
        log("THERE IS AN ERROR");
    }
}

// POST FUNCTION //

const postData = async (id) => {
    try {
        const response = await fetch(Url, {
            method: "POST",
            body: JSON.stringify(id),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();

    } catch (error) {
        log("THERE IS AN ERROR");
    }
}

// DELETE FUNCTION //

const deleteData = async (id) => {
    try {
        const response = await fetch(`${Url}${id}`, {
            method: "DELETE",
        });
        log("TASK DELETED", response);
        return response;

    } catch (error) {
        log("THERE IS AN ERROR");
    }
}