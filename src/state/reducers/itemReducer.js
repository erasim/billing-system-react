const initialState = {
  itemRFullList: {},
  itemListLoading: false,
  isItemLoadingFail: false,
  selectedItem: {},
  selectedItemLoading: false,
  isSelectedItemLoadingFail: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEM_LIST_LOADING":
      return {
        ...state,
        isItemLoadingFail: false,
        itemListLoading: true,
      };
    case "GET_ITEM_LIST_FAIL":
      return {
        ...state,
        isItemLoadingFail: true,
        itemListLoading: false,
      };
    case "GET_ITEM_LIST_SUCCESS":
      return {
        ...state,
        isItemLoadingFail: false,
        itemListLoading: false,
        itemFullList: action.payload,
      };

    case "GET_SELECTED_ITEM_LOADING":
      return {
        ...state,
        selectedUser: {},
        selectedUserLoading: true,
        isSelectedUserLoadingFail: false,
      };
    case "GET_SELECTED_USER_FAIL":
      return {
        ...state,
        selectedUser: {},
        selectedUserLoading: false,
        isSelectedUserLoadingFail: true,
      };
    case "GET_SELECTED_ITEM_SUCCESS":
      return {
        ...state,
        selectedUser: action.payload,
        selectedUserLoading: false,
        isSelectedUserLoadingFail: false,
      };
    default:
      return { ...state };
  }
};
export default reducer;
