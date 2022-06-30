function fetchJson(url: string) {
    return fetch(url).then(function (response) {
        return response.json();
    });
}

export default async function getAllUsuarios(page: number) {
    try {
        let allUsers = await fetchJson(`https://reqres.in/api/users?page=${page}`);
        return allUsers.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getAllRecords() {
    try {
        let allRecords = await fetchJson(`https://reqres.in/api/users`);
        return allRecords.total;
    } catch (error) {
        console.log(error);
    }
}

export async function getTotalPerPage() {
    try {
        let totalPerPage = await fetchJson(`https://reqres.in/api/users`);
        return totalPerPage.per_page;
    } catch (error) {
        console.log(error);
    }
}
