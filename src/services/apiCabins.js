import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log("ERROR", error);
    throw new Error("Cabins couldn't be loaded");
  }
  return data;
}

export async function createEditCabin(cabin, id) {
  const hasImgPath = cabin.image?.toString().startsWith(supabaseUrl);
  /*create image url*/
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "");
  const imagePath = hasImgPath
    ? cabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  /*create cabin*/
  let query = supabase.from("cabins");
  if (!id) {
    query = query.insert([{ ...cabin, image: imagePath }]);
  }
  if (id) {
    query = query.update({ ...cabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();
  if (error) {
    console.log("ERROR", error);
    throw new Error("Cabins couldn't be loaded");
  }

  /*upload image*/

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image);

  if (storageError) {
    /*await supabase.from("cabins").delete().eq("id", data.id);*/
    console.log(storageError);
    throw new Error("Cabin wasn't created because image upload error");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log("ERROR", error);
    throw new Error("Cabin couldn't be Deleted");
  }
  return data;
}
