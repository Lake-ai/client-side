import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Head>
        <title>AI Bot Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex  justify-between items-center bg-white p-4 shadow">
        <div className="flex items-center">
          <div className="mr-2">
            <Image
              src="https://th.bing.com/th/id/OIG2.8br2BXFTUXqgFTVxmipq?pid=ImgGn"
              alt="AI BOT Icon"
              width={38}
              height={38}
            />
          </div>

          <div className="text-xl font-semibold ">LAKE AI </div>
        </div>
        {/* Navbar Icons */}
        <div className="flex space-x-4 ">
          <div>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 "
              >
                <path
                  fill-rule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex flex-1">
        <aside className="ml-0 w-64 m-6 bg-white p-5 rounded-lg">
          <nav className="flex flex-col ">
            <div className="text-xs font-bold ">HOME</div>

            <a
              href="#"
              className="mb-5  pl-3 font-serif flex items-center pt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 pr-1"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              Dashboard
            </a>
            <a href="#" className="mb-5 pl-3 font-serif flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 pr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                  clip-rule="evenodd"
                />
              </svg>
              Organizations
            </a>
            <div className="text-xs font-bold ">GET STARTED</div>
            <a href="#" className="mb-5 pl-3 font-serif flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 pr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                  clip-rule="evenodd"
                />
                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
              </svg>
              Documentation
            </a>
            <a href="#" className="mb-5 pl-3 font-serif flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-5 pr-1"
              >
                <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                  clip-rule="evenodd"
                />
              </svg>
              View Source
            </a>
          </nav>
        </aside>
        {/* Main content */}
        <main className="flex-1 p-10 ">
          {/* Top stats */}
          <div className="flex  mb-10 ">
            <div className="p-4 m-6 bg-white rounded shadow-md w-1/4 text-center">
              <a href="#" className="mb-5 flex items-center justify-between ">
                <span>Organisation</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/916/916771.png"
                  alt="Oragnisation icon "
                  className="w-8 h-8"
                  style={{
                    filter:
                      "invert(40%) sepia(100%) saturate(1000%) hue-rotate(190deg)",
                  }}
                />
              </a>
              <br />3
            </div>
            <div className="p-4 m-6 bg-white rounded shadow-md w-1/4 text-center">
              <a href="#" className="mb-5 flex items-center justify-between">
                <span>Trains Bot</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/13330/13330989.png"
                  alt="Trains Bot icon "
                  className="w-8 h-8"
                />
              </a>
              <br />3
            </div>
          </div>
          {/* <table>< */}

          <div className="bg-white p-6 rounded-lg shadow-md overflow-y-scroll ">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Trained Models
              </h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add New Model
              </button>
            </div>

            <table className="w-full table-auto ">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Company Name</th>
                  <th className="py-3 px-6 text-left">Id</th>
                  <th className="py-3 px-6 text-left">Created At</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-left">Knowledge Source</th>
                  <th className="py-3 px-6 text-left">Embedded Source</th>
                  <th className="py-3 px-6 text-left">API</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">inproto</td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex flex-wrap">
                      <span className="break-all">
                      663bc8e59f582343ef66489e
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    2023-04-29T05:57:16.186Z
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left">
                  <div className="flex flex-wrap">
                      <span className="break-all">
                      "https://deployer-output.s3.ap-south-1.amazonaws.com/uploads/Resume.txt",
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                  <div className="flex flex-wrap">
                      <span className="break-all">
                      "https://deployer-output.s3.ap-south-1.amazonaws.com/embedding/embeded-Resume.txt",
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                  <div className="flex flex-wrap">
                      <span className="break-all">
                      $2b$10$6.Q1qiWaeMfhNGU4wA3EdOX1uU/wwTMo9W1mkMeDZ2ODk7vdlHVhO",
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">inproto/raheem</td>
                  <td className="py-3 px-6 text-left">644cdaebd51cd4b...</td>
                  <td className="py-3 px-6 text-left">
                    2023-04-29T11:38:07.481Z
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    https://ai-chatbot-k...
                  </td>
                  <td className="py-3 px-6 text-left">
                    https://ai-chatbot-k...
                  </td>
                  <td className="py-3 px-6 text-left">$2b$10$BiO...</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">inproto/raheem</td>
                  <td className="py-3 px-6 text-left">644cdaebd51cd4b...</td>
                  <td className="py-3 px-6 text-left">
                    2023-04-29T11:38:07.481Z
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    https://ai-chatbot-k...
                  </td>
                  <td className="py-3 px-6 text-left">
                    https://ai-chatbot-k...
                  </td>
                  <td className="py-3 px-6 text-left">$2b$10$BiO...</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">
                    Teesside University - UK
                  </td>
                  <td className="py-3 px-6 text-left">644e28f3d171fa0...</td>
                  <td className="py-3 px-6 text-left">
                    2023-04-29T11:38:08.246Z
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    https://ai-chatbot-k...
                  </td>
                  <td className="py-3 px-6 text-left">
                    https://ai-chatbot-k...
                  </td>
                  <td className="py-3 px-6 text-left">$2b$10$Vmm...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}