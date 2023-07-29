import styles from "@/styles/Create.module.css";
import { useForm } from "react-hook-form";

const CreateNews = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("news successfully inserted");
          reset();
        }
      });
  };
  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        name="form_item_path"
        layout="vertical"
        style={{
          width: "50%",
          margin: "50px auto",
        }}
      >
        <input
          {...register("id")}
          placeholder="id"
          style={{ margin: "10px 0", width: "100%" }}
        />{" "}
        <input
          {...register("description")}
          placeholder="description"
          style={{ margin: "10px 0", width: "100%" }}
        />
        <input
          {...register("author")}
          placeholder="author"
          style={{ margin: "10px 0", width: "100%" }}
        />
        <input
          {...register("category")}
          placeholder="category"
          style={{ margin: "10px 0", width: "100%" }}
        />
        <input
          {...register("release_date")}
          placeholder="Release Date"
          type="date"
          style={{ margin: "10px 0", width: "100%" }}
        />
        <input
          type="number"
          {...register("comment_count")}
          placeholder="Number of comments"
          style={{ margin: "10px 0", width: "100%" }}
        />
        <input
          {...register("image_url")}
          placeholder="Image URL"
          style={{ margin: "10px 0", width: "100%" }}
        />
        <input
          type="submit"
          value="Create news"
          style={{ margin: "10px 0", width: "100%" }}
        />
      </form>
    </div>
  );
};

export default CreateNews;
