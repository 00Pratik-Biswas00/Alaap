import React, { useEffect, useState } from "react";
import { Img } from "../../components";
import Link from "next/link";
import { IoSend } from "react-icons/io5";
import { formatDistanceToNow } from "date-fns";
import api from "@/utils/axios";
import { io } from "socket.io-client";
import { DeleteFilled } from "@ant-design/icons";
import {
  ADD_COMMENT_MUTATION,
  REMOVE_COMMENT_MUTATION,
} from "@/graphql/mutation";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { GET_POST_COMMENTS_QUERY } from "@/graphql/query";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
  reconnection: true,
});

const CommentBody = ({ postID, loadPosts, user }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { data, loading, error, refetch } = useQuery(GET_POST_COMMENTS_QUERY, {
    variables: { postId: postID },
  });

  const loadComments = async () => {
    await refetch();
  };
  useEffect(() => {
    loadComments();
  }, [postID, refetch]);

  useEffect(() => {
    if (data) {
      setComments(data.getPostComments);
    }
  }, [data]);
  const [addComment] = useMutation(ADD_COMMENT_MUTATION);
  const [removeComment] = useMutation(REMOVE_COMMENT_MUTATION);

/*   const checkCommentToxicity = async (comment) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_MLMODEL_URL}/predict?comment=${comment}`
    );
    return response.data.toxic === true;
  }; */

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
//      const isToxic = await checkCommentToxicity(comment);
//      if (!isToxic) {
        const { data } = await addComment({
          variables: { postId: postID, comment },
        });
        socket.emit("new-notification", data.addComment);
        loadComments();
        setComment("");
        loadPosts();
//      }
//      else {
//        toast.warning("Your comment is identified to be vulgar !!");
//        setComment("");
//      }
    } catch (err) {
      console.log(err);
      toast.error("Error adding comment");
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const { data } = await removeComment({
        variables: { postId: postID, commentId },
      });
      if (data.removeComment.ok) {
        loadComments();
        loadPosts();
      } else {
        toast.error("Error removing comment");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error removing comment");
    }
  };
  // console.log(comments);
  return (
    <div className="flex flex-col items-start gap-y-3">
      <h1 className="!text-primary_text text-[17px] sm:text-[1.2rem] xl:text-[1.5rem] font-bold">
        Comments ({comments?.length})
      </h1>
      <div className="flex flex-col gap-8 self-stretch">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <form
            className="w-full self-stretch relative"
            onSubmit={handleAddComment}
          >
            <textarea
              name="comment"
              placeholder={`Write a comment…`}
              className=" border  border-highlight bg-transparent rounded-lg text-primary_text w-full leading-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-2 text-highlight p-1"
            >
              <IoSend />
            </button>
          </form>

          {comments?.map((content, ind) => {
            return (
              <div
                key={ind}
                className="flex flex-col gap-y-2 w-full px-1 py-2 border-b border-secondary_text"
              >
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center justify-center gap-x-[5px]">
                    <img
                      src={content.postedBy?.photo?.url}
                      width={35}
                      height={35}
                      alt="avatar"
                      className="rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm sm:text-md text-primary_text font-serif font-bold">
                        {content.postedBy?.name}
                      </p>
                      <Link
                        href="/myprofile"
                        className="text-xs text-left text-highlight font-medium hover:underline cursor-pointer"
                      >
                        View my profile
                      </Link>
                    </div>
                  </div>
                  <p className="text-xs text-right text-highlight">
                    {formatDistanceToNow(new Date(parseInt(content.created)), {
                      addSuffix: true,
                    })}
                  </p>
                  {content.postedBy?._id === user?._id && (
                    <DeleteFilled
                      onClick={() => handleDeleteComment(content._id)}
                      className="text-xs text-right hover:underline cursor-pointer text-red-500"
                    />
                  )}
                </div>

                <div className="flex flex-col">
                  <p className="!font-normal text-sm !text-primary_text">
                    {content.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommentBody;
