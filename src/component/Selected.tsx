interface Props {
  onSelectedCategory: (category: string) => void;
}

const Selected = ({ onSelectedCategory }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(event) => onSelectedCategory(event.target.value)}
      >
        <option value="All category">All category</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default Selected;
