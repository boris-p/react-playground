// and example middlware which recieves all actions and passes them forawrd without doing anything
export default store => next => async action => {
  return next(action)
}
