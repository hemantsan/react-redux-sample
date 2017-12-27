export function setAge(age) {
    return {
        type: "SETAGE",
        payload: age
    };
}
export function setName(name) {
    return {
        type: "SETNAME",
        payload: name
    };
}