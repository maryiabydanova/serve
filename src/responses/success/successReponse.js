const successResponse = (data) => {
  return {
    status: "success",
    data,
  };
};

const makeSuccessResponseGloballyAccessible = () => {
  global.successResponse = successResponse;
};

export { successResponse, makeSuccessResponseGloballyAccessible };
