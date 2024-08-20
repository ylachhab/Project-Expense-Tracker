import {useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  description: z.string().min(3, "Description should be at least 3 characters."),
  amount: z.number({ invalid_type_error: "Amount is required." }).min(1),
  category: z.enum(["Groceries", "Utilities", "Entertainment"], {
    errorMap: () => ({message: "Category is required."})
  }),
})

type product = z.infer<typeof Schema>;

interface Props {
  onSubmit: (data: product) => void,
}

const Product = ({onSubmit}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<product>({
    resolver: zodResolver(Schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => {
      onSubmit(data)
      reset();
    })} className="mb-3">
      <div className="mb-3">
        <label htmlFor="description" className="form-lable">
          Description
        </label>
        <input id="description" type="text" className="form-control"
        {...register('description')} />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-lable">
          Amount
        </label>
        <input id="amount" type="number" className="form-control"
        {...register('amount', {valueAsNumber: true})} />
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-lable">
          Category
        </label>
        <select id="category" className="form-select" aria-label="Default select example"
         {...register('category')}>
          <option value=""></option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Product;
