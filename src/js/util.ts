export const updateDesmosLabels = (ids: any[], value: any, state: any) : void => {
    ids.forEach(id => {
        state.objests[id].label = value;
    });
}