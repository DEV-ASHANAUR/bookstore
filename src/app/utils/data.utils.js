export const mongoReplaceIdInArray = (data) => {
  const mappedArray = data
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);
  return mappedArray;
};

export const mongoReplaceIdInObject = (data) => {
    const {_id,...rest} = {id:data._id.toString(),...data}
    return rest;

}