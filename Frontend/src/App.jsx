import React, { useEffect, useState } from 'react'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'
import Axios from 'axios'
import Editor from 'react-simple-code-editor'
import axios from 'axios'
import Markdown from 'react-markdown'


function App() {

  const [count, setCount] = useState(0)
  console.log(setCount);

  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`)

  const [review, setReview] = useState(``)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('http://localhost:5555/ai/get-review', { code })

    setReview(response.data)
  }

  return (
    <>
      <main className='bg-gray-900 text-white h-screen' >

        <p className=' font-bold text-2xl text-center pt-2' >
          Code Reviewer &nbsp; ({count})
        </p>

        <section className=' flex p-3 gap-2 h-[95%] w-full '>

          <div className="left border-3 basis-1/2 rounded-2xl p-5 bg-black relative border-white">
            <div className="code h-full w-full overflow-auto rounded-lg">
              <Editor
                value={code}
                onValueChange={setCode}
                highlight={code =>
                  Prism.highlight(code, Prism.languages.javascript, "javascript")
                }
                padding={10}
                style={{
                  fontFamily: '"Fira Code", "Fira Mono", monospace',
                  fontSize: 16,
                  minHeight: "400px",   // ✅ fixed editor height
                  width: "100%",
                }}
              />
            </div>

            <button
              className="review text-black px-5 rounded-2xl py-1 absolute right-10  bottom-6 font-normal text-xl cursor-pointer select-none bg-indigo-100 border-green-900 border-3"
              onClick={reviewCode}
            >
              Review
            </button>
          </div>


          <div className="flex-1 overflow-auto p-2 bg-emerald-900 border-white border-3 rounded-2xl">
            <pre className="whitespace-pre overflow-x-auto">
                <p>Answer goes here ...</p>
              <Markdown>{review}</Markdown>
            </pre>
          </div>


        </section>

      </main>
    </>
  );
}

export default App
