import axios from 'axios';
import { useEffect, useState } from 'react';

export function CommentList({ comments }) {
    const renderedComments = comments.map((comment) => {
        return (
            <li
                key={comment.id}
                className="bg-gray-100 rounded-md p-2 mb-2 text-sm"
            >
                {comment.content}
            </li>
        );
    });

    return (
        <ul className=" mt-4">
            {renderedComments.length > 0 ? (
                renderedComments
            ) : (
                <p className="text-gray-500 italic">No comments yet</p>
            )}
        </ul>
    );
}
