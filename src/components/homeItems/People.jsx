/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import PeopleItems from "./PeopleItems";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const People = () => {
  const db = getDatabase();
  let user = useSelector((state) => state.userSlice.user);
  const [peopleList, setPeopleList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const starCountRef = ref(db, "/user");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key !== user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
        setPeopleList(arr);
        setLoading(false);
      });
    });
  }, []);

  // console.log("people list", peopleList);

  return (
    <div className="mygroupitems w-1/3 h-[505px] bg-gray-700 px-4 rounded-md">
      <div className=" sticky top-0">
        <div className="flex justify-between items-center bg-gray-700 pt-4">
          <h1 className=" text-xl font-primary font-semibold text-white">
            People
          </h1>
          <MdMoreVert className="text-white text-xl" />
        </div>
        <div className=" bg-gray-700  py-4 pl-4 flex items-center border-b-[1px]">
          <FaSearch className="text-white" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 w-full outline-none pl-4 placeholder:text-white"
          />
        </div>
      </div>
      <div className="">
        {loading ? (
          <div className="border border-blue-300 shadow rounded-md mt-5 p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          peopleList.map((item) => (
            <PeopleItems userData={item} key={item.key} />
          ))
        )}
      </div>
    </div>
  );
};

export default People;
