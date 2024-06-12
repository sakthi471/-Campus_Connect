import { auth } from "@/lib/auth"

 
export default async function UserAvatar() {

  const session= await auth();

  console.log(session);
 
  return (
    <div>
      <h1>Secure</h1>
    </div>
  )
}