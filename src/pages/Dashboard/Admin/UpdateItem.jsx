import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { Notyf } from "notyf";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const imageHosting = import.meta.env.VITE_imageHostingKey
const imageUrl = `https://api.imgbb.com/1/upload?key=${imageHosting}`
const UpdateItem = () => {
   const {name,recipe,image,category,price,_id} = useLoaderData()
  const notyf = new Notyf({
      duration: 1000,
      position: {
        x: 'center',
        y: 'top',
      },
      types: [
        {
          type: 'success',
          background: 'green',
          icon: {
            className: 'material-icons',
            tagName: 'i',
            text: 'success'
          }
        },
        {
          type: 'success',
          background: 'green',
          duration: 2000,
          dismissible: true
        }
      ]
    })
    const axiosPublic = useAxiosPublic()
    const axiosPrivate = useAxiosSecure()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = async(data) => {
      // console.log(data)
      const imageData = {image:data.image[0]}
      const res = await axiosPublic.post(imageUrl,imageData,{
         headers: {
        'content-Type': 'multipart/form-data'
      }
      })
      if(res.data.success){
        const menuItem={
        name:data.name,
        recipe:data.recipe,
        image:res.data.data.display_url,
        category:data.category,
        price:parseFloat(data.price)
      }
      const menuRes = await axiosPrivate.patch(`/menu/${_id}`,menuItem)
      if(menuRes.data.modifiedCount > 0){
        notyf.success(`${data.name} has been updated`);
      }
     console.log(menuRes.data)
     reset()
      }
      
      // console.log(res.data)
    }
 

  return (
    <div className="mx-10 my-10">
      <SectionTitle heading="Update" subHeading="Make some delicious change"></SectionTitle>
      
       <form onSubmit={handleSubmit(onSubmit)}>
        
          <input defaultValue={name} {...register('name',{required:true})} type="text" className="input w-full " placeholder="Recipe Name" />
        <div className="flex gap-6 my-6">
          <select defaultValue={category} {...register('category',{required:true})} placeholder="Select a Category" className="select w-full">
  <option disabled={true}>Category</option>
  <option>Salads</option>
  <option>Pizzas</option>
  <option>Soups</option>
  <option>Deserts</option>
  <option>Drinks</option>
</select>
<input defaultValue={price} {...register('price',{required:true})}  type="text" placeholder="Price*" className="input w-full" />
      
        </div>
         <textarea defaultValue={recipe} {...register('recipe',{required:true})} className="textarea h-24 w-full" placeholder="Recipe Details"></textarea>
        <input {...register('image',{required:true})}  type="file" className="file-input file-input-ghost"  />
       <button className="btn my-5 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 flex flex-col">Update Item</button>
    </form>
    </div>
  );
};

export default UpdateItem;