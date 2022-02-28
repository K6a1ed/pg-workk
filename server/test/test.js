const connection = require('../database/config/connection');
const { dbBuild, dbBuildata } = require('../database/config/build');
const getData = require('../database/queries/getData');
const addUsers = require('../database/queries/postData');

test("jest is working", () => {
    expect(1).toBe(1);
});

beforeEach(() => {
    return dbBuild();
});

beforeEach(() => {
    return dbBuildata();
});

afterAll(() => {
    return connection.end();
});

test("Get user", () => {
    const expected = { id: 1, name: 'Khaled', location: 'Gaza' };
    return getData()
        .then(data => {
            expect(data.rows[0]).toEqual(expected);
        });
});

test("Insert user", () => {
    const name = 'test user';
    const location = 'test location';
    return addUsers(name, location)
        .then(data => {
            console.log(data.rows);
            expect(data.rows[0].name).toEqual(name);
            expect(data.rows[0].location).toEqual(location);
        });
});