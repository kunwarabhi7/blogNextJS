import Link from "next/link";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { doc, deleteDoc } from "firebase/firestore";
import { auth, db, storage } from "@/utils/firebase";
import { deleteObject, ref } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";

function BlogTemplate({
  title,
  content,
  imageUrl,
  createdAt,
  id,
  createdBy,
  userId,
}) {
  const [user] = useAuthState(auth);

  const deleteDocument = async () => {
    try {
      await deleteDoc(doc(db, "blog", id));
      const storagRef = ref(storage, imageUrl);
      await deleteObject(storagRef);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="  border  w-full rounded-lg shadow bg-gray-800 border-gray-700 ">
      <a href="#">
        <img className="rounded-t-lg h-96 w-full" src={imageUrl} alt={title} />
      </a>
      <div className="p-5 my-2">
        <div className="flex justify-between">
          <h1 className="text-white">{createdBy}</h1>
          <h1 className="text-white">{createdAt}</h1>
        </div>
        <a href="#">
          <h5 className="mb-2 mt-4 text-2xl font-bold tracking-tight  text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 h-14 font-normal   text-gray-400 truncate ">
          {content}
        </p>
        <div className="flex justify-between">
          <Link
            href={`/blog/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          {user && user.uid == userId ? (
            <AiFillDelete
              onClick={deleteDocument}
              className="text-white"
              size={30}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogTemplate;
