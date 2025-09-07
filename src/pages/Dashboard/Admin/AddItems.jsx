import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Notyf } from "notyf";



const imageHosting = import.meta.env.VITE_imageHostingKey
const imageUrl = `https://api.imgbb.com/1/upload?key=${imageHosting}`
const AddItems = () => {
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
    // //console.log(data)
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
    const menuRes =await axiosPrivate.post("/menu",menuItem)
    if(menuRes.data.insertedId){
      notyf.success(`${data.name} has been added`);
    }
   //console.log(menuRes.data)
   reset()
    }
    
    // //console.log(res.data)
  }
  return (
    <div className="mx-10 my-10">
      <SectionTitle heading="add items" subHeading="What's new?"></SectionTitle>
       <form onSubmit={handleSubmit(onSubmit)}>
        
          <input {...register('name',{required:true})} type="text" className="input w-full " placeholder="Recipe Name" />
        <div className="flex gap-6 my-6">
          <select {...register('category',{required:true})}  defaultValue="Pick a color" className="select w-full">
  <option disabled={true}>Category</option>
  <option>Salads</option>
  <option>Pizzas</option>
  <option>Soups</option>
  <option>Deserts</option>
  <option>Drinks</option>
</select>
<input {...register('price',{required:true})}  type="text" placeholder="Price*" className="input w-full" />
      
        </div>
         <textarea {...register('recipe',{required:true})} className="textarea h-24 w-full" placeholder="Recipe Details"></textarea>
        <input {...register('image',{required:true})}  type="file" className="file-input file-input-ghost" />
       <button className="btn my-5 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 flex flex-col">Add Item</button>
    </form>
    </div>
  );
};

export default AddItems;