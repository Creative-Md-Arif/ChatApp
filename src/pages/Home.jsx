import BlockList from "../components/homeItems/BlockList"
import FriendRts from "../components/homeItems/FriendRts"
import Friends from "../components/homeItems/Friends"
import Group from "../components/homeItems/Group"
import MyGroup from "../components/homeItems/MyGroup"
import People from "../components/homeItems/People"


const Home = () => {
  const userFromLocal = JSON.parse(localStorage.getItem("user"));
  console.log("userFromLocal " , userFromLocal);
  return (
    <div className="bg-gray-800 w-screen p-4">
     <div className="flex gap-4">
      <MyGroup/>
      <Group/>
      <Friends/>
     </div>
    <div className="flex gap-4 mt-4" >
     <People/>
     <FriendRts/>
     <BlockList/>
    </div>
    </div>
  )
}

export default Home
