export const queryParamsToObject = (queryString: string): Object => {
    return Object.fromEntries(new URLSearchParams(queryString).entries());
}