export function CommentList({ comments }) {
    const renderedComments = comments.map((comment) => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = 'Comment is awaiting moderation. Please wait.';
        }

        if (comment.status === 'rejected') {
            content = 'This comment has been rejected';
        }

        return (
            <li
                key={comment.id}
                className="bg-gray-100 rounded-md p-2 mb-2 text-sm"
            >
                {content}
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
