export const updateDesmosLabels = (ids: any[], value: any, state: any) : void => {
    ids.forEach(id => {
        state.objects[id].label = value;
    });
}