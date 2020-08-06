import { GrChatOption } from 'react-icons/gr'
export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <main className="flex flex-col p-6 bg-gray-300 sm:rounded-lg sm:w-1/2 md:w-1/3">
        <h1 className="text-xl font-bold text-gray-500">chatname</h1>
        <div className="self-start max-w-md mt-2 bg-white rounded-lg shadow">
          <div className="px-3 py-1">Their message</div>
        </div>
        <div className="self-start max-w-md mt-2">
          <div className="bg-white rounded-lg shadow">
            <div className="px-3 py-1">Their message</div>
          </div>
          <small className="text-xs font-bold text-blue-500">24 replies</small>
        </div>
        <div className="self-end max-w-md mt-2 text-white bg-blue-500 rounded-lg shadow">
          <div className="px-3 pt-3">
            <div className="self-start max-w-md text-sm bg-white rounded-lg bg-opacity-25">
              <div className="px-3 py-1">Their message</div>
            </div>
          </div>
          <div className="px-3 py-1">My message</div>
          <div className="px-3 py-1">My message</div>
        </div>
        <div className="self-end max-w-md mt-2 text-white bg-blue-500 rounded-lg shadow">
          <div className="px-3 py-1">My message</div>
        </div>
        <div className="mt-6">
          <textarea className="w-full px-3 py-1 bg-transparent border border-white border-gray-400 rounded-lg focus:bg-white focus:outline-none focus:border-white transition-all duration-300 ease-in-out focus:shadow">
            sup
          </textarea>
          <div className="flex mt-3 overflow-auto">
            <div className="flex-shrink-0 px-3 py-2 bg-gray-500 border border-transparent rounded-md bg-opacity-25">
              <GrChatOption />
            </div>
            <div className="flex-shrink-0 px-1 py-1 ml-1 text-xs leading-none border border-gray-400 rounded-md">
              <div className="font-bold">Their messag…</div>
              <div className="text-blue-500">New reply</div>
            </div>
            <div className="flex-shrink-0 px-1 py-1 ml-1 text-xs leading-none border border-gray-400 rounded-md">
              <div className="font-bold">Their messag…</div>
              <div className="text-gray-600">24 replies</div>
            </div>
            <div className="flex-shrink-0 px-1 py-1 ml-1 text-xs leading-none border border-gray-400 rounded-md">
              <div className="font-bold">Another mess…</div>
              <div className="text-gray-600">24 replies</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
