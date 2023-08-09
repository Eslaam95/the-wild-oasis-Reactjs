import supabase, { supabaseUrl } from "./supabase";

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) {
    console.log("ERROR LOGGING IN");
    throw new Error(error.message);
  }

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log("ERROR LOGGING IN");
    throw new Error(error.message);
  }

  return data;
}

export async function getcurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
export async function updatecurrentuser({ password, fullName, avatar }) {
  /*update pw OR  name*/
  let updatedata;
  if (password) updatedata = { password };
  if (fullName) updatedata = { data: { fullName } };
  const { data, error } = await supabase.auth.updateUser(updatedata);
  if (error) throw new Error(error.message);

  if (!avatar) return data;
  /*upload avatar*/
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  /*update avatar*/

  const { data: updatedUser, error: updateuserError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });
  if (updateuserError) throw new Error(updateuserError.message);
  return updatedUser;
}
