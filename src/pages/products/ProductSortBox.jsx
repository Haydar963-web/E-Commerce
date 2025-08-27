const ProductSortBox = ({ setSortItem, sortItem, setCurrentPage }) => {
  // On Change Handler
  const onChangeHandler = (e) => {
    setSortItem(e.target.id);
    setCurrentPage(1);
  };

  return (
    <div className="product-sort-box">
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          value={sortItem}
          type="radio"
          name="sort"
          id="noSort"
        />
        <label htmlFor="noSort">بدون ترتیب</label>
      </div>
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          value={sortItem}
          type="radio"
          name="sort"
          id="low"
        />
        <label htmlFor="low"> من الأرخص الی الأغلى</label>
      </div>
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          value={sortItem}
          type="radio"
          name="sort"
          id="high"
        />
        <label htmlFor="high"> من الأغلى الی الأرخص</label>
      </div>
    </div>
  );
};

export default ProductSortBox;
