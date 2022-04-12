import React, { useEffect, useRef, useState } from 'react'


const CommentsFrom = ({slug}) => {
  
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef()
  const storeDataEl = useRef();

  const handleCommentSubmission = () =>  {
    setError(false);

    const {value : comment } = commentEl.current;
    const {value : name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;


    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {comment, name, email, slug};
    
    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    }else{
      localStorage.removeItem('name', name);
      localStorage.removeItem('email', email);
    }
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Comments</h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          name="comment"
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Comment"
          ref={commentEl}
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          name="name"
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          ref={nameEl}
        />
        <input
          type="text"
          name="email"
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          ref={emailEl}
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input ref={storeDataEl} type="checkbox" name="storeData" id="storeData" value='true' />
          <label className='text-gray-500 cursor-pointer ml-2' htmlFor="storeData">
            Save my name and e-mail for the next time I comment. 
          </label>
        </div>
      </div>

      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="mt-8">
        <button
          className="ease inline-block cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg text-white transition duration-500 hover:bg-indigo-900"
          type="button"
          onClick={handleCommentSubmission}
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsFrom