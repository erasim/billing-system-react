import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCretors } from "../state/index";

const ItemList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.items.itemListLoading);
  const isError = useSelector((state) => state.items.isItemLoadingFail);
  const itemFullList = useSelector((state) => state.items.itemFullList);
  useEffect(() => {
    dispatch(actionCretors.getitemList());
  }, []);
  return (
    <div>
      <h1>Item List</h1>
      <div className="itemsList">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        ) : isError ? (
          "something went wrong"
        ) : (
          itemFullList &&
          itemFullList.map((el) => (
            <div className="card text-white bg-danger mb-3" key={el.id}>
              <div className="card-header">Item No-{el.id}</div>
              <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;
